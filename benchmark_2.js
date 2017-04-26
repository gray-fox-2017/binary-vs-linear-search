// var suite = new Benchmark.Suite;
// let search = 155;
// let array = [];
// for (let i = 0; i < 999; i++){
//   array.push(i);
// }
'use strict';

var linear_search = (function () {
  let search_1 = 15;
  let array_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  // for (let i = 0; i < 999; i++){
  //   array_1.push(i);
  // }
  return array_1.indexOf(search_1);
})();

var global_linear_search = (function ()  {
  //write your code here
  let search_2 = 15;
  let array_2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  // for (let i = 0; i < 999; i++){
  //   array_2.push(i);
  // }
  let result = [];
  for (let i = 0; i < array_2.length; i++){
    if (array_2[i] == search_2){
      result.push(i);
    }
  }
  return result;
})();

var binary_search = (function () {
  let search_3 = 15;
  let array_3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  // for (let i = 0; i < 999; i++){
  //   array_3.push(i);
  // }
  var minIndex = 0;
  var maxIndex = array_3.length - 1;
  var currentIndex;
  var currentElement;

 while (minIndex <= maxIndex) {
  //  currentIndex = (minIndex + maxIndex) / 2 | 0;
  currentIndex = Math.floor((minIndex + maxIndex) / 2);
  currentElement = array_3[currentIndex];

   if (currentElement < search_3) {
       minIndex = currentIndex + 1;
   }
   else if (currentElement > search_3) {
       maxIndex = currentIndex - 1;
   }
   else {
       return currentIndex;
   }
 }
 return -1;
})();

/**********************************************/
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite
  .add('normal linear search', linear_search)
  .add('global linear search', global_linear_search)
  .add('binary search', binary_search)
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
