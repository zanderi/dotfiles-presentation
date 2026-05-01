# Lesson 2: Lessons Learned in AI-Assisted Development
## Scene 05 — Componentization: Design System Upfront

**Estimated words:** ~190  
**Estimated frames @ 30fps (130 WPM):** ~1300 frames  
**Voice:** John Wayne  
**Visuals:** Componentization before/after (Add Item button example), design system reference

---

## Script

Lesson four: define your design system and component library before agents start building.

Multiple agents worked on different pages of the project. multiple pages in the project All three needed an Add Item button to create new records. So we got three different implementations.

One agent built it with custom CSS. Another used Bootstrap button utilities directly. The third created a custom Vue component. Same feature, three different ways. They looked similar but not identical. Slightly different spacing. Different hover effects. Different colors.

We had to comb through the codebase and manually consolidate them into a single reusable component. Post-hoc refactoring. That's expensive. That's rework.

If we'd defined a design system upfront — a component catalog, design tokens, naming conventions, shared patterns — every agent would have had a reference. Work on the Add Item button once. Document it. Make it part of the agent's context. Now every agent knows: when you need an Add Item button, use this. No duplication. No refactoring.

This is true for everything. Color palette. Typography scale. Spacing rules. Modal patterns. Form patterns. Master-detail layouts. Document them once. Share them with your agents. Consistency emerges automatically.

---

## Production Notes

- Show before/after graphic: three implementations → one consolidated
- Emphasize: define upfront, not refactor after
- This drives home the "planning matters" message
- Sets up next lesson about orchestration thinking

