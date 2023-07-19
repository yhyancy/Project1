const fs = require('fs');

fs.readFile('../node.js', 'utf-8', (err, data) => {
  // no-console
  console.log(err, data);
});

// no-var
// @typescript-eslint/no-unused-vars
var count = 1 + 1;

class Test {
  func(): number {
    return 1;
  }
}

export default Test;
// eol-last