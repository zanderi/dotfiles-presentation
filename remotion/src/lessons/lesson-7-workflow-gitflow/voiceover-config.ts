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
    label: "The Complete GitFlow Map",
    estimatedFrames: 956,
    script:
      "Every GitFlow event maps to a tool. Git commit triggers the pre-commit hook — prettier, eslint, no judgment. Commit message triggers the commit-msg hook — conventional format validation, no judgment. Push triggers CI — lint and tests run remotely, no judgment. PR open is where the agent enters: invoke feature-pr-gate, get judgment. Merge to main triggers release tooling. Each event has an owner. Map yours before you wire anything.",
  },
  {
    id: "scene-02",
    label: "Pre-Commit Hook",
    estimatedFrames: 901,
    script:
      "The pre-commit hook runs before every commit. It should be fast — under 10 seconds — and it should fix what it can. Prettier formats. ESLint fixes auto-fixable issues. Anything it can't fix, it flags and blocks the commit. Use lint-staged so it only runs on staged files, not the whole repo. The pre-commit hook is not a reviewer. It's a formatter. Keep it mechanical.",
  },
  {
    id: "scene-03",
    label: "Commit-Msg Hook",
    estimatedFrames: 804,
    script:
      "The commit-msg hook validates conventional commit format. The regex is simple: type, optional scope in parentheses, colon, space, description. feat, fix, refactor, docs, test, chore, style. If it doesn't match, the commit is rejected with a clear error. This is the hook that enforces the commit convention that makes changelogs, release notes, and semantic versioning work automatically downstream.",
  },
  {
    id: "scene-04",
    label: "lint-staged",
    estimatedFrames: 804,
    script:
      "lint-staged runs linters only on staged files. Configure it in package.json. TypeScript files get prettier then eslint. Markdown gets prettier. JSON gets prettier. The result: fast hooks that don't slow down the commit. The first time a developer tries to commit badly formatted code and it gets auto-fixed silently, they stop thinking about formatting entirely. That's the goal.",
  },
  {
    id: "scene-05",
    label: "CI/CD Enforcement",
    estimatedFrames: 790,
    script:
      "The local hooks enforce locally. GitHub Actions enforces remotely. A push to any branch triggers the CI workflow: install dependencies, run lint, run tests. If any step fails, the branch is blocked from merging. This is the safety net for everything that bypasses local hooks — force pushes, direct edits, or developers who skipped the hook setup.",
  },
  {
    id: "scene-06",
    label: "The Workflow Agent",
    estimatedFrames: 818,
    script:
      "feature-pr-gate is a workflow agent — it chains specialists in a fixed sequence. Phase 1: code-reviewer. Phase 2: security-auditor and env-config-reviewer. Phase 3: dependency-auditor, conditional on package file changes. Phase 4: pr-description-writer and implementation-summary. You invoke it once. Four phases execute. Every quality gate covered. This is what connects the agent layer to the GitFlow at the PR stage.",
  },
  {
    id: "scene-07",
    label: "Plan Mode for Features",
    estimatedFrames: 915,
    script:
      "When a feature is complex enough to require planning before acting, use plan mode. Shift+Tab enters plan mode. Describe the feature. Copilot produces a staged implementation plan — files to create, agents to invoke, sequence of steps. You review it. You approve it. Then autopilot executes. Plan mode is the difference between \"write this feature\" and \"here's how we'll write this feature, confirm before I start.\"",
  },
  {
    id: "scene-08",
    label: "Fleet for Parallel Work",
    estimatedFrames: 1012,
    script:
      "Fleet runs independent tasks in parallel. When the work decomposes into tasks that don't depend on each other — write 4 exercise files, create 6 voiceover scripts — fleet dispatches agents simultaneously and notifies you when each completes. The constraint: 4 concurrent agents maximum. Structure your fleet plan in waves: Wave 1 runs 4 tasks. Wave 2 starts when Wave 1 completes. Scope isolation is critical — each agent owns exactly one task.",
  },
  {
    id: "scene-10",
    label: "Test Agent Specialization",
    estimatedFrames: 790,
    script:
      "API tests passed. All endpoints validated, contracts correct. Then we ran UI end-to-end tests. Eight real bugs appeared — field name mismatches, missing query params, silent data loss. All in the integration layer the API tests couldn't see. The lesson: different test agents report on different failure modes. If you only run one type, you're measuring one dimension. And the critical mistake: build your testing agents before implementation starts, not after. A test agent created after the project is mostly complete is a test agent that discovers problems instead of preventing them.",
  },
  {
    id: "scene-09",
    label: "Closing",
    estimatedFrames: 804,
    script:
      "Hooks enforce. Agents judge. You decide. Not competing tools — complementary layers. Hooks are mechanical and always fire. Agents are contextual and reason. The combination means nothing slips through formatting or convention violations, and nothing ships without a quality review. Exercise 7 walks you through the full setup: Husky, lint-staged, CI workflow, and feature-pr-gate. Wire it all together.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
