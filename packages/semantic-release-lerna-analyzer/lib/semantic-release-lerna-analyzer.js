const commitAnalyzer = require('@semantic-release/commit-analyzer');

async function analyzeCommits (pluginConfig, config) {
    const {env, commits} = config;
    const relevantCommits = commits.filter(({message}) => {
        const packageDeclaration = message.split('\n\n')[1];
        return packageDeclaration && packageDeclaration.includes(env.npm_package_name);
    });

    console.log(Object.assign(config, {commits: relevantCommits}).commits);

    return commitAnalyzer.analyzeCommits(pluginConfig, Object.assign(config, {commits: relevantCommits}));
}

module.exports = {analyzeCommits};
