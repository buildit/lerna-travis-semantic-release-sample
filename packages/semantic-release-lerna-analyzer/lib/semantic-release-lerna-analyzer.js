const commitAnalyzer = require('@semantic-release/commit-analyzer');

async function analyzeCommits (pluginConfig, config) {
    const {pkg, commits} = config;
    const relevantCommits = commits.filter(({message}) => {
        const packageDeclaration = message.split('\n\n')[1];
        return packageDeclaration && packageDeclaration.includes(pkg.name);
    });

    return commitAnalyzer.analyzeCommits(pluginConfig, Object.assign(config, {commits: relevantCommits}));
}

module.exports = {analyzeCommits};
