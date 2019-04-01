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

## TODOs

Some things to do after this prototype is done.

* Rewrite the Semantic Release and lerna analyzer package in TypeScript
