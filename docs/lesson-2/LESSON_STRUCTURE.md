# Lesson 2 — Lessons Learned in AI-Assisted Development: Quick Reference

**Status:** Complete and rendered  
**Voice:** John Wayne (ElevenLabs, stability 0.5, similarity_boost 0.75)  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 60 frames (2s) silence after each scene's audio ends  
**Audio:** Generated, enabled (`AUDIO_ENABLED = true`)  
**Output:** `remotion/out/LessonsLearned.mp4` — 27.2 MB, ~13.5 minutes  
**Source:** `remotion/src/lessons/lesson-2-lessons-learned/`  
**Audio files:** `remotion/public/voiceover/lesson-2/scene-00.mp3` through `scene-09.mp3`  
**Anonymized:** All references to "Machina" removed — use "demo project" when referencing  

---

## What This Lesson Is

A 9-scene post-mortem on lessons learned building a large-scale project with AI agent fleet orchestration. Covers the real cost of poor planning, model selection tradeoffs, testing strategy, componentization, and the mental shift from expert contributor to conductor. Narrated by John Wayne for a distinctive, authoritative tone.

Target audience: engineers who have used Copilot/AI agents and want to use them more effectively at scale.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-IntroductionScene.tsx` | Introduction | 860 | Problem statement — built with AI, made mistakes, distilled lessons |
| 02 | `02-ModelSelectionScene.tsx` | Model Selection | 1,445 | Sonnet for exploration, Opus for precision; 15–20× cost multiplier from rework |
| 03 | `03-TestingStrategyScene.tsx` | Testing Strategy | 1,335 | API tests ≠ UI tests; create testing agents before implementation starts |
| 04 | `04-PlannedVsReactiveScene.tsx` | Planned vs. Reactive | 1,480 | Upfront planning + autopilot (`--allow-all`) vs. reactive prompting chaos |
| 05 | `05-ComponentizationScene.tsx` | Componentization | 1,300 | Design system upfront — same button, 3 implementations without it |
| 06 | `06-ConductorThinkingScene.tsx` | Conductor Thinking | 1,580 | Shift from layer expert to full-product orchestrator |
| 07 | `07-ProjectSetupScene.tsx` | Project Setup & Governance | 1,300 | Best practices: circuit breakers, versioned instructions, metrics, validation |
| 08 | `08-BestPracticesScene.tsx` | Two New Agents | 1,505 | Project Initialization Agent + Project Review Agent |
| 09 | `09-ClosingScene.tsx` | Closing | 1,505 | 9 key takeaways; teaser for future lessons |

**Note:** `scene-00.mp3` (John Wayne intro) exists in audio files as a legacy artifact — not wired in current `voiceover-config.ts`.  
**Total frames (with transitions):** ~11,149 frames (~6.2 minutes at 30fps; actual render ~13.5 min due to real audio durations)

---

## Key Production Decisions

- **Voice:** John Wayne — chosen for authoritative, distinctive tone appropriate to a "lessons learned" retrospective
- **Padding:** 60 frames per scene (vs. 45 in lesson 1) — longer scenes need more breathing room between topics
- **Frame formula:** `(words / 130 WPM) × 30fps` for estimates; `calculateMetadata.ts` overrides with actual MP3 durations at render time
- **Anonymization:** "Machina" → "a large-scale project" / "demo project" — safe for public GitHub release
- **Scope:** No John Wayne intro in final voiceover-config (scene-00 audio exists but is unused)

---

## Key Takeaways (For Atlas Reference)

The 9 lessons from this video, in order:

1. **Model selection** — Opus for precision, Sonnet for exploration; cheap execution with errors costs more
2. **Cost of rework** — 50% of credits spent fixing mistakes that planning could have prevented
3. **Specialized testing** — API tests and UI/E2E tests catch different bug classes; both are required
4. **Plan upfront** — planned execution + autopilot beats reactive troubleshooting every time
5. **Design systems** — define components, tokens, patterns before agents build anything
6. **Conductor thinking** — full-product orchestrator perspective, not layer-specialist perspective
7. **Automate best practices** — Project Initialization Agent + Project Review Agent
8. **Treat instructions like code** — version control them, document changes, collect metrics
9. **Resilience** — circuit breakers, health monitoring, fast failure, automated output validation

---

## File Layout

```
remotion/
├── src/lessons/lesson-2-lessons-learned/
│   ├── Root.tsx                  ← Remotion composition root
│   ├── MainVideo.tsx             ← Scene sequencer with audio sync
│   ├── calculateMetadata.ts      ← Reads actual MP3 durations at render time
│   ├── voiceover-config.ts       ← 9 scripts (scene-01 through scene-09)
│   ├── index.css                 ← Lesson-specific styles
│   ├── README.md                 ← Lesson-specific readme
│   ├── SCRIPT_REVIEW_GUIDE.md    ← Voice setup and review notes
│   ├── TIMING_ANALYSIS.md        ← Frame-by-frame timing breakdown
│   └── scenes/
│       ├── 01-IntroductionScene.tsx
│       ├── 02-ModelSelectionScene.tsx
│       ├── 03-TestingStrategyScene.tsx
│       ├── 04-PlannedVsReactiveScene.tsx
│       ├── 05-ComponentizationScene.tsx
│       ├── 06-ConductorThinkingScene.tsx
│       ├── 07-ProjectSetupScene.tsx
│       ├── 08-BestPracticesScene.tsx
│       └── 09-ClosingScene.tsx
└── public/voiceover/lesson-2/
    ├── scene-00.mp3  (legacy — unused)
    └── scene-01.mp3 through scene-09.mp3
```

---

## Re-rendering Lesson 2

From `remotion/`:

```bash
npm i                                              # if node_modules not present
LESSON=2 npx remotion render --composition LessonsLearned --output-location="../out/lesson-2-lessons-learned.mp4"
```

Or via studio for preview:

```bash
LESSON=2 npx remotion studio
# Open http://localhost:3000 → select "LessonsLearned" composition
```

Regenerate audio (only if scripts changed — costs ElevenLabs credits):

```bash
node --env-file=.env --strip-types scripts/generate-voiceover-lesson2.ts
```

---

## Relationship to the Exercises

This lesson builds on lesson 1's setup and dives into real-world application:

| Lesson 2 Scene | Corresponding Exercise / Concept |
|---------------|----------------------------------|
| Model Selection + Cost of Rework | Reinforces `02-copilot-environment-walkthrough.md` model awareness |
| Testing Strategy | Prereq knowledge for `05-building-agents-exercise.md` (Feedback category) |
| Conductor Thinking | Core concept behind `03-agent-ecosystem-guide.md` |
| Two New Agents | Direct input to `PFS.Utility.Common.Agents` backlog (`pfs-task-planner`, `pfs-repo-auditor`) |
