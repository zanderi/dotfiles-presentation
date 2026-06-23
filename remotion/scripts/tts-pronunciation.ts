/**
 * Generation-time pronunciation fixes for the ElevenLabs TTS pipeline.
 *
 * Model `eleven_multilingual_v2` supports alias substitution only — no phoneme/IPA
 * tags — so words the voice mispronounces are respelled here, applied ONLY to the
 * text sent to the API. The source scripts in voiceover-config.ts stay readable
 * (they still say "commit"); the listener hears the corrected pronunciation.
 *
 * Tune respellings in this one place. See
 * docs/voiceover-script-rework-tracker.md → "Generation-time pronunciation".
 */

const RULES: ReadonlyArray<readonly [RegExp, string]> = [
	// "commit" is read as "comet" (KOM-it); "ka-mitt" yields the correct "kuh-MIT".
	// \b…\b also catches "pre-commit" and "commit-msg" (hyphen is a word boundary).
	[/\bcommitting\b/gi, "ka-mitting"],
	[/\bcommitted\b/gi, "ka-mitted"],
	[/\bcommits\b/gi, "ka-mitts"],
	[/\bcommit\b/gi, "ka-mitt"],
	// "params" / "param" read wrong; "pa-rams" / "pa-ram" give the dev pronunciation.
	[/\bparams\b/gi, "pa-rams"],
	[/\bparam\b/gi, "pa-ram"],
	// "README" should be spoken "read me" (reed-mee), not as one mangled word.
	[/\breadme\b/gi, "read me"],
];

export const applyPronunciation = (text: string): string =>
	RULES.reduce((out, [pattern, replacement]) => out.replace(pattern, replacement), text);
