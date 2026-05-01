# Lesson 1 — AI Dev Setup: Quick Reference

**Status:** Complete and rendered  
**Voice:** Default ElevenLabs voice (Adam / professional male)  
**Frame rate:** 30fps  
**Transitions:** 20 frames between scenes  
**Audio:** Generated, enabled (`AUDIO_ENABLED = true`)  
**Source:** `remotion/src/lessons/lesson-1-ai-env-setup/`  
**Audio files:** `remotion/public/voiceover/lesson-1/scene-01.mp3` through `scene-14.mp3`

---

## What This Lesson Is

A 14-scene walkthrough of how to build a complete, professional AI-assisted development environment with GitHub Copilot CLI. Goes from zero to fully configured — global instructions, dotfiles sync, tool configs, repo instructions, custom agents, MCP servers, model selection, and the three primary execution modes.

Target audience: software engineers new to AI tooling, or engineers already using Copilot who want to use it more effectively.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-TitleScene.tsx` | Title | 750 | Intro — 13-step complete guide overview |
| 02 | `02-WhyScene.tsx` | Why It Matters | 990 | Generic vs. customized Copilot — the difference |
| 03 | `03-InstallScene.tsx` | Install | 720 | `winget install`, `/login`, one-time auth |
| 04 | `04-GlobalInstructionsScene.tsx` | Global Instructions | 1110 | `~/.copilot/copilot-instructions.md` — stack, style, persona, security |
| 05 | `05-DotfilesScene.tsx` | Dotfiles | 840 | Dotfiles repo + symlinks for cross-machine sync |
| 06 | `06-ToolConfigsScene.tsx` | Tool Configs | 960 | `.editorconfig`, `.prettierrc`, `eslint`, `tsconfig` — ground truth before AI |
| 07 | `07-RepoInstructionsScene.tsx` | Repo Instructions | 1170 | `AGENTS.md`, `.github/copilot-instructions.md`, task-specific instruction files |
| 08 | `08-AgentsScene.tsx` | Agents | 1110 | Custom agents — specialists vs. generalists, `.agent.md` files |
| 09 | `09-MCPScene.tsx` | MCP | 1050 | GitHub MCP built-in, `/mcp add`, per-user vs. per-project config |
| 10 | `10-ModelsScene.tsx` | Models | 1050 | Haiku/GPT-4.1 (budget) → Sonnet/GPT-5.2 (daily) → Opus (heavy), `/model` |
| 11 | `11-PlanModeScene.tsx` | Plan Mode | 1800 | Shift-Tab once — the most important mode; always plan before autopilot |
| 12 | `12-AutopilotScene.tsx` | Autopilot | 1080 | Shift-Tab twice — commit first, set step cap, review with `/diff` |
| 13 | `13-FleetScene.tsx` | Fleet | 1080 | Parallel subagents, scope isolation, combine with plan mode |
| 14 | `14-VerifyScene.tsx` | Verify | 1020 | `/instructions`, `/env`, `/skills list`, `/agent`, `/model`, `/mcp show` |

**Total frames (with transitions):** ~14,470 frames (~8.1 minutes at 30fps)

---

## Key Production Decisions

- **Voice:** Standard ElevenLabs voice, not character voice (lesson 2 used John Wayne)
- **Scope:** Deliberately kept to GitHub Copilot CLI only — VS Code extension not covered
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps
- **Transitions:** 20-frame overlap between scenes (already subtracted from total)

---

## File Layout

```
remotion/
├── src/lessons/lesson-1-ai-env-setup/
│   ├── Root.tsx                  ← Remotion composition root
│   ├── MainVideo.tsx             ← Scene sequencer with audio sync
│   ├── calculateMetadata.ts      ← Frame count calculation
│   ├── voiceover-config.ts       ← All 14 scripts + frame estimates
│   ├── index.css                 ← Lesson-specific styles
│   └── scenes/
│       ├── 01-TitleScene.tsx
│       ├── 02-WhyScene.tsx
│       ├── 03-InstallScene.tsx
│       ├── 04-GlobalInstructionsScene.tsx
│       ├── 05-DotfilesScene.tsx
│       ├── 06-ToolConfigsScene.tsx
│       ├── 07-RepoInstructionsScene.tsx
│       ├── 08-AgentsScene.tsx
│       ├── 09-MCPScene.tsx
│       ├── 10-ModelsScene.tsx
│       ├── 11-PlanModeScene.tsx
│       ├── 12-AutopilotScene.tsx
│       ├── 13-FleetScene.tsx
│       └── 14-VerifyScene.tsx
└── public/voiceover/lesson-1/
    ├── scene-01.mp3 through scene-14.mp3
```

---

## Re-rendering Lesson 1

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=1 npx remotion render --output-location="../out/lesson-1-ai-env-setup.mp4"
```

Or via studio for preview:

```bash
LESSON=1 npx remotion studio
```

---

## Relationship to the Exercises

The content of this lesson is the conceptual foundation for the exercises in `exercises/`:

| Lesson 1 Scene | Corresponding Exercise |
|---------------|----------------------|
| Install + Global Instructions + Dotfiles | `01-setup-exercise.md` |
| Tool Configs + Repo Instructions | `02-copilot-environment-walkthrough.md` |
| Agents | `03-agent-ecosystem-guide.md` + `05-building-agents-exercise.md` |
| Plan Mode + Autopilot | `04-project-setup-exercise.md` |

The exercises were designed to let engineers practice and internalize what lesson 1 teaches.
