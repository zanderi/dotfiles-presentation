# Voiceover Script Rework Tracker

Running list of scenes whose **narration script** needs updating before the next
voiceover regeneration. Two independent reasons a scene lands here:

- **🎬 Slide changed** — we edited the visuals (cross-platform callouts, model field,
  renamed models, etc.) and the audio now says something different from the slide.
- **🗣️ TTS-hostile** — the script contains raw filesystem path syntax
  (`~/.copilot/agents/`, `.github/instructions/`, `*.md`) that the text-to-speech voice
  vocalizes as "tilde slash dot…" — hard to follow. Fix = spell paths in spoken form,
  e.g. *"the dot-copilot agents folder in your home directory."*

> **Audio is already generated** for these lessons (`public/voiceover/<lesson>/scene-NN.mp3`,
> `AUDIO_ENABLED = true`). Editing the script text does **not** change playback — each
> scene's `.mp3` must be **regenerated** for the fix to be audible.

**Status legend:** ⬜ not started · ✍️ script updated, audio regen pending · ✅ script + audio done

**Convention reminders for any script edit:**
- Spell paths in spoken form (no raw `~`, `/`, `.md`).
- Use version-less model names (Haiku/Sonnet/Opus, GPT mini/GPT/GPT Codex, Gemini Flash/Pro/Deep Think) so audio doesn't age.
- Primary voice stays Copilot; cross-tool mentions are brief asides ("…and the same idea applies in Claude and Cursor").
- If a rewritten script is longer, bump that scene's `estimatedFrames` (~13.85 frames/word) so visuals don't end before narration.

---

## Lesson 1 — AIEnvSetup *(scripts already use spoken-form paths — no TTS issue)*

> **✅ L1 config consolidated (2026-06-20).** The duplicate `lessons/lesson-1-ai-env-setup/`
> fork has been retired. `src/voiceover-config.ts` + `src/scenes/` + `src/MainVideo.tsx` are now
> the single source of truth, and `generate-voiceover-lesson1.ts` reads from it. Brought in from
> the fork: cross-platform `scene-04` script (+ matching `PlatformPaths` slide callout) and the
> `scene-15` Portability scene. Kept from src: this session's `scene-07` (steps 5+6) and `scene-10`
> (version-less). Applied the `scene-06` tool-config TTS edit. **Audio regenerated ✅ for
> scene-06/07/10** (2026-06-20; 04 & 15 already matched the existing fork-generated MP3s; all others
> unchanged). Type-clean (tsc/eslint). **Re-render of `out/lesson-1.mp4` still pending.**

| Scene | Reason | Status | Suggested script direction |
|---|---|---|---|
| `scene-10` Models | 🎬 | ✅ | **Script rewritten** in `voiceover-config.ts` — version-less names, all three providers per tier. Audio regenerated 2026-06-20. (Draft text below.) |
| `scene-09` MCP | 🎬 | ⬜ | Audio says "GitHub MCP server is built-in — no configuration needed." Slide reframed MCP as an open standard + notes the GitHub server is bundled *only* in Copilot (Claude/Cursor add it manually). Reframe lead + add the bundling caveat. |
| `scene-13` Fleet | 🎬 | ⬜ | Copilot-only. Slide added a cross-tool callout. Add one aside: parallel agents exist in Claude (subagents via the Task tool) and Cursor (Background Agents). |
| `scene-08` Agents | 🎬 (optional) | ⬜ | Copilot-only (`/agent`, `.agent.md`). Slide now shows all three creation methods. Optional aside naming Claude `/agents` + Cursor rules. |
| `scene-07` Repo Instructions | 🎬 (optional) | ⬜ | Already says AGENTS.md is model-agnostic. Could extend to name the per-tool full-context files (`CLAUDE.md`, `.cursorrules`). Low priority. |
| `scene-14` Verify | — | ✅ n/a | Layout-only change (2×2 → horizontal cards). No script impact. |

## Lesson 2 — ContextHierarchy

| Scene | Reason | Status | Suggested script direction |
|---|---|---|---|
| `scene-02` Global Config | 🎬 + 🗣️ | ⬜ | Raw `~/.copilot/copilot-instructions.md`. Spell it spoken-form + add Claude (`~/.claude/CLAUDE.md`) and Cursor (`~/.cursorrules`) equivalents to match the new 3-row slide. |
| `scene-04` Repo Instructions | 🎬 + 🗣️ | ⬜ | Raw `.github/copilot-instructions.md`. Spoken-form + name Claude `CLAUDE.md` / Cursor `.cursorrules`. |
| `scene-05` Task Instructions | 🎬 + 🗣️ | ⬜ | Raw `.github/instructions/`, `api.instructions.md`. Spoken-form + reference the per-tool examples now on the slide (nested `CLAUDE.md`, `.cursor/rules`). |
| `scene-01` The Stack | 🎬 (optional) | ⬜ | Conceptual, no raw paths. Slide is now a 3-platform matrix. Optionally add "the layers are identical across tools — only the filenames change." |

## Lesson 4 — AgentEcosystem

| Scene | Reason | Status | Suggested script direction |
|---|---|---|---|
| `scene-11` Where Agents Live | 🎬 + 🗣️ | ⬜ | Raw `~/.copilot/agents/`, `.copilot/agents/`. Spoken-form + note Claude `~/.claude/agents/` and Cursor's rules folder (no separate agents dir). |

## Lesson 6 — BuildingAgents

| Scene | Reason | Status | Suggested script direction |
|---|---|---|---|
| `scene-01` The Agent File | 🎬 | ✍️ | **Script rewritten** in `voiceover-config.ts` to name the `model` field ("name, description, model, tools — four frontmatter fields, plus the body"). Audio regen pending. Note: scenes 06 (`code-reviewer` → `model: sonnet`) and 07 (`env-config-reviewer` → `model: haiku`) YAML slides also now show `model`, but their narration doesn't enumerate fields, so no script change needed there. |
| `scene-03` Category & Naming | 🎬 + 🗣️ | ✍️ | **Script already rewritten** to spoken form this session. Audio regen still pending. (Could also add brief Claude/Cursor folder mention.) |

## Lesson 9 — ProjectSetup

> **"22 files" → illustrative.** The precise 22 was just the count of the exercise's *MyApp* example tree (8 of which are feature specs that scale per-feature) — not a researched constant. Reframed to "~20 / around twenty" on screen and in narration, and a new **"The Setup Files"** diagram slide (`12-SetupFilesScene.tsx`) now shows the real grouped breakdown (Root 2 · docs 7 · instructions 3 · .github 2 · feature specs 8*).

**✅ Lesson 9 audio regenerated & verified** (2026-06-19) via `npm run voiceover:lesson-9-selective` (George + pronunciation module), `noAudio` removed from scene-12, rendered to `out/lesson-9.mp4` and reviewed — gaps clean, "read me" correct, render solid.

| Scene | Reason | Status | Action |
|---|---|---|---|
| `scene-12` The Setup Files | 🎬 NEW slide | ✅ | New diagram slide before the waves scene; audio generated, `noAudio` flag removed. Done. |
| `scene-00` Title | 🎬 | ✅ | "twenty-two documents" → "twenty or so documents". Audio regenerated. |
| `scene-01` Before Any Code | 🎬 | ✅ | "Twenty-two files" → "Around twenty files". Audio regenerated. |
| `scene-07` Fleet Build Plan | 🎬 | ✅ | Number dropped; headline "Building in Waves"; opener bridges from the inventory slide. Audio regenerated. |
| `scene-10` Closing | 🎬 | ✅ | "Twenty-two files" → "Around twenty files". Audio regenerated. |

---

## TTS-only — flagged by the path scan, no slide change yet

These scenes have raw-path narration but we haven't touched their slides. Fix during the
same regeneration pass for consistency.

| Lesson / Scene | Raw path in script |
|---|---|
| Lesson 3 — FourAutomationLayers (~line 33) | `.github/instructions/` |
| Lesson 5 — ContentTypes (~line 54) | `.github/instructions/` |
| Lesson 8 — SkillsAndMcp (~line 61, 82) | `~/.copilot/skills/validate-commit-message/`, `.copilot/mcp.json`, `~/.copilot/mcp.json` |
| Lesson 9 — ProjectSetup (~lines 33/47/75) | `copilot-instructions.md` ×3 — verify spoken context before editing |

---

## Ready-to-paste script drafts

These are already applied to the source `voiceover-config.ts` files (marked ✍️ above);
reproduced here for review and as the text to feed the TTS regen.

**Lesson 1 — `scene-10` Models** *(estimatedFrames: bump ~1050 → ~1200 after regen)*
> Step nine. Model selection. Not all tasks need the same horsepower, and heavier models carry premium multipliers that affect your budget. Every provider offers the same three tiers. Lightweight models — like Haiku, GPT mini, or Gemini Flash — cost about a quarter of the standard rate, great for simple, repetitive tasks. Standard models — like Sonnet, GPT, or Gemini Pro — are the sweet spot for most daily work. And heavy models — like Opus, GPT Codex, or Gemini Deep Think — are worth it for complex architecture or deep analysis. Switch anytime with slash model.

**Lesson 6 — `scene-01` The Agent File** *(estimatedFrames: bump ~638 → ~720 after regen)*
> An agent is a markdown file with YAML frontmatter. Name, description, model, and tools — four frontmatter fields, plus the body, control everything. The body is the instruction set. The frontmatter is the metadata the CLI uses to route, invoke, and constrain — including which model the agent runs on, so you can match a cheaper model to a lighter agent. No compiled code, no deployment, no infrastructure. A file.

**Lesson 6 — `scene-03` Category & Naming** *(applied earlier this session)*
> Universal agents — useful in any project — live in the dot-copilot agents folder in your home directory, synced through your dotfiles. Repo-specific agents live in a dot-copilot agents folder at the repository root. Universal agents use verb-noun names, like security-auditor or pr-description-writer. Repo-specific agents are prefixed with the project name, like myapp-api-scaffolder. The naming tells you the scope at a glance.

---

## TTS token audit *(whole curriculum — `voiceover-config.ts` scripts)*

Tokens the TTS voice mispronounces or spells out awkwardly. Fix during the same regen pass.
**Conf:** 🔴 high (convert) · 🟡 review (test with the actual voice — many engines handle these).

### Conversion glossary *(use these spoken forms in any script edit)*

| Token in script | Why it breaks | Spoken form | Conf |
|---|---|---|---|
| `regex` / REGEX | read "ree-gex" / "R-E-G-E-X" | "regular expressions" | 🔴 |
| `.gitignore` | "dot gitignore" mangled | "your git-ignore file" | 🔴 |
| `.editorconfig` | "dot editor config" | "your editor-config file" | 🔴 |
| `.prettierrc` | "dot prettier R C" | "your Prettier config" | 🔴 |
| `tsconfig.json` / `tsconfig` | "T-S config dot Jason" | "your TypeScript config" | 🔴 |
| `AGENTS.md` | "agents dot M-D" | "the AGENTS dot md file" *(or "your AGENTS file")* | 🔴 |
| `SKILL.md` | "skill dot M-D" | "a skill dot md file" | 🔴 |
| `CHANGELOG.md` | "changelog dot M-D" | "your changelog file" | 🔴 |
| `mcp.json` | "M-C-P dot Jason" | "your MCP config file" | 🔴 |
| `*.instructions.md` paths | path punctuation | spoken form *(see path scan above)* | 🔴 |
| `CI/CD` | "C-I slash C-D" | "C-I-C-D" or "your CI/CD pipeline" → "your continuous-integration pipeline" | 🔴 |
| `async/await` | "async slash await" | "async-await" *(no slash)* | 🔴 |
| `RAG` | read as the word "rag" | "retrieval-augmented generation" *(then "RAG" is fine once defined)* | 🔴 |
| `package.json` | "package dot Jason" | "your package-json file" | 🟡 |
| `YAML` | "yam-ul" vs "Y-A-M-L" | usually OK as "YAML" — verify | 🟡 |
| `MCP` | "M-C-P" | usually OK — verify (appears heavily in L8) | 🟡 |
| `BDD` / `npm` | "B-D-D" / "N-P-M" | usually OK — verify | 🟡 |

### Where they appear *(by lesson → scene → token)*

| Lesson | Scene(s) | Tokens |
|---|---|---|
| L1 AIEnvSetup | scene-05 Tool Configs; scene-07; scene-08 MCP | `tsconfig`, `BDD`, `MCP` |
| L2 ContextHierarchy | scene-03 AGENTS.md; scene-06 Tool Configs | `AGENTS.md`; `.editorconfig` `.prettierrc` `tsconfig.json` |
| L3 FourAutomationLayers | scene-03; scene-05; scene-08 | `SKILL.md`, `CI/CD`, `npm` |
| L4 AgentEcosystem | scene-04 Learners; scene-10 | `RAG` 🔴, `MCP` |
| L5 ContentTypes | scene-06 Skill | `regex` 🔴 |
| L6 BuildingAgents | scene-01; scene-07 Guardian | `YAML`; `.gitignore` 🔴 |
| L7 WorkflowGitflow | scene-03; scene-04; scene-05 | `regex` 🔴, `JSON`/`package.json`, `CI/CD` 🔴 |
| L8 SkillsAndMcp | scene-03/05/06 SKILL.md; scene-06 regex; scene-08 mcp.json; MCP throughout | `SKILL.md` 🔴, `regex` 🔴, `mcp.json` 🔴, `MCP` 🟡 |
| L9 ProjectSetup | scene-02/04/06 | `*-instructions.md` paths |
| L10 BusinessEcosystem | scene-04 | `CHANGELOG.md` 🔴 |
| L0 UpgradeGuide / L11 | scene-01/03 | `MCP` 🟡 only |

> **✅ 🔴 sweep applied + audio regenerated (2026-06-20).** All high-confidence in-text
> conversions applied across **L2, L3, L5, L6, L7, L8, L10** (13 edits) and the affected scenes'
> MP3s regenerated via `scripts/generate-voiceover-regen.ts` (George + pronunciation module). 🟡
> tokens left for judgment against the George voice. Exceptions:
> - **L1** — ✅ *resolved via consolidation* (see the Lesson 1 section above). The `src/` vs
>   `lessons/` fork was retired; `src/` is canonical. `scene-04` adopted the cross-platform script
>   (no `async/await` to convert) and `scene-06` got the `tsconfig`/`prettierrc`→spoken edit. Audio
>   regenerated ✅ for scene-06/07/10 (2026-06-20).
> - **L4 `RAG`** — false positive: appears only in the on-screen label "Learners and RAG", never in
>   the narration. No script change.
> - **L9** — already regenerated & verified ✅ this session; left untouched to preserve verified audio.
>   Its `*-instructions.md` path mentions can be folded into a future L9 regen if desired.
> - **L7 scene-05** — script says "the CI workflow", not "CI/CD" (that's the slide label only). No change.

### Generation-time pronunciation *(don't respell these in the script — fix at TTS time)*

Engine: **ElevenLabs**, model `eleven_multilingual_v2`, voice "George" (`scripts/generate-voiceover*.ts`).
`multilingual_v2` does **not** support phoneme/IPA tags — only **alias** substitution. For words
that should stay verbatim in the prose (so the script reads normally) but are mispronounced,
the fix is a generation-time `replace()` map, **not** an in-text edit.

**Built:** `scripts/tts-pronunciation.ts` → `applyPronunciation(text)`, imported by all 7
generators and applied to `scene.script` before the API call. Add new respellings there in one place.

| Word | Heard as | Respelling *(confirmed on George)* |
|---|---|---|
| `commit` / `commits` / `committed` / `committing` | "comet" (KOM-it) | `ka-mitt` / `ka-mitts` / `ka-mitted` / `ka-mitting` |
| `pre-commit` / `commit-msg` | — | handled automatically — `\bcommit\b` matches inside hyphenated compounds |
| `params` / `param` | mispronounced | `pa-rams` / `pa-ram` |
| `README` | mangled as one word | `read me` (reed-mee) |

Status: ✅ infra built + wired (`ka-mitt` confirmed against the George voice). The corrected
audio is heard only after the affected scenes are **regenerated**.

---

## Regeneration notes

- Voiceover scripts live in `remotion/src/voiceover-config.ts` (Lesson 1) and
  `remotion/src/lessons/lesson-N-*/voiceover-config.ts` (Lessons 2–10).
- Generation scripts: `remotion/package.json` → `voiceover:lesson-N` / `voiceover:lessons-3-10`
  (needs the TTS API key in `../.env`).
- After regenerating a scene, re-check its `estimatedFrames` against the new audio length.
