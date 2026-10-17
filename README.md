# OpenUI Generative Agent Component

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js%2016-black.svg)](#)
[![Agent: OpenUI](https://img.shields.io/badge/Agent-OpenUI%20Dev-indigo.svg)](#)
[![Orchestration: LangGraph](https://img.shields.io/badge/Orchestration-LangGraph%20%2B%20LangChain-orange.svg)](#)

A generative UI component pipeline built with **OpenUI (@openuidev/cli)**, **Next.js 16**, and **LangChain / LangGraph**.

![Streaming model output resolved into structured interface panels](assets/openui-generative-agent-overview.jpg)

---

## Why this exists

Generative UI usually breaks in the same two places: the model drifts away from
the components your app can actually render, and the front end has no schema to
validate against. This repository keeps one declarative component library as the
single source of truth, generates a machine-readable spec from it, and feeds that
spec to the agent at run time. The result is a chat surface that streams a layout
the renderer is guaranteed to understand, instead of prose that a human has to
translate into a screen afterwards.

## Overview

This repository demonstrates headless generative UI architecture:
- **Declarative Library Specification:** Generates serialized component schemas (`src/generated/spec.json`) from TypeScript library definitions.
- **Agentic Runtime:** LangChain / LangGraph integration for dynamic state management and live streaming UI generation.
- **RTK-Optimized Tooling:** Filtered build and execution outputs for zero-token context optimization.

---

## Tech Stack

- **Framework:** Next.js 16 (Turbopack, App Router)
- **UI & Generation:** React 19, `@openuidev/react-ui`, `@openuidev/lang-core`
- **Agent Logic:** `@langchain/langgraph`, `@langchain/core`, `@langchain/openai`
- **Validation & State:** Zod, Zustand

---

## Quickstart

### 1. Installation
```bash
git clone https://github.com/Amz34/openui-generative-agent.git
cd openui-generative-agent
npm install
```

### 2. Generate Component Spec
```bash
npm run generate
```

### 3. Start Development Server
```bash
npm run dev
```

---

## License
MIT © Aamir Zameer (Az. Consultancy)

---

Part of [my always-on agent stack](https://github.com/Amz34) · [Awesome Agent Infrastructure](https://github.com/Amz34/awesome-agent-infrastructure) (135 live-checked building blocks).
