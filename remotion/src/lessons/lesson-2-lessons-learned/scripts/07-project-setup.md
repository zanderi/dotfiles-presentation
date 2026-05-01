# Lesson 2: Lessons Learned in AI-Assisted Development
## Scene 07 — Additional Best Practices & Resilience

**Estimated words:** ~190  
**Estimated frames @ 30fps (130 WPM):** ~1300 frames  
**Voice:** John Wayne  
**Visuals:** Circuit breaker pattern diagram, best practices checklist, metric tracking

---

## Script

A few more critical pieces before we wrap up.

First, think about resilience. When you're orchestrating services, you have to consider: what happens if something fails? What if an API is down? What if an agent keeps producing errors? The old thinking is you hammer it harder, retry more aggressively. That's wrong.

Use circuit breaker patterns. Monitor the health of your dependencies. If something's broken, stop sending requests to it. Fail fast. Switch to diagnostic mode. That same pattern applies to agent orchestration. If an agent consistently fails, don't keep retrying. Escalate. Reroute. Prevent cascading failures.

Second, treat your agent instructions like code. Version control them. Document changes. When an instruction update causes issues, you can roll back. This matters because an ambiguous instruction to fifty agents multiplies the problem fifty times.

Third, collect metrics. Token spend on execution versus corrections. Bug escape rate at each stage. How many rework cycles? Which agents are most reliable? Which features needed the most iteration? This data becomes your roadmap for the next project.

And finally, before you ship anything, validate agent output automatically. Schema checks. Linting. Semantic validation. Don't wait for humans to catch errors. Build validation into the pipeline.

---

## Production Notes

- Show circuit breaker diagram
- Practical tips: treat instructions as code, collect metrics, validate output
- Tone: systematic and professional
- This is wrapping up the technical content
- Transition to: closing thoughts and key takeaways
