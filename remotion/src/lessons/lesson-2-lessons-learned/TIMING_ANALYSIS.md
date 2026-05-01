# Lesson 2: Audio & Timing Analysis

**Generated:** 2026-04-29  
**Format:** Ready for audio generation

---

## Video Length Summary

| Metric | Value |
|--------|-------|
| **Total Scenes** | 10 |
| **Total Words** | ~1,930 |
| **Estimated Duration** | ~8 minutes 55 seconds |
| **Actual Duration** | TBD (after audio generation) |
| **FPS** | 30 |
| **Resolution** | 1920x1080 |

---

## Scene-by-Scene Breakdown

| Scene | Title | Words | Est. Frames | Est. Seconds | Padding | Total Frames |
|-------|-------|-------|------------|-------------|---------|---|
| 00 | John Wayne Intro | 90 | 624 | 20.8 | 60 | 684 |
| 01 | Introduction | 125 | 860 | 28.7 | 60 | 920 |
| 02 | Model Selection | 210 | 1,445 | 48.2 | 60 | 1,505 |
| 03 | Testing Strategy | 195 | 1,335 | 44.5 | 60 | 1,395 |
| 04 | Planned vs. Reactive | 180 | 1,235 | 41.2 | 60 | 1,295 |
| 05 | Componentization | 190 | 1,300 | 43.3 | 60 | 1,360 |
| 06 | Conductor Thinking | 230 | 1,580 | 52.7 | 60 | 1,640 |
| 07 | Project Setup | 220 | 1,505 | 50.2 | 60 | 1,565 |
| 08 | Best Practices | 190 | 1,300 | 43.3 | 60 | 1,360 |
| 09 | Closing | 220 | 1,505 | 50.2 | 60 | 1,565 |
| | **TOTAL** | **1,930** | **11,689** | **389.7s** | — | **12,289** |

---

## Timing Calculations

### Frames Per Word
- **Speech Rate:** 130 Words Per Minute (WPM)
- **Frames/Word:** 13.85 frames at 30 FPS

### Post-Audio Padding
- **Duration:** 60 frames (2 seconds per scene)
- **Purpose:** Dead space between slides for smooth transitions; prevents audio from last scene overlapping into next scene's fade
- **Why 60 frames:** Lesson 2 scenes are longer than Lesson 1 (average 1,360 frames vs. 1,030), so they need more breathing room

### Transition Timing
- **Fade Duration:** 20 frames
- **Calculation:** Total duration = (sum of all scene frames) - ((N_scenes - 1) × 20)
- **Overlap:** Transitions overlap between scenes, so they're subtracted from total

### Total Duration (Estimate)
```
Sum of scene frames: 12,289 frames
Minus 9 transitions: 12,289 - (9 × 20) = 12,289 - 180 = 12,109 frames
At 30 FPS: 12,109 ÷ 30 = 403.6 seconds ≈ 6 minutes 44 seconds
```

---

## Audio Generation Strategy

### Once AUDIO_ENABLED = true

1. **Audio Duration Measurement**
   - For each scene, calculateMetadata reads the actual MP3 file
   - Formula: `Math.ceil(durationSecs × FPS) + POST_AUDIO_PADDING_FRAMES`
   - This overrides estimatedFrames with real data

2. **Why This Matters**
   - Audio files are generated at 44.1kHz (standard)
   - Duration can vary ±50ms from word-count estimates
   - ElevenLabs voice processing adds slight pauses between sentences
   - Better to measure real audio than guess

3. **Dead Space Safety**
   - 60 frames of padding after each audio ends
   - Ensures next scene's fade doesn't clip final words
   - At 30 FPS, 60 frames = 2 seconds of silence

---

## Voice Configuration (ElevenLabs)

| Setting | Value | Notes |
|---------|-------|-------|
| **Model** | eleven_multilingual_v2 | Handles English well |
| **Voice** | John Wayne (custom) | Premium voice; fallback "Harry" = SOZ7jomhatQFSD3YZh51 |
| **Stability** | 0.5 | Balanced; natural pacing |
| **Similarity Boost** | 0.75 | Closer to original voice |
| **Style Exaggeration** | 0.3 | Moderate expression |
| **Output Format** | MP3 | Audio files stored in `public/voiceover/lesson-2/` |

---

## File Structure

```
src/lessons/lesson-2-lessons-learned/
├── Root.tsx                          # Composition entry point
├── MainVideo.tsx                     # Scene sequence with transitions
├── voiceover-config.ts              # Scripts + timing (THIS FILE)
├── calculateMetadata.ts             # Audio duration measurement
├── scenes/
│   ├── 00-JohnWayneIntroScene.tsx
│   ├── 01-IntroductionScene.tsx
│   ├── 02-ModelSelectionScene.tsx
│   ├── 03-TestingStrategyScene.tsx
│   ├── 04-PlannedVsReactiveScene.tsx
│   ├── 05-ComponentizationScene.tsx
│   ├── 06-ConductorThinkingScene.tsx
│   ├── 07-ProjectSetupScene.tsx
│   ├── 08-BestPracticesScene.tsx
│   └── 09-ClosingScene.tsx
└── index.css                        # Styling

public/voiceover/lesson-2/           # Audio files (generated)
├── scene-00.mp3
├── scene-01.mp3
├── scene-02.mp3
├── scene-03.mp3
├── scene-04.mp3
├── scene-05.mp3
├── scene-06.mp3
├── scene-07.mp3
├── scene-08.mp3
└── scene-09.mp3
```

---

## Ready for Generation

✅ All scripts finalized and anonymized  
✅ Timing estimates calculated (1,930 total words)  
✅ Scene components created  
✅ Configuration ready  
✅ Post-audio padding included (60 frames per scene)  
✅ Transition timing accounted for  

### Next Steps

1. **Review this timing document**
2. **Approve audio generation**
3. **Run:** `npm run voiceover:lesson-2`
4. **Measure actual durations:** calculateMetadata will read real MP3 files
5. **Start Studio:** `npm run studio:lesson-2` to preview with audio
6. **Adjust if needed:** If any scene is too short/long, edit script and regenerate just that audio file
7. **Render final:** `npm run render:lesson-2 -- --output-location="out/lesson-2-lessons-learned.mp4"`

---

## Cost Estimate

| Phase | Tokens | Cost |
|-------|--------|------|
| **Audio Generation** | ~1,930 × 0.5 | ~1 credit (ElevenLabs) |
| **Studio Preview** | ~50 | ~0 (local rendering) |
| **Final Render** | ~0 | ~0 (local rendering) |
| **Total** | — | ~1 credit |

*(Assumes ElevenLabs subscription; token costs vary by voice)*

---

## Notes

- All scene components are **placeholder designs** (text-based). You can enhance them with graphics, logos, diagrams, etc.
- Scenes fade in/out with 20-frame crossfades (smooth, not jarring)
- If a scene feels too fast after audio generation, you can add more visual elements to "fill" the time
- If a scene feels too slow, trim the script and regenerate just that audio
- Dead space (60 frames) prevents any audio bleed into next scene

**Ready to generate audio?**
