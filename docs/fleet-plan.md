# Fleet Plan — Platform Curriculum Execution

Run with: `/fleet @fleet-plan.md`

All tasks are independent and can execute in parallel.

---

## Global Rule — Mermaid Diagrams

**Every exercise and lesson document must include mermaid diagrams wherever a visual would aid understanding.** Do not describe a flow, hierarchy, or decision tree in prose when a diagram would be clearer. Minimum expectations:

- Any pipeline, workflow, or sequence → `flowchart` or `sequenceDiagram`
- Any decision tree or branching logic → `flowchart TD` with clear branch labels
- Any hierarchy or layered model → `flowchart TD` with subgraph grouping
- Any comparison table that shows relationships → mermaid where it adds clarity over markdown table

---

## Wave 1A — Exercise Updates & Creations

### Task 1: Fix Exercise 01 — Agent Path

**File:** `exercises/01-setup-exercise.md`

Find every instance of `.github/agents/` and change it to `.copilot/agents/`. This is a factual correction — the Copilot CLI reads `.copilot/` for repo-scoped agent files, not `.github/`. Make no other changes.

---

### Task 2: Update Exercise 02 — Safety Net + Instructions Like Code

**File:** `exercises/02-copilot-environment-walkthrough.md`

Add two new sections:

1. **The Safety Net Model** — after the context hierarchy section. Explain the four-layer safety net: Copilot → editor (ESLint/IntelliSense) → pre-commit hooks (format/lint) → CI/CD. The point: AI is one layer, not the only layer. This is what prevents over-reliance and builds appropriate trust.

2. **Instructions Like Code** — near the end. Principle: treat your instruction files the same way you treat source code. Version them. Document changes. If your instructions drift from reality, treat it like a bug. "If the team's approach changes and the instructions don't, every agent gets stale context."

Keep the existing content intact. These are additions, not replacements.

---

### Task 3: Create Exercise 03 — Four Automation Layers (NEW)

**File:** `exercises/03-four-automation-layers.md`

Create a complete new exercise with these sections:

1. **Concept** — The four layers and why this is the most important mental model in the curriculum. Reference the gap: "Why don't my agents fire automatically?" This is the answer.

2. **The Four Layers** — recreate this table in detail:
   - Layer 1: Instruction files — always-on, passive, no trigger, `.github/instructions/`
   - Layer 2: Skills — semi-automatic, fire when prompt matches description, `SKILL.md` + scripts
   - Layer 3: Agents — orchestrated, you describe intent → Atlas routes → agents run
   - Layer 4: Git hooks + CI/CD — mechanical, shell scripts, fire at git events, NOT agents

3. **Exercise Steps:**
   - Step 1: Draw your own four-layer map for your current project (which layer handles what)
   - Step 2: Add a `.husky/pre-commit` hook running `npx prettier --write` and `npx eslint --fix`
   - Step 3: Add a `.husky/commit-msg` hook that validates conventional commit format using regex
   - Step 4: Run `/skills list` in the CLI. Pick two skills, read their `SKILL.md`. When would they fire vs. when would an agent fire?
   - Step 5: Write a description field for a hypothetical skill and a hypothetical agent for the same task. Explain in 1-2 sentences why each triggers differently.

4. **The GitFlow Integration Map** — table matching each GitFlow event (git commit, push, PR open) to the correct tool and layer

5. **Key Takeaway** — Agents are interactive specialists, not background daemons. This is a feature. The four layers are the complete answer.

---

### Task 4: Rename + Update Exercise 04 — Agent Ecosystem Feedback Loops

**Old file:** `exercises/03-agent-ecosystem-guide.md`
**New file:** `exercises/04-agent-ecosystem.md`

Rename the file. Then update:

1. Find the mermaid diagram showing the agent pipeline. Add missing feedback loop arrows:
   - code-reviewer → back to Doers (feedback loop label: "issues found")
   - security-auditor/guardian → back to Doers (feedback loop label: "security issues")
   - The diagram should clearly show this is not a one-way pipeline

2. Update any references to exercise numbers that may have shifted (old exercise 03 → new exercise 04)

3. No other content changes.

---

### Task 5: Create Exercise 05 — Content Types + feature-pr-gate (NEW)

**File:** `exercises/05-content-types.md`

Create a complete new exercise:

1. **The Five Content Types** — brief intro to: Agent, Workflow Agent, Instruction file, Skill, Prompt template. One sentence each.

2. **The Decision Tree** — as a visual mermaid flowchart. Four questions:
   - Does it need judgment, multi-step reasoning, and personality? → Agent
   - Does it need to chain multiple specialists in sequence? → Workflow Agent
   - Is it always-on background context with no trigger? → Instruction file
   - Is it stateless, single-purpose, auto-invoked by description? → Skill
   - Is it a reusable starting-point template? → Prompt template

3. **Exercise Steps:**
   - Step 1: Walk through 5 real scenarios and identify the correct content type for each (provide the 5 scenarios)
   - Step 2: List 3 things you currently do manually — identify which content type would handle each
   - Step 3: Build `feature-pr-gate.agent.md` step by step. Include the full agent file content as a guide with placeholders for the learner to fill in. Phases: Code Quality (code-reviewer), Safety (security-auditor + env-config-reviewer), Dependencies (dependency-auditor, conditional), PR Artifacts (pr-description-writer + implementation-summary)
   - Step 4: Test by invoking it on real staged changes and verify all phases execute
   - Step 5: Reference skill example — explain what a `validate-commit-message` skill would look like vs. the workflow agent

4. **Where to Put It** — `.copilot/agents/feature-pr-gate.agent.md` for this repo, `~/.copilot/agents/` if it applies to all projects

---

### Task 6: Rename + Rewrite Exercise 06 — Building Agents (Remove PFS)

**Old file:** `exercises/05-building-agents-exercise.md`
**New file:** `exercises/06-building-agents.md`

Rename. Then full rewrite removing all PFS-specific content:

**Remove every reference to:**
- `pfs-agent-builder` → replace with `agent-builder`
- `PFS.Utility.Common.Agents` → replace with the learner's own `dotfiles` repo
- `C:\workspace\PFS.Utility.Common.Agents\agents\` → replace with `~/.copilot/agents/`
- Any internal PFS tooling names

**Keep the structure but genericize:**
- The agent-builder workflow (using it to create agents) stays
- The anatomy of an agent file stays
- The exercise steps stay (just genericized)
- Replace any PFS-specific agent examples with generic universal examples

**Add (from PLATFORM_PLAN.md Lesson 6):**
- Section: "The Description Field — This Controls Auto-Invocation" — trigger phrases, examples, what NOT to put here (scope goes in the body, not the description)
- Section: "Hard Rules — What Makes an Agent Reliable" — always include hard rules in every agent
- Section: "Validators Before Doers" — key insight: build feedback and guardian agents before you build scaffolders. You need the reviewers before the builders.

---

### Task 7: Create Exercise 07 — Workflow Agents & GitFlow (NEW)

**File:** `exercises/07-workflow-gitflow.md`

Create a complete new exercise:

1. **The Complete GitFlow Map** — table: every GitFlow event → tool → trigger → what happens

2. **Exercise Steps:**
   - Step 1: Set up Husky in your repo (`npm install --save-dev husky && npx husky init`)
   - Step 2: Create pre-commit hook — run prettier + eslint on staged files (introduce `lint-staged`)
   - Step 3: Create commit-msg hook — validate conventional commit format
   - Step 4: Set up `lint-staged` config in `package.json`
   - Step 5: Build a GitHub Actions workflow for post-push enforcement (`.github/workflows/ci.yml`): runs lint + tests on push to any branch
   - Step 6: Build `feature-pr-gate.agent.md` (the full workflow agent — if not already done in ex-05, provide the complete file)
   - Step 7: Walk through a full feature lifecycle: write code → pre-commit fires → commit → push → CI fires → invoke feature-pr-gate → open PR

3. **Plan Mode for Features** — section on the Shift+Tab → plan → approve → autopilot workflow

4. **Fleet for Parallel Work** — when to use fleet vs sequential plan mode. Wave structure. Scope isolation.

5. **Key Takeaway** — Hooks enforce. Agents judge. You decide. These are not competing tools — they are complementary layers.

---

### Task 8: Create Exercise 08 — Skills & MCP (NEW)

**File:** `exercises/08-skills-and-mcp.md`

Create a complete new exercise:

1. **Where Skills & MCP Fit** — recap: Layer 2 (skills) and MCP as the external access layer

2. **Skills:**
   - Anatomy of a skill: `SKILL.md` + optional scripts
   - The description field (same as agents — this is what triggers auto-invocation)
   - Security implication: skills can run scripts — always review before enabling
   - Exercise: Build `validate-commit-message` skill from scratch. Include the full `SKILL.md` template. Add a simple validation script.
   - Test: `/skills reload` then trigger it naturally in a prompt

3. **MCP Servers:**
   - What MCP is: protocol for connecting external APIs to Copilot's context
   - What's already built in: GitHub MCP (issues, PRs, code search, repo ops)
   - Exercise: `/mcp show` — review what's already configured. What can you already do?
   - Exercise: `/mcp add` — add one MCP server of the learner's choice (suggest: filesystem, Jira, Sentry — learner picks)
   - Per-user vs per-project MCP config — when to use each
   - Security: what a server can access, how to evaluate before adding

4. **Decision Matrix** — table: MCP vs Skill vs Agent — when to use each
   - MCP: need to read/write external systems (GitHub, Jira, Sentry)
   - Skill: need auto-invocation for stateless single-purpose tasks
   - Agent: need judgment, multi-step reasoning, personality, hard rules

---

### Task 9: Rename + Update Exercise 09 — Project Setup (Genericize)

**Old file:** `exercises/04-project-setup-exercise.md`
**New file:** `exercises/09-project-setup.md`

Rename. Then update:

1. Find and remove all PFS-specific examples (company names, internal project names, internal tooling)
2. Replace with generic placeholder names (e.g., "MyApp", "your-project-name", "YourCompany")
3. Ensure all paths and commands work on a fresh generic project
4. No structural changes to the exercise steps

---

### Task 10: Rename + Update Exercise 10 — Business Ecosystem (Add Bridge)

**Old file:** `exercises/06-business-agent-ecosystem.md`
**New file:** `exercises/10-business-ecosystem.md`

Rename. Then add the `solution-bridge-writer` as the centerpiece:

1. Find the existing ecosystem diagram or agent list
2. Add a new section: **The Atlas ↔ Themis Bridge** with a mermaid diagram showing:
   - Themis (business pipeline) ← on the left
   - Atlas (dev pipeline) ← on the right
   - `solution-bridge-writer` in the center connecting the two
   - Flow: business idea → Themis → solution-bridge-writer → Atlas → shipped feature
3. Add explanation of why this bridge matters: "Most teams have developers and product owners working in parallel but never in the same pipeline. The solution-bridge-writer is the agent that translates between them."

---

## Wave 1B — Voiceover Scripts (Parallel with Wave 1A)

For each task below, create the specified `voiceover-config.ts` file.

**Format to follow exactly** (match `remotion/src/lessons/lesson-1-ai-env-setup/voiceover-config.ts`):

```typescript
// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// To generate audio when scripts are approved:
//   1. Get explicit author permission first
//   2. Run: node --strip-types generate-voiceover.ts
//   3. Set AUDIO_ENABLED = true
//   4. Restart Remotion Studio

export const AUDIO_ENABLED = false;  // Scripts only — awaiting approval

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-01",
    label: "Scene Name",
    estimatedFrames: NNN,  // wordCount × 13.85, rounded up
    script: "Full narration text...",
  },
  // ...
];
```

**Tone:** Professional, direct, slightly conversational. Match the Lesson 1 narration style. No filler phrases. Each sentence earns its place.

**Source for scene content:** `docs/platform-plan.md` Section 8 — each lesson has a scene table. Use the scene titles and content descriptions to write the narration.

---

### Task 11: Voiceover Script — Lesson 0: Upgrade Guide

**Create:** `remotion/src/lessons/lesson-0-upgrade-guide/voiceover-config.ts`
**Create parent dir if needed:** `remotion/src/lessons/lesson-0-upgrade-guide/`

4 scenes (from PLATFORM_PLAN.md Section 9b):
- scene-01: "What Changed" — old 2 lessons → new 10-lesson arc
- scene-02: "What You Already Know" — map old L1/L2 topics to new lessons
- scene-03: "Your Fast-Track Path" — skip L1+L2, start at L3, which are the 🔴 must-haves
- scene-04: "Start Here" — CTA: Lesson 3 is the concept that unlocks everything

---

### Task 12: Voiceover Script — Lesson 3: Four Automation Layers

**Create:** `remotion/src/lessons/lesson-3-four-automation-layers/voiceover-config.ts`

10 scenes per PLATFORM_PLAN.md Section 8 Lesson 3:
01 The Question / 02 Layer 1 Instructions / 03 Layer 2 Skills / 04 Layer 3 Agents / 05 Layer 4 Hooks & CI / 06 The Key Insight / 07 Where Each Fits / 08 Setting Up Layer 4 / 09 CI Integration / 10 Closing

The key insight (scene 06) is critical: agents are interactive specialists, not daemons. Frame this as a revelation, not a limitation. "This is a feature, not a bug — it means you're always in the loop."

---

### Task 13: Voiceover Script — Lesson 4: Agent Ecosystem

**Create:** `remotion/src/lessons/lesson-4-agent-ecosystem/voiceover-config.ts`

12 scenes per PLATFORM_PLAN.md Section 8 Lesson 4:
01 Why Specialists / 02 Orchestrator / 03 Planners / 04 Learners RAG / 05 Doers / 06 Feedback / 07 Guardians / 08 Tool Operators / 09 Presenters / 10 The Pipeline / 11 Where Agents Live / 12 Conductor Thinking

Scene 12 (Conductor Thinking) is the key insight from old Lesson 2: your job shifts from expert-in-one-layer to coordinator-of-specialists. This changes everything about how you think about writing code with AI.

---

### Task 14: Voiceover Script — Lesson 5: Content Types

**Create:** `remotion/src/lessons/lesson-5-content-types/voiceover-config.ts`

9 scenes per PLATFORM_PLAN.md Section 8 Lesson 5:
01 The Five Types / 02 The Decision Tree / 03 Agent / 04 Workflow / 05 Instruction / 06 Skill / 07 Prompt Template / 08 The Workflow Agent Live / 09 Closing

Scene 08 is the payoff: feature-pr-gate. Walk through what happens when you invoke it — each phase fires in sequence. This is the concrete answer to "I want agents to run at GitFlow stages."

---

### Task 15: Voiceover Script — Lesson 6: Building Real Agents

**Create:** `remotion/src/lessons/lesson-6-building-agents/voiceover-config.ts`

10 scenes per PLATFORM_PLAN.md Section 8 Lesson 6:
01 The Agent File / 02 The Description Field / 03 Category & Naming / 04 Hard Rules / 05 Output Format / 06 Build Feedback Agent / 07 Build Guardian Agent / 08 Testing Your Agent / 09 Validators Before Doers / 10 Contributing

Scene 09 (Validators Before Doers) is the key insight from old Lesson 2: build code-reviewer and env-config-reviewer before you build any scaffolders or doers. You need the reviewers to validate the work of the builders.

---

### Task 16: Voiceover Script — Lesson 7: Workflow Agents & GitFlow

**Create:** `remotion/src/lessons/lesson-7-workflow-gitflow/voiceover-config.ts`

9 scenes per PLATFORM_PLAN.md Section 8 Lesson 7:
01 The Complete GitFlow Map / 02 Pre-Commit Hook / 03 Commit-Msg Hook / 04 lint-staged / 05 CI/CD Enforcement / 06 The Workflow Agent / 07 Plan Mode for Features / 08 Fleet for Parallel Work / 09 Closing ("Hooks enforce. Agents judge. You decide.")

---

### Task 17: Voiceover Script — Lesson 8: Skills & MCP

**Create:** `remotion/src/lessons/lesson-8-skills-and-mcp/voiceover-config.ts`

11 scenes per PLATFORM_PLAN.md Section 8 Lesson 8:
01 Recap / 02 Skills Structure / 03 Skills Description / 04 Skills Scripts / 05 Skill Security / 06 Build a Skill / 07 MCP What It Is / 08 GitHub MCP Built-In / 09 Adding MCP Servers / 10 MCP Security / 11 Decision Matrix

Scene 05 (Skill Security): "Before you enable any skill from an external source, read every line of SKILL.md and every script it references. A skill that runs shell commands has the same access to your machine as you do."

---

### Task 18: Voiceover Script — Lesson 9: AI-First Project Setup

**Create:** `remotion/src/lessons/lesson-9-project-setup/voiceover-config.ts`

10 scenes per PLATFORM_PLAN.md Section 8 Lesson 9:
01 Before Any Code / 02 Naming & Framing / 03 Generating Docs / 04 Project Instructions / 05 Design System First / 06 Feature Specs / 07 Fleet Build Plan / 08 Plan Mode for Prerequisites / 09 Running Fleet / 10 Closing ("22 files before one line of app code. That's the investment.")

Scene 01 must include the cost-of-rework stat from old Lesson 2: reactive prompting leads to 50% more rework than upfront design investment. This is the motivation for everything that follows.

---

### Task 19: Voiceover Script — Lesson 10: Business Ecosystem

**Create:** `remotion/src/lessons/lesson-10-business-ecosystem/voiceover-config.ts`

10 scenes per PLATFORM_PLAN.md Section 8 Lesson 10:
01 Same Structure Different Domain / 02 Themis / 03 Learner Layer / 04 Doer Layer / 05 Feedback / 06 Guardians / 07 Tool Operators / 08 The Bridge / 09 Atlas ↔ Themis / 10 Closing ("Two orchestrators. One pipeline. Everything traceable.")

Scene 09 is the capstone of the entire curriculum. The full end-to-end: business idea → Themis → solution-bridge-writer → Atlas → shipped feature. This is the culmination of all 10 lessons.

---

## Completion Criteria

All 19 tasks complete when:
- [ ] All 10 exercise files exist at their new paths and are fully updated
- [ ] All 9 voiceover-config.ts files exist with `AUDIO_ENABLED = false`
- [ ] No PFS references remain in any public exercise file
- [ ] All agent paths say `.copilot/agents/` not `.github/agents/`
- [ ] README exercise table links updated to new file names (manual step after completion)
