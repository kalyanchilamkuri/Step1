// immediately invoked function expressions 

(function chai(){
    // name IIFE 
    console.log("Hello");
})();

((name) => {
    console.log(`Hii ${name}`);
})("kalyan");