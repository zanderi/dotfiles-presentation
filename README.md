# Start Here — AI Development Environment Guide

Welcome. If you found this repo and aren't sure what it is or where to begin, this is the right place.

---

## What This Is

This repository is a **practical guide to setting up an AI-assisted development environment** using GitHub Copilot. It covers everything from first installation to building a fully orchestrated ecosystem of specialized AI agents that work together across your entire development pipeline.

The exercises here are written for software engineers — whether you're completely new to AI tooling or already using Copilot and want to use it more effectively. No prior experience with AI agents is required.

---

## What You'll Learn

By working through these exercises you'll be able to:

- Configure GitHub Copilot to know your tech stack, coding conventions, and preferences
- Understand how instruction layers work and how to use them to give Copilot persistent context
- Set up a `dotfiles` repo that syncs your AI configuration across every machine you work on
- Design and build your own custom AI agents for repeated tasks
- Understand how to organize agents into a coherent ecosystem where each one has a clear, specialized role
- Build a project from scratch using Copilot as a full design partner — not just a code autocomplete

---

## Prerequisites

Before starting, you'll need:

- [ ] A GitHub account
- [ ] [GitHub Copilot CLI](https://githubnext.com/projects/copilot-cli) installed and authenticated
- [ ] Git installed and configured
- [ ] A code editor (VS Code recommended)
- [ ] Basic familiarity with the command line (PowerShell or bash)

You do **not** need a specific tech stack. The concepts apply regardless of language or framework. Examples throughout these exercises use .NET and Vue, but the principles are universal.

---

## How to Work Through This

The exercises are numbered — work through them in order. Each one builds on the previous.

| # | Exercise | What You'll Do | Time |
|---|----------|---------------|------|
| 01 | [Setup Exercise](exercises/01-setup-exercise.md) | Install Copilot, create your global instructions, set up your dotfiles repo | ~30 min |
| 02 | [Environment Walkthrough](exercises/02-copilot-environment-walkthrough.md) | Understand the instruction hierarchy — how global, repo, and task-level context layers work | ~20 min |
| 03 | [Agent Ecosystem Guide](exercises/03-agent-ecosystem-guide.md) | Learn the 8-category agent taxonomy and how a complete AI development pipeline is structured | ~30 min |
| 04 | [Project Setup Exercise](exercises/04-project-setup-exercise.md) | Kick off a new project using Copilot as a design partner — docs, specs, and build plan | ~45 min |
| 05 | [Building Agents Exercise](exercises/05-building-agents-exercise.md) | Build your first custom agent and contribute it to the shared ecosystem | ~1 hour |

You can also read any exercise as a standalone reference — each one is self-contained.

---

## Glossary

### A

**Agent**
A specialized AI persona with a defined role, scope, and hard rules. An agent is configured via an `.agent.md` file and invoked by name in a Copilot CLI session. Unlike a general prompt, an agent has a persistent personality, output format, and behavioral constraints. Example: a `security-auditor` agent that only reviews for OWASP vulnerabilities and never writes code.

**Atlas**
The name given to a developer's primary, personal AI agent — configured in `~/.copilot/copilot-instructions.md`. Atlas is the orchestrator: it receives your intent, decides which specialist agents to invoke, and coordinates the session. Every developer's Atlas is slightly different because it reflects their individual stack, conventions, and preferences.

### C

**Copilot CLI**
The GitHub Copilot command-line interface — a terminal application that lets you interact with AI in your development workflow. Different from the VS Code extension: the CLI is session-based, supports custom agents and skills, and is designed for multi-step development tasks.

**`copilot-instructions.md`**
The file that configures Atlas. Stored at `~/.copilot/copilot-instructions.md` for global (personal) configuration, or at `.github/copilot-instructions.md` for repo-level configuration. Copilot reads this file at the start of every session and uses it as persistent context.

### D

**Dotfiles**
A repository that stores your personal configuration files and syncs them across machines using symlinks or junctions. In the context of this guide, your dotfiles repo stores your `copilot-instructions.md`, custom agents, skills, and templates so your AI configuration follows you to every machine.

**Doers**
One of the eight agent categories. Doer agents execute work — they scaffold, generate, write, and refactor code. They produce their best output after Learner agents have already surfaced the existing patterns to follow.

### F

**Feedback Agents**
One of the eight agent categories. Feedback agents validate quality after Doers produce output — code review, accessibility auditing, BDD test scenarios, E2E tests, performance review. They run before Guardians.

### G

**GitFlow**
A branching strategy that defines how code moves from feature branches through development, staging, and into production. In this guide, the GitFlow workflow is the backbone of the agent pipeline — different agents run at different stages of the GitFlow lifecycle.

**Guardians**
One of the eight agent categories. Guardian agents enforce safety gates — security vulnerabilities, hardcoded secrets, breaking API changes, unsafe database migrations. They run after Feedback and before PR submission.

### I

**Instruction File**
A markdown file containing rules or context that should be injected into a repo's `.github/copilot-instructions.md`. Unlike agents (which are invoked manually), instructions are always-on background context. They're not interactive — they're things Copilot should always know.

### L

**Learners**
One of the eight agent categories. Learner agents are RAG (Retrieval-Augmented Generation) agents that read the existing codebase before any generative work begins. They surface patterns, naming conventions, and reference examples so Doers generate code consistent with what already exists.

### O

**Orchestrator**
The top-level category containing only Atlas. The orchestrator coordinates all other agents — it doesn't specialize in any single task but knows how to route work to the right specialist and interpret the output.

### P

**Planning Agents**
One of the eight agent categories. Planning agents receive a goal (a ticket, feature description, or plain-language request) and decompose it into a sequenced plan of agent invocations.

**Presenters**
One of the eight agent categories. Presenter agents produce human-readable output — implementation summaries, release notes, changelogs, user documentation. They run last in the pipeline and make AI-generated work reviewable by humans.

**Prompt**
A reusable markdown template with `{{placeholder}}` variables. Unlike an agent, a prompt has no persistent personality — it's a starting point the developer fills in and submits. Good for: bug fix starters, PR description templates, standup generators.

### R

**RAG (Retrieval-Augmented Generation)**
A technique where an AI agent reads existing files before generating output, using what it finds to ground its responses in reality. In this ecosystem, Learner agents use RAG — they read your codebase before any Doer generates code, ensuring the output matches existing patterns.

### S

**Skill**
A simple, stateless, single-purpose capability registered in a Copilot session. Unlike an agent, a skill doesn't have a personality or judgment — it just does one thing every time. Example: `get-current-datetime`, `validate-ulid-format`.

### T

**Tool Operators**
One of the eight agent categories. Tool Operator agents interface with external systems — GitHub (creating issues, writing PR descriptions), CI/CD pipelines, package registries. They handle the mechanical steps that connect local work to the outside world.

### W

**Workflow**
A multi-step AI playbook — an ordered sequence of instructions assembled into a named agent. Unlike a single-turn prompt, a workflow walks through multiple steps with conditional logic. Example: a `pfs-feature-pr` workflow that runs code review, then security audit, then generates a PR description. Note: workflow steps are independent — state is not automatically passed between them.

---

## About This Repo

This repository also contains the source code for a video series on AI development environment setup, built with [Remotion](https://www.remotion.dev). The video project lives in the [`remotion/`](remotion/) folder, which has its own README with setup and rendering instructions.

---

## Questions and Contributions

If something is unclear, out of date, or missing — open an issue or submit a PR. This guide is a living document and evolves as the tooling evolves.
