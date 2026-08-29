const promiseone=new Promise(function(resolve,reject){
    // do an async task 
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000);
})

promiseone.then(function(){
    console.log("success");
})

new Promise(function(resolve,reject){
    console.log("hello");
    resolve();
}).then(function(){
    console.log("correct");
})


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"chikaa",email:"chikaa@gmail.com"});
    },1000)
}).then(function(user){
    console.log(user);
});


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username:"hitesh",pass:"1234"});
        }else{
            reject("Error: Something is wrong");
        }
    },1000);
}).then((user)=>{
    console.log(user);
    // return user.username;
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})


const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"pass"});
        }else{
            reject("Error:JS Went Wrong");
        }
    },1000);
});

async function consumepromise5(){
    try{
    const res=await promise5;
    console.log(res);
    }catch (error){
        console.log(error);
    }
}

consumepromise5();

async function getallusers(){
    try{
    const res=await fetch();
    const data=await res.json();
    console.log(data);
    }catch(error){
        console.log(error);
    }
}

getallusers();

