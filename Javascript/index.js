// let name="rakib"
// let y = 5;
// let x = 10;
// let z =10;
// function addisional(a,b,c,d){
//       return a+b+c+d
// }
// let result = addisional(5,15,5,5)
// // console.log(result)

//    function subtraction(a,b) {
//       return a-b;
//    }
//   let  result1 = subtraction(5,5);
// //    console.log(result);

//    function multiplication(a,b) {
//       return a*b;
//    }
//  let  result2 = multiplication(7,5);
// //    console.log(result)

//    function exponentiation(a,b) {
//       return a**b;
//    }
//   let     result3 =exponentiation(3,2);
//       //  console.log(result)

//        function divison(a,b) {
//             return a/b;
//        }
//        result = divison(25,8);
//       //  console.log(result)

//        function modulus(a,b) {
//             return a%b;
//        }
//        result = modulus(10,2);
//       //  console.log(result)

//        function increment(a,b){
//             return a+b // '++';
//        }
//        result = increment(3,3);
//       //  console.log(result)

//        function decrement(a,b) {
//             return a-b // '-';

//        }
//        result =decrement(6,3);
//       //  console.log(result)

//   let a = 42;
//   console.log(typeof a);

//   let b ='rakib'
//   console.log(typeof b);

//   let c = true ;
//   console.log(typeof c)
// //   const person = {firstName:"John", lastName:"Doe"};
//   const person = {firstName:"John", "dd":"Doe"};

//   //   console.log(typeof person)
//   console.log( person.firstName,person["dd"])

//   console.log(typeof Number("20"))

//   console.log( typeof Number(true))

//   console.log(Number(false))

//   const number = 2.5648;
//   console.log(number.toPrecision(2))

//   let num = 20;
//   console.log(num)

//   let d = 2, s = 4 result7;
// const person = {firstName:"John", lastName:"Doe",name:""};

// let x =3,y = 2,result;
// if(x === 1){
//     person.name  = "rakib"
// } else if(x === 2){
//     person.name  = "abutaher kaka"

// } else{
//     person.name  = "name not found"

// }
// console.log(person.name)

// let firstName = "Md.Nurul";
// let lastName = " islam"

// let fullname = firstName + lastName;
// console.log (fullname + " may name is " )

// let num1 = 20;
// let num2 = 30;

// console.log("num1 =" + num1 + " num2 " + num2)

//   this work Librory function for String
//     check this character

//  let text1 = "Bangladesh"

//  console.log(text1.charAt(2));

//     function capitalizeWords(str) {
//         return str.split (' ').map(function(word){
// return word.charAt(0).toUpperCase() + word.slice(1);

//         const firstWord = word.charAt(0);
//         const firstWordUp = firstWord.toUpperCase();
//         const firstCharRemove = word.slice(1);
//         console.log({ firstWord, firstWordUp, firstCharRemove });

//         return firstWordUp + firstCharRemove;

//     }).join(' ');
// }

// let text = "hello word , how are you";
// let capitalizedtext = capitalizeWords(text);
// console.log(capitalizedtext);

// let num1 = prompt ("Enter First Number : ");
// let num2 = prompt ("Enter Second Number : ");

// num1 = parseInt(num1,10);
// num2 = parseInt(num2,10);

// let sum,sub ;

// sum = num1 + num2;

// document.write( num1 + "+" + num2 +"=" + sum);

// Area of Shapes

// let base =prompt("enter base = ");
// let height = prompt ("enter height = ");

// let area = base * height

// console.log("area = " + area );

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter base = ', (base) => {
//     rl.question('Enter height = ', (height) => {
//         let area = base * height;
//         console.log('Area = ' + area);
//         rl.close();
//     });
// });

//    let num1 = 30;
//    let num2 = 50;
//    let num3 = 40;

//    console.log(num1>num2 && num1<num2)

//    console.log(num1<num2 && num1<num2)

//    console.log(num1<num2 || num1>num3)

//    console.log(num1>num2 || num1>num3)

//    console.log(!true)

//    console.log(!false)

// function increment () {
//       console.log(x++y)
// }
// increment()

// function decrement () {
//       console.log(x--y)

// }
// decrement()

//    let num = 5;

//    if (num % 2 == 0)
//    console.log("Even")

//    else
//    console.log("odd")

//    let num1 = prompt ("Enter a Number :  ");
//    if (num1 > 0 )
//         console.log("positive");

//    else if (num1 < 0)

//         console.log("Negative");

//         else
//         console.log("Zero")

let marks = prompt("Enter your marks :  ");

if (marks >= 80) {
  console.log("A+");
} else {
  console.log("fail");
}

// console.log(result+5)
// console.log(y+x,'y+x');
// console.log(y-x,'y-x');
// console.log(y*x,'y*x');
// console.log(y/x,'y/x');
// console.log(y%x,'y%x');
// console.log(12%5,'x%y');
