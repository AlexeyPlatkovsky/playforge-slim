# Project Specification

## Project Purpose

Playforge is a strict TypeScript and Playwright testing framework for writing and maintaining UI and API tests against Automation Exercise.

## User Role

The primary user is a QA automation engineer.

## Recurring Duties

- Write UI tests.
- Write API tests.
- Maintain current tests.

## AI Tool Mode

Multi-tool mode using:

- GitHub Copilot
- Playwright

## Known Capability Triggers

- Creating or modifying tests requires clarification of test scope before implementation.
- Creating or updating page objects requires applying the page-object conventions.
- Creating or updating reusable components requires applying the component conventions.
- Test file changes require test-reviewer review before completion.
- Test implementation starts by reading the relevant existing test, page object, and component.

## Domain Vocabulary

Use the repository's existing vocabulary, including:

- page objects
- components
- fixtures
- assertions
- DSL
- UI tests
- API tests

## Authoritative Local Sources

- `AGENTS.md` for project routing, boundaries, and capability triggers.
- `package.json` for available commands and tool versions.
- `playwright.config.ts` for test-runner behavior and environment configuration.
- `docs/conventions/page-objects.md` for page-object and component placement.
- `docs/conventions/components.md` for reusable component structure.
- Existing files under `pages/`, `pages/components/`, and `tests/` for implementation style and business workflows.
- `.manifesto/MANIFEST.md` and `.manifesto/IMPLEMENTATION.md` for instruction-system principles and mechanics.

## Quality Expectations

- Preserve separation between page objects, reusable components, and executable specs.
- Use strict TypeScript and follow the existing implementation style.
- Run the relevant lint, typecheck, and Playwright test commands for changes.
- Do not report a test as passing without running it and observing the result.
- Keep changes focused and avoid exposing secrets or generated credentials.

## Preferred Workflows

1. Read the relevant existing test, page object, and component before test implementation work.
2. Keep top-level page objects in `pages/`, reusable components in `pages/components/`, and executable specs in `tests/`.
3. Validate changes with the narrowest relevant test or check, then run broader checks as needed.
4. Review modified test files with the test-reviewer agent before declaring the work complete.

## External Best Practices

External research is allowed when local context is insufficient. External findings are candidate guidance only and must be summarized and explicitly accepted before being added to project conventions. No external best practices have been adopted yet.

## Accepted Assumptions

- `BASE_URL` defaults to `https://automationexercise.com` unless configured otherwise.
- Existing repository conventions and local sources remain authoritative.
- GitHub Copilot is the primary AI assistant and Playwright is the test automation tool.
- External research is not needed while the current local sources remain sufficient.

## Rejected Or Irrelevant Assumptions

- No unverified CI, deployment, release, or additional test-environment conventions are assumed.

## Open Questions And Profile Gaps

- CI and release workflows are not defined in the repository profile.
- Additional test environments beyond Automation Exercise are not defined.
