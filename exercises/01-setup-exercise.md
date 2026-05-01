# Copilot Environment Setup — Exercise Cheatsheet

Quick-reference for the hands-on walkthrough. Each step has commands and a starter prompt to get you going.

---

## Step 1 — Install & Authenticate

```powershell
winget install GitHub.Copilot
copilot
/login
```

---

## Step 2 — Create Your Global Instructions

```powershell
New-Item -ItemType Directory -Path "$HOME\.copilot" -Force
New-Item "$HOME\.copilot\copilot-instructions.md"
```

**Starter prompt:**

> I want to set up my global copilot-instructions.md. Interview me one question at a time about my preferences: languages, frameworks, indentation, cloud platforms, testing, databases, communication style, and anything else you think matters. Then generate the file.

---

## Step 3 — Create a Dotfiles Repo (Sync Across Machines)

```powershell
mkdir "$HOME\dotfiles\.copilot"
Copy-Item "$HOME\.copilot\copilot-instructions.md" "$HOME\dotfiles\.copilot\"
cd "$HOME\dotfiles"
git init && git add -A && git commit -m "Initial dotfiles"
gh repo create dotfiles --private --source . --push
```

On a new machine, clone and symlink:

```powershell
git clone https://github.com/YOUR-USERNAME/dotfiles "$HOME\dotfiles"
New-Item -ItemType SymbolicLink `
  -Path "$HOME\.copilot\copilot-instructions.md" `
  -Target "$HOME\dotfiles\.copilot\copilot-instructions.md"
```

---

## Step 4 — Add Tool Configs to Your Project

```powershell
cd your-project
New-Item .editorconfig
New-Item .prettierrc
New-Item .prettierignore
npm install --save-dev prettier
```

**Starter prompt:**

> Analyze the formatting patterns across this project (indentation, quotes, semicolons, line endings). Then generate an .editorconfig, .prettierrc, and .prettierignore that match the existing conventions. Add format and format:check scripts to package.json.

---

## Step 5 — Add Repo-Level Copilot Instructions

```powershell
mkdir .github\instructions
New-Item AGENTS.md
New-Item .github\copilot-instructions.md
```

**Starter prompt for AGENTS.md:**

> Read through this entire project. Identify the critical rules that any AI tool must follow — things that would break the project if violated. Generate an AGENTS.md with those rules.

**Starter prompt for copilot-instructions.md:**

> Read through this project's README, docs, and source code. Generate a .github/copilot-instructions.md that covers: project purpose, tech stack, folder structure, conventions, workflow, and what NOT to do.

---

## Step 6 — Add Task-Specific Instructions

```powershell
New-Item .github\instructions\my-domain.instructions.md
```

**Starter prompt:**

> I have detailed reference docs in [docs/your-doc.md]. Extract the rules an AI agent needs to follow into a condensed .github/instructions/ file. Keep it under 50 lines — just the rules, no background.

---

## Step 7 — Create Custom Agents

```
/agent → Create new agent → Project or User
```

Or manually:

```powershell
mkdir .github\agents
New-Item ".github\agents\my-agent.agent.md"
```

**Starter prompt:**

> Create a custom agent called [name] that specializes in [task]. It should only have access to [read/edit/search/execute — pick what it needs]. It should never [constraint]. Output format should be [format].

---

## Step 8 — Connect MCP Servers

The GitHub MCP server is **built-in** — no setup needed. You already have access to issues, PRs, code search, and more via natural language.

To add additional servers:

```
/mcp add
```

Or edit the config file directly:

| Scope | File |
|---|---|
| Personal | `~/.copilot/mcp-config.json` |
| Per-project | `.copilot/mcp-config.json` |

**Try it — ask something that uses GitHub data:**

> Show me the 5 most recently updated open issues in this repo.

**Manage servers:**

```
/mcp show       — list all servers and status
/mcp edit NAME   — edit a server
/mcp disable NAME — temporarily disable
```

---

## Step 9 — Choose Your Model

```
/model
```

Pick based on the task:

| Task type | Model tier | Examples |
|---|---|---|
| Simple / repetitive | Lightweight | Haiku, GPT-5 mini, GPT-4.1 |
| Most daily work | Standard | Sonnet, GPT-5.1, GPT-5.2 |
| Complex / architecture | Heavy | Opus, GPT-5.3 Codex |

> ⚠️ Models have **premium request multipliers**. Haiku costs ~0.25× per prompt, Opus costs ~5×. Check with `/model`.

---

## Step 10 — Use Plan Mode

Press **Shift+Tab** once to enter **Plan mode**. This is the most important mode to get comfortable with — it's your review gate before anything gets built.

**What plan mode does:**

Plan mode makes Copilot map out *exactly what it's going to do* — which files it will create, which it will modify, what the logic will be — before it does any of it. You see the full plan, can push back or redirect, and only then approve execution.

**The workflow:**

1. **Shift+Tab** → Plan mode (you'll see `[Plan]` in the prompt)
2. Describe your objective
3. Copilot generates a step-by-step plan — review it carefully
4. Push back on anything you disagree with: *"Step 3 is wrong — don't touch that file"*
5. When the plan looks right: `Accept plan and build on autopilot`

**When you should use plan mode:**

| Scenario | Use plan? |
|---|---|
| Creating or modifying more than 2–3 files | ✅ Yes |
| Any autopilot or fleet run | ✅ Yes — always plan first |
| Building a new feature from scratch | ✅ Yes |
| Refactoring existing code | ✅ Yes |
| Asking a question or exploring | ❌ No — just talk to it |
| Single-file, clear-cut edit | ❌ Optional — often fine without |

**Starter prompt (in plan mode):**

> I need to [describe objective]. Walk me through a plan. Consider [constraints]. Show me exactly which files you'll create or modify and what each change will be. I'll approve before you build anything.

**Tip:** If a plan goes off the rails mid-execution, **Ctrl+C** stops it. Then `/diff` shows what changed so you know what to revert.

---

## Step 11 — Try Autopilot Mode

Autopilot is what runs *after* a plan is approved. Press **Shift+Tab** twice to cycle directly to **Autopilot**, or use the "Accept plan and build on autopilot" option at the end of plan mode.

**Safety checklist before every autopilot run:**
- Commit your work first (`git add -A && git commit -m "before autopilot"`)
- Use `--max-autopilot-continues 10` to cap autonomous steps
- Run `/diff` after to review all changes before committing the result
- Never commit autopilot output without reading it

**Starter prompt (in plan mode, then hand off to autopilot):**

> I need to [describe objective]. Walk me through a plan. Consider [constraints]. When the plan is ready, I'll run it on autopilot.

---

## Step 12 — Try Fleet

**Starter prompt:**

> /fleet [Describe your objective]. Break this into parallel tracks:
>
> 1. [Track 1]: [files/scope] — [deliverable]
> 2. [Track 2]: [files/scope] — [deliverable]
> 3. [Track 3]: [files/scope] — [deliverable] (depends on 1)
>
> No changes outside assigned directories. All tracks must pass [lint/tests].

Monitor with `/tasks`.

**Pro tip:** Combine with plan mode for maximum control:

```
Shift+Tab → plan → refine → "Accept plan and build on autopilot + /fleet"
```

---

## Step 13 — Verify Everything

```
/instructions    — loaded instruction files
/env             — full environment details
/skills list     — loaded skills
/agent           — available custom agents
/model           — current model and multiplier
/mcp show        — connected MCP servers
```

---

## Quick Reference

| What | Where |
|---|---|
| Global instructions | `~/.copilot/copilot-instructions.md` |
| Global agents | `~/.copilot/agents/*.agent.md` |
| Global skills | `~/.copilot/skills/*/SKILL.md` |
| Global MCP config | `~/.copilot/mcp-config.json` |
| Repo critical rules | `AGENTS.md` (repo root) |
| Repo instructions | `.github/copilot-instructions.md` |
| Task-specific instructions | `.github/instructions/*.instructions.md` |
| Repo agents | `.github/agents/*.agent.md` |
| Repo skills | `.github/skills/*/SKILL.md` |
| Repo MCP config | `.copilot/mcp-config.json` |
| Tool configs | `.editorconfig`, `.prettierrc`, `.eslintrc`, `tsconfig.json` |

| Mode | Activation | Purpose |
|---|---|---|
| Interactive | Default | Step-by-step with approval |
| Plan | Shift+Tab | Create plan without executing |
| Autopilot | Shift+Tab ×2 | Autonomous execution |
| Fleet | `/fleet` prompt | Parallel subagent execution |

---

*Full details: [02-copilot-environment-walkthrough.md](02-copilot-environment-walkthrough.md)*

| Mode | Activation | Purpose |
|---|---|---|
| Interactive | Default | Step-by-step with approval |
| Plan | Shift+Tab ×1 | Map the work before doing it — always use before autopilot |
| Autopilot | Shift+Tab ×2 | Autonomous execution of an approved plan |
| Fleet | `/fleet` prompt | Parallel subagent execution |
