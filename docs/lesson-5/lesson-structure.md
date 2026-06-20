# Lesson 5 — Content Types: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** George (ElevenLabs `JBFqnCBsd6RMkjVDRZzb`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `ContentTypes`  
**Source:** `remotion/src/lessons/lesson-5-content-types/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-5/scene-01.mp3` through `scene-09.mp3`

---

## What This Lesson Is

A 9-scene decision-making lesson on the five content types in the Copilot ecosystem: agent, workflow agent, instruction file, skill, and prompt template. It gives learners a practical decision tree so they stop stuffing every idea into an agent and start choosing the right automation primitive for the job.
Target audience: engineers who know the ecosystem exists but need a repeatable way to choose the right content type before building anything.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-FiveTypesScene.tsx` | The Five Types | 762 | Introduces the five content types and the distinct role each one plays. |
| 02 | `02-DecisionTreeScene.tsx` | The Decision Tree | 804 | Presents the four-question decision tree that chooses the right content type. |
| 03 | `03-AgentScene.tsx` | Agent | 721 | Defines agents as interactive specialists with reasoning, judgment, and hard rules. |
| 04 | `04-WorkflowAgentScene.tsx` | Workflow Agent | 915 | Explains workflow agents as milestone-driven orchestrators that chain specialists. |
| 05 | `05-InstructionFileScene.tsx` | Instruction File | 748 | Covers instruction files as always-on context rather than executable automation. |
| 06 | `06-SkillScene.tsx` | Skill | 748 | Shows skills as description-matched units that can execute focused scripts. |
| 07 | `07-PromptTemplateScene.tsx` | Prompt Template | 679 | Positions prompt templates as reusable starting points instead of automation layers. |
| 08 | `08-TheWorkflowAgentLiveScene.tsx` | The Workflow Agent Live | 942 | Demonstrates the workflow-agent pattern with a live feature PR gate example. |
| 09 | `09-ClosingScene.tsx` | Closing | 624 | Closes by reinforcing that correct content-type choice removes most ecosystem confusion. |

**Total frames (with transitions):** ~6,783 frames (~3.8 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** The lesson is built around a decision tree because the real problem is not lack of tools — it is choosing the wrong one and then wondering why the workflow feels cursed.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-5-content-types/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-FiveTypesScene.tsx    ← To be authored
        ├── 02-DecisionTreeScene.tsx    ← To be authored
        ├── 03-AgentScene.tsx    ← To be authored
        ├── 04-WorkflowAgentScene.tsx    ← To be authored
        ├── 05-InstructionFileScene.tsx    ← To be authored
        ├── 06-SkillScene.tsx    ← To be authored
        ├── 07-PromptTemplateScene.tsx    ← To be authored
        ├── 08-TheWorkflowAgentLiveScene.tsx    ← To be authored
        └── 09-ClosingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 5

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=5 npx remotion studio
# Open http://localhost:3000 → select "ContentTypes"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/05-content-types.md`, which forces learners to classify real requests and pick the correct content type before they build the wrong thing beautifully.
