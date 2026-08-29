
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