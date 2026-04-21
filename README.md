# dotfiles-presentation

This is an AI-generated voice-narrated walkthrough of the dotfiles repository. A comprehensive video guide to best practices for AI environment setup.

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Built with [Remotion](https://www.remotion.dev) - programmatic video creation in React.

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

This project uses ElevenLabs TTS API to generate voiceovers. Create a `.env` file with:

```
ELEVENLABS_API_KEY=your_api_key_here
ELEVENLABS_VOICE_ID=your_voice_id_here
```

Then generate voiceovers:

```console
node --env-file=.env --strip-types generate-voiceover.ts
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
