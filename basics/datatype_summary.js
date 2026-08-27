// primitive 

// 7 types : String .....we get copy 

// 7 types : String , Number , Boolean , null , undefined , Symbol (to make it unique we wrap it using a symbol) ,BigInt 

// Non-primitive (Reference)

// Array , Object , Functions 

const heros=["a","b","c"];

let mobj={
    name:"a",
    class:"ok",
}

const myfunc=function(){
    console.log("hello");
}

myfunc();
