---
title: "From zero to programming with agentic AI"
date: 2024-01-01
image: /images/workshop/taller-ia-agentica.webp
description: "A roughly 3-hour workshop to go from asking a chatbot for code to working with agents that edit files, run tests and open PRs. Run after the NASA Hackathon on 3 October."
tags: ["AI"]
---

<!-- TODO: set the real date in the frontmatter and under "When" once it is confirmed -->

**When:** date to be confirmed. The meetup and the open agentic AI workshop will take place **after the NASA Hackathon on Saturday 3 October**. We will announce it on the [Hackerspace Valencia Meetup](https://www.meetup.com/es-ES/hackerspace-valencia/) and here.

If you have ever asked ChatGPT for a function and then pasted it into your project by hand, this workshop is about the next step: an agent that opens your files, changes the code, runs the tests and, if they fail, tries again without you stepping in. A chatbot answers you; an agent does the work.

It is run by Ignacio LD, who works this way every day, and what you see is the real workflow: the tools, how the work gets split across several agents, and the mistakes already made so you don't have to repeat them. We put it together with the hackathon in mind, where knowing how to parallelise well over a weekend lets you do the work of three people, but it is useful for anyone who codes or wants to start.

## Who it is for

The audience is mixed and the workshop starts from scratch. If you have never used an agent, the first part is for you. If you already use opencode or Claude Code, from the second part on you will see things you probably haven't set up yet: several agents at once, worktrees, memory across sessions and MCP.

## What we will cover

1. **Fundamentals.** Chatbot vs agent. The loop every agent runs on: perceive, decide, act, observe. Tools (read, edit, run), the context window, and why an agent gets sloppy when it fills up.
2. **Harnesses and models.** What a harness is (opencode, Claude Code, Codex) and how to pick a model per task: local or free ones for drafts, cheap ones for volume, expensive ones only for the hard parts. Subagents.
3. **Several agents at once with Herdr.** A terminal multiplexer built for agents: you see which one is working, which one is done and which one is blocked waiting for you, and you jump straight to it.
4. **Orchestrator and workers.** Splitting a task into independent streams, each in its own git worktree with its own PR. How to write the brief, review, merge carefully and keep costs under control.
5. **Memory across sessions with Engram.** So today's agent knows what you decided yesterday.
6. **Configuration.** `AGENTS.md`, your own agents and commands, skills, hooks and safety limits so an agent never gets more power than it needs.
7. **MCP for beginners.** What the Model Context Protocol is and how to connect the agent to your own stuff.
8. **Remote agents.** Leaving agents working on another machine (a VPS, a Raspberry Pi) and steering them from your laptop.
9. **Slides with AI.** The workshop's own slides are Markdown with Slidev and were built with agents.
10. **Wrap-up.** A minimal path to get started the next day, a checklist for the hackathon and the most expensive mistakes.

There are four live demos: three agents working in parallel, an orchestrator that splits a task between two workers and ends with two PRs, an agent recalling a decision saved in another session, and a slide generated live.

## Format

- About 3 hours, with a 10-minute break halfway.
- Lots of live work, little theory. The goal is not to leave knowing the theory, but with your own workflow set up. One agent and one rules file are enough to start; the rest comes later.
- In Spanish.

## What you need

- Your laptop.
- No previous AI experience needed. Knowing some programming and getting around a terminal helps, but it is not essential.
- If you want a head start, bring Git and a harness such as opencode or Claude Code installed. You don't need to pay for anything to follow along: we cover local and free models.

## Where and how to sign up

- **Place:** Hackerspace Valencia, C/ de Francesc Martinez, 19, 46020 València (Benimaclet).
- **Sign-up:** on the [Hackerspace Valencia Meetup](https://www.meetup.com/es-ES/hackerspace-valencia/), as soon as we publish the date.
- Spots are limited. If you sign up and then can't make it, cancel your spot so someone else can come.
