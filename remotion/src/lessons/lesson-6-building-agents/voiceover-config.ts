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
      "Welcome to Lesson Six — Building Agents. You've used agents. Now you're going to build them. This lesson covers the agent file format, description writing, tool declarations, and the difference between agents that actually fire and agents that sit unused.",
  },
  {
    id: "scene-01",
    label: "The Agent File",
    estimatedFrames: 638,
    script:
      "An agent is a markdown file with YAML frontmatter. Name, description, model, and tools — four frontmatter fields, plus the body, control everything. The body is the instruction set. The frontmatter is the metadata the CLI uses to route, invoke, and constrain — including which model the agent runs on, so you can match a cheaper model to a lighter agent. No compiled code, no deployment, no infrastructure. A file.",
  },
  {
    id: "scene-02",
    label: "The Description Field",
    estimatedFrames: 984,
    script:
      "The description field is the most important field in the frontmatter. It's what Atlas reads to decide whether to route to this agent. Write it as trigger phrases — what someone would actually say when they need this agent. Don't list capabilities. Write intent. \"Use this agent when you're about to open a PR and want all quality gates run\" beats \"reviews code, checks security, audits dependencies, and writes PR descriptions.\"",
  },
  {
    id: "scene-03",
    label: "Category and Naming",
    estimatedFrames: 638,
    script:
      "Universal agents — useful in any project — live in the dot-copilot agents folder in your home directory, synced through your dotfiles. Repo-specific agents live in a dot-copilot agents folder at the repository root. Universal agents use verb-noun names, like security-auditor or pr-description-writer. Repo-specific agents are prefixed with the project name, like myapp-api-scaffolder. The naming tells you the scope at a glance.",
  },
  {
    id: "scene-04",
    label: "Hard Rules",
    estimatedFrames: 762,
    script:
      "Every reliable agent has hard rules. These are non-negotiable behaviors the agent enforces regardless of what the user asks. \"Never modify files outside the repo root.\" \"Always ask before making git commits.\" \"Never generate code that disables authentication.\" Hard rules separate a reliable agent from an it-depends agent. Write them into every agent you build.",
  },
  {
    id: "scene-05",
    label: "Output Format",
    estimatedFrames: 610,
    script:
      "Specify output format explicitly. If the agent produces a report, say what the report looks like. If it creates files, say where they go. If it asks clarifying questions, say when. Agents that leave output format ambiguous produce inconsistent results. Consistency is the point.",
  },
  {
    id: "scene-06",
    label: "Build a Feedback Agent",
    estimatedFrames: 748,
    script:
      "Let's build code-reviewer. Description: \"Use this agent when you want a thorough code review before committing or opening a PR.\" Tools: grep, glob, view, bash for git diff. Hard rules: only genuine issues — no style nitpicks, no empty praise, no hedging. Output: severity-labeled findings with file and line references. That's a feedback agent.",
  },
  {
    id: "scene-07",
    label: "Build a Guardian Agent",
    estimatedFrames: 748,
    script:
      "Now env-config-reviewer. Description: \"Use this agent to verify that no secrets, credentials, or environment-specific values have been committed or are at risk of being committed.\" Tools: grep, glob, view. Hard rules: never modify files — report only. Check your git-ignore file coverage. Flag hardcoded credential patterns. Output: clear, at-risk, or critical per file. That's a guardian.",
  },
  {
    id: "scene-08",
    label: "Testing Your Agent",
    estimatedFrames: 735,
    script:
      "Build the agent. Invoke it on a real problem. Does it do what the description says? Does it follow the hard rules? Does the output match what you specified? If not, iterate on the instruction body — not the frontmatter. The frontmatter controls routing. The body controls behavior. Fix behavior in the body.",
  },
  {
    id: "scene-09",
    label: "Validators Before Doers",
    estimatedFrames: 638,
    script:
      "Build feedback and guardian agents before you build any scaffolders or code generators. This is not optional. A scaffolding agent that generates code with no reviewer downstream ships whatever it produces — unchecked. The reviewers need to exist before the builders. Validators before doers. Every time.",
  },
  {
    id: "scene-10",
    label: "Contributing Back",
    estimatedFrames: 776,
    script:
      "When you build a universal agent that works well, it belongs in your dotfiles — available in every project. Document the trigger phrases. Document the hard rules. Document what it doesn't do. A well-documented agent in dotfiles is infrastructure. Exercise 6 walks you through building at least two agents from scratch. Start with a feedback agent.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
