// objects -> singleton -> singleton means only one instance of an object is created and that same instance is used everywhere.

const symm=Symbol("key1");

const kalyan={
    name:"kalyan",
    age:20,
    [symm]:"ok",
    class:"btech",
    lastlogin:["oneday","twoday"]
}

// console.log(kalyan.name);
// console.log(kalyan["age"]);
// console.log(kalyan);

kalyan.name="Hi"

// Object.freeze(kalyan);

kalyan.name="Hello";

kalyan.greeting=function(){
    console.log("Hi")
}

console.log(kalyan.greeting);

kalyan.greeting2=function(){
    console.log(`Hi ${kalyan.name}`);
}

console.log(kalyan.greeting2);

console.log(kalyan);