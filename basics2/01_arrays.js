// array 

const myarr=[0,1,2,3,4]
const myhero=["a","b"]

const myarr2=new Array(1,2,3,4)

console.log(myarr[1]);

// Array methods 


myarr.push(6);
myarr.pop();
myarr.shift(); // removs the first element in the array and return that element 
myarr.unshift(3); // used to add one or more elements in the beginning of the array 
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(9))

const newarr=myarr.join();
console.log(newarr);
console.log(myarr);

join() // converts an array into a string 

let arr = ["A", "B", "C"];

console.log(arr.join("-"));  // "A-B-C"
console.log(arr.join(""));   // "ABC"


// Slice() used to copy or extract part of the array and it doesnot modify the original array 

let arrr = [10, 20, 30, 40, 50];
let res=arrr.slice(1,4) // return from index 1 to (4-1) index
console.log(res);

arrr.slice(-2); // return last 2 elements



// Splice() used to add, remove , or replace elements in the original array 

let ar=[10, 20, 30, 40, 50];
ar.splice(1, 2); // starts from the index 1 and removes 2 elements 
console.log(ar);

ar.splice(2,0,30) // starts at index 2 , removes 0 elements and adds 30 
arr.splice(2,1,30,40) // starts at index 2 , removes 1 element and adds 30 and 40 

// join() converts an array into a string using a separator. slice() gives me a portion of an array without changing the original array. But splice() changes the original array, and I can use it to add, remove, or replace elements. So the main difference I remember is that slice() does not modify the array, while splice() modifies it.
