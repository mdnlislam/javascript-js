// https://www.w3schools.com/js/js_datatypes.asp
// Object

// const person = {firstName:"John", lastName:"Doe"};
/**1 object second beket bitore lekte hoy
 * 2 firstName holo object ar key
 * 3 John ata holo object ar valueclear
 *  4 object ke 2 babe access kora jai . diye . diye korte gele sodore number thaka
 * jabe na and [ ] diye sokol obostai access kora jai
 */

// argoment
// parameter

// const person = { firstName: "John", lastName: "Doe", name: "" };

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))

// person.roll = 36;
// console.log(person)
// const cars =["BMW","volvo","toyta",person]
// console.log(cars[1],cars[cars.length-1],)

// let x =2,y = 2,result;
// if(x === 1){
//     person.name  = "rakib"
// } else if(x === 2){
//     person.name  = "abutaher kaka"

// } else{
//     person.name  = "name not found"

// }
// console.log(person.name)

//    let num =20;
//    console.log(num);

//    for ( let x =2; x<100 ; x=x+2) {

//     // document.write(" " + x);
//     console.log(" " + x);

//    }

// javascript dom manupolation

//    https://res.cloudinary.com/dnhpk5q85/image/upload/v1716914477/social%20icons/lvvx1nqo7wwabm9t9wog.png

// const produc = document.querySelector("h3");

// produc.addEventListener("click", function () {
//   console.log("allah", "click");
// });

// produc.addEventListener("mouseover", function () {
//   console.log("allah", "mouseover");
// });

// const nameWrapper = document.querySelector(".selector-user-name:");
// function namestter(name) {
//   nameWrapper.innerHTML = name;
// }
// product.addEventListener("click", function () {
//   console.log("allah", "click");
// });

// product.addEventListener("mouseover", function () {
//   console.log("allah", "mouseover");
// });

// product.addEventListener("mouseleave", function () {
//   console.log("bismillah", "mouseleave");
// });

// product.addEventListener("keydown", function () {
//   console.log("alhamdulillah", "keydown");
// });

// product.addEventListener("keyup", function () {
//   console.log("alhamdulillah", "keyup");
// });

// const inputBox = document.querySelector("#inputbox");
// const result = document.querySelector("result");
// inputBox.addEventListener("keydown", function () {
//   console.log("ddddd", "keydown");
// });

// product.addEventListener("mouseout", function () {
//   document.write("allah", "mouseout");
// });

// produc.addEventListener("click", function () {
//   console.log("allah", "click");
// });

// console.log(produc);

// let x = 0 < 1;

// result = Boolean(x);

// console.log(result);

// let num = 5;
// boolvalus = Boolean(num);
// console.log(typeof num);
// console.log(typeof boolvalus);

// let str = "hello";
// boolvalus = !!str;

// result = Boolean(str);

// console.log(result);

// console.log(boolvalus);

// let strat = "true";

// result = strat.toLocaleLowerCase() === "true";

// console.log(result);

// let Boolean = true;

// num = Number(Boolean);

// console.log(num);

// result = Boolean * 3;
// console.log(result);

// let talent = 0;

// resultt = Boolean(talent);
// console.log(resultt);

// const data = new Date("2022-03-25");

// console.log(data);

// const car = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };

// console.log(car);

// let iphone = `${talent}`;

// console.log(typeof iphone);

// result = talent.toString();

// console.log(typeof result);

//   object to String

// const obj = {
//   name: "Rony",
//   age: 30,
// };

// result = JSON.stringify(obj);

// console.log(result);

// result2 = obj.toString();

// console.log(result2);

// const car = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
//   toString: function () {
//     return `${this.type} ${this.model} ${this.year}`;
//   },
// };

// console.log(car.toString());

// const cart = {
//   type: "toyata",
//   model: "Corolla",
//   year: 2009,
// };

// console.log(`${cart}`);

// const Car = {
//   type: "corolla",
//   model: "xmmm",
//   year: 2009,
// };

// const keys = Object.keys(Car);

// console.log(keys);

// const valus = Object.values(Car);

// console.log(valus);

// let person = {
//   name: "john",
//   age: 30,
//   city: "New York",
// };

// reult = Object.keys(person);

// result = Object.values(person);

// console.log(result);

// console.log(reult);

// for (let key in person) {
//   delete person[key];
// }

// console.log(person);

// let keysToDelete = ["age", "city"];

// for (let keys of keysToDelete) {
//   delete person[keys];
// }

// delete person.name;

// delete person.city;

// console.log(person);

// person.name = "rony";

// person.country = "USA";

// person.age = 35;

// person["city"] = "Dhaka";

// console.log(person);

// console.log(person);

// console.log(person["city"]);

// const inputstring = "helloiamfrome234556734mtbtdjhdck";

// const lines = inputstring.split(`\n`);

// const firstline = lines[0];

// const lastline = lines[lines.length - 1];

// const result = `${firstline}\n${lastline}`;

// // lasttext = text.slice(-1, 5);

// console.log(result);
// console.log(lasttext);

// const inputstring =
//   "k-proj-fjsarieowjskamcwr498329483957329483958349fcdfklj034u3";

// const inputstringt =
//   inputstring.slice(0, 10) + `************` + inputstring.slice(-10);

// console.log(inputstringt);

// const foods = ["Banana", "Orange", "Apple", "Mango"];

// let result = Array.isArray(foods);

// console.log(typeof result);

// let arr = [1, 2, 3];

// result = Array.isArray(arr);

// console.log(result);

// let notarr = { a: 1, b: 3 };

// result = Array.isArray(notarr);

// console.log(result);

// let arr = [1, 2, 3];

// result = arr instanceof Array;

// console.log(result);

// let notarr = { a: 1, b: 3 };

// result = notarr instanceof Array;

// console.log(result);

// let arr = [1, 2, 3];

// result = Object.prototype.toString.call(arr) === "[object Array]";

// console.log(result);

// let notarr = { a: 1, b: 3 };

// result = Object.prototype.toString.call(notarr) === "[object Array]";

// console.log(result);

// let peopleArray = [{ name: "rahim", age: 30, profession: "teacher" }];

// // console.log(peopleArray);

// peopleArray.push({ name: "rakib" });
// console.log(peopleArray);

// let peopleArray = [{ name: "rahim", age: 30, profession: "teacher" }];

// let newpeople = [
//   { name: "rony", age: 32, profession: "eng." },
//   { name: "misho", age: 35, profession: "doctor" },
// ];

// // peopleArray = [...peopleArray, ...newpeople];
// // peopleArray = peopleArray.concat(newpeople);

// // console.log(peopleArray);

// peopleArray.unshift({ name: "rakib" });

// console.log(peopleArray);

// let peopleArray = [];

// for (let i = 0; i < 4; i++) {
//   let person = {
//     name: `Person ${i + 1}`,
//     age: 20 + i,
//     profession: "Student",
//   };

// let peopleArray = [];

// for (let i = 0; i < 10; i++) {
//   let person = {
//     name: "person",
//     age: 21,
//     profession: "Student",
//   };
//   peopleArray.push(person);
// }

// // peopleArray.push(person);

// console.log(peopleArray);

//   peopleArray.push(person);
// }

// console.log(peopleArray);

// let product = ["bmw", "corollah", "honda"];

// let foods = ["banana", "Apple", "orenge"];

// // result = product.concat(foods);
// // result = [...product, ...foods];

// product.unshift("sozoki");

// console.log(product);

// let product = [];

// for (let i = 0; i < 5; i++) {
//   let person = {
//     name: "rony",
//     age: 32,
//     colour: "black",
//   };
//   product.push(person);
//   // removedperson = person.shift();
// }
// // let removedperson = product.pop();

// // delete product[2];

// product.splice(1);

// console.log(removedperson);
// console.log(product);
// let result = [];
// for (i = 0; i < 5; i++) {
//   let text = "rakib";
//   // console.log(text);
//   result.push(text);
// }
// // result.push(text);
// console.log(result);

// for (i = 2; i < 4; i++) {
//   const cars = ["BMW", "VOLVO", "SAAB", "FORD"];
//   console.log(cars);
// }

// let i = 0;

// while (i < 5) {
//   console.log("the number" + i);
//   i++;
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const number = [1, 2, 3, 4, 5];

// const doubled = number.map(function (number) {
//   return number * 2;
// });

// const result = number.map(Math.sqrt);

// const result = number.map(function (number) {
//   return number / 2;
// });

// console.log(result);

// const fruits = ["apple", "orange", "cherry"];

// let result = "";

// fruits.forEach(myfunction);

// function myfunction(item) {
//   result += item + "";
// }
// console.log(result);

// const number = [65, 44, 12, 4];

// let result = "";

// number.forEach(myfunction);

// function myfunction(item, index, arr) {
//   result += item + "" * "" + 2 + "<br>" + index + arr;
// }

// console.log(result);

// const person = { fname: "john", lname: "doe", age: "25" };

// for (let key in person) {
//   console.log(key + ":" + person[key]);
// }

// const numbers = [10, 20, 30, 40];

// for (let number of numbers) {
//   console.log(number);
// }

// const text = "text";

// for (let char of text) {
//   console.log(char);
// }

// const fruits = new Set(["apple", "banana", "mango"]);

// for (let fruit of fruits) {
//   console.log(fruit);
// }
/*const model = "xx26";

const product = {
  name: "i-phone",
  // model: "xx26",
  colour: "black",
};
let screen = "17px";
product.colour = "red";

product.screen = screen;

// delete product.model;

console.log(product, screen); */



     
	 
	  /*    ## Object

    1. typeof object
    2. object to string
    3. separet key & valus
    4. valus access
    5. values change or update or add
    6. property delete  */

     
	 // type of object
	 //1. object 2.array object
	 
	 
	 // object to string
	/*  const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	 const ObjectToString=JSON.stringify(product);
	 console.log( typeof ObjectToString); */
	 
	 
    // separet key & valus
	 
	 
	/* const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	 
	 const onlyKey=Object.keys(product);
	 console.log(onlyKey); */
	 
	 
	 
	/*  const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	 
	 const onlyValues=Object.values(product);
	 console.log(onlyValues); */
	 
	 
	 
    // values access
	 
	 
	 
	/*  const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	  const valueAccess=product['colour']
	    console.log(valueAccess); */
		
		
		
		
    // values change or update or add
		
		
	/*	 const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	  
	   delete product['name'];
	   
	   console.log(product) */
	   
	   
	   
	   
	  /*  const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	  
       const valueUpdate=product['colour']='white';	   
	   console.log(product)  */
	   
	   
	   
	   // add
	     const product={
		  name:'i-phone',
		  model:'x-altra',
		  colour:'black',
	  };
	  
       product['screen']='7-inch'   
	   console.log(product)