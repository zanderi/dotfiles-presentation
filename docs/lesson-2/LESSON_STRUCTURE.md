# Remotion Video Project — Multi-Lesson Structure

## Overview
This document describes how to organize multiple lesson videos while keeping the existing "AI Dev Setup" video intact.

## Directory Structure

```
dotfiles-presentation/
├── src/
│   ├── shared/                           ← Shared components & utilities
│   │   ├── components/                   (existing, used by all lessons)
│   │   ├── constants.ts                  (existing)
│   │   ├── fonts.ts                      (existing)
│   │   └── index.css                     (existing)
│   │
│   ├── lessons/
│   │   ├── lesson-1-ai-env-setup/        ← EXISTING VIDEO (don't touch)
│   │   │   ├── Root.tsx
│   │   │   ├── MainVideo.tsx
│   │   │   ├── voiceover-config.ts
│   │   │   ├── calculateMetadata.ts
│   │   │   └── scenes/
│   │   │
│   │   ├── lesson-2-lessons-learned/     ← NEW VIDEO (this presentation)
│   │   │   ├── Root.tsx
│   │   │   ├── MainVideo.tsx
│   │   │   ├── voiceover-config.ts
│   │   │   ├── calculateMetadata.ts
│   │   │   ├── scripts/                  ← TEXT SCRIPTS (for review before audio)
│   │   │   │   ├── 00-introduction.md
│   │   │   │   ├── 01-model-selection.md
│   │   │   │   ├── 02-testing-strategy.md
│   │   │   │   ├── 03-planned-vs-reactive.md
│   │   │   │   ├── 04-componentization.md
│   │   │   │   ├── 05-conductor-thinking.md
│   │   │   │   ├── 06-project-setup.md
│   │   │   │   ├── 07-best-practices.md
│   │   │   │   └── 08-closing.md
│   │   │   └── scenes/
│   │   │
│   │   └── lesson-3-placeholder/        ← FUTURE VIDEO (placeholder)
│   │       └── (to be created)
│   │
│   ├── Root.tsx                         ← UPDATED: selector for which lesson
│   └── index.ts
│
├── public/
│   └── voiceover/
│       ├── lesson-1/                    ← Existing audio files
│       └── lesson-2/                    ← New audio files
│
├── remotion.config.ts                  ← Can stay unchanged
├── generate-voiceover.ts               ← UPDATED: support lesson selection
└── package.json
```

## Key Principles

1. **Shared Assets at Root:**
   - `src/shared/components/`, `src/shared/constants.ts`, etc. are used by all lessons
   - Each lesson imports from shared

2. **Lesson Isolation:**
   - Each lesson has its own `Root.tsx`, `MainVideo.tsx`, `voiceover-config.ts`
   - Lessons don't interfere with each other
   - You can develop/render one lesson independently

3. **Text-First Scripts:**
   - Before generating audio, scripts live in `scripts/` as `.md` files
   - You review and approve text scripts first
   - Only then generate audio via `generate-voiceover.ts`

4. **Voice Configuration:**
   - Each lesson specifies its voice (e.g., John Wayne for Lesson 2)
   - Voice ID stored in environment or voiceover-config.ts

5. **Selection at Runtime:**
   - New `Root.tsx` at project root reads an env var or URL param to choose which lesson to render
   - Example: `LESSON=2` renders Lesson 2, `LESSON=1` renders Lesson 1

---

## Implementation Steps

### Step 1: Create Lesson Directories

```bash
mkdir -p src/lessons/lesson-1-ai-env-setup/scenes
mkdir -p src/lessons/lesson-2-lessons-learned/scenes
mkdir -p src/lessons/lesson-2-lessons-learned/scripts
mkdir -p public/voiceover/lesson-1
mkdir -p public/voiceover/lesson-2
```

### Step 2: Move Existing Lesson 1 Files

Move these to `src/lessons/lesson-1-ai-env-setup/`:
- `Root.tsx` → `src/lessons/lesson-1-ai-env-setup/Root.tsx`
- `MainVideo.tsx` → `src/lessons/lesson-1-ai-env-setup/MainVideo.tsx`
- `voiceover-config.ts` → `src/lessons/lesson-1-ai-env-setup/voiceover-config.ts`
- `calculateMetadata.ts` → `src/lessons/lesson-1-ai-env-setup/calculateMetadata.ts`
- `scenes/*` → `src/lessons/lesson-1-ai-env-setup/scenes/`
- Existing audio files → `public/voiceover/lesson-1/`

### Step 3: Create Root.tsx Selector

New `src/Root.tsx`:
```tsx
import React from "react";
import { Composition } from "remotion";

// Import each lesson's components
import { RemotionRoot as Lesson1 } from "./lessons/lesson-1-ai-env-setup/Root";
import { RemotionRoot as Lesson2 } from "./lessons/lesson-2-lessons-learned/Root";

export const RemotionRoot: React.FC = () => {
  // Get lesson from environment or default to lesson-1
  const lesson = process.env.LESSON || "1";
  
  if (lesson === "2") {
    return <Lesson2 />;
  }
  
  // Default to lesson 1
  return <Lesson1 />;
};
```

### Step 4: Create Lesson 2 Root & MainVideo

See below for templates.

### Step 5: Update generate-voiceover.ts

New version supports lesson selection:
```bash
# Generate audio for lesson 2
LESSON=2 node --env-file=.env --strip-types generate-voiceover.ts

# Generate audio for lesson 1
LESSON=1 node --env-file=.env --strip-types generate-voiceover.ts
```

### Step 6: Update package.json Scripts

Add lesson-specific render commands:
```json
{
  "scripts": {
    "render:lesson-1": "LESSON=1 remotion render",
    "render:lesson-2": "LESSON=2 remotion render",
    "studio:lesson-1": "LESSON=1 remotion studio",
    "studio:lesson-2": "LESSON=2 remotion studio",
    "voiceover:lesson-1": "LESSON=1 node --env-file=.env --strip-types generate-voiceover.ts",
    "voiceover:lesson-2": "LESSON=2 node --env-file=.env --strip-types generate-voiceover.ts"
  }
}
```

---

## Voice Configuration

### ElevenLabs Voice IDs Reference

Store this in a new file: `src/lessons/VOICES.md`

```
# ElevenLabs Voice IDs

## Available Voices

| Name | Voice ID | Type | Best For |
|------|----------|------|----------|
| Adam | pNInz6obpgDQGcFmaJgB | Male, Professional | Technical tutorials, professional narration |
| Bella | EXAVITQu4EsNXjluf0k5 | Female, Warm | Educational, friendly content |
| Charlie | IZSifFFhWvMMf3sXFvUZ | Male, Friendly | Casual, engaging content |
| Dora | NM3d7MA7T5LvTf6V91LD | Female, Professional | Business, presentations |
| Elli | MF3mGyEYCHzMOLCpIFlE | Female, Young | Youth-oriented content |
| Grace | jsCqWAovK2LkecY7zXl4 | Female, Warm, Maternal | Nurturing, supportive content |
| Harry | SOZ7jomhatQFSD3YZh51 | Male, Deep | Dramatic, authoritative content |
| Lily | pFZP5JQG7iQjIQuC4 Typologie | Female, Expressive | Expressive, narrative content |
| [John Wayne] | [CUSTOM_ID] | Male, Western | **THIS LESSON** - Iconic, distinctive voice |

## How to Get John Wayne Voice

1. **If using ElevenLabs Premium:**
   - Go to https://elevenlabs.io/voice-lab
   - Search for "John Wayne"
   - Copy the Voice ID
   - Set: `ELEVENLABS_VOICE_ID=<id>`

2. **If using Clone Voice:**
   - Upload John Wayne audio sample (public domain available)
   - ElevenLabs will create a custom voice clone
   - Use that Voice ID

3. **Fallback:**
   - If John Wayne isn't available, use "Harry" (male, deep voice) as substitute

## Setting Voice for a Lesson

In `src/lessons/lesson-2-lessons-learned/voiceover-config.ts`:

```ts
export const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "[john-wayne-id]";
export const VOICE_NAME = "John Wayne"; // For display purposes
```

Then in `generate-voiceover.ts`:
```ts
console.log(`🎙️  Using voice: ${process.env.VOICE_NAME || "Adam"}`);
```

---

## Text-First Script Workflow

### Phase 1: Text Scripts (No Audio Yet)

1. Write all scripts as Markdown files in `src/lessons/lesson-2-lessons-learned/scripts/`
2. Each file = one scene
3. Format:
```markdown
# Scene Title

**Estimated words:** ~180  
**Estimated frames @ 30fps (130 WPM):** ~1000 frames  
**Voice:** John Wayne

---

## Script

[Your script text here. Include the voice introduction for the first scene.]

---

## Notes

- [Any production notes, visual cues, timing considerations]
```

### Phase 2: Review

1. Read all text scripts
2. Time them (use word count to estimate frames)
3. Approve or request revisions
4. NO AUDIO GENERATION YET

### Phase 3: Generate Audio

1. After scripts approved, compile scripts into `voiceover-config.ts`
2. Set voice ID
3. Run: `LESSON=2 npm run voiceover:lesson-2`
4. Audio files written to `public/voiceover/lesson-2/`

### Phase 4: Integrate & Render

1. Update `MainVideo.tsx` to reference audio files
2. In Remotion Studio: `npm run studio:lesson-2`
3. Test video with audio
4. Make any cuts/adjustments
5. Render final MP4: `npm run render:lesson-2`

---

## Workflow for Building Lesson 2

### Day 1: Plan & Script

- [ ] Create `src/lessons/lesson-2-lessons-learned/` folder structure
- [ ] Write text scripts in `src/lessons/lesson-2-lessons-learned/scripts/`
- [ ] You review scripts
- [ ] Iterate on wording until happy

### Day 2: Setup & Audio

- [ ] Create `voiceover-config.ts` with scripts + voice ID
- [ ] Create `Root.tsx` and `MainVideo.tsx`
- [ ] Generate audio: `LESSON=2 npm run voiceover:lesson-2`
- [ ] Audio files appear in `public/voiceover/lesson-2/`

### Day 3: Build & Render

- [ ] Add visual components to `MainVideo.tsx`
- [ ] Test in Studio: `npm run studio:lesson-2`
- [ ] Make adjustments
- [ ] Render: `npm run render:lesson-2`
- [ ] Output: `out/lesson-2.mp4`

---

## Rendering Both Lessons

```bash
# Render lesson 1 (existing video)
npm run render:lesson-1 -- --output-location="out/lesson-1-ai-env-setup.mp4"

# Render lesson 2 (new video)
npm run render:lesson-2 -- --output-location="out/lesson-2-lessons-learned.mp4"

# Both videos now exist independently
ls -la out/
  lesson-1-ai-env-setup.mp4
  lesson-2-lessons-learned.mp4
```

---

## File Template: voiceover-config.ts for Lesson 2

```ts
// src/lessons/lesson-2-lessons-learned/voiceover-config.ts
//
// Voice: John Wayne (custom ElevenLabs voice)
// Introduction: John Wayne introduces himself before starting the presentation

export const AUDIO_ENABLED = false; // Set to true after generating audio

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? "your-john-wayne-voice-id";
export const VOICE_NAME = "John Wayne";

export const VOICEOVER_SCENES = [
  {
    id: "scene-00",
    label: "John Wayne Introduction",
    estimatedFrames: 600,
    script:
      "Howdy, partner. I'm John Wayne, and I'm here to tell you about lessons learned building demo-project using AI agents. Over the next thirty minutes, we'll cover some hard-won wisdom that'll save you a whole lot of grief when you're orchestrating your own AI-assisted projects.",
  },
  {
    id: "scene-01",
    label: "Introduction",
    estimatedFrames: 750,
    script:
      "Welcome to Lessons Learned in AI-Assisted Development. We built demo-project using fleet orchestration and AI agents. We made mistakes. We learned a ton. Today, we're sharing those lessons so you don't have to.",
  },
  // ... more scenes
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
```

---

## Safety Checks

- ✅ Existing Lesson 1 files unchanged in `src/lessons/lesson-1-ai-env-setup/`
- ✅ New Lesson 2 is isolated in `src/lessons/lesson-2-lessons-learned/`
- ✅ Text scripts reviewed before audio generation
- ✅ Audio files organized by lesson in `public/voiceover/lesson-1/` and `public/voiceover/lesson-2/`
- ✅ Both lessons can render independently
- ✅ No conflicts when building/testing

---

## Next Steps

1. Create the lesson directories
2. Move existing Lesson 1 files to `src/lessons/lesson-1-ai-env-setup/`
3. Create new `src/Root.tsx` selector
4. Update `generate-voiceover.ts` to support lesson selection
5. Update `package.json` with lesson-specific scripts
6. Create text scripts in `src/lessons/lesson-2-lessons-learned/scripts/`
7. You review scripts
8. Generate audio
9. Build video


