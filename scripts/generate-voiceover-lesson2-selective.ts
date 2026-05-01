/**
 * generate-voiceover-lesson2-selective.ts
 *
 * Regenerates ONLY specific scenes that have been updated.
 * Used when most audio is already generated and you only want to update changed scenes.
 *
 * Usage:
 *   node --env-file=.env --strip-types generate-voiceover-lesson2-selective.ts
 *
 * Regenerates: scene-04, scene-07, scene-08
 * Preserves: scene-01, scene-02, scene-03, scene-05, scene-06, scene-09
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { VOICEOVER_SCENES } from "./src/lessons/lesson-2-lessons-learned/voiceover-config.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID =
  process.env.ELEVENLABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB"; // Fallback to Adam

if (!API_KEY) {
  console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
  console.error("   Add ELEVENLABS_API_KEY=your_key to .env file");
  process.exit(1);
}

const outputDir = join(process.cwd(), "public", "voiceover", "lesson-2");
mkdirSync(outputDir, { recursive: true });

// Only regenerate these scenes
const SCENES_TO_REGENERATE = ["scene-04", "scene-07", "scene-08"];

const scenesToProcess = VOICEOVER_SCENES.filter((s) =>
  SCENES_TO_REGENERATE.includes(s.id)
);

console.log(
  `\n🎙️  Regenerating ${scenesToProcess.length} updated voiceover files for Lesson 2...\n`
);

let totalBytes = 0;
let errorCount = 0;

for (const scene of scenesToProcess) {
  process.stdout.write(`  ${scene.id} (${scene.label})... `);

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text: scene.script,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.3,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.log(`❌ (${response.status}: ${error})`);
      errorCount++;
      continue;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${scene.id}.mp3`;
    const filepath = join(outputDir, filename);

    writeFileSync(filepath, buffer);

    const sizeKb = (buffer.length / 1024).toFixed(0);
    console.log(`✅ (${sizeKb} KB)`);

    totalBytes += buffer.length;
  } catch (err) {
    console.log(`❌ (${err instanceof Error ? err.message : String(err)})`);
    errorCount++;
  }
}

console.log(`\n✅ Regenerated ${scenesToProcess.length - errorCount} scenes`);
console.log(
  `📊 Total audio size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB\n`
);

if (errorCount > 0) {
  console.error(`⚠️  ${errorCount} scene(s) failed. Check API key and try again.`);
  process.exit(1);
}
