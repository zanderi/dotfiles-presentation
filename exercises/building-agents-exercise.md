# Building Your First Agent — Exercise

> **Prerequisite:** Complete `setup-exercise.md` and read `agent-ecosystem-guide.md` first — you need a working Copilot environment and an understanding of where agents live before building one.
>
> **Goal:** Build a real, working agent using `pfs-agent-builder` as your guide. By the end, you'll have contributed a new agent to the shared ecosystem and understand the patterns well enough to build the next one on your own.

---

## Before You Start

Two questions to answer before opening the CLI:

**1. What problem are you solving?**
A good agent has a single, clear job. "Review my code" is too broad. "Check all Cosmos DB queries for missing partition key filters and flag them with severity ratings" is an agent.

**2. Does this agent already exist?**
Check before building:
```powershell
# Check universal agents (dotfiles)
Get-ChildItem "$HOME\.copilot\agents" -Filter "*.agent.md" | Select-Object Name

# Check PFS shared agents
Get-ChildItem "C:\workspace\PFS.Utility.Common.Agents\agents" -Filter "*.agent.md" | Select-Object Name

# Check repo-specific agents
Get-ChildItem ".\.copilot\agents" -Filter "*.agent.md" | Select-Object Name
```

If something close exists, extend it or use it as a reference — don't duplicate.

---

## Step 1 — Pick Your Path

Open the agent builder:
```
/agent → pfs-agent-builder
```

You'll be offered two paths:

**Path A — Pick a backlog item**
The `AGENTS_BACKLOG.md` in `PFS.Utility.Common.Agents` has a list of agents already scoped and ready to build. Each one has a full spec: purpose, behavior, output format, and which other agents it works alongside. This is the fastest path to a production-quality agent because the hard thinking is already done.

> 👉 **Start here** if this is your first agent. Pick a backlog item in the 🔴 High priority category.

**Path B — Build something new**
Describe your idea to the agent builder. It will walk you through a decision tree to determine whether you need an agent, a workflow, an instruction file, a skill, or a prompt template — and then guide you through building it.

> 👉 Use Path B when you've identified a gap that isn't in the backlog yet.

---

## Step 2 — Answer the Content-Type Decision Tree (Path B only)

If you're building something new, the agent builder will ask you a series of questions. Here's what they mean:

| Question | If Yes → | If No → |
|----------|---------|---------|
| Does it need back-and-forth with the user, make judgment calls, or handle multiple responsibilities? | **Agent** | Continue |
| Does it have a clear, ordered sequence of steps that must happen in a specific order? | **Workflow** | Continue |
| Is it context that Copilot should *always know* — not triggered manually? | **Instruction** | Continue |
| Is it a single, stateless, atomic capability that does one thing every time? | **Skill** | **Prompt** |

Most things engineers want to build are **agents**. Workflows are for multi-step playbooks (like a PR review gate). Instructions are for persistent context you paste into `.github/copilot-instructions.md`. Skills are for simple utilities.

---

## Step 3 — Choose the Right Category

Every agent belongs to one of eight categories. The builder will ask which one applies. Choose carefully — the category determines when the agent runs and who it works alongside.

| Category | Pick this when your agent... |
|----------|------------------------------|
| 🤖 Orchestrator | Is Atlas (you don't build these here — they're personal) |
| 🧠 Planning | Decomposes goals or routes work to other agents |
| 📚 Learners | Reads existing code/architecture to surface patterns |
| ⚙️ Doers | Generates, scaffolds, or writes code |
| 🔍 Feedback | Reviews output for quality, correctness, or coverage |
| 🛡️ Guardians | Enforces a safety gate (security, contracts, migrations) |
| 🔧 Tool Operators | Integrates with GitHub, CI/CD, or package systems |
| 📋 Presenters | Produces human-readable summaries or documentation |

If it feels like it belongs in two categories, it probably needs to be split into two agents.

---

## Step 4 — Name It

The naming convention is enforced — don't skip this.

| Scope | Convention | Example |
|-------|-----------|---------|
| PFS shared agent | `pfs-<purpose>` | `pfs-database-auditor` |
| Repo-specific agent | `<project>-<purpose>` | `machina-api-scaffolder` |
| Universal agent | `<verb>-<noun>` | `security-auditor` |

**Rules:**
- Kebab-case only — no spaces, underscores, or camelCase
- Must be unique across the repo — the builder will check
- The prefix must clearly identify scope — `api-scaffolder` is wrong (too generic); `machina-api-scaffolder` is right

---

## Step 5 — Write the Agent

The builder will guide you through each section. Here's what makes an agent excellent vs. mediocre:

### The `description` field — most important line in the file

This controls when Copilot auto-invokes the agent. It must include:
- Trigger phrases ("Use this agent when...")
- 2–3 concrete examples of what a user would say to trigger it
- A clear statement of what it does NOT cover (prevents overlap with other agents)

❌ **Weak description:**
> "Reviews database queries"

✅ **Strong description:**
> "Use this agent when you want to audit Cosmos DB or EF Core data access code for safety and correctness. Trigger phrases: 'audit my database queries', 'check my Cosmos DB code', 'review data access layer'. Examples: User says 'check these Cosmos DB queries before I submit my PR' → invoke to run partition key, MaxItemCount, and injection checks. Note: For general code quality, use pfs-code-reviewer instead."

### Hard rules section

Every agent needs a list of things it must NEVER do. This is what separates reliable agents from unpredictable ones.

Common hard rules:
- Never auto-fix without asking
- Never skip an item because it looks minor
- Never document behavior that wasn't confirmed
- Never invent details not present in the source

### Output format

Define exactly what the output looks like — with an example. Agents without a defined output format produce inconsistent results that are hard to act on.

```
**Output format:** Severity-rated findings list:
🔴 [Critical] file.cs:42 — Missing partition key filter; query will fan-out across all partitions
🟠 [High] file.cs:78 — MaxItemCount not set; unbounded read
🟡 [Medium] file.cs:103 — Hardcoded string used as LocationId instead of LocationIds constant
```

---

## Step 6 — Test It Before Submitting

Before submitting a PR, run your agent on real code:

```
/agent → <your-new-agent-name>
```

Ask it to review a real file or execute a real task. Check:
- Does it trigger when you expect it to?
- Does the output match the format you defined?
- Does it stay within its defined scope?
- Do the hard rules actually hold?

If it drifts outside its scope or produces inconsistent output, go back and tighten the instructions and hard rules.

---

## Step 7 — Submit a PR

Once the agent is working:

1. The builder will have created the file in `agents/` (or the correct location for repo-specific agents)
2. It will have registered the agent in the appropriate README table
3. It will have removed the item from `AGENTS_BACKLOG.md` if you built a backlog item

Submit a PR to `PFS.Utility.Common.Agents` (or the relevant repo). Tag a teammate to review it — another set of eyes on an agent file catches scope creep and weak hard rules.

---

## What a Complete Ecosystem Looks Like

A well-staffed project has agents covering every category. Here's the target state:

| Category | Minimum viable | Full coverage |
|----------|---------------|---------------|
| 🤖 Orchestrator | Atlas configured with project instructions | Atlas + PFS gitflow standards |
| 🧠 Planning | `agent-builder` | + `task-planner` |
| 📚 Learners | `repo-auditor` | + `context-reader` + `architecture-reader` |
| ⚙️ Doers | `project-scaffolder` | + repo-specific scaffolders + `slice-test-generator` |
| 🔍 Feedback | `code-reviewer` | + `accessibility-auditor` + `bdd-scenario-runner` + `playwright-test-writer` + `database-auditor` + `test-coverage-analyzer` |
| 🛡️ Guardians | `security-auditor` + `env-config-reviewer` | + `dependency-auditor` + `api-contract-reviewer` + `migration-auditor` |
| 🔧 Tool Operators | `pr-description-writer` | + `docs-sync-writer` + `github-issue-creator` |
| 📋 Presenters | `technical-writer` | + `implementation-summary` + `release-notes-writer` |

The gap between "minimum viable" and "full coverage" is the backlog. Every agent you build moves the team closer to a fully automated, AI-assisted development pipeline where the only decisions left for humans are the ones that actually require human judgment.

---

## Starter Prompt

If you want Atlas to walk you through the entire process rather than running `pfs-agent-builder` directly:

> I want to build a new Copilot agent for our PFS ecosystem. The problem I'm trying to solve is: [describe the gap]. Walk me through choosing the right content type, picking the right category, naming it correctly, and writing a production-quality agent file. Use the pfs-agent-builder approach — don't skip the decision tree or the hard rules section.

---

## Reference

- `agent-ecosystem-guide.md` — Full taxonomy and pipeline diagram
- `PFS.Utility.Common.Agents/AGENTS_BACKLOG.md` — Backlog items ready to build
- `PFS.Utility.Common.Agents/ARCHITECTURE.md` — Mermaid diagram and full agent inventory
- `PFS.Utility.Common.Agents/agents/pfs-code-reviewer.agent.md` — Gold standard reference for agent quality
