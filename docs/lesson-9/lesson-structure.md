# Lesson 9 — AI-First Project Setup: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** Adam (ElevenLabs `pNInz6obpgDQGcFmaJgB`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `ProjectSetup`  
**Source:** `remotion/src/lessons/lesson-9-project-setup/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-9/scene-01.mp3` through `scene-10.mp3`

---

## What This Lesson Is

A 10-scene project bootstrap lesson on how to set up an AI-first repository before implementation begins. It argues for front-loading the name, problem statement, docs, repo instructions, design system, feature specs, and build plan so agents inherit structure instead of generating chaos and rework.
Target audience: engineers starting a new product or major repo who want AI leverage without paying the usual tax in downstream cleanup.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-BeforeAnyCodeScene.tsx` | Before Any Code | 956 | Opens with the cost argument for designing before prompting and coding. |
| 02 | `02-NamingAndFramingScene.tsx` | Naming and Framing | 804 | Starts the project by naming the product and stating the problem clearly. |
| 03 | `03-GeneratingDocsScene.tsx` | Generating Docs | 665 | Uses AI to generate foundational project documents from that framing. |
| 04 | `04-ProjectInstructionsScene.tsx` | Project Instructions | 818 | Makes `copilot-instructions.md` the central behavioral contract for the repo. |
| 05 | `05-DesignSystemFirstScene.tsx` | Design System First | 762 | Insists on a design system before UI work so components do not fragment immediately. |
| 06 | `06-FeatureSpecsScene.tsx` | Feature Specs | 887 | Adds feature specs so scope and success criteria exist before implementation. |
| 07 | `07-FleetBuildPlanScene.tsx` | Fleet Build Plan | 901 | Positions fleet as the right execution mode for initial broad build-out. |
| 08 | `08-PlanModeForPrerequisitesScene.tsx` | Plan Mode for Prerequisites | 762 | Uses plan mode first to map prerequisites before parallelizing anything. |
| 09 | `09-RunningFleetScene.tsx` | Running Fleet | 762 | Covers the actual fleet launch and the need for clean, isolated scopes. |
| 10 | `10-ClosingScene.tsx` | Closing | 901 | Closes with the full setup philosophy: build the context system before the app. |

**Total frames (with transitions):** ~8,038 frames (~4.5 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** The lesson is intentionally doc-heavy because the whole point is that context artifacts are not overhead — they are the scaffolding that makes the later parallel build possible.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-9-project-setup/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-BeforeAnyCodeScene.tsx    ← To be authored
        ├── 02-NamingAndFramingScene.tsx    ← To be authored
        ├── 03-GeneratingDocsScene.tsx    ← To be authored
        ├── 04-ProjectInstructionsScene.tsx    ← To be authored
        ├── 05-DesignSystemFirstScene.tsx    ← To be authored
        ├── 06-FeatureSpecsScene.tsx    ← To be authored
        ├── 07-FleetBuildPlanScene.tsx    ← To be authored
        ├── 08-PlanModeForPrerequisitesScene.tsx    ← To be authored
        ├── 09-RunningFleetScene.tsx    ← To be authored
        └── 10-ClosingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 9

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=9 npx remotion studio
# Open http://localhost:3000 → select "ProjectSetup"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/09-project-setup.md`, where learners practice generating the repo context, prerequisites, and execution plan before a doer touches production code.
