
let student = {
    name:"kalyan",
    age:20,
    class :{
       btech :{
          year : 3,
          semester : 1
       }
    }
}



console.log(student.class.btech.semester);


const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"d"}

const obj3={obj1,obj2};
const obj4={...obj1,...obj2};
console.log(obj4);

console.log(obj3);
console.log(obj1);

const obj=Object.assign({},obj2,obj1) // into a new object 
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
