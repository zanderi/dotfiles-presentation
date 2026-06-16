/**
 * generate-voiceover-lessons3-10.ts
 *
 * Generates voiceover audio for Lessons 3–10 with a concurrency limit of 4
 * (ElevenLabs free/starter tier allows max 5 concurrent requests).
 * Already-generated files are skipped automatically to avoid wasted credits.
 *
 * Usage (from remotion/ directory):
 *   npm run voiceover:lessons-3-10
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

import { VOICEOVER_SCENES as L3 } from "../src/lessons/lesson-3-four-automation-layers/voiceover-config.ts";
import { VOICEOVER_SCENES as L4 } from "../src/lessons/lesson-4-agent-ecosystem/voiceover-config.ts";
import { VOICEOVER_SCENES as L5 } from "../src/lessons/lesson-5-content-types/voiceover-config.ts";
import { VOICEOVER_SCENES as L6 } from "../src/lessons/lesson-6-building-agents/voiceover-config.ts";
import { VOICEOVER_SCENES as L7 } from "../src/lessons/lesson-7-workflow-gitflow/voiceover-config.ts";
import { VOICEOVER_SCENES as L8 } from "../src/lessons/lesson-8-skills-and-mcp/voiceover-config.ts";
import { VOICEOVER_SCENES as L9 } from "../src/lessons/lesson-9-project-setup/voiceover-config.ts";
import { VOICEOVER_SCENES as L10 } from "../src/lessons/lesson-10-business-ecosystem/voiceover-config.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "JBFqnCBsd6RMkjVDRZzb"; // George
const CONCURRENCY = 4; // Stay safely under ElevenLabs' 5-request limit

if (!API_KEY) {
  console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
  process.exit(1);
}

const LESSONS = [
  { num: 3,  label: "Four Automation Layers", scenes: L3,  dir: "lesson-3"  },
  { num: 4,  label: "Agent Ecosystem",        scenes: L4,  dir: "lesson-4"  },
  { num: 5,  label: "Content Types",          scenes: L5,  dir: "lesson-5"  },
  { num: 6,  label: "Building Agents",        scenes: L6,  dir: "lesson-6"  },
  { num: 7,  label: "Workflow & GitFlow",      scenes: L7,  dir: "lesson-7"  },
  { num: 8,  label: "Skills & MCP",           scenes: L8,  dir: "lesson-8"  },
  { num: 9,  label: "Project Setup",          scenes: L9,  dir: "lesson-9"  },
  { num: 10, label: "Business Ecosystem",     scenes: L10, dir: "lesson-10" },
];

// Flatten all scenes into a work queue
type WorkItem = {
  lessonNum: number;
  dir: string;
  scene: { id: string; label: string; script: string };
  outputDir: string;
};

const queue: WorkItem[] = [];
for (const lesson of LESSONS) {
  const outputDir = join(process.cwd(), "public", "voiceover", lesson.dir);
  mkdirSync(outputDir, { recursive: true });
  for (const scene of lesson.scenes) {
    queue.push({ lessonNum: lesson.num, dir: lesson.dir, scene, outputDir });
  }
}

const totalScenes = queue.length;
const alreadyDone = queue.filter((w) =>
  existsSync(join(w.outputDir, `${w.scene.id}.mp3`))
).length;
const toGenerate = totalScenes - alreadyDone;

console.log(`\n🎙️  Lessons 3–10 voiceover generation`);
console.log(`   Total scenes : ${totalScenes}`);
console.log(`   Already done : ${alreadyDone} (skipping)`);
console.log(`   To generate  : ${toGenerate}`);
console.log(`   Concurrency  : ${CONCURRENCY} requests at a time\n`);

async function generateOne(item: WorkItem): Promise<void> {
  const outPath = join(item.outputDir, `${item.scene.id}.mp3`);

  // Skip already-generated files
  if (existsSync(outPath)) {
    console.log(`  ⏭️  L${item.lessonNum}/${item.scene.id} — skipped (exists)`);
    return;
  }

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
        text: item.scene.script,
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
    throw new Error(`[L${item.lessonNum}/${item.scene.id}] ${err}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(outPath, buffer);
  console.log(`  ✅ L${item.lessonNum}/${item.scene.id} (${item.scene.label}) — ${Math.round(buffer.length / 1024)} KB`);
}

// Concurrency limiter: process queue with max N in-flight at a time
async function runWithConcurrency(items: WorkItem[], limit: number): Promise<void> {
  const errors: string[] = [];
  let index = 0;

  async function worker(): Promise<void> {
    while (index < items.length) {
      const item = items[index++];
      try {
        await generateOne(item);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error(`  ❌ ${msg}`);
        errors.push(msg);
      }
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));

  if (errors.length > 0) {
    console.error(`\n❌ ${errors.length} error(s) encountered.`);
    process.exit(1);
  }
}

await runWithConcurrency(queue, CONCURRENCY);

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log(`✅ All scenes written for Lessons 3–10`);
console.log(`\n👉 AUDIO_ENABLED has been set to true automatically in all lesson configs.`);

