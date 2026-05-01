# Lesson 2 Production Guide — Ready for Review

## 📋 What's Been Created

### Text Scripts (Ready for Your Review)

All 10 scenes written as markdown scripts in:  
`src/lessons/lesson-2-lessons-learned/scripts/`

| Scene | Title | Words | Est. Frames | Duration |
|-------|-------|-------|-------------|----------|
| 00 | John Wayne Introduction | ~90 | ~620 | ~21s |
| 01 | Introduction & Problem | ~125 | ~860 | ~29s |
| 02 | Model Selection (Opus vs Sonnet) | ~210 | ~1445 | ~48s |
| 03 | Testing Strategy | ~195 | ~1335 | ~45s |
| 04 | Planned vs. Reactive Execution | ~180 | ~1235 | ~41s |
| 05 | Componentization & Design System | ~190 | ~1300 | ~43s |
| 06 | Conductor/Composer Thinking | ~230 | ~1580 | ~53s |
| 07 | Project Setup & Governance Agents | ~220 | ~1505 | ~50s |
| 08 | Best Practices & Resilience | ~190 | ~1300 | ~43s |
| 09 | Closing & Key Takeaways | ~220 | ~1505 | ~50s |
| | **TOTAL** | **~1750** | **~12000** | **~6.7 min** |

**Note:** Video will be longer with visuals, transitions, and any demos.

### Supporting Documents

1. **LESSON_STRUCTURE.md** 
   - Complete directory organization
   - How to separate Lesson 1 (existing), Lesson 2 (new), future lessons
   - Workflow from scripts → audio → video

2. **SCRIPT_REVIEW_GUIDE.md**
   - Voice setup (ElevenLabs John Wayne reference)
   - Review checklist
   - Approval tracking
   - Generation instructions

3. **Visual Asset Specs**
   - Token usage graphic (1.3%→3% vs. 50%+)
   - Test results matrix
   - Agent architecture diagram
   - Componentization before/after
   - Model selection matrix
   - Circuit breaker pattern

---

## 🎙️ Voice Setup

**Selected Voice:** John Wayne (ElevenLabs)

### To Use John Wayne:

1. **Find in ElevenLabs Library:**
   - Go to https://elevenlabs.io/voice-lab
   - Search "John Wayne"
   - Copy Voice ID

2. **Set Environment Variable:**
   ```bash
   export ELEVENLABS_VOICE_ID="john-wayne-id"
   ```

3. **Fallback Option:**
   - If John Wayne unavailable, use "Harry" (deep, authoritative male voice)
   - Voice ID: `SOZ7jomhatQFSD3YZh51`

---

## ✅ Script Review Workflow

### Phase 1: YOU REVIEW (No Costs)

**Read all 10 scripts in order:**
1. Do they flow naturally?
2. Are the lessons clear?
3. Any edits or revisions needed?
4. Is the tone right?
5. Are technical facts accurate?

**Location:** Each script is in  
`src/lessons/lesson-2-machina-lessons/scripts/NN-title.md`

**Use SCRIPT_REVIEW_GUIDE.md** for detailed checklist

### Phase 2: Approve for Audio Generation

Once you're happy with scripts:
- Mark in SCRIPT_REVIEW_GUIDE.md approval table
- Set date and "✅ Approved"

### Phase 3: Generate Audio (One Command)

```bash
cd /workspace/dotfiles-presentation
LESSON=2 npm run voiceover:lesson-2
```

This will:
- Call ElevenLabs API for each script
- Generate 10 MP3 files
- Save to `public/voiceover/lesson-2/`
- NO COST until this step

### Phase 4: Build & Render Video

- Create voiceover-config.ts (imports scripts + audio files)
- Create MainVideo.tsx (visual components)
- Create Root.tsx (composition setup)
- Test in Remotion Studio
- Render to MP4

---

## 💰 Cost Breakdown

| Step | Your Cost | When |
|------|-----------|------|
| Writing Scripts | $0 | Ongoing |
| Reviewing Scripts | $0 | Now |
| Generating Audio (John Wayne) | ~$0.50-2.00 | When approved |
| Building Video | $0 | After audio |
| Rendering | Depends on render time | Final step |

**Note:** You only pay for audio generation AFTER scripts are approved.

---

## 🎬 Quick Start: Next Steps

### Today (No Cost)

1. ✅ Read through all 10 scripts (check if they're good)
2. ✅ Make any edits (update .md files)
3. ✅ Update approval status in SCRIPT_REVIEW_GUIDE.md

### When Ready (Small Cost)

4. Generate audio: `LESSON=2 npm run voiceover:lesson-2`
5. Audio files appear in `public/voiceover/lesson-2/`

### Building the Video (No Additional Cost)

6. Create Lesson 2 component files (can provide templates)
7. Test in Remotion Studio
8. Render final MP4

---

## 📁 File Locations

**All scripts:** 
```
C:\workspace\dotfiles-presentation\src\lessons\lesson-2-lessons-learned\scripts\
├── 00-john-wayne-intro.md
├── 01-introduction.md
├── 02-model-selection.md
├── 03-testing-strategy.md
├── 04-planned-vs-reactive.md
├── 05-componentization.md
├── 06-conductor-thinking.md
├── 07-project-setup.md
├── 08-best-practices.md
└── 09-closing.md
```

**Review Guides:**
```
C:\workspace\dotfiles-presentation\src\lessons\lesson-2-lessons-learned\
├── SCRIPT_REVIEW_GUIDE.md ← Voice setup & approval tracking
├── scripts/ ← Your scripts to review
└── scenes/ ← (empty for now, will have visual components)
```

**Overall Structure:**
```
C:\workspace\dotfiles-presentation\
├── LESSON_STRUCTURE.md ← How lessons are organized
├── src\
│   └── lessons\
│       ├── lesson-1-ai-env-setup\ ← Existing video (don't touch)
│       └── lesson-2-lessons-learned\ ← New video (in progress)
└── public\voiceover\
    ├── lesson-1\ ← Existing audio
    └── lesson-2\ ← Will contain audio after generation
```

---

## 🎯 Decision Points for You

**Before we proceed, confirm:**

1. ✅ **Scripts Approved?** Are all 10 scripts good to go? Any revisions needed?

2. ✅ **Voice Choice?** John Wayne confirmed? (Or should we change to fallback/different voice?)

3. ✅ **Timeline?** When should audio be generated? (We can do this whenever you're ready)

4. ✅ **Next Step?** Should I create the Remotion components (Root.tsx, MainVideo.tsx, voiceover-config.ts) while you review scripts?

---

## 💡 Key Benefits of This Approach

✅ **No Credit Burn:** Scripts reviewed as plain text (free)  
✅ **Control:** You approve before audio is generated  
✅ **Separation:** Lesson 1 and Lesson 2 completely isolated  
✅ **Scalability:** Easy to add Lesson 3, 4, etc. later  
✅ **Voice Choice:** Flexible — John Wayne or any other voice  
✅ **Safe:** Existing video (Lesson 1) untouched and protected  

---

Start by reviewing the scripts! All 10 are ready in `scripts/` folder.

