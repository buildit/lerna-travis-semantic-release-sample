# lerna-travis-semantic-release
An experiment to see how Lerna 3+ works with Semantic Release and Travis CI

## Making Commits

This repo uses Commitizen and Commit Lint to enforce proper commit syntax. You'll need to use the following command to
checkin your commits.

```bash
npm run commit
```

## Running a deploy

Deploys can only safely be run in a CI environment since they make use of Semantic Release to automatically update
repos. When a deploy is run it will trigger the `deploy` script on every package.json file.

```bash
npm run deploy
```

### Postmortem

* Consider bundling the lerna semantic release packages into individual NPM repos. These are rewrites of popular packages that are now deprecated but in demand (and they're very re-usable)
* Important to be very careful when marking affected packages (with commitizen usage) to make sure packages release properly

## TODOs

Some additional lifting still needed for stability and LTS.

* Convert Lerna analyzer and Lerna changelog package to TypeScript
* Lerna changelog test coverage (untested)
* Bundle all semantic release packages into a single folder with a package namespace such as `@buildit/semantic-release/lerna/commit-analyzer`. Currently creating a mess in the `/packages` folder
* GitHub release notes needs to indicate what package the release is for (currently prints an anonymous version number for an unknown package). Write a wrapper around the github plugin that prints the package name in the title
* Full documentation of all Lerna local `npm run` commands for CI/CD and CLI usage
* Full documentation on checking in commits with notes for potential pitfalls
