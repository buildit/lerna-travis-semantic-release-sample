'use strict';

const semanticReleaseLernaAnalyzer = require('../lib/semantic-release-lerna-analyzer');
const sinon = require('sinon');
const commitAnalyzer = require('@semantic-release/commit-analyzer');

describe('semantic-release-lerna-analyzer', () => {
    const PACKAGE_NAME = '@ablue-test/calc';

    let _analyzeCommitsStub;
    let _config;

    beforeEach(() => {
        _analyzeCommitsStub = sinon.stub(commitAnalyzer, 'analyzeCommits');
        _config = {
            pkg: { name: PACKAGE_NAME },
            commits: [],
        };
    });

    afterEach(() => {
        _analyzeCommitsStub.restore();
    });

    it('should run', () => {
        semanticReleaseLernaAnalyzer(null, {commits: []}, null);
    });

    it('should find commits that match the package name', () => {
        const commit = `feat(calc refactor): change to calc system\n\naffects: ${PACKAGE_NAME}`;
        _config.commits.push({message: commit});

        semanticReleaseLernaAnalyzer(
            null,
            _config,
            null,
        );

        sinon.assert.calledWith(_analyzeCommitsStub, null, _config);
    });

    it('should skip commits that do not match', () => {
        const commit = `feat(calc refactor): change to calc system\n\naffects: @asdf/calc`;
        _config.commits.push({message: commit});

        semanticReleaseLernaAnalyzer(
            null,
            _config,
            null,
        );

        sinon.assert.calledWith(_analyzeCommitsStub, null, Object.assign(_config, {commmits: []}));
    });

    it('should not fail if there is no lerna affects line', () => {
        const commit = `feat(calc refactor): change to calc system`;
        _config.commits.push({message: commit});

        semanticReleaseLernaAnalyzer(
            null,
            _config,
            null,
        );

        sinon.assert.calledWith(_analyzeCommitsStub, null, Object.assign(_config, {commmits: []}));
    });
});
