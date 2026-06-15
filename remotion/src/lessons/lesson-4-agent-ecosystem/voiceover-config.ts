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
    label: "Why Specialists",
    estimatedFrames: 721,
    script:
      "One agent trying to do everything — review code, check security, audit dependencies, write PR descriptions — will do all of them poorly. Specialists do one thing well. The ecosystem model is the answer to 'why not just one smart agent?' Each category exists because it requires a different kind of reasoning.",
  },
  {
    id: "scene-02",
    label: "The Orchestrator",
    estimatedFrames: 707,
    script:
      "Atlas is the orchestrator. It doesn't do the work — it routes to the right specialist based on your intent. When you describe what you want, Atlas reads the ecosystem, identifies who owns that problem, and delegates. Your job as the developer shifts from doing every task yourself to directing traffic.",
  },
  {
    id: "scene-03",
    label: "Planners",
    estimatedFrames: 568,
    script:
      "Planners decompose and sequence. task-planner takes a goal and breaks it into a staged agent pipeline. architecture-reader maps the codebase before anything is touched. context-reader surfaces patterns before code is written. Planners always run before doers. Never build before you've planned.",
  },
  {
    id: "scene-04",
    label: "Learners and RAG",
    estimatedFrames: 541,
    script:
      "Learner agents read before they act. context-reader surfaces existing conventions so new code matches what's already there. architecture-reader maps layer boundaries before a structural change. These agents prevent the most common AI mistake: generating code that ignores existing patterns.",
  },
  {
    id: "scene-05",
    label: "Doers",
    estimatedFrames: 582,
    script:
      "Doers are the builders. refactoring-assistant, project-scaffolder, dependency-upgrader. They implement. They change files. They generate. But — and this is critical — doers should always run after validators. A doer with no reviewer is a risk. Build feedback agents before you build scaffolders.",
  },
  {
    id: "scene-06",
    label: "Feedback Agents",
    estimatedFrames: 596,
    script:
      "Feedback agents evaluate and report. code-reviewer, performance-reviewer, test-coverage-analyzer. They don't fix — they surface. The output feeds back to doers for another pass, or to you for a judgment call. The feedback loop is what separates a one-shot prompt from an iterative pipeline.",
  },
  {
    id: "scene-07",
    label: "Guardians",
    estimatedFrames: 596,
    script:
      "Guardians protect. security-auditor, env-config-reviewer, migration-auditor. Their job is to catch what slips through. A guardian runs after doers and feeds issues back. They are not optional — a pipeline without guardians is a pipeline that ships vulnerabilities. Build these before you build scaffolders.",
  },
  {
    id: "scene-08",
    label: "Tool Operators",
    estimatedFrames: 527,
    script:
      "Tool operators bridge Copilot to external systems. pr-description-writer, changelog-writer, github-issue-creator. They take reasoning output and push it into real systems. These agents are why MCP matters — they can read and write GitHub, Jira, and other platforms directly.",
  },
  {
    id: "scene-09",
    label: "Presenters",
    estimatedFrames: 513,
    script:
      "Presenters produce human-readable artifacts. technical-writer, implementation-summary, release-notes-writer. They translate what was done into what stakeholders need to see. The output of a presenter is the last step in a pipeline — the artifact that closes the loop.",
  },
  {
    id: "scene-10",
    label: "The Pipeline",
    estimatedFrames: 554,
    script:
      "A real pipeline in action: task-planner decomposes the feature. context-reader reads the patterns. doers build. code-reviewer and security-auditor give feedback. Doers iterate. pr-description-writer writes the PR body. implementation-summary closes the session. Every agent in sequence. Every result feeding the next.",
  },
  {
    id: "scene-11",
    label: "Where Agents Live",
    estimatedFrames: 679,
    script:
      "Universal agents live in your dotfiles at ~/.copilot/agents/ — available in every project. Repo-specific agents live in .copilot/agents/ at the repo root — scoped to that codebase. Naming: universal agents use verb-noun (security-auditor). Repo-specific agents prefix with the project name (myapp-api-scaffolder). Know where each lives before you build it.",
  },
  {
    id: "scene-12",
    label: "Conductor Thinking",
    estimatedFrames: 707,
    script:
      "This is the shift. You are no longer the expert in every layer. You are the conductor. You know what each specialist does, when to call them, and in what order. The specialists do the detail work. You do the judgment work. That's the new job. That's why this curriculum exists.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
