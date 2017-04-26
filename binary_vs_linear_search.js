//npm i --save benchmark
var Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
const binary_search = (search, array, tempIndx = 0) => {
  let len = array.length;
  if (len >= 2) {
    let icen = Math.ceil(len / 2) - 1 ;
    if (array[icen] === search){
      return tempIndx+icen;
    }
    //search lebi gede
    else if (array[icen] < search) {
      let nlen = len-icen;
      if (len === 2)
        if (array[1] === search) return tempIndx+1;
        else if (array[2] === search) return tempIndx+2;

      icen += 1;
      tempIndx = tempIndx+icen;
      nlen = nlen > 0 ? nlen : 1;
      return binary_search(search, array.splice(icen,nlen),tempIndx);
    }
    //search lebi kecil
    else if (array[icen] > search){
      let nlen = icen;
      if (len === 2) {
        if (array[1] === search) return tempIndx;
        else if (array[2] === search) return tempIndx+1;
      }
      nlen = nlen > 0 ? nlen : 1;
      return binary_search(search, array.splice(0,nlen),tempIndx);
    }
  }
  else if (len === 1 && array[0] === search)  return tempIndx;
  else return -1;

}
const linear_search = (target, values) => {
  let len = values.length;
  let arr = [];
  for (let i = 0; i<len; i++) {
    if (values[i] === target) {
      arr.push(i);
    }
  }
  return (arr.length > 0? arr : -1 );
};
const generate_randomArr = (n) => {
  let arr  = [];
  for (let i = 0; i<n; i++) {
    arr.push(Math.floor((Math.random() * 100) + 1));
  }
  return arr;
}

const generate_randomNum = () => {
  return Math.floor((Math.random() * 100) + 1);
}



let arr1 = generate_randomArr(1000);
let arr2 = generate_randomArr(10000);
let arr3 = generate_randomArr(10000000);
let arrAll = [arr1,arr2,arr3];
let target = generate_randomNum();

// add tests
arrAll.forEach((arr1)=>{
  suite.add('binary_search#test', function() { binary_search(target,arr1); })
  .add('linear_search#test', function() { linear_search(target,arr1); })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
});
