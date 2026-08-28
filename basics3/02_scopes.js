if(true){
let a=10;
const b=20;
var c=30;
}

// console.log(a);
// console.log(b)
console.log(c)    


function one(){
    const username="kalyan"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website); // this will not work 
    two();
}

one();