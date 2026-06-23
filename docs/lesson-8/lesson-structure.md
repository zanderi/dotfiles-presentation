# Lesson 8 — Skills & MCP: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** George (ElevenLabs `JBFqnCBsd6RMkjVDRZzb`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `SkillsAndMcp`  
**Source:** `remotion/src/lessons/lesson-8-skills-and-mcp/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-8/scene-01.mp3` through `scene-11.mp3`

---

## What This Lesson Is

An 11-scene deep dive into the last two major ecosystem layers: skills and MCP. It explains how skills are triggered, why scripts make them powerful and risky, what MCP actually does, how built-in GitHub MCP fits into daily work, and how to choose between agents, skills, and MCP without turning your setup into a security incident with better branding.
Target audience: engineers who already understand agents and workflow structure and now need to extend the ecosystem safely.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-RecapScene.tsx` | Recap | 790 | Reorients the learner by zooming in on the last two major automation layers. |
| 02 | `02-SkillsStructureScene.tsx` | Skills Structure | 915 | Defines the file structure of a skill and what lives inside the directory. |
| 03 | `03-SkillsDescriptionScene.tsx` | Skills Description | 776 | Explains why the SKILL.md description is the trigger and must be precise. |
| 04 | `04-SkillsScriptsScene.tsx` | Skills Scripts | 845 | Shows how scripts make skills useful, automatable, and potentially dangerous. |
| 05 | `05-SkillSecurityScene.tsx` | Skill Security | 998 | Applies a line-by-line security review mindset to third-party skills. |
| 06 | `06-BuildASkillScene.tsx` | Build a Skill | 776 | Builds a concrete commit-message validation skill from scratch. |
| 07 | `07-MCPWhatItIsScene.tsx` | MCP What It Is | 873 | Defines MCP as the protocol layer that connects external systems into context. |
| 08 | `08-GitHubMCPBuiltInScene.tsx` | GitHub MCP Built-In | 693 | Highlights GitHub MCP as the built-in server you should exploit before adding more. |
| 09 | `09-AddingMCPServersScene.tsx` | Adding MCP Servers | 748 | Walks through adding extra MCP servers only when the workflow truly needs them. |
| 10 | `10-MCPSecurityScene.tsx` | MCP Security | 873 | Treats MCP security like infrastructure security because the access model is real. |
| 11 | `11-DecisionMatrixScene.tsx` | Decision Matrix | 859 | Closes with a decision matrix for choosing agents, skills, or MCP on purpose. |

**Total frames (with transitions):** ~8,946 frames (~5.0 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** Security is treated as a production concern, not a footnote: both skills and MCP can execute or expose a lot, so this lesson deliberately pairs capability with review discipline.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-8-skills-and-mcp/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-RecapScene.tsx    ← To be authored
        ├── 02-SkillsStructureScene.tsx    ← To be authored
        ├── 03-SkillsDescriptionScene.tsx    ← To be authored
        ├── 04-SkillsScriptsScene.tsx    ← To be authored
        ├── 05-SkillSecurityScene.tsx    ← To be authored
        ├── 06-BuildASkillScene.tsx    ← To be authored
        ├── 07-MCPWhatItIsScene.tsx    ← To be authored
        ├── 08-GitHubMCPBuiltInScene.tsx    ← To be authored
        ├── 09-AddingMCPServersScene.tsx    ← To be authored
        ├── 10-MCPSecurityScene.tsx    ← To be authored
        └── 11-DecisionMatrixScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 8

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=8 npx remotion studio
# Open http://localhost:3000 → select "SkillsAndMcp"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/08-skills-and-mcp.md`, where learners build a skill, evaluate MCP usage, and practice the decision matrix in realistic scenarios.
