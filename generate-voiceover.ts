/**
 * generate-voiceover.ts
 *
 * Calls the ElevenLabs TTS API for each scene script and writes MP3 files
 * to public/voiceover/. Run once, then set AUDIO_ENABLED = true in
 * src/voiceover-config.ts and restart Remotion Studio.
 *
 * Usage:
 *   node --env-file=.env --strip-types generate-voiceover.ts
 *
 * Requires Node.js 20.6+ for --env-file support.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { VOICEOVER_SCENES } from "./src/voiceover-config.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID =
  process.env.ELEVENLABS_VOICE_ID ?? "pNInz6obpgDQGcFmaJgB"; // Adam

if (!API_KEY) {
  console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
  process.exit(1);
}

const outputDir = join(process.cwd(), "public", "voiceover");
mkdirSync(outputDir, { recursive: true });

console.log(`🎙️  Generating ${VOICEOVER_SCENES.length} voiceover files...\n`);

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
  console.log(`✅ (${(buffer.length / 1024).toFixed(0)} KB)`);
}

console.log(
  `\n✅ All ${VOICEOVER_SCENES.length} voiceover files written to public/voiceover/`,
);
console.log(
  "👉 Next: set AUDIO_ENABLED = true in src/voiceover-config.ts then restart Remotion Studio.",
);
