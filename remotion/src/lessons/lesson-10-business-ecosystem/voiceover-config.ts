// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// After running `node --strip-types generate-voiceover.ts`:
//   1. Set AUDIO_ENABLED = true below
//   2. Restart Remotion Studio — audio plays in sync automatically

export const AUDIO_ENABLED = false;

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-01",
    label: "Same Structure, Different Domain",
    estimatedFrames: 693,
    script:
      "Everything you've learned about the development ecosystem applies directly to the business side. Atlas orchestrates developers. Themis orchestrates the business pipeline. Same categories — orchestrator, planners, doers, feedback agents, guardians, tool operators, presenters — applied to a different domain. The patterns transfer. The tooling transfers. Only the subject matter changes.",
  },
  {
    id: "scene-02",
    label: "Themis",
    estimatedFrames: 762,
    script:
      "Themis is the business orchestrator. Named after the Titan of divine law, order, and governance. Where Atlas coordinates software delivery, Themis coordinates the business pipeline: research, define, validate, communicate. When a task is business-domain — product documentation, stakeholder updates, requirements work, PO reporting — Themis owns it. Atlas handles the code. Themis handles everything else.",
  },
  {
    id: "scene-03",
    label: "Learner Layer",
    estimatedFrames: 679,
    script:
      "Business learner agents read before acting. po-docs-auditor surveys what documentation exists and what's missing from a product owner perspective. architecture-reader maps the codebase for stakeholders. These agents prevent the most common product failure: shipping something that doesn't match what was specified because no one read the specs carefully first.",
  },
  {
    id: "scene-04",
    label: "Doer Layer",
    estimatedFrames: 610,
    script:
      "Business doers produce artifacts. technical-writer creates user-facing documentation, onboarding guides, and stakeholder summaries. changelog-writer generates version entries. release-notes-writer translates commits into human-readable release summaries. docs-sync-writer keeps developer documentation in sync with the actual codebase. These agents do the writing work that developers defer indefinitely.",
  },
  {
    id: "scene-05",
    label: "Feedback",
    estimatedFrames: 624,
    script:
      "Business feedback agents review for quality and accuracy. po-docs-auditor in audit mode assesses whether documentation meets product owner standards. The feedback loop mirrors the dev side: doer produces, feedback agent evaluates, doer iterates. Different audience — stakeholders, product owners, and end users — same pattern.",
  },
  {
    id: "scene-06",
    label: "Guardians",
    estimatedFrames: 665,
    script:
      "The business guardians protect accuracy and compliance. Same principle as the dev side: guardians run after doers, catch what slips through, feed issues back. A published document with internal pricing data or unreleased feature details is as damaging as a committed secret. Same guardian pattern, different threat model.",
  },
  {
    id: "scene-07",
    label: "Tool Operators",
    estimatedFrames: 735,
    script:
      "Business tool operators push artifacts into systems. github-issue-creator translates findings into tracked issues. changelog-writer pushes version entries into CHANGELOG.md. pr-description-writer bridges the dev and business pipelines — a PR description is both a technical artifact and a stakeholder communication. Tool operators are why the business pipeline's output reaches the people who need it.",
  },
  {
    id: "scene-08",
    label: "The Bridge",
    estimatedFrames: 721,
    script:
      "Two pipelines — development and business — running in parallel but rarely in sync. The solution-bridge-writer connects them. It takes business requirements, product owner documentation, and stakeholder inputs and translates them into developer-ready specifications. Requirements that lived in someone's head or a Confluence page become structured specs that Atlas can execute against.",
  },
  {
    id: "scene-09",
    label: "Atlas and Themis",
    estimatedFrames: 748,
    script:
      "The full end-to-end. A product owner describes a feature. Themis is invoked. po-docs-auditor identifies gaps. technical-writer fills them. solution-bridge-writer translates requirements into a dev-ready spec. Atlas receives the spec. task-planner decomposes it. Fleet executes. code-reviewer and security-auditor validate. pr-description-writer closes the loop. Two orchestrators. One pipeline. Everything traceable from business idea to shipped feature.",
  },
  {
    id: "scene-10",
    label: "Closing",
    estimatedFrames: 901,
    script:
      "Ten lessons. Two ecosystems. One pipeline. You started with installing the CLI. You end with a complete system that connects business intent to shipped code with every quality gate in between. The tools don't replace your judgment — they amplify it. The agents don't do the work — they help you do the work better. Build the ecosystem. Use it. Improve it. That's the practice.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
