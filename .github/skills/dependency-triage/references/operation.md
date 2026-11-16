# Local operation and migration

For the hosted maintenance workflow, see `ci/dependency-maintenance.md` from the
repository root. It consumes a lean collector profile plus deterministic prepared
facts and structured decisions; the local report-only procedure below remains
available. `--profile maintenance` intentionally omits PR evidence and does not
assess PR checks or auto-merge eligibility.

Run from the repository root with the exact Node version in `.nvmrc`. No new npm packages, GitHub CLI,
Copilot access or scheduled workflow are required.
The skill now produces two compact tables: affected packages with highest alert
severity and exact patch/pin recommendations, followed by evidenced lagging pins.
The accompanying JSON uses schemaVersion 2 (`packages` and `laggingPins`), replacing
the original per-alert priority/complexity inventory. Existing generated reports
are not automatically converted when the instructions change; rerun the skill.

```powershell
node .github/skills/dependency-triage/scripts/collect.mjs --repo visitscotland/vs-component-library
node --test .github/skills/dependency-triage/scripts/collect.test.mjs
```

If GH_TOKEN is stored in the ignored repository `.env`, load it privately with
`node --env-file=.env .github/skills/dependency-triage/scripts/collect.mjs --repo visitscotland/vs-component-library`.

The live collector reads `GH_TOKEN` (or `GITHUB_TOKEN`) from the process
environment. Supply it using your existing credential manager, never a committed
file or command-line argument. A repository-scoped fine-grained token/GitHub App
needs Dependabot alerts: read, Contents: read, Pull requests: read, Checks: read,
and Commit statuses: read, with access to this repository and any required
organization approval/SSO. Public repository access alone does not grant access
to alerts. Credentials available to a connector are not automatically available
to this Node process. No write permission is needed.

The collector performs GET requests to api.github.com, follows API pagination,
and writes an evidence bundle. Failures preserve partial evidence with explicit
source errors and exit code 2. Setup errors use exit code 1. Complete collection
uses exit code 0. A complete collection is not proof of security or fix feasibility.
Raw alerts/PR text and lockfiles may contain sensitive project information;
generated `triage-results/` files are ignored by Git. Do not publish them by default.

An offline, synthetic three-alert example is provided:

```powershell
node .github/skills/dependency-triage/scripts/collect.mjs --repo example/demo --fixture .github/skills/dependency-triage/references/sample-api.json --out triage-results/sample-evidence.json
```

Invoke Codex with: “Use the skill at
`.github/skills/dependency-triage/SKILL.md` to triage
`triage-results/sample-evidence.json` and write the local report.” This repository
copy is explicitly addressable; it is not installed into your personal Codex skill
catalog. Install/link it into the Codex skill directory later if automatic local
discovery is wanted. Keep the repository copy as the source for migration.

## Component library context

This repository publishes the VisitScotland Vue component library with Yarn 4.16.0
and Vite. It has no Nuxt server or homepage browser smoke suite. Validation runs
`yarn test`, `yarn lint` and `yarn build`. Chromatic remains separate and skips
Dependabot updates. Inspect all Yarn resolutions and locked copies before proposing pins.
The collector records the default-branch manifest and lockfile at a resolved SHA.

## Information needed next

- A credential with the read permissions above and confirmation of repositories
  to include. Live component library collection has been validated; credentials remain local.
- Runtime/build exposure: deployment topology, server-side entry points, handling
  of untrusted inputs, CI trust boundaries, and relevant disabled features.
- Ownership and escalation expectations if the compact report will be published;
  the inventory reports advisory severity without application-priority scoring.
- Remediation policy: permitted resolutions/overrides, treatment of pre-1.0 minor
  updates, major upgrades, no-fix alerts, and supported Node/Vue versions.
- Dependency-path evidence for real transitive alerts (for example Yarn why
  output against the recorded lockfile). This version does not calculate paths.
- Parent manifest constraints before applying resolutions, and optional isolated
  unpinned resolution evidence. The collector does not calculate counterfactual
  installs or query registry releases; the skill must not invent those results.
- Weekly report audience, owner mapping, delivery destination, cadence and what
  should trigger immediate notification. This version writes local files only.
- Reviewed example outcomes for calibrating recommendations. The synthetic
  example is a practice case, not evidence that the model's decisions are reliable.

Use [the offline evaluation checklist](sample-evaluation.md) to review a practice
run, including a deliberately inaccessible-alerts case.

Before migrating, run the same evidence cases through Codex and Copilot and
compare coverage, factual grounding, unknown handling and recommendations. Reuse
the collector and instruction body; configure the hosted engine, read credentials,
triggers, allowed tools and controlled report publication separately. No hosted
workflow or schedule is added here.

API references:
- https://docs.github.com/en/rest/dependabot/alerts
- https://docs.github.com/en/rest/pulls/pulls
