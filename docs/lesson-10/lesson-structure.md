# Lesson 10 — The Business Ecosystem: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** Adam (ElevenLabs `pNInz6obpgDQGcFmaJgB`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `BusinessEcosystem`  
**Source:** `remotion/src/lessons/lesson-10-business-ecosystem/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-10/scene-01.mp3` through `scene-10.mp3`

---

## What This Lesson Is

A 10-scene expansion lesson that applies the same orchestration logic from the development side to the business side. It introduces Themis as the business orchestrator, maps the business specialist categories, and explains how the real leverage comes from bridging Atlas and Themis so engineering and business stop drifting out of sync.
Target audience: engineers and technical leads who need to understand how the AI ecosystem extends beyond code into planning, documentation, compliance, and stakeholder communication.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-SameStructureScene.tsx` | Same Structure, Different Domain | 693 | Shows that the business ecosystem uses the same structural logic as the development one. |
| 02 | `02-ThemisScene.tsx` | Themis | 762 | Introduces Themis as the business orchestrator that routes to the right specialists. |
| 03 | `03-LearnerLayerScene.tsx` | Learner Layer | 679 | Defines business learner agents as read-first specialists that gather context before action. |
| 04 | `04-DoerLayerScene.tsx` | Doer Layer | 610 | Covers business doers as the producers of specs, roadmaps, summaries, and comms. |
| 05 | `05-FeedbackScene.tsx` | Feedback | 624 | Positions feedback agents as the reviewers of business artifacts and decisions. |
| 06 | `06-GuardiansScene.tsx` | Guardians | 665 | Explains guardians as the layer protecting compliance, scope, and requirements integrity. |
| 07 | `07-ToolOperatorsScene.tsx` | Tool Operators | 735 | Shows tool operators pushing business outputs into systems like Jira and Confluence. |
| 08 | `08-TheBridgeScene.tsx` | The Bridge | 721 | Frames the real problem as the gap between dev and business pipelines. |
| 09 | `09-AtlasAndThemisScene.tsx` | Atlas and Themis | 748 | Connects Atlas and Themis into a coordinated end-to-end operating model. |
| 10 | `10-ClosingScene.tsx` | Closing | 901 | Closes the curriculum by unifying development and business orchestration into one system. |

**Total frames (with transitions):** ~6,958 frames (~3.9 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** This lesson mirrors the development ecosystem on purpose: the business side is not “extra process,” it is a parallel pipeline that needs the same rigor, routing, and specialization.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-10-business-ecosystem/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-SameStructureScene.tsx    ← To be authored
        ├── 02-ThemisScene.tsx    ← To be authored
        ├── 03-LearnerLayerScene.tsx    ← To be authored
        ├── 04-DoerLayerScene.tsx    ← To be authored
        ├── 05-FeedbackScene.tsx    ← To be authored
        ├── 06-GuardiansScene.tsx    ← To be authored
        ├── 07-ToolOperatorsScene.tsx    ← To be authored
        ├── 08-TheBridgeScene.tsx    ← To be authored
        ├── 09-AtlasAndThemisScene.tsx    ← To be authored
        └── 10-ClosingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 10

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=10 npx remotion studio
# Open http://localhost:3000 → select "BusinessEcosystem"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/10-business-ecosystem.md`, where learners practice mapping business-side work to the right specialist categories and handoff paths.
