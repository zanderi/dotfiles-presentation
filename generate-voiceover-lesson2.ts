/**
 * generate-voiceover-lesson2.ts
 *
 * Calls the ElevenLabs TTS API for each Lesson 2 scene script and writes MP3 files
 * to public/voiceover/lesson-2/. Run once, then set AUDIO_ENABLED = true in
 * src/lessons/lesson-2-lessons-learned/voiceover-config.ts and restart Remotion Studio.
 *
 * Usage:
 *   node --env-file=.env --strip-types generate-voiceover-lesson2.ts
 *
 * Requires Node.js 20.6+ for --env-file support.
 * Requires ELEVENLABS_API_KEY in .env
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

console.log(`\n🎙️  Generating ${VOICEOVER_SCENES.length} voiceover files for Lesson 2...\n`);

let totalBytes = 0;
let errorCount = 0;

for (const scene of VOICEOVER_SCENES) {
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
      },
    );

    if (!response.ok) {
      const err = await response.text();
      console.error(`\n❌ ElevenLabs error for ${scene.id}:\n${err}`);
      errorCount++;
      continue;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    writeFileSync(join(outputDir, `${scene.id}.mp3`), buffer);
    const sizeKb = (buffer.length / 1024).toFixed(0);
    console.log(`✅ (${sizeKb} KB)`);
    totalBytes += buffer.length;
  } catch (e) {
    console.error(`\n❌ Network error for ${scene.id}:`, e);
    errorCount++;
  }
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

if (errorCount === 0) {
  console.log(
    `✅ All ${VOICEOVER_SCENES.length} voiceover files written to public/voiceover/lesson-2/`,
  );
  console.log(`📊 Total size: ${(totalBytes / 1024).toFixed(0)} KB`);
  console.log(
    `\n👉 Next: Set AUDIO_ENABLED = true in src/lessons/lesson-2-lessons-learned/voiceover-config.ts`,
  );
  console.log(`👉 Then restart Studio: npm run studio:lesson-2`);
} else {
  console.error(
    `\n❌ ${errorCount} error(s) encountered. Check your API key and network, then try again.`,
  );
  process.exit(1);
}
