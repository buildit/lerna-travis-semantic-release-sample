const releaseNotesGenerator = require('@semantic-release/release-notes-generator');

async function generateNotes (pluginConfig, context) {
    const {env, commits} = context;
    const relevantCommits = commits.filter(({message}) => {
        const packageDeclaration = message.split('\n\n')[1];
        return packageDeclaration && packageDeclaration.includes(env.npm_package_name);
    });

    return releaseNotesGenerator.generateNotes(pluginConfig, Object.assign(context, {commits: relevantCommits}));
}

module.exports = {generateNotes};
