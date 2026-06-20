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
      "Welcome to Lesson Eight — Skills and MCP. Skills are reusable capabilities that fire when prompted. MCP servers connect Copilot to external systems. This lesson covers how to build skills, when skills outperform agents, and how to configure MCP to give Copilot read and write access to GitHub, Jira, and more.",
  },
  {
    id: "scene-01",
    label: "Recap",
    estimatedFrames: 790,
    script:
      "Two layers left to cover in depth. Layer 2 — skills — are semi-automatic, invoked by description match, can run scripts. MCP is not a layer in the same sense — it's the external access protocol that connects what Copilot can see to systems outside the repo. Together, skills and MCP extend the ecosystem in two directions: automation and reach.",
  },
  {
    id: "scene-02",
    label: "Skills Structure",
    estimatedFrames: 915,
    script:
      "A skill is a directory with a skill dot md file and optionally one or more scripts. The skill dot md file defines the name, description, tools, and the instruction body. The description field controls when it fires — same principle as agents. The scripts are what give skills teeth: they can run shell commands, call APIs, validate input. A skill is lighter than an agent but heavier than an instruction file.",
  },
  {
    id: "scene-03",
    label: "Skills Description",
    estimatedFrames: 776,
    script:
      "The description field in the skill dot md file is the trigger. When your prompt matches the description, the CLI routes to the skill. Write it as trigger phrases, not capability lists. \"Use this when validating a commit message\" fires reliably. \"Validates commit messages according to conventional commit format\" is a capability statement — it fires less predictably. The distinction matters.",
  },
  {
    id: "scene-04",
    label: "Skills Scripts",
    estimatedFrames: 845,
    script:
      "A skill can include a script that runs automatically. The script has the same system access as the user who runs it — read files, write files, execute commands. This is powerful. It's also the reason you read every line of a skill before enabling it. A malicious skill is indistinguishable from a legitimate one until it runs. Audit before you enable.",
  },
  {
    id: "scene-05",
    label: "Skill Security",
    estimatedFrames: 998,
    script:
      "Before you enable any skill from an external source, read every line of the skill dot md file and every script it references. Look for unexpected network calls, obfuscated strings, file writes outside the project directory, and shell commands that request elevated permissions. A skill that runs shell commands has the same access to your machine as you do. There is no sandbox. Treat external skills the same way you treat a script someone emails you.",
  },
  {
    id: "scene-06",
    label: "Build a Skill",
    estimatedFrames: 776,
    script:
      "Build validate-commit-message. Create the directory in your home folder, under dot copilot, skills, validate-commit-message. Write the skill dot md file: name is validate-commit-message, description is the trigger phrase, tools include shell or echo, body describes what to validate. Write the validate shell script: a regular expression check against conventional commit format that exits 1 on failure with a clear error message. Run /skills reload. Trigger it naturally in a prompt. Done.",
  },
  {
    id: "scene-07",
    label: "MCP What It Is",
    estimatedFrames: 873,
    script:
      "Model Context Protocol is a standard for connecting external systems to the AI's context window. Instead of copy-pasting a GitHub issue into your prompt, MCP lets Copilot read it directly. Instead of manually describing a Jira ticket, MCP exposes it as context. MCP is the difference between an AI that knows about your repo and an AI that knows about your entire workflow.",
  },
  {
    id: "scene-08",
    label: "GitHub MCP Built-In",
    estimatedFrames: 693,
    script:
      "The GitHub MCP server is already configured. Run /mcp show to see it. What it gives you: read and search issues, PRs, code, repos. Create issues. Comment on PRs. Merge branches. These capabilities are available right now — no setup required. The github-issue-creator and pr-description-writer agents use this under the hood.",
  },
  {
    id: "scene-09",
    label: "Adding MCP Servers",
    estimatedFrames: 748,
    script:
      "Run /mcp add to add a new MCP server. Three good starting points: filesystem MCP for accessing files outside the repo, Jira MCP for reading and writing tickets, Sentry MCP for reading error reports. Per-user config in your MCP config file, in the dot-copilot folder in your home directory, covers tools you always want. Per-project config in the project's own MCP config file covers project-specific integrations. Scope your servers correctly.",
  },
  {
    id: "scene-10",
    label: "MCP Security",
    estimatedFrames: 873,
    script:
      "Before adding any MCP server, understand what it can access and what data it sends to the model. A Jira MCP sends ticket content to the LLM. A Sentry MCP sends error messages and stack traces. A filesystem MCP can read any file you have access to. Principle of least privilege applies: add only the servers you need, scoped as narrowly as possible.",
  },
  {
    id: "scene-11",
    label: "Decision Matrix",
    estimatedFrames: 859,
    script:
      "Three tools, three use cases. MCP: when you need to read or write external systems — GitHub, Jira, Sentry, databases. Skill: when you need auto-invocation for a stateless single-purpose task that may run scripts. Agent: when you need judgment, multi-step reasoning, personality, and hard rules. They don't compete. They cover different parts of the problem space. Know which one fits before you build.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
