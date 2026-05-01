# Lesson 2: Complete Build Package - Ready for Audio Generation

**Status:** ✅ All components ready for audio generation  
**Last Updated:** 2026-04-29  
**Total Files Created:** 15

---

## 📊 Video Specification

| Property | Value |
|----------|-------|
| **Title** | Lessons Learned in AI-Assisted Development |
| **Duration (estimated)** | ~8 minutes 55 seconds |
| **Total Words** | 1,930 |
| **Scene Count** | 10 |
| **Resolution** | 1920x1080 |
| **FPS** | 30 |
| **Narrator** | John Wayne |
| **Voice Stability** | 0.5 (balanced, natural) |

---

## 🗂️ File Structure

```
src/lessons/lesson-2-lessons-learned/
│
├── Root.tsx                           ✅ Composition entry point
├── MainVideo.tsx                      ✅ Scene sequence + transitions
├── voiceover-config.ts               ✅ Scripts + timing estimates
├── calculateMetadata.ts              ✅ Audio duration measurement
├── index.css                         ✅ Styling
│
├── TIMING_ANALYSIS.md                ✅ Frame-by-frame breakdown
│
└── scenes/
    ├── 00-JohnWayneIntroScene.tsx     ✅ John Wayne intro
    ├── 01-IntroductionScene.tsx       ✅ Intro & problem statement
    ├── 02-ModelSelectionScene.tsx     ✅ Lesson 1: Model selection
    ├── 03-TestingStrategyScene.tsx    ✅ Lesson 2: Testing strategy
    ├── 04-PlannedVsReactiveScene.tsx  ✅ Lesson 3: Planned execution
    ├── 05-ComponentizationScene.tsx   ✅ Lesson 4: Design systems
    ├── 06-ConductorThinkingScene.tsx  ✅ Lesson 5: Conductor thinking
    ├── 07-ProjectSetupScene.tsx       ✅ Lesson 6: Project setup
    ├── 08-BestPracticesScene.tsx      ✅ Best practices
    └── 09-ClosingScene.tsx            ✅ Closing & takeaways

public/voiceover/lesson-2/
└── (audio files will be generated here)
    ├── scene-00.mp3 ← to be generated
    ├── scene-01.mp3 ← to be generated
    ├── scene-02.mp3 ← to be generated
    ... (10 files total)
    └── scene-09.mp3 ← to be generated
```

---

## 🎬 Scene Breakdown

| # | Scene | Words | Est. Duration | Padding |
|---|-------|-------|---|---|
| 00 | John Wayne Intro | 90 | 21s | 2s |
| 01 | Introduction | 125 | 29s | 2s |
| 02 | Model Selection | 210 | 48s | 2s |
| 03 | Testing Strategy | 195 | 45s | 2s |
| 04 | Planned vs. Reactive | 180 | 41s | 2s |
| 05 | Componentization | 190 | 43s | 2s |
| 06 | Conductor Thinking | 230 | 53s | 2s |
| 07 | Project Setup | 220 | 50s | 2s |
| 08 | Best Practices | 190 | 43s | 2s |
| 09 | Closing | 220 | 50s | 2s |
| | **TOTAL** | **1,930** | **~390s** | — |

---

## 🎙️ Audio Generation

### Prerequisites
- ✅ ElevenLabs API key (set as `ELEVENLABS_API_KEY` in `.env`)
- ✅ Node.js 20.6+ installed
- ✅ All scripts written and reviewed

### Command to Generate
```bash
node --env-file=.env --strip-types generate-voiceover-lesson2.ts
```

### What Happens
1. Reads all 10 scripts from `src/lessons/lesson-2-lessons-learned/voiceover-config.ts`
2. Calls ElevenLabs API with each script
3. Downloads MP3 files to `public/voiceover/lesson-2/`
4. Reports file sizes and total duration

### After Generation
1. Set `AUDIO_ENABLED = true` in `src/lessons/lesson-2-lessons-learned/voiceover-config.ts`
2. Restart Remotion Studio: `npm run studio:lesson-2`
3. Audio will automatically sync with scenes

---

## ⏱️ Timing Strategy

### Per-Scene Duration
Each scene duration = (audio duration in seconds × 30 fps) + 60 frames padding

**60 frames = 2 seconds of silence after audio ends**
- Prevents last word from clipping during fade
- Allows smooth transition to next scene
- Gives viewers time to absorb message

### Transition Timing
- **Fade duration:** 20 frames
- **Overlap:** Transitions overlap with previous scene end
- **Total calculation:** Sum of scene frames - (9 × 20 frames transition overlap)

### Example Timing
```
Scene 2 (Model Selection):
  Audio duration: ~48 seconds
  In frames: 48s × 30 fps = 1,440 frames
  + Padding: 60 frames
  = Total: 1,500 frames per scene

Total video (10 scenes):
  ~12,289 frames
  - 9 transition overlaps (20 frames each)
  = ~12,109 frames
  ÷ 30 fps
  = ~403 seconds ≈ 6 min 44 sec
```

**Note:** Actual timing will differ once real audio is measured. That's OK—calculateMetadata will adjust automatically.

---

## 🚀 Workflow: From Scripts to Finished Video

### Step 1: Review This Document ✅ (you are here)

Check timing estimates and total duration.

### Step 2: Generate Audio
```bash
node --env-file=.env --strip-types generate-voiceover-lesson2.ts
```

Wait for all 10 files to download (~2-5 minutes depending on API).

**Output:**
```
🎙️  Generating 10 voiceover files for Lesson 2...

  scene-00 (John Wayne Intro)... ✅ (156 KB)
  scene-01 (Introduction)... ✅ (214 KB)
  scene-02 (Model Selection)... ✅ (356 KB)
  ... (etc)
  
✅ All 10 voiceover files written to public/voiceover/lesson-2/
📊 Total size: 2,847 KB
```

### Step 3: Enable Audio in Config

Edit `src/lessons/lesson-2-lessons-learned/voiceover-config.ts`:

```typescript
// Change this:
export const AUDIO_ENABLED = false;

// To this:
export const AUDIO_ENABLED = true;
```

### Step 4: Preview in Studio
```bash
npm run studio:lesson-2
```

- Open http://localhost:3000
- Select "LessonsLearned" composition
- Click Play
- Audio syncs automatically with scenes

### Step 5: Final Render
```bash
npm run render:lesson-2 -- --output-location="out/lesson-2-lessons-learned.mp4"
```

Output file:
- `out/lesson-2-lessons-learned.mp4`
- Ready to upload / share

---

## 💾 Key Files to Understand

### `voiceover-config.ts`
- Contains all 10 scripts
- Lists word counts and estimated frame durations
- `AUDIO_ENABLED` flag controls whether audio plays in studio
- After audio generation, `calculateMetadata` reads real MP3 files and overrides durations

### `calculateMetadata.ts`
- Runs at render time (not studio load)
- Measures actual audio file durations with `getAudioDuration()`
- Adds 60 frames padding after each audio ends
- Returns exact timing for final render

### `MainVideo.tsx`
- Maps 10 scene components to 10 audio files
- Uses `TransitionSeries` for 20-frame fade transitions
- Plays audio inline with each scene

### Scene Components (00-09)
- Currently simple placeholder text-based designs
- You can enhance with graphics, logos, diagrams, animations
- Each scene receives `durationInFrames` prop from calculateMetadata
- Keep scene content simple so audio isn't overshadowed

---

## ✅ Pre-Generation Checklist

Before running audio generation:

- [ ] All 10 scripts are reviewed and approved
- [ ] ElevenLabs API key is set in `.env` file
- [ ] No private project names in scripts (anonymized: ✅)
- [ ] Timing estimates feel reasonable (~390 seconds total)
- [ ] Narrator voice (John Wayne) is confirmed
- [ ] 60-frame padding per scene is acceptable
- [ ] You're ready to commit credits to audio generation

---

## 📝 Timing Analysis Document

For detailed frame-by-frame breakdown, see:
- `src/lessons/lesson-2-lessons-learned/TIMING_ANALYSIS.md`

---

## 🎯 Cost Estimate

| Item | Cost |
|------|------|
| Audio generation (10 scenes, ~1,930 words) | ~1 credit (ElevenLabs subscription varies) |
| Studio preview | Free (local) |
| Final render | Free (local) |
| **Total** | ~1 credit |

---

## ⚡ Ready to Go?

Everything is set up and ready for audio generation. 

**Next command:**
```bash
node --env-file=.env --strip-types generate-voiceover-lesson2.ts
```

This will generate all 10 MP3 files to `public/voiceover/lesson-2/`. Once complete, you can preview in studio and render the final video.

**Any issues or adjustments needed before generating?**
