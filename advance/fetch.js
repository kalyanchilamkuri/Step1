
// fetch() => it is a javascript API used to make HTTP requests . It returns a promise , which is eventually gives me a response object . I can then read the response body using methods like json()

// fetch returns a promise , when the request completes , the promise gives me a response object 

// response.json() reads that body and parses it into js value m also returns a promise , so we can use await with it 


// fetch() is a js function used to make HTTP requests , used to communicate with an API 

// JS => fetch() => API/SERVER => Response => JS 

fetch(API).then((res)=>console.log(res));

// fetch() does not return the actual data , It is a promise->response objecy so i need to wait for the promise so we have to use then or async/await 

//using async or await 

async function getusers(){
    try{
    const res=await fetch("API");
    const data=await res.json();
    console.log(data);
    }catch(error){
        console.log(error);
    }
}

getusers();

//! ====> fetch and HTTP errors => fetch() doesnot automatically reject just because the returns 404/500....for example a 404 response can still give me a resolved fetch() Promise 

async function okok(){
    try{
        const res=await fetch("API");

        if(!res.ok){ // tells whether the HHTP status indicates success 
            throw new Error("new error");
        }

        const data=await res.json();

        console.log(data);
    }catch (error){
        console.log(error.message);
    }
}


// by default fetch() makesa get request 

// fetch() => promise => response => response.json() =>data 
