
// const user={
//     username:"kalyan",
//     price:100,

//     welcomemsg:function(){
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcomemsg()
// user.username="ok";
// user.welcomemsg()


function one(){
    console.log(this);
}
one();

const chai = ()=>{
    let username="kalyan"
    console.log(this);
}

const add=(num1,num2)=> num1+num2


console.log(add(2,3));





// Arrow function => simply a shorter way to write a function 

// function add(a,b){
//     return a+b
// }

// const add = (a,b)=>(a+b)


// this => this refers to the object or context from which a normal function is called 


const user = {
    name:"kalyan",
    greet:function(){
        console.log(this.name)
    }
};

user.greet();

// here i called user.greet() , so inside the greet : this refers to the user so this.name means user.name so i get kalyan 


// arrow functions have their own this 

// this is the biggest thing i need to remember 

const useer={
    name:"kalyan",
    greet:()=>{
        console.log(this.name);
    }
}

user.greet(); 

// here the arrow function does not create its own this , it takes this from its surrounding scope 



// best example 

const ok={
    name:"kalyan",
    greet:function(){
        console.log(this.name);
        const inner=()=>{
            console.log(this.name);
        }
        inner();
    }
};
 
user.greet(); // prints kalyan 2 types 

// in arrow function this means surrounding score , it means grandfather 
// in normal functions have their own this i.e father 



