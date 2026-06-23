# Lesson 4 — The Agent Ecosystem: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** George (ElevenLabs `JBFqnCBsd6RMkjVDRZzb`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `AgentEcosystem`  
**Source:** `remotion/src/lessons/lesson-4-agent-ecosystem/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-4/scene-01.mp3` through `scene-12.mp3`

---

## What This Lesson Is

A 12-scene tour of the specialist agent ecosystem that sits underneath Atlas orchestration. It explains why one giant generalist agent is a bad idea, breaks the system into functional categories, and shows how planners, learners, doers, feedback agents, guardians, tool operators, and presenters work together in a real pipeline.
Target audience: engineers ready to move from “I have agents” to “I understand the architecture of an agent fleet.”

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-WhySpecialistsScene.tsx` | Why Specialists | 721 | Shows why a single do-everything agent is mediocre at everything that matters. |
| 02 | `02-TheOrchestratorScene.tsx` | The Orchestrator | 707 | Introduces Atlas as the orchestrator that routes work instead of doing every job itself. |
| 03 | `03-PlannersScene.tsx` | Planners | 568 | Defines planners as the agents that decompose work into executable sequences. |
| 04 | `04-LearnersAndRAGScene.tsx` | Learners and RAG | 541 | Explains learner agents as read-first specialists that gather context before action. |
| 05 | `05-DoersScene.tsx` | Doers | 582 | Covers doers as the builders that make concrete code or config changes. |
| 06 | `06-FeedbackAgentsScene.tsx` | Feedback Agents | 596 | Positions feedback agents as reviewers and auditors that evaluate output before merge. |
| 07 | `07-GuardiansScene.tsx` | Guardians | 596 | Defines guardians as the safety layer that protects policy, compliance, and boundaries. |
| 08 | `08-ToolOperatorsScene.tsx` | Tool Operators | 527 | Shows tool operators as the bridge from Copilot to external systems and actions. |
| 09 | `09-PresentersScene.tsx` | Presenters | 513 | Covers presenters as the agents that turn work into human-readable artifacts. |
| 10 | `10-ThePipelineScene.tsx` | The Pipeline | 554 | Runs a full pipeline example so the categories feel like a system instead of a list. |
| 11 | `11-WhereAgentsLiveScene.tsx` | Where Agents Live | 679 | Explains where universal and repo-specific agents live and why placement matters. |
| 12 | `12-ConductorThinkingScene.tsx` | Conductor Thinking | 707 | Ends with the real mindset shift: stop acting like a layer specialist and start conducting the whole system. |

**Total frames (with transitions):** ~7,071 frames (~3.9 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** This lesson emphasizes specialization over agent sprawl: every category exists to keep scope narrow, output reliable, and orchestration composable.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-4-agent-ecosystem/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-WhySpecialistsScene.tsx    ← To be authored
        ├── 02-TheOrchestratorScene.tsx    ← To be authored
        ├── 03-PlannersScene.tsx    ← To be authored
        ├── 04-LearnersAndRAGScene.tsx    ← To be authored
        ├── 05-DoersScene.tsx    ← To be authored
        ├── 06-FeedbackAgentsScene.tsx    ← To be authored
        ├── 07-GuardiansScene.tsx    ← To be authored
        ├── 08-ToolOperatorsScene.tsx    ← To be authored
        ├── 09-PresentersScene.tsx    ← To be authored
        ├── 10-ThePipelineScene.tsx    ← To be authored
        ├── 11-WhereAgentsLiveScene.tsx    ← To be authored
        └── 12-ConductorThinkingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 4

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=4 npx remotion studio
# Open http://localhost:3000 → select "AgentEcosystem"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/04-agent-ecosystem.md`, where learners classify agents by role and practice thinking in orchestrated pipelines instead of isolated prompts.
