# Lesson 2: Lessons Learned in AI-Assisted Development
## Scene 02 — Model Selection: Opus vs. Sonnet

**Estimated words:** ~210  
**Estimated frames @ 30fps (130 WPM):** ~1445 frames  
**Voice:** John Wayne  
**Visuals:** Token usage graphic (1.3%→3% vs. 50%), model comparison matrix

---

## Script

Lesson one: model selection matters. We chose Claude Sonnet for fleet execution. Sonnet is fast. Sonnet is cheap. And Sonnet is prone to hallucinations.

During fleet execution, we saw case mismatches in the database results. Sonnet wasn't following case-sensitive field names. Small errors, but they cascaded. The frontend expected certain field naming conventions. Sonnet returned fields in lowercase. Everything broke on render.

Here's what we thought would be cheap execution became the most expensive part of the project. Initial fleet execution used one point three to three percent of our credits. Then came the corrections. Manual troubleshooting. Re-prompting to fix the mistakes. Fifty percent of our entire credit budget. That's a fifteen to twenty times multiplier on cost.

The lesson: Cheap execution that produces errors is more expensive than reliable execution upfront. For data-critical work, for precise transformations, use Opus. Use Sonnet for exploration and low-stakes generation. Know the difference and choose accordingly.

---

## Production Notes

- Show token graphic on screen
- Emphasize the 15-20x cost multiplier — this is the money quote
- Set tone: this is about real costs, not just theoretical concerns
- Transition to: how to catch these errors earlier with better testing

