# dotfiles-presentation — Video Project

AI-generated, voice-narrated walkthrough of the dotfiles repository. Built with [Remotion](https://www.remotion.dev) — programmatic video creation in React.

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

---

## Getting Started

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Generate Voiceover**

This project uses ElevenLabs TTS API to generate voiceovers. Create a `.env` file in this directory with:

```
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

Then generate voiceovers:

```console
node --env-file=.env --strip-types scripts/generate-voiceover.ts
```

**Render Video**

```console
npx remotion render
```

---

## Project Structure

```
remotion/
├── src/                    # Remotion components and scenes
│   └── lessons/
│       ├── lesson-1-ai-env-setup/
│       └── lesson-2-lessons-learned/
├── public/voiceover/       # Generated MP3 audio files
├── scripts/                # Voiceover generation scripts (ElevenLabs)
├── remotion.config.ts
├── tsconfig.json
└── package.json
```

---

## Documentation

- [Remotion Docs](https://www.remotion.dev/docs/the-fundamentals)
- [ElevenLabs API](https://elevenlabs.io/docs/api)

## License

Note that for some entities a company license is needed. [Read the Remotion license terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
