#!/bin/sh

run_npm() {
    npm run semantic-release -- --plugins @semantic-release/commit-analyzer
    npm run clean && npm run bundlesize
    npm version prerelease --preid=alpha
    npm publish --tag next
}

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  # Does a branch need to be specified?
  git add .
  git commit --message "NPM Prerelease; Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  # git remote add origin-pages https://${GH_TOKEN}@github.com/buidit/website.git
  git push --quiet
}

cd packages/calc

run_npm
setup_git
commit_website_files
upload_files
