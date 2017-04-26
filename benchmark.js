
// Linear search
let linearSearch = (target, values) => {
  //write your code here
  let status;
  for (let i = 0; i < values.length; i++) {
    if (values[i] == target) {
      status = i;
      break;
    } else {
      status = -1;
    }
  }
  return status;
}

function binary_search (search, array) {
  // Your code here
  let foundIndex;
  let minIndex = 0
  let maxIndex = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let midIndex = parseInt((maxIndex + minIndex) / 2);
    if (search == array[midIndex]) {
      foundIndex = midIndex;
      break;
    } else if (search > array[midIndex]) {
      minIndex = midIndex + 1;
    } else if (search < array[midIndex]) {
      maxIndex = midIndex - 1;
    }
  }
  if (minIndex > maxIndex) {
    return -1;
  } else {
    return foundIndex;
  }

}

var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function() {
  /o/.test('Hello World!');
})
.add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
})
.add('String#match', function() {
  !!'Hello World!'.match(/o/);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
