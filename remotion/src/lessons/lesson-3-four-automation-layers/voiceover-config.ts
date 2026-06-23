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
    id: "scene-00",
    label: "Title",
    estimatedFrames: 750,
    script:
      "Welcome to Lesson Three — Four Automation Layers. Not everything should be automated. The question is knowing which tasks belong at which level: completions, agents, fleet, and autopilot. This lesson draws those lines clearly.",
  },
  {
    id: "scene-01",
    label: "The Question",
    estimatedFrames: 679,
    script:
      "Every developer asks when they first set up agents: how do I make them run at git events? The answer: you don't. Not agents. Understanding why — and what runs instead — is the most important mental model in this curriculum. Four layers. Each fires differently. Let's map them.",
  },
  {
    id: "scene-02",
    label: "Layer 1: Instructions",
    estimatedFrames: 638,
    script:
      "Instruction files live in .github/instructions/. They're always active — loaded into context on every conversation. They don't trigger on events. They don't run. They're background context that shapes how the AI responds to everything else. Think of them as standing orders. Always on, never called directly.",
  },
  {
    id: "scene-03",
    label: "Layer 2: Skills",
    estimatedFrames: 762,
    script:
      "A skill has a skill dot md file and optionally a script. Skills are auto-invoked by description match — when your prompt matches a skill's description, the CLI routes to it. Skills can run scripts, which means they have shell access. They're stateless, single-purpose, and semi-automatic. They bridge the gap between a passive instruction and a full agent.",
  },
  {
    id: "scene-04",
    label: "Layer 3: Agents",
    estimatedFrames: 721,
    script:
      "Agents are interactive specialists. They have reasoning, judgment, personality, and hard rules. You invoke them by describing what you want — Atlas routes to the right specialist. Agents are not daemons. They don't run in the background. They run when you engage them. This is intentional, and we'll come back to why.",
  },
  {
    id: "scene-05",
    label: "Layer 4: Hooks and CI",
    estimatedFrames: 707,
    script:
      "Git hooks and continuous integration are shell scripts. They fire on mechanical events: pre-commit, commit-msg, push, PR open. They have no judgment. They run the same check every time. Husky manages the hooks locally. GitHub Actions handles remote enforcement. This is the layer that actually fires at git events — not agents.",
  },
  {
    id: "scene-06",
    label: "The Key Insight",
    estimatedFrames: 845,
    script:
      "Agents are interactive specialists, not background daemons — and that's a feature, not a bug. It means you're always in the loop. The agent brings judgment. You bring intent. The hook enforces without judgment. The agent evaluates with it. Asking how to make agents run at git commits is the wrong question. Asking which layer handles this is the right one.",
  },
  {
    id: "scene-07",
    label: "Where Each Fits",
    estimatedFrames: 638,
    script:
      "Map it out. Always-on context: Layer 1. Auto-invoked single-purpose task: Layer 2. Multi-step reasoning with specialists: Layer 3. Mechanical enforcement at git events: Layer 4. The four layers don't compete — they complement. When you're wiring up your workflow, you're deciding which layer owns each responsibility.",
  },
  {
    id: "scene-08",
    label: "Setting Up Layer 4",
    estimatedFrames: 665,
    script:
      "Install Husky: npm install --save-dev husky and npx husky init. Add a pre-commit hook that runs prettier and eslint on staged files via lint-staged. Add a commit-msg hook that validates conventional commit format. These hooks fire on every commit — no exceptions, no judgment calls. They just enforce.",
  },
  {
    id: "scene-09",
    label: "CI Integration",
    estimatedFrames: 735,
    script:
      "The pre-commit hook covers local enforcement. GitHub Actions covers the remote layer. A simple CI workflow on push to any branch: run lint, run tests. If they fail, the PR can't merge. This is the second half of Layer 4 — distributed enforcement that catches what local hooks miss or what gets bypassed.",
  },
  {
    id: "scene-10",
    label: "Closing",
    estimatedFrames: 845,
    script:
      "Four layers. Instructions, Skills, Agents, Hooks. Each fires differently. Each serves a different purpose. The mental model is the unlock. Once you see the four layers, you stop trying to make agents into daemons and start using each layer for what it's actually good at. Exercise 3 walks you through building Layer 4. Lesson 4 goes deep on the agent ecosystem.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
