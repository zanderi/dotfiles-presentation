# Lesson 2: Lessons Learned in AI-Assisted Development
## Scene 04 — Process: Planned Execution vs. Reactive Prompting

**Estimated words:** ~215  
**Estimated frames @ 30fps (130 WPM):** ~1480 frames  
**Voice:** John Wayne  
**Visuals:** Process flow diagram (plan → fleet → autopilot), timeline visual

---

## Script

Lesson three: planned execution produces vastly higher quality than reactive troubleshooting. And here's the proof.

In previous projects I worked on, we built with less planning. No design system upfront. No clear patterns. Agents built in isolation. The result? Complete rewrites. Projects that needed massive restructuring. We'd have to go back and prompt AI to take the same corrective action on page after page, feature after feature. Fifty, sixty, sometimes a hundred manual corrections. It was chaos.

This project was different. We planned upfront. Clear requirements. Clear patterns. Clear structure. Our fleet orchestration ran perfectly. No manual prompting. No babysitting. The agents executed exactly as instructed and delivered solid work. That was the power of planning.

But here's the discovery that came later. After fleet finished, we added Playwright end-to-end testing. That's when I spent a full day struggling to run tests efficiently, manually approving runs, reviewing output. That's when I discovered autopilot. You can activate it mid-process. Better yet, if you're confident in your instructions, you use the allow-all flag and step away completely. This single feature would have made that entire testing phase effortless. I would have activated it from day one if I'd known.

The lesson is clear. Plan everything upfront so your execution is clean and predictable. And use autopilot for any phase where you're confident in your instructions. Don't babysit. That's orchestration.

---

## Production Notes

- Clear contrast: previous projects (chaos/rewrites) vs. this project (planning → clean execution)
- Fleet ran perfectly with good planning; no issues there
- Autopilot discovery happened during Playwright testing phase (after fleet completed)
- Emphasize regret: autopilot would have eliminated the testing bottleneck if discovered earlier
- Tone: "trust the process you've built" + validate that planning worked
- Transition to: what goes into building a good process
