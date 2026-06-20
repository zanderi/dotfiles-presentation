# Lesson 7 — Workflow Agents & GitFlow: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** George (ElevenLabs `JBFqnCBsd6RMkjVDRZzb`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `WorkflowGitflow`  
**Source:** `remotion/src/lessons/lesson-7-workflow-gitflow/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-7/scene-01.mp3` through `scene-09.mp3`

---

## What This Lesson Is

A 9-scene workflow lesson that maps GitFlow events to the correct automation mechanism: hooks, lint-staged, CI/CD, workflow agents, plan mode, and fleet. The goal is to show exactly what happens before commit, before PR, and during feature execution so the automation stack feels engineered instead of improvised.
Target audience: engineers who understand the pieces but want a clean, event-driven model for how real work flows through the system.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-GitFlowMapScene.tsx` | The Complete GitFlow Map | 956 | Maps the full GitFlow lifecycle to the right automation tool at each event. |
| 02 | `02-PreCommitHookScene.tsx` | Pre-Commit Hook | 901 | Covers pre-commit hooks as the first local enforcement layer. |
| 03 | `03-CommitMsgHookScene.tsx` | Commit-Msg Hook | 804 | Shows commit-msg hooks enforcing conventional commits at the moment they matter. |
| 04 | `04-LintStagedScene.tsx` | lint-staged | 804 | Explains lint-staged as the latency-saving trick that keeps hooks usable. |
| 05 | `05-CICDEnforcementScene.tsx` | CI/CD Enforcement | 790 | Moves enforcement into GitHub Actions so local bypasses do not reach main. |
| 06 | `06-TheWorkflowAgentScene.tsx` | The Workflow Agent | 818 | Introduces workflow agents as fixed specialist pipelines for PR gates and milestones. |
| 07 | `07-PlanModeForFeaturesScene.tsx` | Plan Mode for Features | 915 | Uses plan mode for complex feature work that needs sequencing before execution. |
| 08 | `08-FleetForParallelWorkScene.tsx` | Fleet for Parallel Work | 1,012 | Uses fleet for independent parallel work where the scopes do not collide. |
| 09 | `09-ClosingScene.tsx` | Closing | 804 | Closes by separating mechanical enforcement, orchestration, and parallel execution into clean roles. |

**Total frames (with transitions):** ~7,644 frames (~4.2 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** This lesson keeps GitFlow front and center because workflow agents only make sense when they are anchored to specific lifecycle events instead of vague “use this sometime” advice.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-7-workflow-gitflow/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-GitFlowMapScene.tsx    ← To be authored
        ├── 02-PreCommitHookScene.tsx    ← To be authored
        ├── 03-CommitMsgHookScene.tsx    ← To be authored
        ├── 04-LintStagedScene.tsx    ← To be authored
        ├── 05-CICDEnforcementScene.tsx    ← To be authored
        ├── 06-TheWorkflowAgentScene.tsx    ← To be authored
        ├── 07-PlanModeForFeaturesScene.tsx    ← To be authored
        ├── 08-FleetForParallelWorkScene.tsx    ← To be authored
        └── 09-ClosingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 7

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=7 npx remotion studio
# Open http://localhost:3000 → select "WorkflowGitflow"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/07-workflow-gitflow.md`, where learners wire GitFlow events to hooks, workflow agents, and parallel execution choices.
