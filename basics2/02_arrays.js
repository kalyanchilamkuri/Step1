const marvel_heros=["a","b","c"]
const dc=["d","e"]

marvel_heros.push(dc);

console.log(marvel_heros);
console.log(marvel_heros[3]);

// concat returns new array

const newarr=marvel_heros.concat(dc);
console.log(newarr);

// spread operator
//  return new array 

const allew=[...dc,...marvel_heros]
console.log(allew)


// isArray() to check whether something is present in an array or not 

// Array.from()

// Array.from() is used to create an array from an iterable or array-like value. returns new array 

let str = "Hello";
console.log(Array.from(str));


// isArray → "Is this an array?"
// from    → "Make an array from this."

let strr = "Hello";

console.log(Array.isArray(str));
// false

let arr = Array.from(str);

console.log(Array.isArray(arr));
// true