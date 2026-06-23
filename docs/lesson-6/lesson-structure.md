# Lesson 6 — Building Real Agents: Quick Reference

**Status:** In development (scenes not yet authored)  
**Voice:** George (ElevenLabs `JBFqnCBsd6RMkjVDRZzb`)  
**Model:** `eleven_multilingual_v2`  
**Voice settings:** stability 0.5, similarity_boost 0.75, style 0.3  
**Frame rate:** 30fps  
**Transitions:** 20-frame crossfade between scenes  
**Padding:** 45 frames (1.5s) after each scene's audio ends  
**Audio:** Not yet generated, disabled (`AUDIO_ENABLED = false`)  
**Composition ID:** `BuildingAgents`  
**Source:** `remotion/src/lessons/lesson-6-building-agents/`  
**Audio files:** Pending — `remotion/public/voiceover/lesson-6/scene-01.mp3` through `scene-10.mp3`

---

## What This Lesson Is

A 10-scene build tutorial on how to author high-quality agents that route correctly, enforce hard rules, and produce predictable output. It moves from file anatomy and description design into two concrete examples — a feedback agent and a guardian agent — then closes with testing and contribution guidance.
Target audience: engineers who are ready to stop just using agents and start building them well.

---

## Scene Inventory

| # | Scene File | Label | Frames | Content Summary |
|---|-----------|-------|--------|----------------|
| 01 | `01-TheAgentFileScene.tsx` | The Agent File | 638 | Breaks down the markdown-plus-frontmatter anatomy of a real agent file. |
| 02 | `02-TheDescriptionFieldScene.tsx` | The Description Field | 984 | Makes the description field the star because routing quality lives or dies there. |
| 03 | `03-CategoryAndNamingScene.tsx` | Category and Naming | 638 | Explains universal vs repo-specific placement and the naming rules that keep scope obvious. |
| 04 | `04-HardRulesScene.tsx` | Hard Rules | 762 | Shows how hard rules turn a vibes-based agent into a dependable one. |
| 05 | `05-OutputFormatScene.tsx` | Output Format | 610 | Demands explicit output formats so agents stop improvising the structure. |
| 06 | `06-BuildAFeedbackAgentScene.tsx` | Build a Feedback Agent | 748 | Builds `code-reviewer` as a concrete feedback-agent example. |
| 07 | `07-BuildAGuardianAgentScene.tsx` | Build a Guardian Agent | 748 | Builds `env-config-reviewer` as a concrete guardian-agent example. |
| 08 | `08-TestingYourAgentScene.tsx` | Testing Your Agent | 735 | Covers realistic agent testing and tightening the trigger language after each run. |
| 09 | `09-ValidatorsBeforeDoersScene.tsx` | Validators Before Doers | 638 | Reinforces the rule that validators should exist before doers ever start shipping code. |
| 10 | `10-ContributingScene.tsx` | Contributing Back | 776 | Closes with the reuse pattern: strong universal agents belong back in dotfiles. |

**Total frames (with transitions):** ~7,097 frames (~3.9 minutes at 30fps)

---

## Key Production Decisions

- **Lesson focus:** The lesson anchors on reliability: descriptions, naming, hard rules, and explicit output formats matter more than clever prose because the router and the downstream user both need consistency.
- **Frame formula:** 130 WPM × 13.85 frames/word at 30fps for the `estimatedFrames` values in `voiceover-config.ts`.
- **Padding:** Keep the standard 45-frame buffer after each scene's audio ends so later audio generation has breathing room between topics.
- **Audio status:** `AUDIO_ENABLED = false` — pending scene review, scene authoring, and ElevenLabs generation.
- **Transitions:** Total frame counts already subtract the 20-frame crossfade overlap between scenes.

---

## File Layout

```
remotion/
└── src/lessons/lesson-6-building-agents/
    ├── voiceover-config.ts       ← Existing scripts + frame estimates
    └── scenes/
        ├── 01-TheAgentFileScene.tsx    ← To be authored
        ├── 02-TheDescriptionFieldScene.tsx    ← To be authored
        ├── 03-CategoryAndNamingScene.tsx    ← To be authored
        ├── 04-HardRulesScene.tsx    ← To be authored
        ├── 05-OutputFormatScene.tsx    ← To be authored
        ├── 06-BuildAFeedbackAgentScene.tsx    ← To be authored
        ├── 07-BuildAGuardianAgentScene.tsx    ← To be authored
        ├── 08-TestingYourAgentScene.tsx    ← To be authored
        ├── 09-ValidatorsBeforeDoersScene.tsx    ← To be authored
        └── 10-ContributingScene.tsx    ← To be authored
```

---

## Re-rendering Lesson 6

From `remotion/`:

```bash
npm i                                           # if node_modules not present
LESSON=6 npx remotion studio
# Open http://localhost:3000 → select "BuildingAgents"
```

Audio generation is still pending review for this lesson. Leave `AUDIO_ENABLED = false` until the scenes are authored, the scripts are approved, and the ElevenLabs files are generated.

---

## Relationship to the Exercises

This lesson pairs with `exercises/06-building-agents.md`, where learners write and refine actual agent definitions instead of just admiring YAML from a safe distance.
