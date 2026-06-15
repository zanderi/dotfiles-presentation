# Lesson 3 — Four Automation Layers: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** Adam (ElevenLabs `pNInz6obpgDQGcFmaJgB`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `FourAutomationLayers`  
**Source:** `remotion/src/lessons/lesson-3-four-automation-layers/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-3/scene-01.mp3` through `scene-10.mp3`

---

## What This Lesson Is

A 10-scene mental-model lesson that explains the four automation layers in the Copilot ecosystem: instructions, skills, agents, and hooks/CI. It answers the most common setup mistake — trying to make agents behave like background daemons — and replaces that confusion with a clean ownership model for what fires when.
Target audience: engineers who understand basic agent setup but need a precise model for how automation actually triggers in real workflows.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-TheQuestionScene.tsx` | The Question | 679 | Frames the core question: if agents do not fire at git events, what actually does? |
| 02 | `02-Layer1InstructionsScene.tsx` | Layer 1: Instructions | 638 | Defines instruction files as always-on context rather than executable automation. |
| 03 | `03-Layer2SkillsScene.tsx` | Layer 2: Skills | 762 | Explains skills as description-matched, single-purpose automation with optional scripts. |
| 04 | `04-Layer3AgentsScene.tsx` | Layer 3: Agents | 721 | Positions agents as interactive specialists that run only when you engage them. |
| 05 | `05-Layer4HooksAndCIScene.tsx` | Layer 4: Hooks and CI | 707 | Shows hooks and CI as the mechanical layer that really fires on git events. |
| 06 | `06-TheKeyInsightScene.tsx` | The Key Insight | 845 | Makes the big point: agents bring judgment, hooks bring enforcement, and mixing them up causes confusion. |
| 07 | `07-WhereEachFitsScene.tsx` | Where Each Fits | 638 | Maps each responsibility to the correct layer so the ecosystem stops feeling mystical. |
| 08 | `08-SettingUpLayer4Scene.tsx` | Setting Up Layer 4 | 665 | Walks through Husky-based local enforcement for Layer 4. |
| 09 | `09-CIIntegrationScene.tsx` | CI Integration | 735 | Extends Layer 4 into GitHub Actions for remote enforcement and merge protection. |
| 10 | `10-ClosingScene.tsx` | Closing | 845 | Closes by tying the four-layer model to Exercise 3 and the deeper agent work in Lesson 4. |

**Total frames (with transitions):** ~7,055 frames (~3.9 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** The core insight is the point of the lesson: agents are interactive specialists, not background daemons, and that is a feature because it keeps judgment attached to user intent.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-3-four-automation-layers/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-TheQuestionScene.tsx    ← To be authored
        ├── 02-Layer1InstructionsScene.tsx    ← To be authored
        ├── 03-Layer2SkillsScene.tsx    ← To be authored
        ├── 04-Layer3AgentsScene.tsx    ← To be authored
        ├── 05-Layer4HooksAndCIScene.tsx    ← To be authored
        ├── 06-TheKeyInsightScene.tsx    ← To be authored
        ├── 07-WhereEachFitsScene.tsx    ← To be authored
        ├── 08-SettingUpLayer4Scene.tsx    ← To be authored
        ├── 09-CIIntegrationScene.tsx    ← To be authored
        └── 10-ClosingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 3

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=3 npx remotion studio
# Open http://localhost:3000 → select "FourAutomationLayers"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs directly with `exercises/03-four-automation-layers.md`, which turns the mental model into a concrete Layer 4 implementation with hooks and CI.
