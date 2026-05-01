# dotfiles-presentation

This repository serves two purposes:

1. **Educational exercises** — a practical, self-paced guide to setting up a GitHub Copilot AI development environment, building custom agents, and organizing an agent ecosystem. Start here: **[exercises/00-start-here.md](exercises/00-start-here.md)**

2. **Video source** — the source code for an AI-generated, voice-narrated walkthrough of the dotfiles repository, built with Remotion.

---

## 👉 New Here? Start With the Exercises

If you're here to learn how to set up an AI-assisted development environment:

**[→ exercises/00-start-here.md](exercises/00-start-here.md)**

The exercises cover everything from first-time Copilot setup through building a fully orchestrated agent ecosystem. No prior AI tooling experience required.

---

## Video Project

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Built with [Remotion](https://www.remotion.dev) - programmatic video creation in React.

## Getting Started (Video Project)

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Generate Voiceover**

This project uses ElevenLabs TTS API to generate voiceovers. Create a `.env` file with:

```
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

Then generate voiceovers:

```console
node --env-file=.env --strip-types scripts/generate-voiceover.ts
```

**Render video**

```console
npx remotion render
```

## Documentation

- [Remotion Docs](https://www.remotion.dev/docs/the-fundamentals)
- [ElevenLabs API](https://elevenlabs.io/docs/api)

## License

Note that for some entities a company license is needed. [Read the Remotion terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
