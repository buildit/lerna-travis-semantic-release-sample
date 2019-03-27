const commitAnalyzer = require('@semantic-release/commit-analyzer');

module.exports = function (pluginConfig, config, cb) {
    const {pkg, commits} = config;
    const relevantCommits = commits.filter(({message}) => {
        const packageDeclaration = message.split('\n\n')[1];
        return packageDeclaration && packageDeclaration.includes(pkg.name);
    });

    commitAnalyzer.analyzeCommits(pluginConfig, Object.assign(config, {commits: relevantCommits}), function (err, type) {
        cb(err, type);
    });
};
