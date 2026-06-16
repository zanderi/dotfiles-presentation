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
      "Welcome to Lesson Five — Content Types. Agents, skills, workflows, prompts, instructions — these aren't the same thing and they're not interchangeable. This lesson explains what each content type is for, when to build which one, and why getting this right changes everything.",
  },
  {
    id: "scene-01",
    label: "The Five Types",
    estimatedFrames: 762,
    script:
      "Five content types in the Copilot ecosystem. Agent: judgment, multi-step reasoning, personality, hard rules. Workflow Agent: chains specialists in sequence, no judgment — just orchestration. Instruction file: always-on background context, no trigger. Skill: stateless, single-purpose, auto-invoked by description. Prompt template: reusable starting point. Same problem, five different tools. The decision is which type fits the job.",
  },
  {
    id: "scene-02",
    label: "The Decision Tree",
    estimatedFrames: 804,
    script:
      "Four questions in order. First: does it need judgment and multi-step reasoning? If yes — Agent. Does it need to chain multiple specialists in sequence? If yes — Workflow Agent. Is it always-on background context with no trigger? If yes — Instruction file. Is it stateless, single-purpose, auto-invoked? If yes — Skill. Otherwise — Prompt template. Run this tree before you build anything.",
  },
  {
    id: "scene-03",
    label: "Agent",
    estimatedFrames: 721,
    script:
      "An agent has reasoning, judgment, personality, and hard rules. It evaluates context. It makes decisions. It can push back. The description field controls when it's invoked — write trigger phrases, not capability lists. Hard rules are non-negotiable behaviors the agent enforces regardless of what the user asks. Agents are for complex, judgment-heavy tasks.",
  },
  {
    id: "scene-04",
    label: "Workflow Agent",
    estimatedFrames: 915,
    script:
      "A workflow agent chains specialists. It has no judgment of its own — it runs Phase 1, then Phase 2, then Phase 3. Each phase calls a specialist. The workflow agent is the conductor of a fixed pipeline. Use it when the sequence is known and repeatable. The feature-pr-gate agent is the canonical example: code review, security check, dependency audit, PR description — in that order, every time.",
  },
  {
    id: "scene-05",
    label: "Instruction File",
    estimatedFrames: 748,
    script:
      "Instruction files live in .github/instructions/. They're always active. They shape every conversation without being called. They're for things that are always true about your project: the tech stack, naming conventions, architectural patterns, security requirements. If it's a standing rule, it belongs in an instruction file — not in an agent, not in a prompt.",
  },
  {
    id: "scene-06",
    label: "Skill",
    estimatedFrames: 748,
    script:
      "A skill matches a description and executes. When your prompt matches, it fires. It can run scripts. It's stateless — no memory, no reasoning, no judgment. A validate-commit-message skill fires when you say \"validate my commit\" and runs a regex check. That's it. Simple, automatic, reliable. Use skills for single-purpose tasks that benefit from auto-invocation.",
  },
  {
    id: "scene-07",
    label: "Prompt Template",
    estimatedFrames: 679,
    script:
      "A prompt template is a reusable starting point. It's for situations where you need consistent structure but the content varies — ADRs, incident reports, feature specs. You invoke it intentionally. It gives you the scaffold. You fill in the specifics. Not automated, not an agent — just a reliable starting pattern.",
  },
  {
    id: "scene-08",
    label: "The Workflow Agent Live",
    estimatedFrames: 942,
    script:
      "Here's feature-pr-gate in action. You invoke it when you're ready to open a PR. Phase 1: code-reviewer scans the diff. Phase 2: security-auditor and env-config-reviewer check for vulnerabilities and exposed secrets. Phase 3: dependency-auditor runs if package files changed. Phase 4: pr-description-writer generates the PR body, implementation-summary closes the session. One invocation. Four phases. Every quality gate covered. This is what \"agents at GitFlow stages\" actually looks like.",
  },
  {
    id: "scene-09",
    label: "Closing",
    estimatedFrames: 624,
    script:
      "Five types. Agent for judgment. Workflow agent for pipelines. Instruction file for standing rules. Skill for auto-invocation. Prompt template for reusable structure. Run the decision tree before you build. Build the feature-pr-gate before your next PR. Exercise 5 walks you through it step by step.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
