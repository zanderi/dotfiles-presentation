// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// After running `node --strip-types generate-voiceover.ts`:
//   1. Set AUDIO_ENABLED = true below
//   2. Restart Remotion Studio — audio plays in sync automatically

export const AUDIO_ENABLED = false;

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-00",
    label: "Title",
    estimatedFrames: 750,
    script:
      "Welcome to Lesson Zero — the Upgrade Guide. If you've seen earlier versions of this curriculum, this lesson covers what's changed, why the structure was redesigned, and how the new lesson flow is organized.",
  },
  {
    id: "scene-01",
    label: "What Changed",
    estimatedFrames: 1053,
    script:
      "This upgrade guide is for learners who finished the original two-lesson curriculum. That version gave you environment setup and a first look at agent concepts, but it did not yet organize the system into the full ten-lesson arc. The new curriculum adds structure for the four automation layers, content type decisions, workflow integration, skills and MCP, and the business ecosystem. Think of this lesson as your fast-track map from the old course to the new one.",
  },
  {
    id: "scene-02",
    label: "What You Already Know",
    estimatedFrames: 970,
    script:
      "Old Lesson One, AI Environment Setup, now maps to new Lessons One and Two. Old Lesson Two, Agent Orchestration, now spreads across ideas covered in Lessons Three, Four, and Six. You already know the essentials: installing Copilot CLI, creating copilot-instructions dot md, understanding planner, doer, feedback, and guardian categories, using the conductor metaphor, applying validators before doers, and setting up projects correctly. You do not need to repeat that material.",
  },
  {
    id: "scene-03",
    label: "Your Fast-Track Path",
    estimatedFrames: 1261,
    script:
      "Start at Lesson Three. Your must-have sequence is Lesson Three on the four automation layers, Lesson Five on content types, and Lesson Seven on workflow and GitFlow, because those three lessons explain the mental model, the decision tree, and how the whole system connects in real work. After that, prioritize Lesson Eight on skills and MCP, and Lesson Ten on the business ecosystem and the Atlas-Themis bridge. Lessons Four, Six, and Nine are valuable deeper dives on the ecosystem, agent building, and project setup. You can skip Lessons One and Two.",
  },
  {
    id: "scene-04",
    label: "Start Here",
    estimatedFrames: 845,
    script:
      "If you remember only one thing from this upgrade guide, make it this: the four automation layers are the foundation of the new curriculum. They explain why agents do not fire automatically, and what does. If you have ever asked how to make agents run at git events, Lesson Three is the answer. Start there. Everything else builds on that foundation.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
