# pnpm Monorepo + GitHub Actions + npmjs Demo

Demo of pnpm workspaces + CI-driven npmjs publishing through GitHub Actions,
using semantic-release with multi-semantic-release to let each package
track its own version.

Conventional commit messages enforced in CI and through pre-commit with husky

## Packages

- `demo-monorepo-core` — exports `greet(name)`.
- `demo-monorepo-cli` — CLI `demo-greet`, depends on core via `workspace:*`.
- `demo-monorepo-utils` — exports `toTitleCase(input)`, fully independent.

## Dev loop

```bash
pnpm install
pnpm run ci
```

Repo tooling needs Node ≥24.15 (pinned in `.tool-versions`). Published
packages themselves only need Node ≥20.

## Releases

No hand-managed versioning, every package.json version is
`"0.0.0-development"`. Real version comes from Conventional Commits
(`feat:`, `fix:`, `feat!:`/`BREAKING CHANGE:`), scoped per-package by
multi-semantic-release, config in `release.config.js`.

```bash
pnpm run release                                      # what CI runs
pnpm exec multi-semantic-release --dry-run --no-ci    # local preview
```

`--deps.bump=override` bumps `demo-monorepo-cli`'s dependency on core when core releases.

## Go live

1. `gh repo create <user>/package-monorepo-pnpm --private --source=. --push`
2. Create npm Granular Access Token (read+write, all packages) at npmjs.com/settings/~/tokens
3. `gh secret set NPM_TOKEN` (no GITHUB_TOKEN secret needed — Actions provides it)
4. PR touching `packages/` → `prerelease.yml` runs CI + commitlint check, no release
5. Merge with Conventional Commit → `release.yml` releases only the touched package(s)

## Commit messages

Enforced two ways: husky `commit-msg` hook locally (skippable with
`--no-verify`), `commitlint --from origin/main --to HEAD` in
`prerelease.yml` as the real gate.

