/**
 * generate-voiceover-regen.ts
 *
 * Selective regeneration of ONLY the scenes whose scripts changed during the
 * TTS in-text glossary sweep + the Lesson 1 consolidation (2026-06-20).
 * Every other scene keeps its existing MP3 — TTS is stochastic, so we never
 * re-roll a take we didn't change (this is what preserves the verified L9 audio,
 * and L1 scene-04 / scene-15 which already match their scripts).
 *
 * Edit REGEN below for future selective runs.
 *
 * Usage (from remotion/):
 *   node --env-file=../.env --strip-types scripts/generate-voiceover-regen.ts
 *
 * Requires ELEVENLABS_API_KEY (and optionally ELEVENLABS_VOICE_ID) in repo-root .env.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { applyPronunciation } from "./tts-pronunciation.ts";

import { VOICEOVER_SCENES as L1 } from "../src/voiceover-config.ts";
import { VOICEOVER_SCENES as L2b } from "../src/lessons/lesson-2-context-hierarchy/voiceover-config.ts";
import { VOICEOVER_SCENES as L3 } from "../src/lessons/lesson-3-four-automation-layers/voiceover-config.ts";
import { VOICEOVER_SCENES as L5 } from "../src/lessons/lesson-5-content-types/voiceover-config.ts";
import { VOICEOVER_SCENES as L6 } from "../src/lessons/lesson-6-building-agents/voiceover-config.ts";
import { VOICEOVER_SCENES as L7 } from "../src/lessons/lesson-7-workflow-gitflow/voiceover-config.ts";
import { VOICEOVER_SCENES as L8 } from "../src/lessons/lesson-8-skills-and-mcp/voiceover-config.ts";
import { VOICEOVER_SCENES as L10 } from "../src/lessons/lesson-10-business-ecosystem/voiceover-config.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "JBFqnCBsd6RMkjVDRZzb"; // George
const CONCURRENCY = 4; // Stay under ElevenLabs' 5-request limit

if (!API_KEY) {
  console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
  process.exit(1);
}

// ── The scenes changed this session, by output dir ──
const REGEN = [
  { dir: "lesson-1", scenes: L1, ids: ["scene-06", "scene-07", "scene-10"] },
  { dir: "lesson-2b", scenes: L2b, ids: ["scene-03", "scene-06"] },
  { dir: "lesson-3", scenes: L3, ids: ["scene-03", "scene-05"] },
  { dir: "lesson-5", scenes: L5, ids: ["scene-06"] },
  { dir: "lesson-6", scenes: L6, ids: ["scene-07"] },
  { dir: "lesson-7", scenes: L7, ids: ["scene-03"] },
  { dir: "lesson-8", scenes: L8, ids: ["scene-02", "scene-03", "scene-05", "scene-06", "scene-09"] },
  { dir: "lesson-10", scenes: L10, ids: ["scene-07"] },
];

type WorkItem = {
  dir: string;
  outputDir: string;
  scene: { id: string; label: string; script: string };
};

const queue: WorkItem[] = [];
for (const lesson of REGEN) {
  const outputDir = join(process.cwd(), "public", "voiceover", lesson.dir);
  mkdirSync(outputDir, { recursive: true });
  const matched = lesson.scenes.filter((s) => lesson.ids.includes(s.id));
  const found = matched.map((s) => s.id);
  const missing = lesson.ids.filter((id) => !found.includes(id));
  if (missing.length > 0) {
    console.error(`❌ ${lesson.dir}: scene id(s) not found: ${missing.join(", ")}`);
    process.exit(1);
  }
  for (const scene of matched) queue.push({ dir: lesson.dir, outputDir, scene });
}

console.log(`\n🎙️  Selective regen — ${queue.length} scene(s) across ${REGEN.length} lessons`);
console.log(`   Voice: George (${VOICE_ID}) · concurrency ${CONCURRENCY}\n`);

let totalBytes = 0;
const errors: string[] = [];

async function generateOne(item: WorkItem): Promise<void> {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": API_KEY!,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text: applyPronunciation(item.scene.script),
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true,
        },
      }),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`[${item.dir}/${item.scene.id}] ${response.status}: ${err}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(join(item.outputDir, `${item.scene.id}.mp3`), buffer);
  totalBytes += buffer.length;
  console.log(
    `  ✅ ${item.dir}/${item.scene.id} (${item.scene.label}) — ${Math.round(buffer.length / 1024)} KB`,
  );
}

async function runWithConcurrency(items: WorkItem[], limit: number): Promise<void> {
  let index = 0;
  async function worker(): Promise<void> {
    while (index < items.length) {
      const item = items[index++];
      try {
        await generateOne(item);
      } catch (e) {
        const m = e instanceof Error ? e.message : String(e);
        console.error(`  ❌ ${m}`);
        errors.push(m);
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
}

await runWithConcurrency(queue, CONCURRENCY);

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(
  `✅ Regenerated ${queue.length - errors.length}/${queue.length} scene(s) — ${Math.round(totalBytes / 1024)} KB total`,
);
if (errors.length > 0) {
  console.error(`\n❌ ${errors.length} error(s) — see above. Re-run to retry failed scenes.`);
  process.exit(1);
}
