'use strict';

const aModule = require('@ablue-test/a');
const bModule = require('@ablue-test/b');

module.exports = calc;

function calc() {
    console.log(aModule.add(1, 2));
    console.log(bModule.subtract(1, 2));
}

calc();
