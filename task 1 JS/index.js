
const numbers = [1, 2, 3, 4, 5];

function task(arr) {
  
  
  //spread operator
    const sprd = [...arr, 6, 7, 8];
  console.log(sprd);
  
  //  tostring
  const str = sprd.toString();
  console.log( str);

  // map 
  const sqr = sprd.map(function(item) {
    return item * item;
  });
  console.log( sqr);
  
  

  //reduce
  const sum = sprd.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log(sum);

  // filter
  const odd = sprd.filter(function(item) {
    return item % 2 !== 0;
  });
  console.log( odd);

  
  //  concat & push
  const New = sprd.concat(9);
  console.log(New);
  
  const added = sprd.push(10);
  console.log(sprd);

  // length
  const len = sprd.length;
  // console.log(len);
  
  //if-else statement 
  if (arr.length > 3) {
    console.log("Array is long");
  } else {
    console.log("Array is short");
  }
  
  
  //reverse & join 
  const rev = sprd.reverse();
  const revstr = rev.join(" ");
  console.log(revstr);
  
  //sort
  const srt =sprd.sort();
  console.log(srt);

  return arr;
}
const Array1 = task(numbers);

console.log( numbers);
console.log(Array1);