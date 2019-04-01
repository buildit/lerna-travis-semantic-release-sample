module.exports = {
    plugins: [
        '@ablue-test/semantic-release-lerna-analyzer',
        '@ablue-test/semantic-release-lerna-release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/git',
        '@semantic-release/github',
    ],
};
