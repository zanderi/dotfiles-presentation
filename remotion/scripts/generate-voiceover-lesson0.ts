/**
 * generate-voiceover-lesson0.ts
 *
 * Generates voiceover audio for Lesson 0 (Upgrade Guide).
 * Writes MP3 files to public/voiceover/lesson-0/.
 *
 * Usage (from remotion/ directory):
 *   npm run voiceover:lesson-0
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { VOICEOVER_SCENES } from "../src/lessons/lesson-0-upgrade-guide/voiceover-config.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "JBFqnCBsd6RMkjVDRZzb"; // George

if (!API_KEY) {
  console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
  process.exit(1);
}

const outputDir = join(process.cwd(), "public", "voiceover", "lesson-0");
mkdirSync(outputDir, { recursive: true });

console.log(`\n🎙️  Generating ${VOICEOVER_SCENES.length} voiceover files for Lesson 0 (Upgrade Guide)...\n`);

let totalBytes = 0;

for (const scene of VOICEOVER_SCENES) {
  process.stdout.write(`  ${scene.id} (${scene.label})... `);

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
          use_speaker_boost: true,
        },
      }),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    console.error(`\n❌ ElevenLabs error for ${scene.id}:\n${err}`);
    process.exit(1);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  writeFileSync(join(outputDir, `${scene.id}.mp3`), buffer);
  console.log(`✅ (${Math.round(buffer.length / 1024)} KB)`);
  totalBytes += buffer.length;
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`✅ All ${VOICEOVER_SCENES.length} files written to public/voiceover/lesson-0/`);
console.log(`📊 Total size: ${Math.round(totalBytes / 1024)} KB`);
console.log(`\n👉 Set AUDIO_ENABLED = true in src/lessons/lesson-0-upgrade-guide/voiceover-config.ts`);
console.log(`👉 Then: npm run studio:lesson-0`);
