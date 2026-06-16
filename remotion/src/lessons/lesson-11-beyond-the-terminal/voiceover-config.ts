// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// To generate audio when scripts are approved:
//   1. Get explicit author permission first
//   2. Run: node --strip-types generate-voiceover.ts
//   3. Set AUDIO_ENABLED = true
//   4. Restart Remotion Studio

export const AUDIO_ENABLED = false; // Scripts only — awaiting approval

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-00",
    label: "Title",
    estimatedFrames: 420,
    script:
      "Welcome to Lesson Eleven — Beyond the Terminal. Remote sessions, persistent memory, model cost control, and the practices that separate a well-run AI setup from an expensive one.",
  },
  {
    id: "scene-01",
    label: "Two Modes",
    estimatedFrames: 1260,
    script:
      "Everything you've built in this curriculum runs interactively — you're in a session, you give direction, agents respond. That's the right model for most work. But there's a second mode: async. GitHub Copilot's cloud agent takes a task description or a GitHub issue, spins up on a remote runner, does the work, and opens a pull request — without you present. You don't watch it run. You come back to a PR. Two modes. Very different use cases. This lesson covers both, and the tools that make each one more effective.",
  },
  {
    id: "scene-02",
    label: "Keep Alive",
    estimatedFrames: 900,
    script:
      "Slash keep-alive prevents your local session from timing out during long-running autopilot tasks. When you're running a large fleet build or a complex autopilot sequence — one that might take twenty or thirty minutes — enable keep-alive at the start. Without it, an idle timeout can interrupt execution mid-run. It's a simple switch with a specific use case: long-running local work where interruption would be costly.",
  },
  {
    id: "scene-03",
    label: "Cloud Agent",
    estimatedFrames: 1230,
    script:
      "The cloud agent is fundamentally different from the CLI. You describe a task — or point it to an existing GitHub issue. It creates a branch, works on that branch in a GitHub-hosted environment, and opens a pull request when done. You review the PR. You're not in the session while it runs. This changes how you think about batching work. Small, well-scoped tasks with a clear definition of done are ideal. Ambiguous, open-ended tasks are not — the cloud agent cannot ask clarifying questions while it runs.",
  },
  {
    id: "scene-04",
    label: "Setup Steps",
    estimatedFrames: 1080,
    script:
      "When the cloud agent starts, it boots a fresh environment. Without setup steps, it has nothing pre-installed — no dependencies, no toolchain. copilot-setup-steps dot yml lives in dot github and tells the cloud agent how to bootstrap. Install dependencies. Set environment variables. Run initialization scripts. Think of it as the cloud agent's onboarding checklist. Get this file right once, and every subsequent cloud agent run starts from a fully prepared environment instead of a blank slate.",
  },
  {
    id: "scene-05",
    label: "Memory",
    estimatedFrames: 1200,
    script:
      "Every session starts fresh. If you've established important facts about your project — model choices, architecture decisions, constraints discovered mid-build — agents have to re-discover that context from instruction files every single time. Slash memory changes that. It stores persistent facts that survive session boundaries. The distinction to understand: instruction files are for conventions that apply broadly and don't change often. Memory is for specific, evolving facts — the current state of a feature, a decision made last week, a constraint you just discovered. Together, they replace expensive re-discovery with cheap recall.",
  },
  {
    id: "scene-06",
    label: "Spaces",
    estimatedFrames: 1050,
    script:
      "Copilot Spaces lets you package context — instruction files, relevant code, reference documents — into a shareable unit your entire team can attach to their sessions. This is the team-level equivalent of your dotfiles. Instead of every developer building their own context from scratch, a Space ships the shared foundation: architecture decisions, coding standards, agent catalog, key patterns. Create it once. The whole team starts from the same context. On-boarding time drops. Context drift between developers drops.",
  },
  {
    id: "scene-07",
    label: "Model Pinning",
    estimatedFrames: 1320,
    script:
      "Every agent file can specify which model it uses via the model field in frontmatter. This is the most underused cost control in the entire ecosystem. A context reader that just opens files and surfaces patterns doesn't need Opus. It needs Haiku. Set model to claude-haiku-4.5 and that agent always runs at a quarter of the cost — automatically, every time it's invoked. The pattern: readers and explorers use lightweight models. Standard review and writing agents use standard models. Only architectural reasoning and complex planning justifies heavy model spend. Pin the model. Don't leave it to chance.",
  },
  {
    id: "scene-08",
    label: "Cost Hygiene",
    estimatedFrames: 1110,
    script:
      "A few practices that compound into meaningful cost differences over time. Use slash clear when a session has accumulated context you're no longer using — bloated context burns tokens on every request. Use slash new for a clean session rather than dragging stale context forward. In fleet mode, every parallel subagent multiplies cost — scope your agents tightly so they run short. And measure before optimizing. Slash env shows your current model and its multiplier. Know what you're running before you run it for two hours.",
  },
  {
    id: "scene-09",
    label: "Portability",
    estimatedFrames: 1020,
    script:
      "One more thing worth saying explicitly. These practices aren't locked to Copilot. AGENTS dot md works in Claude, Cursor, and any assistant that follows the convention. Model discipline — lightweight for reading, heavy for reasoning only — is the same calculation in every tool. Cost hygiene scales to any API-backed AI session. The specific commands change. The mental model doesn't. Build these habits in Copilot. They'll transfer to every tool you use next.",
  },
  {
    id: "scene-10",
    label: "Closing",
    estimatedFrames: 810,
    script:
      "You've built an ecosystem that reads your context, follows your conventions, runs specialists on demand, enforces mechanical quality at every commit, and now — works asynchronously while you're away. The infrastructure is in place. The cost discipline is learned. The practices travel across tools. What you build next is up to you. You've earned the setup.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
