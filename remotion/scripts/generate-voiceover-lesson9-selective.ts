/**
 * generate-voiceover-lesson9-selective.ts
 *
 * Regenerates ONLY the Lesson 9 scenes listed in SCENES_TO_REGENERATE.
 * Every other scene keeps its existing MP3 (audio is matched by scene.id → file).
 *
 * Usage (from remotion/ directory):
 *   node --env-file=../.env --strip-types scripts/generate-voiceover-lesson9-selective.ts
 *
 * Requires ELEVENLABS_API_KEY (and optionally ELEVENLABS_VOICE_ID) in the repo-root .env.
 *
 * ⚠️ After this run:
 *   - Remove `noAudio: true` from the scene-12 entry in lesson-9 voiceover-config.ts
 *     (it was silent until its MP3 existed — now it does).
 *   - Re-check estimatedFrames for any regenerated scene against the new audio length.
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { VOICEOVER_SCENES } from "../src/lessons/lesson-9-project-setup/voiceover-config.ts";
import { applyPronunciation } from "./tts-pronunciation.ts";

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "JBFqnCBsd6RMkjVDRZzb"; // George

if (!API_KEY) {
	console.error("❌ Missing ELEVENLABS_API_KEY in environment.");
	console.error("   Add ELEVENLABS_API_KEY=your_key to the repo-root .env file");
	process.exit(1);
}

const outputDir = join(process.cwd(), "public", "voiceover", "lesson-9");
mkdirSync(outputDir, { recursive: true });

// ── Edit this list to match only the scenes whose scripts changed ──
const SCENES_TO_REGENERATE = ["scene-12", "scene-00", "scene-01", "scene-07", "scene-10"];

const scenesToProcess = VOICEOVER_SCENES.filter((s) =>
	SCENES_TO_REGENERATE.includes(s.id),
);

if (scenesToProcess.length === 0) {
	console.error("❌ SCENES_TO_REGENERATE matched no scenes. Check the IDs.");
	process.exit(1);
}

console.log(`\n🎙️  Regenerating ${scenesToProcess.length} scene(s) for Lesson 9...`);
console.log(`   Targeting: ${SCENES_TO_REGENERATE.join(", ")}`);
console.log(`   All other scenes preserved.\n`);

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
					text: applyPronunciation(scene.script),
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
			const error = await response.text();
			console.log(`❌ (${response.status}: ${error})`);
			errorCount++;
			continue;
		}

		const buffer = Buffer.from(await response.arrayBuffer());
		writeFileSync(join(outputDir, `${scene.id}.mp3`), buffer);
		console.log(`✅ (${(buffer.length / 1024).toFixed(0)} KB)`);
		totalBytes += buffer.length;
	} catch (err) {
		console.log(`❌ (${err instanceof Error ? err.message : String(err)})`);
		errorCount++;
	}
}

console.log(`\n✅ Regenerated ${scenesToProcess.length - errorCount} scene(s)`);
console.log(`📊 Total audio size: ${(totalBytes / 1024).toFixed(0)} KB\n`);

if (errorCount > 0) {
	console.error(`⚠️  ${errorCount} scene(s) failed. Check API key and try again.`);
	process.exit(1);
}
