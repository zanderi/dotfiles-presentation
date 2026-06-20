# Session Handoff — dotfiles-presentation

> **For Atlas:** Read this file at the start of the next session before doing anything else.
> The ⚡ Atlas Context block below is the lean orientation summary — read it first.
> Dig into the session sections below only when you need more detail.

---

## ⚡ Atlas Context *(session-start reads this block only — update every session)*

**Branch:** `feature/claude-callouts-and-tts` | **Commit:** `54cfd40` | **CI:** n/a (local, not pushed)

> ⚠️ Work is committed on `feature/claude-callouts-and-tts`, **not** `main`, and **not pushed**.

### Done (Session 2 — 2026-06-19)
- **Cross-platform callouts** added across slides (L1, L2-ContextHierarchy, L4, L6): show Copilot/Claude/Cursor equivalents. New `PlatformPaths` component; `InfoCard` gained `universal`/`parallels`/`grow`/`horizontal`. **Direction: stays primarily a Copilot how-to, with small Claude/Cursor call-outs only where a real parallel exists.**
- **Models slide** → version-less + cross-provider (Haiku/Sonnet/Opus · GPT mini/GPT/GPT Codex · Gemini Flash/Pro/Deep Think).
- **Voiceover pipeline:** new `scripts/tts-pronunciation.ts` (`applyPronunciation`) for generation-time fixes ElevenLabs `multilingual_v2` can't phoneme-tag — `commit`→`ka-mitt`, `params`→`pa-rams`, `README`→`read me`; wired into all generators. **George** (`JBFqnCBsd6RMkjVDRZzb`) is now the hard default (several generators were falling back to Adam). `render:lesson-N` scripts fixed to render by composition id.
- **Lesson 9:** "22 files" reframed illustrative (~20); new **Setup Files** diagram slide added before the waves scene; that + 4 scenes' audio regenerated (George) and **verified end-to-end** (gaps, pronunciation, MP4 render all good).
- New `docs/voiceover-script-rework-tracker.md` = source of truth for remaining script/audio work. Pronunciation/TTS/voice rules captured in the `remotion-lesson-author` agent.

### Up Next
1. **Push + open PR** for `feature/claude-callouts-and-tts` → `main`.
2. **🔴 TTS in-text sweep** — apply glossary conversions (`regex`, `.gitignore`, `CI/CD`, `SKILL.md`, paths…) across all lesson scripts (tracker → "TTS token audit").
3. **Write cross-tool script asides** not yet done: L1 `scene-09/13/08/07`, L2b `scene-02/04/05/01`, L4 `scene-11` (slides changed, narration not).
4. **Regen ready now:** L6 `scene-01`+`scene-03`, L1 `scene-10` — stamp selective generators (like `generate-voiceover-lesson9-selective.ts`) and regenerate.

### Blocked
- *(nothing blocked)* — `.env` with ElevenLabs key is present; George confirmed; selective-regen + render pipeline proven on Lesson 9.

---

## Session 2 — Cross-Platform Callouts, Voiceover TTS/Voice Pipeline & Lesson 9 Rework *(2026-06-19)*

**Branch:** `feature/claude-callouts-and-tts` | **Commit:** `54cfd40` (57 files, +1369/−164) — local, not pushed

### Context / driving decision
The `dotfiles` repo went multi-platform (Copilot + Claude Code + Cursor; profile system — see `C:\workspace\dotfiles` Session 8 handoff + `business-agent-ecosystem.md`). We're now working in Claude's IDE. **Decision: the presentation stays primarily a GitHub Copilot how-to; we add small Claude/Cursor call-outs only where there's a meaningful parallel** (not a re-platform). Mapping used throughout: Copilot `~/.copilot/copilot-instructions.md` ↔ Claude `~/.claude/CLAUDE.md` ↔ Cursor `~/.cursorrules`; `AGENTS.md` is universal; agents → Copilot `.agent.md` / Claude `.claude/agents/*.md` / Cursor `.cursor/rules/*.mdc` (Cursor has no separate agents dir or skills primitive).

### Completed this session

**Slide cross-platform callouts** (new `src/components/PlatformPaths.tsx`; `InfoCard` extended with `universal`, `parallels`, `grow`, `horizontal`):
- **L1 (AIEnvSetup):** scene-07 Repo Instructions (per-platform parallels + universal badge), scene-08 Agents (3-platform creation block), scene-09 MCP (reframed as open standard + bundling caveat), scene-13 Fleet (cross-tool callout), scene-10 Models (version-less + Gemini), scene-14 Verify (fixed overflow: 2×2→horizontal cards via `grow={false}`/`horizontal`).
- **L2 (ContextHierarchy):** scene-01 Stack → 3-platform matrix; scene-02 Global Config, scene-04 Repo Instructions, scene-05 Task Instructions → per-platform.
- **L4 (AgentEcosystem):** scene-11 Where Agents Live → 3-platform + Cursor "agents are rules" footnote.
- **L5 (ContentTypes):** scene-01 equal-height card fix (wrapper `display:flex`).
- **L6 (BuildingAgents):** scene-01 added `model:` to YAML + "five fields"; scene-03 Category & Naming → 3-platform; scenes 06/07 YAML examples got `model:` (sonnet/haiku).

**Voiceover TTS + voice pipeline:**
- `scripts/tts-pronunciation.ts` → `applyPronunciation()` (generation-time alias substitution; `multilingual_v2` has no phoneme tags). Rules: `commit`/inflections→`ka-mitt`, `params`/`param`→`pa-rams`/`pa-ram`, `README`→`read me`. Imported by all 7 generators + the agent templates.
- **George everywhere:** 4 generators were defaulting to Adam (`pNInz…`); all now default to George (`JBFqnCBsd6RMkjVDRZzb`). Swept Adam→George across docs/lesson-*/lesson-structure.md, platform-plan.md, and the agent. `.env.example` already had George.
- `scripts/generate-voiceover-lesson9-selective.ts` + `voiceover:lesson-9-selective` npm script (per-scene regen).
- Fixed all `render:lesson-N` scripts: were `cross-env LESSON=N remotion render` (hung on interactive picker) → now `remotion render <CompositionId> out/lesson-N.mp4`. (`render:lesson-2` left as-is — LessonsLearned is not registered in Root.)

**Lesson 9 rework:** verified the "22 files" is just the count of the exercise's *MyApp* example tree (8 are feature specs that scale per-feature). Reframed to "~20 / around twenty" in 4 scenes + scripts; new `12-SetupFilesScene.tsx` diagram (Root 2 · docs 7 · instructions 3 · .github 2 · feature specs 8*) inserted before the waves scene; scene-07 opener bridges inventory→build order. Regenerated scene-00/01/07/10/12 audio (George), removed the temporary `noAudio` flag, rendered `out/lesson-9.mp4` (21MB, exit 0) — reviewed and approved.

**Docs:** `docs/voiceover-script-rework-tracker.md` created (per-scene status, conversion glossary, generation-time pronunciation table, drafts). `remotion-lesson-author.agent.md` now carries the full Pronunciation & TTS rules + George default + `applyPronunciation` in its templates.

### Useful facts learned
- **Audio is matched by array INDEX** (`VOICEOVER_SCENES[i]`) with the MP3 named by `vo.id`; insert a scene at the same index in `SCENES` (MainVideo) and `VOICEOVER_SCENES`, give it a new id, and existing MP3s stay valid.
- `calculateMetadata` probes **every** scene's MP3 when `AUDIO_ENABLED` — a new scene without audio breaks it. Pattern used: a `noAudio: true` flag on the voiceover entry (guarded in both `calculateMetadata` and `MainVideo`), removed after the MP3 is generated.
- `Root.tsx` registers all 11 compositions unconditionally — `LESSON` env does nothing for render; you MUST pass the composition id. IDs: UpgradeGuide/AIEnvSetup/ContextHierarchy/FourAutomationLayers/AgentEcosystem/ContentTypes/BuildingAgents/WorkflowGitflow/SkillsAndMcp/ProjectSetup/BusinessEcosystem.
- ElevenLabs voice **George = `JBFqnCBsd6RMkjVDRZzb`**; model `eleven_multilingual_v2` (alias substitution only, no IPA/phoneme tags). `.env` (gitignored) at repo root holds `ELEVENLABS_API_KEY` + `ELEVENLABS_VOICE_ID`.
- Generators live in `remotion/scripts/`; run from `remotion/` via `npm run voiceover:*` (env from `../.env`).

### What to do next
1. **Push + PR** `feature/claude-callouts-and-tts` → `main` (this repo targets `main`; no `gh` assumed — use GitHub MCP if needed).
2. Apply the **🔴 in-text TTS conversions** across all lesson scripts (tracker glossary).
3. Write the **cross-tool narration asides** for the slides changed this session whose scripts are still Copilot-only (L1 09/13/08/07, L2b, L4).
4. Stamp **selective generators** for L1 + L6 and regenerate their ready scenes; mark ✅ in the tracker as each is verified.

---

## Session 1 — Lesson 2, LessonsLearned Redistribution & Title Slides *(2026-06-15)*

**Branch:** `main` | **Latest commit:** `b6e5a52`

### Completed This Session

#### Lesson 2 — The Context Hierarchy (NEW)

Created a full new lesson at `remotion/src/lessons/lesson-2-context-hierarchy/`:

- **8 scenes** in order: `TheStack` → `GlobalConfig` → `AgentsMd` → `RepoInstructions` → `TaskInstructions` → `ToolConfigs` → `SafetyNet` → `InstructionsLikeCode`
- Composition ID: `ContextHierarchy`, accent colour: `COLORS.blue`
- Audio path scoped to `voiceover/lesson-2b/` to avoid collision with the legacy lesson-2 audio directory
- Registered in `remotion/src/Root.tsx`
- Added `studio:lesson-2b` and `render:lesson-2b` npm scripts to `remotion/package.json`
- Fixed Lesson 0 slide that still read "Dev Fundamentals" — corrected to "The Context Hierarchy"

#### LessonsLearned Redistribution

Audited all `LessonsLearned` content against the full 11-lesson curriculum:

- Most content was already covered by existing scenes (conductor thinking in L4-scene-12, design system in L9-scene-05, model selection in L1-scene-10)
- Added `10-TestSpecializationScene.tsx` to Lesson 7 — specialized test agents catch different bug classes
- Added `11-ResilienceScene.tsx` to Lesson 9 — circuit breaker patterns, output validation, metrics
- Removed the `LessonsLearned` composition from `Root.tsx`; the folder (`remotion/src/lessons/lesson-2-lessons-learned/`) is retained for archival

#### Title Intro Slides — All 10 Lessons

Created `00-TitleScene.tsx` for lessons 0, 2b, 3, 4, 5, 6, 7, 8, 9, and 10:

- Each matches the `AIEnvSetup` pattern: lesson number badge + big title + subtitle + tagline + "GitHub Copilot CLI" watermark
- Each uses the lesson's accent colour from `constants.ts`
- Prepended to each lesson's `SCENES` array and `voiceover-config.ts` with a `scene-00` entry (750 frames, short welcome script placeholder)

### Repository State After This Session

**Active compositions in Root.tsx (11 total):**
`UpgradeGuide`, `AIEnvSetup`, `ContextHierarchy`, `FourAutomationLayers`, `AgentEcosystem`, `ContentTypes`, `BuildingAgents`, `WorkflowGitflow`, `SkillsAndMcp`, `ProjectSetup`, `BusinessEcosystem`

**Audio flags:**
- `AUDIO_ENABLED = true` — Lesson 1 (`AIEnvSetup`) only; real voiceover audio exists
- `AUDIO_ENABLED = false` — all other lessons; awaiting visual approval

**Folder conventions:**
- Lessons live at `remotion/src/lessons/lesson-N-name/`
- Exception: Lesson 1 (`AIEnvSetup`) lives at the `remotion/src/` root level (`MainVideo.tsx`, `calculateMetadata.ts`, `voiceover-config.ts`, `scenes/`)
- Shared components: `remotion/src/components/` — `SceneFrame`, `Headline`, `StepBadge`, `BulletList`, `CodeBlock`, `TwoColumn`, `InfoCard`
- Constants & colours: `remotion/src/constants.ts`

**Key docs:**
- `docs/platform-plan.md` — full curriculum specification
- `docs/fleet-plan-remotion-scenes.md` — scene-by-scene content spec for lessons 0 and 3–10
- `docs/lesson-N/lesson-structure.md` — per-lesson scene breakdown (all lessons have one)

### Known Issues

- **"JSX element identity changed" Remotion warning** fires in studio output — non-fatal but causes unnecessary remounts. Likely caused by an inline component definition (e.g., `const Foo = () => ...` inside a scene's render function) in one of the newer lessons. Not yet isolated.
- **Voiceover scripts as markdown** — was requested as a deliverable (one doc per lesson, readable alongside slides), deferred pending visual review.

### What To Do Next

1. Run `cd remotion && npm run studio` and review all 11 compositions visually; note any layout or copy fixes needed
2. Isolate the "JSX element identity changed" warning — search for inline component definitions inside scene render functions in lessons 3–10
3. Once visuals are approved, generate per-lesson voiceover script markdown files under `docs/lesson-N/voiceover-script.md`

---
