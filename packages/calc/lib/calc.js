'use strict';

const aModule = require('@ablue-test/a');
const bModule = require('@ablue-test/b');

module.exports = calc;

function calc() {
    const a = aModule.add(1, 2);
    const b = bModule.subtract(1, 2);

    return a + b;
}

calc();
