/**
 * render-all-lessons.ts
 *
 * Renders MP4 files for all lessons (0–10) sequentially.
 * Output goes to: out/lesson-N-SlugName.mp4
 *
 * Usage (from remotion/ directory):
 *   npm run render:all
 *
 * Each render uses the Remotion CLI. Studio must NOT be running on port 3000
 * while rendering (or use a different port).
 *
 * Estimated time: ~3–8 min per lesson depending on length and machine.
 */

import { execSync } from "child_process";

const LESSONS = [
  { num: 0,  id: "UpgradeGuide",         slug: "upgrade-guide"           },
  { num: 1,  id: "AIEnvSetup",           slug: "ai-env-setup"            },
  { num: 2,  id: "ContextHierarchy",     slug: "context-hierarchy"       },
  { num: 3,  id: "FourAutomationLayers", slug: "four-automation-layers"  },
  { num: 4,  id: "AgentEcosystem",       slug: "agent-ecosystem"         },
  { num: 5,  id: "ContentTypes",         slug: "content-types"           },
  { num: 6,  id: "BuildingAgents",       slug: "building-agents"         },
  { num: 7,  id: "WorkflowGitflow",      slug: "workflow-gitflow"        },
  { num: 8,  id: "SkillsAndMcp",         slug: "skills-and-mcp"          },
  { num: 9,  id: "ProjectSetup",         slug: "project-setup"           },
  { num: 10, id: "BusinessEcosystem",    slug: "business-ecosystem"      },
];

const startAll = Date.now();
const results: { num: number; slug: string; ok: boolean; elapsed: string }[] = [];

console.log(`\n🎬  Rendering ${LESSONS.length} lessons to MP4...\n`);

for (const lesson of LESSONS) {
  const outFile = `../out/lesson-${lesson.num}-${lesson.slug}.mp4`;
  const chromePath = `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`;
  const cmd = `cross-env LESSON=${lesson.num} npx remotion render ${lesson.id} ${outFile} --browser-executable="${chromePath}"`;

  console.log(`\n━━━ Lesson ${lesson.num}: ${lesson.slug} ━━━`);
  console.log(`  Command : ${cmd}`);

  const t = Date.now();
  try {
    execSync(cmd, { stdio: "inherit", cwd: process.cwd() });
    const elapsed = ((Date.now() - t) / 1000 / 60).toFixed(1);
    console.log(`  ✅ Done in ${elapsed}m → out/lesson-${lesson.num}-${lesson.slug}.mp4`);
    results.push({ num: lesson.num, slug: lesson.slug, ok: true, elapsed: `${elapsed}m` });
  } catch (e) {
    const elapsed = ((Date.now() - t) / 1000 / 60).toFixed(1);
    console.error(`  ❌ FAILED after ${elapsed}m`);
    results.push({ num: lesson.num, slug: lesson.slug, ok: false, elapsed: `${elapsed}m` });
  }
}

const totalMin = ((Date.now() - startAll) / 1000 / 60).toFixed(1);
console.log(`\n${"━".repeat(60)}`);
console.log(`🎬  Render complete — ${totalMin}m total\n`);

for (const r of results) {
  const icon = r.ok ? "✅" : "❌";
  console.log(`  ${icon}  Lesson ${r.num}: ${r.slug} (${r.elapsed})`);
}

const failed = results.filter((r) => !r.ok);
if (failed.length > 0) {
  console.error(`\n${failed.length} lesson(s) failed. Check output above for details.`);
  process.exit(1);
}
