# Fleet Plan — Remotion Scene Authoring (Lessons 0, 3–10)

Run with: `/fleet @docs/fleet-plan-remotion-scenes.md`

All tasks are independent and can execute in parallel.

---

## Global Rules

1. **No audio generation.** `AUDIO_ENABLED` must remain `false` in every `voiceover-config.ts`. Do not add, modify, or call any ElevenLabs generation scripts. Do not set `AUDIO_ENABLED = true` under any circumstances.

2. **Timing uses `estimatedFrames`.** Since `AUDIO_ENABLED = false`, `calculateMetadata.ts` will fall back to `estimatedFrames + POST_AUDIO_PADDING_FRAMES` (45 frames) per scene. This gives correct voiceover-length timing without audio.

3. **Shared components live at `remotion/src/components/`.** Every scene imports from `../../components/` and `../../constants`. Never duplicate component code inside a lesson folder.

4. **Follow the lesson-1 pattern exactly** for `Root.tsx`, `MainVideo.tsx`, `calculateMetadata.ts`, and `index.css`. Reference `remotion/src/lessons/lesson-1-ai-env-setup/` as the canonical template.

5. **Scene file naming:** `NN-PascalCaseScene.tsx` (e.g., `01-TitleScene.tsx`). Zero-padded to 2 digits.

6. **Accent colors per lesson** (use as `accentColor` on `<SceneFrame>`):
   - Lesson 0: `COLORS.purple`
   - Lesson 3: `COLORS.orange`
   - Lesson 4: `COLORS.blue`
   - Lesson 5: `COLORS.green`
   - Lesson 6: `COLORS.yellow`
   - Lesson 7: `COLORS.orange`
   - Lesson 8: `COLORS.purple`
   - Lesson 9: `COLORS.blue`
   - Lesson 10: `COLORS.green`

7. **After all lesson tasks complete**, one final integration task updates `remotion/src/Root.tsx` and `remotion/package.json`.

---

## Shared `calculateMetadata.ts` Pattern

Every lesson's `calculateMetadata.ts` is identical except for the import path and the `lesson-N` audio path string. Copy exactly from `lesson-1-ai-env-setup/calculateMetadata.ts`, updating:
- The import to point to the lesson's own `voiceover-config`
- The `staticFile('voiceover/lesson-N/...')` path string

`POST_AUDIO_PADDING_FRAMES = 45` for all new lessons.

---

## Shared `index.css` Pattern

Copy verbatim from `remotion/src/lessons/lesson-1-ai-env-setup/index.css`.

---

## Wave 1 — All Lessons in Parallel

### Task 1: Lesson 0 — Upgrade Guide

**Directory:** `remotion/src/lessons/lesson-0-upgrade-guide/`

**Files to create:**
- `Root.tsx` — composition ID: `UpgradeGuide`
- `MainVideo.tsx` — imports 4 scene components
- `calculateMetadata.ts` — lesson-0 paths
- `index.css` — copy from lesson-1

**Scenes (4):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-WhatChangedScene.tsx` | What Changed | Title/hero centered | Large title "What Changed", subtitle "From 2 lessons to 10", below: two columns — "Old Curriculum" (Lessons 1–2) vs "New Curriculum" (Lessons 0–10) with brief label for each new lesson. Staggered fade-in. Accent: purple |
| `02-WhatYouKnowScene.tsx` | What You Already Know | Two-column with BulletList each side | Left: "Old Lesson 1 covers..." (list: Install, Atlas, Dotfiles, Tool Configs, Repo Instructions, Agents, MCP, Models, Plan/Autopilot/Fleet). Right: "Old Lesson 2 covers..." (list: Model selection, Testing strategy, Conductor thinking, Project setup). Both with ✅ icon. Staggered delays. |
| `03-FastTrackScene.tsx` | Your Fast-Track Path | Vertical list of lesson rows | 10 rows, one per new lesson. Each row shows: lesson number + title + a colored badge (🔴 START HERE in red, 📖 READ in blue, ⏭️ SKIP in muted). Rows animate in staggered. Lessons 1–2: SKIP. Lesson 3: 🔴. Lesson 4: 📖. Lesson 5: 🔴. Lesson 6: 📖. Lesson 7: 🔴. Lesson 8: 📖. Lesson 9: 📖. Lesson 10: 🔴. |
| `04-StartHereScene.tsx` | Start Here | Centered emphasis card | Large call-to-action. Bold "Start at Lesson 3." Below: "Four automation layers — the concept that explains why your agents don't auto-fire." Then a second line: "Everything else builds on this foundation." Use a prominent card with purple border. Fade in with scale from 0.95 to 1. |

---

### Task 2: Lesson 3 — Four Automation Layers

**Directory:** `remotion/src/lessons/lesson-3-four-automation-layers/`

**Files to create:**
- `Root.tsx` — composition ID: `FourAutomationLayers`
- `MainVideo.tsx` — imports 10 scene components
- `calculateMetadata.ts` — lesson-3 paths
- `index.css` — copy from lesson-1

**Scenes (10):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-TheQuestionScene.tsx` | The Question | Centered title/hook | Large question: "How do I make agents run at git events?" Below, after a pause (delay 45): "The answer changes everything about how you think about this." Accent: orange. Bold, dramatic layout. |
| `02-Layer1InstructionsScene.tsx` | Layer 1: Instructions | InfoCard full-width | StepBadge "LAYER 1", Headline "Instruction Files". Below: large InfoCard. Inside: icon 📄, title "Always On — Never Called", body explains: lives in `.github/instructions/`, loaded into every conversation, no trigger, passive background context. Color: blue. Bullet below: "Standing orders. Always on." |
| `03-Layer2SkillsScene.tsx` | Layer 2: Skills | InfoCard full-width | StepBadge "LAYER 2", Headline "Skills". InfoCard: icon ⚡, title "Auto-Invoked by Description Match", body: `SKILL.md` + optional scripts, fires when prompt matches description, stateless, single-purpose, can run shell commands. Color: green. |
| `04-Layer3AgentsScene.tsx` | Layer 3: Agents | InfoCard full-width | StepBadge "LAYER 3", Headline "Agents". InfoCard: icon 🤖, title "Interactive Specialists", body: reasoning, judgment, personality, hard rules, invoked when you describe intent, Atlas routes to the right specialist. Color: blue. |
| `05-Layer4HooksScene.tsx` | Layer 4: Hooks & CI | InfoCard full-width | StepBadge "LAYER 4", Headline "Git Hooks & CI/CD". InfoCard: icon 🔧, title "Fires at Git Events — No Judgment", body: pre-commit, commit-msg, push triggers, Husky manages local hooks, GitHub Actions handles remote. Color: orange. Bold note: "This is the layer that fires at git events — not agents." |
| `06-KeyInsightScene.tsx` | The Key Insight | Two-column contrast | Left panel (surface border red): "❌ Wrong question: How do I make agents run at commits?" Right panel (surface border green): "✅ Right question: Which layer handles this responsibility?" Below both: centered text fading in: "Agents are interactive specialists, not background daemons. That's a feature." |
| `07-WhereEachFitsScene.tsx` | Where Each Fits | 4-row table layout | Four rows, each showing Layer number + name + trigger + example. Rows animate in staggered. Row 1: Layer 1 / Instructions / Always active / `.github/instructions/`. Row 2: Layer 2 / Skills / Description match / `validate-commit-message`. Row 3: Layer 3 / Agents / You describe intent / `code-reviewer`. Row 4: Layer 4 / Hooks+CI / Git events / `pre-commit`, `push`. |
| `08-SettingUpLayer4Scene.tsx` | Setting Up Layer 4 | CodeBlock + BulletList | StepBadge "LAYER 4 SETUP". CodeBlock showing: `npm install --save-dev husky` / `npx husky init` / `npx husky add .husky/pre-commit "npx lint-staged"` / `npx husky add .husky/commit-msg`. BulletList below: "Fast — under 10 seconds", "Fixes what it can automatically", "Blocks on unfixable issues." |
| `09-CIIntegrationScene.tsx` | CI Integration | CodeBlock | StepBadge "GITHUB ACTIONS". Headline "Remote Enforcement". CodeBlock with YAML: a simple `.github/workflows/ci.yml` snippet — `on: push`, jobs: install, lint, test. Below: BulletList: "Catches what local hooks miss", "Enforced for every contributor", "Required to merge." |
| `10-ClosingScene.tsx` | Closing | Four InfoCards in 2×2 grid | Headline "Four Layers. One System." Four small InfoCards in a 2×2 grid: Layer 1 (📄 Always On), Layer 2 (⚡ Auto-Invoked), Layer 3 (🤖 On Demand), Layer 4 (🔧 At Git Events). Below: "Exercise 3 walks you through building Layer 4. Lesson 4 goes deep on the agent ecosystem." Staggered card animations. |

---

### Task 3: Lesson 4 — The Agent Ecosystem

**Directory:** `remotion/src/lessons/lesson-4-agent-ecosystem/`

**Files to create:**
- `Root.tsx` — composition ID: `AgentEcosystem`
- `MainVideo.tsx` — imports 12 scene components
- `calculateMetadata.ts` — lesson-4 paths
- `index.css` — copy from lesson-1

**Scenes (12):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-WhySpecialistsScene.tsx` | Why Specialists | Two-column contrast | Left (red border): "One agent doing everything" — bullets: generic suggestions, context overload, shallow output. Right (green border): "Specialist agents" — bullets: deep domain knowledge, focused output, composable pipelines. |
| `02-OrchestratorScene.tsx` | The Orchestrator | Centered InfoCard | Large single card. Icon 🎯. Title "Atlas — The Orchestrator". Body: doesn't do the work, reads intent, routes to the right specialist, coordinates the session. Color: blue. Below: "Your job shifts from doing every task to directing traffic." |
| `03-PlannersScene.tsx` | Planners | BulletList with category badge | StepBadge "CATEGORY — PLANNERS". BulletList: `task-planner` (decomposes goals into staged agent pipelines), `architecture-reader` (maps codebase before anything is touched), `context-reader` (surfaces patterns before code is written). Key rule at bottom: "Planners always run before doers." |
| `04-LearnersScene.tsx` | Learners & RAG | BulletList with category badge | StepBadge "CATEGORY — LEARNERS". BulletList: `context-reader` (surfaces existing conventions), `architecture-reader` (maps layer boundaries). Callout: "These prevent the most common AI mistake: generating code that ignores existing patterns." |
| `05-DoersScene.tsx` | Doers | BulletList with category badge | StepBadge "CATEGORY — DOERS". BulletList: `refactoring-assistant`, `project-scaffolder`, `dependency-upgrader`. Warning at bottom (orange): "Doers should always run after validators. A doer with no reviewer is a risk." |
| `06-FeedbackScene.tsx` | Feedback Agents | BulletList with category badge | StepBadge "CATEGORY — FEEDBACK". BulletList: `code-reviewer`, `performance-reviewer`, `test-coverage-analyzer`. Key insight: "Feedback agents don't fix — they surface. The feedback loop separates a one-shot prompt from an iterative pipeline." |
| `07-GuardiansScene.tsx` | Guardians | BulletList with category badge | StepBadge "CATEGORY — GUARDIANS". BulletList: `security-auditor`, `env-config-reviewer`, `migration-auditor`. Bold rule: "Guardians are not optional. A pipeline without guardians ships vulnerabilities." |
| `08-ToolOperatorsScene.tsx` | Tool Operators | BulletList with category badge | StepBadge "CATEGORY — TOOL OPERATORS". BulletList: `pr-description-writer`, `changelog-writer`, `github-issue-creator`. Note: "These agents are why MCP matters — they read and write GitHub, Jira, and other platforms directly." |
| `09-PresentersScene.tsx` | Presenters | BulletList with category badge | StepBadge "CATEGORY — PRESENTERS". BulletList: `technical-writer`, `implementation-summary`, `release-notes-writer`. Note: "The output of a presenter is the last step in a pipeline — the artifact that closes the loop." |
| `10-PipelineScene.tsx` | The Pipeline | Vertical sequential flow | Headline "A Real Pipeline". Vertical sequence of labeled steps with connecting arrows: 1. `task-planner` (decomposes) → 2. `context-reader` (reads patterns) → 3. Doers (build) → 4. `code-reviewer` + `security-auditor` (validate) → 5. Doers iterate → 6. `pr-description-writer` → 7. `implementation-summary`. Steps animate in staggered. |
| `11-WhereAgentsLiveScene.tsx` | Where Agents Live | Two-column | Left (blue): "Universal Agents — `~/.copilot/agents/`". Bullets: available in every project, verb-noun names (`security-auditor`). Right (purple): "Repo-Specific Agents — `.copilot/agents/`". Bullets: scoped to this codebase, prefixed with project name (`myapp-api-scaffolder`). |
| `12-ConductorThinkingScene.tsx` | Conductor Thinking | Centered emphasis | Large centered layout. Bold: "You are the conductor." Below: "Not the expert in every layer. Not the one writing every line." Then: "You know what each specialist does, when to call them, and in what order." Final line fading in last: "That's the new job." |

---

### Task 4: Lesson 5 — Content Types

**Directory:** `remotion/src/lessons/lesson-5-content-types/`

**Files to create:**
- `Root.tsx` — composition ID: `ContentTypes`
- `MainVideo.tsx` — imports 9 scene components
- `calculateMetadata.ts` — lesson-5 paths
- `index.css` — copy from lesson-1

**Scenes (9):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-FiveTypesScene.tsx` | The Five Types | 5 InfoCards in a row (or 3+2) | Headline "Five Content Types". Five cards staggered: Agent (🤖, blue), Workflow Agent (🔗, purple), Instruction File (📄, muted), Skill (⚡, green), Prompt Template (📝, yellow). Each card: icon + name + one-line description. |
| `02-DecisionTreeScene.tsx` | The Decision Tree | Vertical decision flow | Headline "Pick the Right Type". Four sequential questions as decision nodes, each with a Yes branch leading to the type: "Needs judgment + multi-step?" → Agent. "Chains specialists in sequence?" → Workflow Agent. "Always-on background context?" → Instruction File. "Stateless, auto-invoked?" → Skill. Otherwise → Prompt Template. Nodes animate in staggered. |
| `03-AgentDeepDiveScene.tsx` | Agent | InfoCard deep dive | StepBadge "TYPE — AGENT". Large InfoCard: icon 🤖, title "Judgment + Reasoning + Hard Rules". Bullets: reasoning and judgment, personality and persona, hard rules (non-negotiable), description field controls routing. Below: "Use for complex, judgment-heavy tasks." |
| `04-WorkflowAgentScene.tsx` | Workflow Agent | InfoCard deep dive | StepBadge "TYPE — WORKFLOW AGENT". Large InfoCard: icon 🔗, title "Fixed Pipeline — No Judgment". Bullets: chains specialists in sequence, no judgment of its own, runs Phase 1 → Phase 2 → Phase 3, sequence is known and repeatable. Example: `feature-pr-gate`. |
| `05-InstructionFileScene.tsx` | Instruction File | InfoCard deep dive | StepBadge "TYPE — INSTRUCTION FILE". Large InfoCard: icon 📄, title "Always-On Background Context". Bullets: lives in `.github/instructions/`, active in every conversation, no trigger, shapes all responses. Rule: "If it's a standing rule, it belongs here." |
| `06-SkillScene.tsx` | Skill | InfoCard deep dive | StepBadge "TYPE — SKILL". Large InfoCard: icon ⚡, title "Auto-Invoked, Stateless, Single-Purpose". Bullets: description match triggers it, can run scripts, no memory or reasoning, consistent and reliable. Example: `validate-commit-message`. |
| `07-PromptTemplateScene.tsx` | Prompt Template | InfoCard deep dive | StepBadge "TYPE — PROMPT TEMPLATE". Large InfoCard: icon 📝, title "Reusable Starting Point". Bullets: invoked intentionally, provides structure, you fill in the specifics, not automated. Use for: ADRs, incident reports, feature specs. |
| `08-WorkflowAgentLiveScene.tsx` | The Workflow Agent Live | Phase pipeline | Headline "`feature-pr-gate` in action". Four phase cards staggered horizontally then vertically (or as a numbered list): Phase 1: `code-reviewer` scans diff. Phase 2: `security-auditor` + `env-config-reviewer`. Phase 3: `dependency-auditor` (conditional). Phase 4: `pr-description-writer` + `implementation-summary`. Below: "One invocation. Four phases. Every quality gate covered." |
| `09-ClosingScene.tsx` | Closing | BulletList summary | StepBadge "SUMMARY". Headline "Five Types. One Decision Tree." BulletList: "Agent — judgment", "Workflow Agent — pipeline", "Instruction File — standing rules", "Skill — auto-invocation", "Prompt Template — reusable structure". Final line: "Run the tree before you build. Exercise 5 walks you through it." |

---

### Task 5: Lesson 6 — Building Real Agents

**Directory:** `remotion/src/lessons/lesson-6-building-agents/`

**Files to create:**
- `Root.tsx` — composition ID: `BuildingAgents`
- `MainVideo.tsx` — imports 10 scene components
- `calculateMetadata.ts` — lesson-6 paths
- `index.css` — copy from lesson-1

**Scenes (10):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-TheAgentFileScene.tsx` | The Agent File | CodeBlock | Headline "An Agent Is a File". CodeBlock showing frontmatter structure: `---`, `name: agent-name`, `description: "trigger phrases..."`, `tools: ['grep', 'glob', 'view']`, `---`. Below: "No compiled code. No deployment. No infrastructure." BulletList: name, description, tools, body. |
| `02-DescriptionFieldScene.tsx` | The Description Field | Two-column comparison | Headline "The Most Important Field". Left (red, "❌ Capability list"): `"Reviews code, checks security, audits dependencies"`. Right (green, "✅ Trigger phrases"): `"Use this agent when you're about to open a PR and want all quality gates run"`. Below: "Atlas reads the description to decide routing. Write intent, not features." |
| `03-CategoryNamingScene.tsx` | Category & Naming | Two-column | Left (blue): "Universal Agents" — `~/.copilot/agents/`, available everywhere, verb-noun: `security-auditor`, `pr-description-writer`. Right (purple): "Repo-Specific Agents" — `.copilot/agents/`, scoped to codebase, project-prefixed: `myapp-api-scaffolder`. |
| `04-HardRulesScene.tsx` | Hard Rules | BulletList with emphasis | Headline "Hard Rules — What Makes an Agent Reliable". BulletList (each in green): "Never modify files outside the repo root", "Always ask before making git commits", "Never generate code that disables authentication", "Report findings — never silently ignore them". Below: "Non-negotiable. Enforced regardless of what the user asks." |
| `05-OutputFormatScene.tsx` | Output Format | InfoCard | Headline "Specify Output Explicitly". InfoCard: "If the agent produces a report — say what it looks like. If it creates files — say where they go. If it asks questions — say when." BulletList: severity-labeled findings, file and line references, clear recommendations. Rule: "Consistency is the point." |
| `06-BuildFeedbackScene.tsx` | Build a Feedback Agent | CodeBlock | StepBadge "BUILD IT — code-reviewer". CodeBlock showing the skeleton of a `code-reviewer.agent.md`: frontmatter (name, description with trigger phrases, tools: grep/glob/view/bash), body showing hard rules section. BulletList: "Only genuine issues", "No style nitpicks", "No empty praise", "Severity-labeled findings". |
| `07-BuildGuardianScene.tsx` | Build a Guardian Agent | CodeBlock | StepBadge "BUILD IT — env-config-reviewer". CodeBlock showing `env-config-reviewer.agent.md` skeleton: frontmatter, description, tools. Body: hard rules — "Never modify files. Report only." Check list: .gitignore coverage, hardcoded credential patterns, exposed secrets. Output: clear/at-risk/critical per file. |
| `08-TestingAgentScene.tsx` | Testing Your Agent | BulletList checklist | Headline "Does It Work?". Four checklist items animating in: "✅ Does it do what the description says?", "✅ Does it follow the hard rules?", "✅ Does the output match your spec?", "✅ Does it fail gracefully on bad input?". Rule: "Fix behavior in the body. Fix routing in the description." |
| `09-ValidatorsFirstScene.tsx` | Validators Before Doers | Emphasis layout | Large centered bold: "Build feedback and guardian agents before you build any scaffolders." Below: "A scaffolding agent with no reviewer downstream ships whatever it produces — unchecked." Visual: two columns — left (red, ❌): Scaffolder with no reviewer → ships unchecked. Right (green, ✅): Reviewer → Guardian → Scaffolder → reviewed output. |
| `10-ContributingScene.tsx` | Contributing Back | BulletList | Headline "A Good Agent Is Infrastructure". BulletList: "Add it to your dotfiles", "Document the trigger phrases", "Document the hard rules", "Document what it doesn't do". Final: "A well-documented agent in dotfiles is available in every project, forever." |

---

### Task 6: Lesson 7 — Workflow Agents & GitFlow

**Directory:** `remotion/src/lessons/lesson-7-workflow-gitflow/`

**Files to create:**
- `Root.tsx` — composition ID: `WorkflowGitflow`
- `MainVideo.tsx` — imports 9 scene components
- `calculateMetadata.ts` — lesson-7 paths
- `index.css` — copy from lesson-1

**Scenes (9):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-GitFlowMapScene.tsx` | The Complete GitFlow Map | Table layout | Headline "Every Event Has an Owner". Five rows animating in staggered: `git commit` → pre-commit hook → prettier + eslint → Layer 4. `commit message` → commit-msg hook → conventional format → Layer 4. `git push` → CI/CD → lint + tests → Layer 4. `PR open` → `feature-pr-gate` → all quality gates → Layer 3. `merge to main` → release tooling → changelog + notes → Layer 3. |
| `02-PreCommitScene.tsx` | Pre-Commit Hook | CodeBlock + BulletList | StepBadge "PRE-COMMIT". CodeBlock: `.husky/pre-commit` content — `npx lint-staged`. BulletList: "Runs only on staged files (lint-staged)", "Prettier formats automatically", "ESLint fixes auto-fixable issues", "Blocks on unfixable — with clear error", "Target: under 10 seconds". |
| `03-CommitMsgScene.tsx` | Commit-Msg Hook | CodeBlock | StepBadge "COMMIT-MSG". CodeBlock: `.husky/commit-msg` content with regex validation for conventional commit format. Below: BulletList of valid types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `style`. Rule: "If it doesn't match, the commit is rejected with a clear error." |
| `04-LintStagedScene.tsx` | lint-staged | CodeBlock | Headline "Only Run on Staged Files". CodeBlock: `package.json` `lint-staged` config — `"*.{ts,tsx}": ["prettier --write", "eslint --fix"]`, `"*.md": ["prettier --write"]`. BulletList: "Fast — skips untouched files", "Silently auto-fixes formatting", "Developer stops thinking about formatting." |
| `05-CIEnforcementScene.tsx` | CI/CD Enforcement | CodeBlock | Headline "Remote Safety Net". CodeBlock: `.github/workflows/ci.yml` snippet — `on: push`, jobs: install deps, run lint, run tests. BulletList: "Enforces for every contributor", "Catches what local hooks miss", "Blocks merging if any step fails". |
| `06-WorkflowAgentScene.tsx` | The Workflow Agent | Phase list | Headline "`feature-pr-gate`". Four phase rows staggered: Phase 1: `code-reviewer`. Phase 2: `security-auditor` + `env-config-reviewer`. Phase 3: `dependency-auditor` (if package files changed). Phase 4: `pr-description-writer` + `implementation-summary`. Below: "One invocation. Every quality gate covered." |
| `07-PlanModeScene.tsx` | Plan Mode for Features | Step sequence | Headline "Plan Before You Build". Steps animating in: 1. Shift+Tab → enter plan mode. 2. Describe the feature. 3. Copilot generates a staged plan. 4. Review every file + change. 5. Approve. 6. Autopilot executes. Rule: "Plan mode is the difference between 'write this' and 'here's how we'll write this — confirm first.'" |
| `08-FleetScene.tsx` | Fleet for Parallel Work | Two-column waves | Headline "Parallel Execution". Left column: when to use fleet — independent tasks, no dependencies, same scope isolation needed. Right column: wave structure — Wave 1 (up to 4 tasks), Wave 2 starts when Wave 1 completes. Rule at bottom: "Each agent owns exactly one task. No cross-scope writes." |
| `09-ClosingScene.tsx` | Closing | Three-column emphasis | Three large cards: "🔧 Hooks enforce." (orange), "🤖 Agents judge." (blue), "👤 You decide." (green). Below: "Not competing tools — complementary layers. Nothing slips through formatting violations. Nothing ships without a quality review." |

---

### Task 7: Lesson 8 — Skills & MCP

**Directory:** `remotion/src/lessons/lesson-8-skills-and-mcp/`

**Files to create:**
- `Root.tsx` — composition ID: `SkillsAndMcp`
- `MainVideo.tsx` — imports 11 scene components
- `calculateMetadata.ts` — lesson-8 paths
- `index.css` — copy from lesson-1

**Scenes (11):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-RecapScene.tsx` | Recap | Two-column | Left (green): "Layer 2 — Skills" — semi-automatic, description match, can run scripts, stateless. Right (purple): "MCP" — external access protocol, connects Copilot to outside systems, not a layer but an extension. |
| `02-SkillsStructureScene.tsx` | Skills Structure | CodeBlock + BulletList | Headline "A Skill Is a Directory". CodeBlock: directory tree — `~/.copilot/skills/validate-commit-message/`, `  SKILL.md`, `  validate.sh`. BulletList: "SKILL.md defines name, description, tools, instructions", "Scripts give skills shell access", "Lighter than an agent, heavier than an instruction." |
| `03-SkillsDescriptionScene.tsx` | Skills Description | Two-column comparison | Headline "Description Controls Triggering". Left (red, "❌ Capability statement"): `"Validates commit messages according to conventional commit format"` — fires less predictably. Right (green, "✅ Trigger phrase"): `"Use this when validating a commit message"` — fires reliably. Same rule as agents. |
| `04-SkillsScriptsScene.tsx` | Skills Scripts | CodeBlock | Headline "Scripts Give Skills Teeth". CodeBlock: `validate.sh` — regex check against conventional commit format, `exit 1` with error message on failure. BulletList: "Same access as the user", "Read files, write files, execute commands", "Powerful — and why you audit before enabling." |
| `05-SkillSecurityScene.tsx` | Skill Security | Warning card | SceneFrame with `accentColor={COLORS.red}`. Headline "Audit Before You Enable" in red. Large warning card (red border): "Before enabling any skill from an external source, read every line of SKILL.md and every script." BulletList (all red): "Unexpected network calls", "Obfuscated strings", "File writes outside project dir", "Elevated permission requests". Final: "No sandbox. Same access as you." |
| `06-BuildSkillScene.tsx` | Build a Skill | CodeBlock + BulletList | Headline "Build validate-commit-message". Steps: 1. Create dir at `~/.copilot/skills/validate-commit-message/`. 2. CodeBlock: `SKILL.md` frontmatter skeleton. 3. CodeBlock: `validate.sh` regex skeleton. BulletList: "/skills reload", "Trigger naturally in a prompt", "Done." |
| `07-MCPWhatItIsScene.tsx` | MCP — What It Is | InfoCard | Headline "Model Context Protocol". Large InfoCard: icon 🔌, title "External System Access", body: standard for connecting external APIs to the AI's context window. Two-column below: Before MCP (copy-paste issues into prompt) vs After MCP (Copilot reads directly). Color: purple. |
| `08-GitHubMCPScene.tsx` | GitHub MCP Built-In | BulletList + CodeBlock | Headline "Already Configured". CodeBlock: `/mcp show`. BulletList of capabilities: read/search issues, read/search PRs, code search, create issues, comment on PRs, merge branches. Bold: "Available right now — no setup required." |
| `09-AddingMCPScene.tsx` | Adding MCP Servers | CodeBlock + BulletList | Headline "Extend with More Servers". CodeBlock: `/mcp add`. BulletList of good starting points: filesystem MCP, Jira MCP, Sentry MCP. Two-column scope: per-user (`~/.copilot/mcp.json`) vs per-project (`.copilot/mcp.json`). |
| `10-MCPSecurityScene.tsx` | MCP Security | Warning + BulletList | Headline "What a Server Can Access". BulletList (orange): "Jira MCP sends ticket content to the LLM", "Sentry MCP sends stack traces and error messages", "Filesystem MCP can read any file you have access to". Rule: "Principle of least privilege. Add only what you need, scoped as narrow as possible." |
| `11-DecisionMatrixScene.tsx` | Decision Matrix | Three InfoCards side by side | Headline "Three Tools. Three Use Cases." Three cards side by side staggered: MCP (🔌, purple) — read/write external systems. Skill (⚡, green) — auto-invoked, stateless, single-purpose tasks. Agent (🤖, blue) — judgment, multi-step reasoning, hard rules. Final: "They don't compete. They cover different parts of the problem space." |

---

### Task 8: Lesson 9 — AI-First Project Setup

**Directory:** `remotion/src/lessons/lesson-9-project-setup/`

**Files to create:**
- `Root.tsx` — composition ID: `ProjectSetup`
- `MainVideo.tsx` — imports 10 scene components
- `calculateMetadata.ts` — lesson-9 paths
- `index.css` — copy from lesson-1

**Scenes (10):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-BeforeAnyCodeScene.tsx` | Before Any Code | Two-column contrast | Left (red, ❌): "Reactive prompting" — jump straight into code, fix mistakes as they appear, 50% more rework. Right (green, ✅): "Upfront design investment" — 22 documents before one line of app code, consistent AI output, less rework. Bold stat: "50% more rework from reactive prompting." |
| `02-NamingFramingScene.tsx` | Naming & Framing | InfoCard | Headline "Start Here — Before AI". Large InfoCard: "Write one paragraph: what is this project, who is it for, what problem does it solve." Below: "This becomes the seed for everything else — copilot-instructions, agent descriptions, feature specs." Rule: "Ambiguity here propagates everywhere downstream." |
| `03-GeneratingDocsScene.tsx` | Generating Docs | BulletList | Headline "Use AI to Generate the Foundation". BulletList: "Project README", "Architecture overview", "Tech stack decisions with rationale", "Data model sketch". Note: "These don't need to be perfect — good enough to give every subsequent agent accurate context." Bold: "Context quality = output quality." |
| `04-ProjectInstructionsScene.tsx` | Project Instructions | CodeBlock | Headline "The Most Important File in the Repo". CodeBlock: `.github/copilot-instructions.md` structure skeleton — tech stack, architectural patterns, naming conventions, non-negotiables. Rule: "If your instructions drift from the codebase reality, every agent works from stale context. Treat instructions like code." |
| `05-DesignSystemFirstScene.tsx` | Design System First | BulletList | Headline "Before Any UI Component". BulletList: "Typography scale", "Color tokens", "Spacing system", "Component naming conventions". Warning: "Without a design system doc, every AI-generated component invents its own conventions. One doc prevents this — permanently." |
| `06-FeatureSpecsScene.tsx` | Feature Specs | Two-column comparison | Headline "The Spec Is the Contract". Left (red): `"Build me a login form"` — ambiguous, anything goes. Right (green): specific feature spec — what it does, edge cases, success definition, failure definition. Rule: "Not detailed enough to be code — specific enough to be unambiguous." |
| `07-FleetBuildPlanScene.tsx` | Fleet Build Plan | Wave diagram | Headline "22 Files in Waves". Three wave rows staggered: Wave 1 (blue): README, architecture, tech stack docs. Wave 2 (purple): design system, component decisions, data model. Wave 3 (green): feature specs, instruction files, agent setup. Below: "Sequential dependency = sequential waves. Independent work = parallelized." |
| `08-PlanModePrereqsScene.tsx` | Plan Mode for Prerequisites | Dependency list | Headline "Map the Prerequisites First". Vertical dependency chain: `copilot-instructions.md` must exist → before any agents run. Design system doc → before any UI work. Data model → before any API work. "Plan mode surfaces these. Fleet executes after approval." |
| `09-RunningFleetScene.tsx` | Running Fleet | BulletList | Headline "Execute — Then Review". BulletList: "Launch the fleet", "Each agent works in isolation", "When a wave completes — review before launching the next", "Bad context in Wave 1 = bad output in Wave 3". Rule: "Don't approve wave outputs blindly. These documents shape everything downstream." |
| `10-ClosingScene.tsx` | Closing | Centered emphasis | Large bold: "22 files before one line of app code." Below: "That's the investment that prevents the 50% rework tax." Then: "The project instructions, the design system, the feature specs — these are not overhead. They are the infrastructure that makes AI generation reliable." Final fade: "Exercise 9 walks you through the full sequence." |

---

### Task 9: Lesson 10 — The Business Ecosystem

**Directory:** `remotion/src/lessons/lesson-10-business-ecosystem/`

**Files to create:**
- `Root.tsx` — composition ID: `BusinessEcosystem`
- `MainVideo.tsx` — imports 10 scene components
- `calculateMetadata.ts` — lesson-10 paths
- `index.css` — copy from lesson-1

**Scenes (10):**

| File | Scene | Layout | Key Content |
|---|---|---|---|
| `01-SameStructureScene.tsx` | Same Structure, Different Domain | Two-column | Left (blue): "Dev Pipeline — Atlas" — Orchestrator, Planners, Learners, Doers, Feedback, Guardians, Tool Operators, Presenters. Right (green): "Business Pipeline — Themis" — same 8 categories, different domain. Bold: "The patterns transfer. The tooling transfers. Only the subject matter changes." |
| `02-ThemisScene.tsx` | Themis | Centered InfoCard | Large InfoCard. Icon ⚖️. Title "Themis — The Business Orchestrator". Body: named after the Titan of divine law and governance, coordinates the business pipeline: research → define → validate → communicate. "When a task is business-domain — Themis owns it. Atlas handles the code." Color: green. |
| `03-LearnerLayerScene.tsx` | Learner Layer | BulletList | StepBadge "BUSINESS — LEARNERS". BulletList: `po-docs-auditor` (surveys documentation from a PO perspective), `architecture-reader` (maps codebase for stakeholders). Note: "Prevents the most common product failure: shipping something that doesn't match what was specified." |
| `04-DoerLayerScene.tsx` | Doer Layer | BulletList | StepBadge "BUSINESS — DOERS". BulletList: `technical-writer` (user docs, onboarding, stakeholder summaries), `changelog-writer` (version entries), `release-notes-writer` (translates commits into readable summaries), `docs-sync-writer` (keeps dev docs in sync with code). Note: "These do the writing work that developers defer indefinitely." |
| `05-FeedbackScene.tsx` | Feedback | InfoCard | StepBadge "BUSINESS — FEEDBACK". InfoCard: "`po-docs-auditor` in audit mode" — assesses whether documentation meets product owner standards. "The feedback loop mirrors the dev side: doer produces, feedback agent evaluates, doer iterates. Different audience — same pattern." |
| `06-GuardiansScene.tsx` | Guardians | BulletList | StepBadge "BUSINESS — GUARDIANS". BulletList: "Protect accuracy and compliance", "Run after doers", "Catch what slips through". Warning: "A published document with internal pricing data or unreleased feature details is as damaging as a committed secret." |
| `07-ToolOperatorsScene.tsx` | Tool Operators | BulletList | StepBadge "BUSINESS — TOOL OPERATORS". BulletList: `github-issue-creator` (translates findings into tracked issues), `changelog-writer` (pushes to CHANGELOG.md), `pr-description-writer` (bridges dev and business pipelines). Note: "Tool operators are why the business pipeline's output reaches the people who need it." |
| `08-TheBridgeScene.tsx` | The Bridge | Two-pipeline diagram | Headline "Two Pipelines. One Bridge." Left column (blue): "Dev Pipeline — Atlas" with downward arrow. Right column (green): "Business Pipeline — Themis" with downward arrow. Center connecting both: `solution-bridge-writer`. Below: "Business requirements → Themis → solution-bridge-writer → Atlas → shipped feature." |
| `09-AtlasThemisScene.tsx` | Atlas ↔ Themis | Sequential pipeline | Headline "The Full End-to-End". Vertical sequence staggered: 1. Product owner describes feature (Themis). 2. `po-docs-auditor` identifies gaps. 3. `technical-writer` fills them. 4. `solution-bridge-writer` translates to dev-ready spec. 5. Atlas receives spec. 6. `task-planner` decomposes. 7. Fleet executes. 8. `code-reviewer` + `security-auditor` validate. 9. `pr-description-writer` closes the loop. |
| `10-ClosingScene.tsx` | Closing | Centered emphasis | Large: "Ten lessons. Two ecosystems. One pipeline." Below: "You started with installing the CLI. You end with a complete system that connects business intent to shipped code with every quality gate in between." Final line: "The tools don't replace your judgment — they amplify it." |

---

## Wave 2 — Integration (after all lesson tasks complete)

### Task 10: Update `remotion/src/Root.tsx` + `remotion/package.json`

**File:** `remotion/src/Root.tsx`

Add imports and `<Composition>` entries for all 9 new lessons (0, 3–10). Follow the exact pattern used for Lesson 1 and Lesson 2. Each composition needs:
- Import `MainVideo` from the lesson folder
- Import `calculateMetadata` from the lesson folder
- Import `TOTAL_FRAMES` and `VOICEOVER_SCENES` from the lesson's `voiceover-config`
- A `<Composition>` block with the correct `id`, `component`, `calculateMetadata`, `durationInFrames`, `fps={30}`, `width={1920}`, `height={1080}`, and `defaultProps`

Composition IDs must match what was specified in each lesson task:
- Lesson 0: `UpgradeGuide`
- Lesson 3: `FourAutomationLayers`
- Lesson 4: `AgentEcosystem`
- Lesson 5: `ContentTypes`
- Lesson 6: `BuildingAgents`
- Lesson 7: `WorkflowGitflow`
- Lesson 8: `SkillsAndMcp`
- Lesson 9: `ProjectSetup`
- Lesson 10: `BusinessEcosystem`

**File:** `remotion/package.json`

Add `studio:lesson-N` and `render:lesson-N` scripts for lessons 0 and 3–10:
```json
"studio:lesson-0": "cross-env LESSON=0 remotion studio",
"studio:lesson-3": "cross-env LESSON=3 remotion studio",
...
"render:lesson-0": "cross-env LESSON=0 remotion render",
"render:lesson-3": "cross-env LESSON=3 remotion render",
...
```
Do not add `voiceover:lesson-N` scripts — voiceover generation is blocked until the author approves visuals.

---

## Completion Criteria

All tasks complete when:
- [ ] All 9 lesson folders have `Root.tsx`, `MainVideo.tsx`, `calculateMetadata.ts`, `index.css`, and a populated `scenes/` directory
- [ ] `remotion/src/Root.tsx` registers all 11 compositions (lessons 0–10, excluding none)
- [ ] `remotion/package.json` has `studio:` and `render:` scripts for all lessons
- [ ] `AUDIO_ENABLED = false` in every `voiceover-config.ts` — confirmed unchanged
- [ ] Studio starts without errors on `npm run dev` (or any `studio:lesson-N` command)
- [ ] No ElevenLabs API calls are made at any point
