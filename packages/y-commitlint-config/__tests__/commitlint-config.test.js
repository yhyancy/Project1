
const commitlintConfig = require('../lib/commitlint-config');
const assert = require('assert');

assert.strictEqual(commitlintConfig(), 'Hello from commitlintConfig');
console.info('commitlintConfig tests passed');
