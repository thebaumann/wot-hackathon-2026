# AI Cutting Assistant Landing Page — Hackathon Prototype

This project was built at the [Women of Tech Germany](https://www.womenoftech.de/) Conference 2026 Hackathon, hosted at TRUMPF SE + Co. KG in Ditzingen.

TRUMPF set the challenge: develop a go-to-market strategy for the TRUMPF AI Cutting Assistant — implemented as an interactive landing page with audience-specific content and an embedded AI chatbot. Teams had half a day to build their solution before presenting it to a jury.

This repo contains our hackathon result — an unofficial prototype with no commercial intent.

---

## Features

- **Audience-specific content** — persona selector for Operator / Management / Quality
- **Multilingual** — 7 languages: German, English, French, Spanish, Italian, Japanese, Chinese
- **AI Chatbot** — floating chat widget powered by Claude (Anthropic), context-aware per audience
- **Offline demo mode** — without an API key, the chatbot responds with pre-written example answers
- **Responsive** — fully optimized for mobile

---

## Tech Stack

| Area | Technology |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Internationalization | i18next + i18next-browser-languagedetector |
| AI | Claude API (Anthropic) — SSE Streaming |

---

## Local Development

```bash
git clone https://github.com/thebaumann/wot-hackathon-2026.git
cd wot-hackathon-2026
npm install
```

Create a `.env` file:

```env
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Without an API key the app runs in **offline demo mode**.

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.