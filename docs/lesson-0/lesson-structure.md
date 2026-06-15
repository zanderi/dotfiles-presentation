# Lesson 0 — Upgrade Guide: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** Adam (ElevenLabs `pNInz6obpgDQGcFmaJgB`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `UpgradeGuide`  
**Source:** `remotion/src/lessons/lesson-0-upgrade-guide/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-0/scene-01.mp3` through `scene-04.mp3`

---

## What This Lesson Is

A 4-scene fast-track orientation for engineers who completed the original Lesson 1 and Lesson 2 curriculum. It maps prior knowledge to the new 10-lesson structure, highlights what is genuinely new, and tells returning learners exactly where to jump back in without repeating setup material they already know.
Target audience: returning learners who finished the original two-lesson path and want the shortest route into the expanded curriculum.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-WhatChangedScene.tsx` | What Changed | 1,053 | Explains how the old two-lesson course expanded into a structured ten-lesson curriculum. |
| 02 | `02-WhatYouKnowScene.tsx` | What You Already Know | 970 | Maps old lessons to new ones and clarifies what returning learners already know. |
| 03 | `03-FastTrackScene.tsx` | Your Fast-Track Path | 1,261 | Gives the must-watch sequence so experienced learners can skip the repeated material. |
| 04 | `04-StartHereScene.tsx` | Start Here | 845 | Points learners to Lesson 3 because the four automation layers unlock the rest. |

**Total frames (with transitions):** ~4,069 frames (~2.3 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** This lesson is intentionally an orientation layer, not a full content lesson — its job is to reduce duplication and get returning learners to the four automation layers as fast as possible.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-0-upgrade-guide/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-WhatChangedScene.tsx    ← To be authored
        ├── 02-WhatYouKnowScene.tsx    ← To be authored
        ├── 03-FastTrackScene.tsx    ← To be authored
        └── 04-StartHereScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 0

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=0 npx remotion studio
# Open http://localhost:3000 → select "UpgradeGuide"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This upgrade guide has no corresponding exercise file. Its purpose is orientation: map the original two-lesson curriculum to the new ten-lesson path and send returning learners to the right starting point.
