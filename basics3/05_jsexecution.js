// memory phase => values are undefined and the functions defination 
// executin phase => values get assigned and the exeution thread 


function one(){
    two();
    console.log("one");
}

function two(){
   three();
   console.log("two");
}

function three(){
    console.log("three");
}

one();