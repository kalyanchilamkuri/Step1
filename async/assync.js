
// normally javascript runs code line by line , but some operations take time like an API response , but i don't want javascript to completely stop while waiting , thats where promises , async , and await come in 

// what is async ? 
// when i put async before a function , that function always returns a promise 

// await is used to wait for a promise to settle and get its result 

async function greet(){
    const res=await Promise.resolve("Hello"); // I want the resultof this promise before continuing this async function 
    console.log(result);
}

greet();


// await can only normally be used inside async 

//example 

async function getusers(){ // make the function asynchronoous so i can use await inside it 
    const res=await fetch(); // await waits for the response , I send the api request , fetch() returns a promise 
    const data=await res.json();
    console.log(data);
}

getusers();

// using then

fetcj().then((response)=>{return response.json()}).then((data)=>{console.log(data)});


// common misconception => await doesnot mean javascript completely stops
// example 

async function test(){
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("start");
test();
console.log("End");

// output is...........start , A , End , B because await pauses the rest of the async function but js can continue doing other work  

//await -> await is used to wait for a promise result inside an async function , It makesw asynchronous code easier to read because I can write it in a style similar to normal synchronous code 
// async -> async is used to make a function asynchronous , an async function always returns a promise , even if i return a normal value 
// we use async and await to handle asynchronous operations like API calls . It makes promise-based code cleaner and easier to understand , I can also use try..catch for error handling 

async function getData(){
    try{
        const res=await fetch("url");
        const data=await res.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

getData();

//async -> functions returns a promise 
// await -> wait for a promise result inside async function 
// try/catch -> handle errors 


//Promise ? => a promise is an object that represents the future result of an aysnchronous operation 

// It means i will give you a result later 

// promise has 3 states a)pending b)fulfilled c)Rejected 

// pending => it means the operation is still running 
// fulfilled => the operation was successful 
// Rejected => Failed 

//example 

new Promise((resolve,reject)=>{
    // pending 
    resolve("Success");
    //Fulfilled
});

// resolve() => It means the operation was successful 

const promise=new Promise((resolve,reject)=>{
    resolve("Task Completed");
});

// I can get the result using .then()

promise.then((result)=>{
    console.log(result);
});

// reject() => The operation failed 

const prom=new Promise((resolve,reject)=>{
    resolve("something went wrong")
})

// we can handle this with catch()

prom.catch((err)=>{
    console.log(err)
})

// .then() is used when the promise is successful 

// .catch() is used when the promise is rejected 

// .finally() => runs whether the promise is successful or fails 

promise.then((result)=>console.log(result)).catch((error)=>console.log(error)).finally(()=>console.log("finished"));

// promise chaining , values passes 

Promise.resolve(10).then((value)=>value*2).then((value)=>console.log(value));


// example 

console.log("A");

setTimeout(()=>{
    console.log("B");
},0);

Promise.resolve().then(()=>console.log("C"));

console.log("D");

// answer => A D C B 

// understanding the call stack 
