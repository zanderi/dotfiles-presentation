// Lesson 2: Lessons Learned in AI-Assisted Development
// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// After generating audio with `npm run voiceover:lesson-2`:
//   1. Set AUDIO_ENABLED = true below
//   2. Restart Remotion Studio — audio plays in sync automatically

export const AUDIO_ENABLED = true;

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
  {
    id: "scene-01",
    label: "Introduction & Problem Statement",
    wordCount: 125,
    estimatedFrames: 860, // (125 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Welcome to Lessons Learned in AI-Assisted Development. We built a comprehensive asset and work order management system using AI agents and fleet orchestration. We made mistakes. We learned hard lessons. And we've distilled them into actionable best practices you can use on your next project. This isn't a success story where everything went perfect. It's a story about how to do things better when things go wrong. And they will go wrong. That's when these lessons matter most.",
  },
  {
    id: "scene-02",
    label: "Model Selection: Opus vs. Sonnet",
    wordCount: 210,
    estimatedFrames: 1445, // (210 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson one: model selection matters. We chose Claude Sonnet for fleet execution. Sonnet is fast. Sonnet is cheap. And Sonnet is prone to hallucinations. During fleet execution, we saw case mismatches in the database results. Sonnet wasn't following case-sensitive field names. Small errors, but they cascaded. The frontend expected certain field naming conventions. Sonnet returned fields in lowercase. Everything broke on render. Here's what we thought would be cheap execution became the most expensive part of the project. Initial fleet execution used one point three to three percent of our credits. Then came the corrections. Manual troubleshooting. Re-prompting to fix the mistakes. Fifty percent of our entire credit budget. That's a fifteen to twenty times multiplier on cost. The lesson: Cheap execution that produces errors is more expensive than reliable execution upfront. For data-critical work, for precise transformations, use Opus. Use Sonnet for exploration and low-stakes generation. Know the difference and choose accordingly.",
  },
  {
    id: "scene-03",
    label: "Testing Strategy: Multiple Agents, Different Bugs",
    wordCount: 195,
    estimatedFrames: 1335, // (195 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson two: specialized testing agents catch different classes of bugs. We ran API tests. Everything passed. All endpoints validated. Contracts were correct. The API was solid. Then we ran UI and end-to-end tests. Eight real bugs appeared. Not in the API. In the integration between frontend and backend. Field name mismatches. Missing query parameters. State management failures. UI rendering issues. Silent data loss. Here's the key insight: if we'd only run API tests, we would have shipped with bugs. If we'd only run UI tests, we might have blamed the API incorrectly. By running both, specialized agents each caught what the other missed. We also made a critical mistake. We created the Playwright end-to-end testing agent after the project was mostly complete. That's backwards. That agent should have existed from day one. Testing agents need to be ready before implementation agents start.",
  },
  {
    id: "scene-04",
    label: "Process: Planned Execution vs. Reactive Prompting",
    wordCount: 215,
    estimatedFrames: 1480, // (215 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson three: planned execution produces vastly higher quality than reactive troubleshooting. And here's the proof. In previous projects I worked on, we built with less planning. No design system upfront. No clear patterns. Agents built in isolation. The result? Complete rewrites. Projects that needed massive restructuring. We'd have to go back and prompt AI to take the same corrective action on page after page, feature after feature. Fifty, sixty, sometimes a hundred manual corrections. It was chaos. This project was different. We planned upfront. Clear requirements. Clear patterns. Clear structure. Our fleet orchestration ran perfectly. No manual prompting. No babysitting. The agents executed exactly as instructed and delivered solid work. That was the power of planning. But here's the discovery that came later. After fleet finished, we added Playwright end-to-end testing. That's when I spent a full day struggling to run tests efficiently, manually approving runs, reviewing output. That's when I discovered autopilot. You can activate it mid-process. Better yet, if you're confident in your instructions, you use the allow-all flag and step away completely. This single feature would have made that entire testing phase effortless. I would have activated it from day one if I'd known. The lesson is clear. Plan everything upfront so your execution is clean and predictable. And use autopilot for any phase where you're confident in your instructions. Don't babysit. That's orchestration.",
  },
  {
    id: "scene-05",
    label: "Componentization: Design System Upfront",
    wordCount: 190,
    estimatedFrames: 1300, // (190 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson four: define your design system and component library before agents start building. Multiple agents worked on different pages of the project. All three needed an Add Item button to create new records. So we got three different implementations. One agent built it with custom CSS. Another used Bootstrap button utilities directly. The third created a custom Vue component. Same feature, three different ways. They looked similar but not identical. Slightly different spacing. Different hover effects. Different colors. We had to comb through the codebase and manually consolidate them into a single reusable component. Post-hoc refactoring. That's expensive. That's rework. If we'd defined a design system upfront — a component catalog, design tokens, naming conventions, shared patterns — every agent would have had a reference. Work on the Add Item button once. Document it. Make it part of the agent's context. Now every agent knows: when you need an Add Item button, use this. No duplication. No refactoring. This is true for everything. Color palette. Typography scale. Spacing rules. Modal patterns. Form patterns. Master-detail layouts. Document them once. Share them with your agents. Consistency emerges automatically.",
  },
  {
    id: "scene-06",
    label: "Organizational Thinking: From Expert to Conductor",
    wordCount: 230,
    estimatedFrames: 1580, // (230 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson five, and this is the big one: you are no longer just a developer. You're a conductor. You're composing a symphony. When we started experimenting with AI, we thought in layers. You're a database expert, so you drive the data layer. Someone else is an API expert. Someone else owns the frontend. Back and forth prompting within your area of expertise. Isolated layers. Many handoffs. Many failure points. That's no longer how this works. When you orchestrate agents, you need a holistic understanding of the entire product. You're not just building your piece. You're building the whole system. You're thinking about how data flows, how the API consumes it, how the frontend renders it, how the user experiences it. All at once. This isn't about job titles. Nobody's getting promoted to conductor. It's about perspective. It's about building organizational structure into your agents. Here's your data team. Here's your API team. Here's your frontend team. Here's your testing team. They all know their job. They all know what the downstream teams need. They coordinate. When you understand the product lifecycle — from design to implementation to testing to deployment — everything gets better. Agents make smarter decisions. Features fit together. Bugs disappear before they start. This is the shift. From expert individual contributor to orchestrator of specialists. It changes everything.",
  },
  {
    id: "scene-07",
    label: "Additional Best Practices & Resilience",
    wordCount: 190,
    estimatedFrames: 1300, // (190 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "A few more critical pieces before we wrap up. First, think about resilience. When you're orchestrating services, you have to consider: what happens if something fails? What if an API is down? What if an agent keeps producing errors? The old thinking is you hammer it harder, retry more aggressively. That's wrong. Use circuit breaker patterns. Monitor the health of your dependencies. If something's broken, stop sending requests to it. Fail fast. Switch to diagnostic mode. That same pattern applies to agent orchestration. If an agent consistently fails, don't keep retrying. Escalate. Reroute. Prevent cascading failures. Second, treat your agent instructions like code. Version control them. Document changes. When an instruction update causes issues, you can roll back. This matters because an ambiguous instruction to fifty agents multiplies the problem fifty times. Third, collect metrics. Token spend on execution versus corrections. Bug escape rate at each stage. How many rework cycles? Which agents are most reliable? Which features needed the most iteration? This data becomes your roadmap for the next project. And finally, before you ship anything, validate agent output automatically. Schema checks. Linting. Semantic validation. Don't wait for humans to catch errors. Build validation into the pipeline.",
  },
  {
    id: "scene-08",
    label: "Project Setup & Governance: Two New Agents",
    wordCount: 220,
    estimatedFrames: 1505, // (220 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Lesson six: automate your best practices so they're repeatable. Here's what we're introducing today. Two new agents. The first is the Project Initialization Agent. You run it at the start of every new project. You tell it your tech stack, your team size, your feature list. It generates everything you need upfront. A design system document. Component catalog. Design tokens. Naming conventions. It generates an agent blueprint — here's who builds what, in what order, with what dependencies. It creates a test strategy matrix. It generates documentation templates so your team has a consistent way to write requirements and acceptance criteria. And it creates a project checklist so nothing gets forgotten. Everything upfront. Before a single line of code is written. The second is the Project Review Agent. You run it at checkpoints during development. After your backend wave completes. After your frontend foundation is solid. Before you ship. This agent audits your codebase. It checks componentization. Are you reusing components or duplicating them? It validates design system compliance. Are agents following the patterns you defined? It checks test coverage. Are there gaps? It detects documentation drift. Does the documentation match what actually got built? It catches issues early. Before they compound into major refactoring work. Before you have to rebuild huge pieces of the system. These two agents codify your best practices into workflow. They're tools you can use immediately on your next project.",
  },
  {
    id: "scene-09",
    label: "Closing: Key Takeaways & Next Steps",
    wordCount: 220,
    estimatedFrames: 1505, // (220 words / 130 WPM) * 30 fps * 30 with padding
    script:
      "Here's what we're taking away from this project. First. Model selection matters. Use Opus for precision, Sonnet for exploration. Know the difference. Second. The cost of rework is real. We spent fifty percent of our credits fixing mistakes that planned execution could have prevented. Plan upfront. Third. Specialized testing agents catch different bugs. Have your full test matrix ready before implementation starts. Fourth. Planning beats reactive troubleshooting. Define your requirements, your patterns, your edge cases. Then trust the process you've built. Fifth. Design systems prevent duplication. Define your components, your tokens, your patterns upfront. Share them with your agents. Consistency emerges automatically. Sixth. Think like a conductor, not an expert in one layer. You need to understand the full product lifecycle. Your agents need to coordinate. Seventh. Automate your best practices. Use the Project Initialization Agent at the start of every new project. Use the Project Review Agent at checkpoints. Make quality repeatable and consistent. Eighth. Treat agent instructions like code. Version control them. Document changes. Build metrics collection into your workflow. And ninth. Think about resilience. Circuit breakers, health monitoring, fast failure. Prevent cascading problems before they start. These aren't suggestions. These are lessons paid for with tokens and late nights. Use them. Next month, we're diving deeper. Building a backend walkthrough, stepping through planning and prompting in real time. After that, we're covering advanced orchestration and automated services. This is just the beginning.",
  },
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
  VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
  (VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
