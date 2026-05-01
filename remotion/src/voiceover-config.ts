// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// After running `node --strip-types generate-voiceover.ts`:
//   1. Set AUDIO_ENABLED = true below
//   2. Restart Remotion Studio — audio plays in sync automatically

export const AUDIO_ENABLED = true;

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-01",
    label: "Title",
    estimatedFrames: 750,
    script:
      "Welcome to AI Dev Setup — your complete guide to building a powerful, personalized development environment with GitHub Copilot. Over the next few minutes, we'll walk through thirteen steps that transform Copilot from a generic assistant into a knowledgeable team member that understands your stack, your conventions, and the way you like to work.",
  },
  {
    id: "scene-02",
    label: "Why It Matters",
    estimatedFrames: 990,
    script:
      "Out of the box, Copilot is a general-purpose assistant. It doesn't know your tech stack, your naming conventions, or your architecture patterns. An uncustomized Copilot gives you generic suggestions — wrong patterns, wrong frameworks, wrong style. But when you take the time to customize it properly, everything changes. It follows your conventions, uses your patterns, explains its reasoning as it works. The difference between these two experiences is what this guide is about.",
  },
  {
    id: "scene-03",
    label: "Install",
    estimatedFrames: 720,
    script:
      "Step one. Install and authenticate. On Windows, run winget install GitHub Copilot. Then type copilot to launch the CLI, and slash login to connect your GitHub account. This is a one-time setup per machine. Once authenticated, Copilot is available in any terminal session, across every project you work on.",
  },
  {
    id: "scene-04",
    label: "Global Instructions",
    estimatedFrames: 1110,
    script:
      "Step two. Create your global instructions file. This lives at your home folder, dot copilot, copilot-instructions dot md — and it's the foundation of your entire AI setup. This file tells Copilot who you are. Your preferred languages and frameworks. Your code style — tabs, async/await always, naming conventions. How you want it to communicate — explain your reasoning, teach as you go. Your agent's name and personality. And your security policies. Every project you work in inherits these preferences automatically.",
  },
  {
    id: "scene-05",
    label: "Dotfiles",
    estimatedFrames: 840,
    script:
      "Step three. Dotfiles. Without a dotfiles repo, every new machine means manually reconfiguring everything from scratch. Settings drift. A fresh install starts you over. With a dotfiles repo, you commit your configuration to git, and on any new machine you run one script. Symlinks point your dot-copilot folder to the repo. Identical configuration on every machine, every time.",
  },
  {
    id: "scene-06",
    label: "Tool Configs",
    estimatedFrames: 960,
    script:
      "Step four. Tool configuration files. These are not optional. Every project should have an editorconfig for indentation and line endings, a prettierrc for formatting rules, an eslint config for code quality, and a tsconfig for TypeScript strictness. Here's the key insight: tool configs come first — before any AI instructions. They define the ground truth for how code should look. Your instruction files build on top of that foundation.",
  },
  {
    id: "scene-07",
    label: "Repo Instructions",
    estimatedFrames: 1170,
    script:
      "Steps five and six. Repo-level instructions. These live in your repository and travel with the whole team. AGENTS dot md at the root holds the critical rules any AI tool must follow — it's model-agnostic, so it works with Copilot, Claude, and Cursor alike. The dot-github copilot-instructions file is your full project context — tech stack, folder structure, full conventions. And task-specific instruction files in dot-github-slash-instructions let you add deep dives for specific domains like theming, SEO, or API design.",
  },
  {
    id: "scene-08",
    label: "Agents",
    estimatedFrames: 1110,
    script:
      "Step seven. Custom agents. Think of these as specialists. A design-system-validator that audits UI components for accessibility. An API slice scaffolder that generates complete endpoint files. A BDD scenario runner that writes and executes behavioral tests. Create them with slash agent in the CLI, or by dropping a dot-agent dot md file into your agents folder. Each agent gets its own tools, constraints, and output format — specialists you can call on demand instead of one generalist doing everything.",
  },
  {
    id: "scene-09",
    label: "MCP",
    estimatedFrames: 1050,
    script:
      "Step eight. MCP servers. The GitHub MCP server is built in — no configuration needed. You can already query issues, pull requests, and search code through natural language. Just ask Copilot to show you your five most recently updated open issues and it just works. To add more MCP servers, run slash MCP add. Configure them per-user in your home directory or per-project in the repository. Slash MCP show lists everything connected and its status.",
  },
  {
    id: "scene-10",
    label: "Models",
    estimatedFrames: 1050,
    script:
      "Step nine. Model selection. Not all tasks need the same level of horsepower, and models carry premium multipliers that affect your budget. Lightweight models like Haiku and GPT-4.1 cost about a quarter of the standard rate — great for simple, repetitive tasks. Standard models like Sonnet and GPT-5.2 are the sweet spot for most daily work. Heavy models like Opus are worth the investment for complex architecture or deep analysis. Switch anytime with slash model.",
  },
  {
    id: "scene-11",
    label: "Plan Mode",
    estimatedFrames: 1800,
    script:
      "Step ten. Plan mode. And this is the single most important mode in your workflow — the one that prevents you from shipping a mess. Press Shift-Tab once and you'll see Plan in your prompt. Plan mode makes Copilot map out exactly what it's going to do before it does any of it. You describe your objective. Copilot generates a complete step-by-step plan showing every file it will create, every file it will modify, and what each change will be. You review that plan carefully. Push back on anything wrong. Redirect. Refine. Only when the plan looks right do you approve execution. Always use plan mode before running Autopilot or Fleet. It is your review gate — and the difference between shipping quality code and spending hours reverting a disaster.",
  },
  {
    id: "scene-12",
    label: "Autopilot",
    estimatedFrames: 1080,
    script:
      "Step eleven. Autopilot mode. This is what executes after a plan is approved. Press Shift-Tab twice to enter autopilot directly. Before every run, check the safety list: commit your work first so you always have a clean rollback point. Set a cap on autonomous steps with max-autopilot-continues. When it finishes, run slash diff to review every change before committing. And never commit autopilot output without reading it first. Autopilot is powerful — treat it with appropriate respect.",
  },
  {
    id: "scene-13",
    label: "Fleet",
    estimatedFrames: 1080,
    script:
      "Step twelve. Fleet mode. Fleet lets you run multiple subagents in parallel, each working their own assigned scope simultaneously. Break a large task into parallel tracks — backend API, frontend UI, tests — and fleet spins up independent agents for each. Monitor progress with slash tasks. The key rule: every agent stays strictly within its assigned directories. No cross-scope writes. Combine fleet with plan mode for maximum control — plan the work first, then hand it to the fleet.",
  },
  {
    id: "scene-14",
    label: "Verify",
    estimatedFrames: 1020,
    script:
      "Step thirteen. Verify your environment. Slash instructions shows which instruction files are loaded. Slash env shows your full environment details. Slash skills list confirms your active skills. Slash agent lists your available custom agents. Slash model shows your current model and its cost multiplier. And slash MCP show verifies your connected servers. If everything appears — you're done. You've built a complete, professional AI development environment that goes everywhere you do. Now go build something remarkable.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
