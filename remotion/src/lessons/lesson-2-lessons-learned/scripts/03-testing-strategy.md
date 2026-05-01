# Lesson 2: Lessons Learned in AI-Assisted Development
## Scene 03 — Testing Strategy: Multiple Agents, Different Bugs

**Estimated words:** ~195  
**Estimated frames @ 30fps (130 WPM):** ~1335 frames  
**Voice:** John Wayne  
**Visuals:** Test results matrix (API ✅ / UI ❌), bug icons

---

## Script

Lesson two: specialized testing agents catch different classes of bugs.

We ran API tests. Everything passed. All endpoints validated. Contracts were correct. The API was solid.

Then we ran UI and end-to-end tests. Eight real bugs appeared. Not in the API. In the integration between frontend and backend. Field name mismatches. Missing query parameters. State management failures. UI rendering issues. Silent data loss.

Here's the key insight: if we'd only run API tests, we would have shipped with bugs. If we'd only run UI tests, we might have blamed the API incorrectly. By running both, specialized agents each caught what the other missed.

We also made a critical mistake. We created the Playwright end-to-end testing agent after the project was mostly complete. That's backwards. That agent should have existed from day one. Testing agents need to be ready before implementation agents start.

---

## Production Notes

- Show test matrix graphic
- Emphasize: different agents → different insights
- Call out the missed opportunity: should have had Playwright from day one
- This is setting up best practices section later

