
function add(number1,number2){ // parameters
    console.log(number1+number2);
    let ans=number1+number2;
    return ans;
    
}

const res=add(2,3); // arguements 
console.log(res);
add(2,"3");
add(2,null)

function calc(...num1){ // can pass any number of arguements
    return num1;
}

console.log(calc(20,30,40));

function cal(num1,num2,...num3){
    return num3;
}

console.log(cal(1,2,3,4));

