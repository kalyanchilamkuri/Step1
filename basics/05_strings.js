let one = "Hello";

console.log(typeof one); // "string"

// light weight value , this is normal and recommended way to create the strings 


let two = new String("okk");

console.log(typeof two); // "object"


// this creates an object that wraps the string okk 

// so typeof two gives object 


// let one = "Hello" creates a primitive string, so typeof one is string. But let two = new String("okk") creates a String object, so typeof two is object. I normally use the first approach because creating String objects is unnecessary in most cases."


// slice() => slice(start,end) => start , end , end is not included , can use negative indexes also 

// console.log(str.slice(-2)); // second character from the end 


const newstr=one.substring(0,2);
console.log(newstr);

let a=two.slice(1,1);
console.log(a);
a=two.slice(-1,2);
console.log(a);
console.log("okk".slice(-20)); // if only one index then there is no end so full string comes 

const ab="       ok    "
console.log(ab.trim());

console.log(ab.replace('o','O'));


console.log(`HI i am kalyan chilamkuri , Are you ${ab.trim()}`);


string.split(separator)  // helpful to separate 

let str = "Hello World";

console.log(str.split(" "));

["Hello", "World"] 

