# ElevenLabs Voice Reference — Lesson 2

## Selected Voice: John Wayne

**Use Case:** Lessons Learned presentation (Lesson 2)

### Voice Profile

| Attribute | Value |
|-----------|-------|
| **Name** | John Wayne |
| **Type** | Male, Western/Iconic |
| **Best For** | Authoritative, distinctive narration |
| **Tone** | Confident, weathered, commanding |
| **Ideal Content** | Lessons learned, best practices, wisdom |

### Finding John Wayne in ElevenLabs

1. **Premium Voice Library:**
   - Go to https://elevenlabs.io/voice-lab
   - Search: "John Wayne"
   - If available: copy the Voice ID
   - Set: `ELEVENLABS_VOICE_ID=<id>`

2. **Voice Clone Option:**
   - If JW not in library, clone from public domain audio
   - ElevenLabs can create custom voice from sample
   - Use that Voice ID in environment

3. **Fallback Voice (if John Wayne unavailable):**
   - Use "Harry" (Voice ID: `SOZ7jomhatQFSD3YZh51`)
   - Male, deep, dramatic voice
   - Good substitute for authoritative tone

### Voice Settings for Generation

When generating audio via ElevenLabs API:

```json
{
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.75,
    "style": 0.3
  }
}
```

**Explanation:**
- `stability: 0.5` — Balanced: not too robotic, not too variable
- `similarity_boost: 0.75` — Strong character consistency (important for iconic voice)
- `style: 0.3` — Slight style variation to prevent monotone

---

## Script Review Checklist

Before generating audio, review all scripts for:

### Content Quality
- [ ] All 10 scenes written and approved
- [ ] JW introduction adds personality (he introduces himself)
- [ ] Each scene flows into the next
- [ ] Key takeaways are clear and memorable
- [ ] No placeholder text or [TODO] items

### Word Count & Timing
- [ ] Scene word counts verified (aim for 130 WPM)
- [ ] Frame estimates calculated (130 WPM ≈ 13.85 frames/word @ 30fps)
- [ ] Total presentation length reasonable (30 minutes target)

**Timing Breakdown:**
```
Scene 00: John Wayne Intro    ~090 words ≈ ~620 frames ≈ ~21 seconds
Scene 01: Introduction        ~125 words ≈ ~860 frames ≈ ~29 seconds
Scene 02: Model Selection     ~210 words ≈1445 frames ≈ ~48 seconds
Scene 03: Testing Strategy    ~195 words ≈1335 frames ≈ ~45 seconds
Scene 04: Planned vs. Reactive~180 words ≈1235 frames ≈ ~41 seconds
Scene 05: Componentization    ~190 words ≈1300 frames ≈ ~43 seconds
Scene 06: Conductor Thinking  ~230 words ≈1580 frames ≈ ~53 seconds
Scene 07: Project Setup       ~220 words ≈1505 frames ≈ ~50 seconds
Scene 08: Best Practices      ~190 words ≈1300 frames ≈ ~43 seconds
Scene 09: Closing             ~220 words ≈1505 frames ≈ ~50 seconds

TOTAL: ~1750 words ≈ ~12000 frames ≈ ~400 seconds ≈ ~6.7 minutes
(Transitions will add ~2-3 minutes, visual cuts might add time)
```

### Tone & Voice
- [ ] Scripts read naturally when spoken aloud
- [ ] No awkward phrasing or hard-to-pronounce technical terms
- [ ] Emphasis and inflection points marked (if needed)
- [ ] Conversational tone preserved (not overly formal)
- [ ] John Wayne "Western" references feel natural, not forced

### Technical Content
- [ ] All facts/metrics accurate (token usage, bug counts, etc.)
- [ ] Recommendations are actionable
- [ ] No contradictions between scenes
- [ ] Proper build-up and foreshadowing of key points

### Production Readiness
- [ ] All scripts in proper markdown format
- [ ] File names consistent: NN-scene-name.md
- [ ] Production notes included for visual guidance
- [ ] No external dependencies or missing context

---

## How to Generate Audio

Once scripts are approved:

```bash
# Set environment variables
export ELEVENLABS_API_KEY="your-api-key"
export ELEVENLABS_VOICE_ID="john-wayne-id"  # Or use fallback Harry ID

# Generate audio for Lesson 2
cd /workspace/dotfiles-presentation
LESSON=2 npm run voiceover:lesson-2

# Audio files will be written to:
# public/voiceover/lesson-2/scene-00.mp3
# public/voiceover/lesson-2/scene-01.mp3
# ... etc
```

---

## Script Approvals

| Script | Status | Reviewer | Date | Notes |
|--------|--------|----------|------|-------|
| 00-john-wayne-intro.md | ⏳ Pending | — | — | Waiting for approval |
| 01-introduction.md | ⏳ Pending | — | — | Waiting for approval |
| 02-model-selection.md | ⏳ Pending | — | — | Waiting for approval |
| 03-testing-strategy.md | ⏳ Pending | — | — | Waiting for approval |
| 04-planned-vs-reactive.md | ⏳ Pending | — | — | Waiting for approval |
| 05-componentization.md | ⏳ Pending | — | — | Waiting for approval |
| 06-conductor-thinking.md | ⏳ Pending | — | — | Waiting for approval |
| 07-project-setup.md | ⏳ Pending | — | — | Waiting for approval |
| 08-best-practices.md | ⏳ Pending | — | — | Waiting for approval |
| 09-closing.md | ⏳ Pending | — | — | Waiting for approval |

**To Approve:** Review each script above, mark status as ✅ Approved with date

---

## Next Steps

1. **Review Phase:** Read through all 10 scripts (in order)
2. **Approval:** Mark each as approved (update table above)
3. **Generate:** Run `LESSON=2 npm run voiceover:lesson-2` once all approved
4. **Build:** Create voiceover-config.ts, MainVideo.tsx, Root.tsx for Lesson 2
5. **Test:** Preview in Remotion Studio
6. **Render:** Generate final MP4

