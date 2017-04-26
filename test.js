'use strict';

var constVars = (function () {
  return function () {
    const foo = 42;
    for (let i = 0; i <= foo; i++) {
      if (i === foo) {
        return foo;
      }
    }
  };
})();

var letVars = (function () {
  return function () {
    let foo = 42;
    for (let i = 0; i <= foo; i++) {
      if (i === foo) {
        return foo;
      }
    }
  };
})();

var varVars = (function () {
  return function () {
    var foo = 42;
    for (var i = 0; i <= foo; i++) {
      if (i === foo) {
        return foo;
      }
    }
  };
})();

/**********************************************/

var suite = new Benchmark.Suite;

// add tests
suite
  .add('const variables', constVars)
  .add('let variables', letVars)
  .add('var variables', varVars)
  // add listeners
  .on('cycle', function(event) {
    createParagraph(String(event.target));
  })
  .on('complete', function() {
    createParagraph('Fastest is ' + this.filter('fastest').map('name'));
    createParagraph('---------');
  })
  // run async
  .run({ 'async': true });

createParagraph('Please wait...');

function createParagraph(text) {
  var para = document.createElement('p');
  var t = document.createTextNode(text);
  para.appendChild(t);
  document.body.appendChild(para);
}
