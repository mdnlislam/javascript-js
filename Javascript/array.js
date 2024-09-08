//   let person ={

//   name:"rakib",
//   color: "green"

//   }

//    person["roll"] =23

//   console.log(person)

//   person["roll"] =20

//   console.log(person)

//  delete person["roll"]

//  console.log(person)

//   let praise=[  "SUBAHAN ALLAH","ALHAMDULILLAH","ALLAHU AKBAR"]
//   console.log(praise.length)

//   praise.push(praise[0])
//   praise.unshift("allah")
// //   praise[praise.length]=praise[0]
// //   praise[praise.length]=praise[0]

//   console.log(praise[0])
//   console.log(praise.length)
//   console.log(praise)
//   praise.pop()
//   // console.log(praise
let person = { fristname: "rakib", secondname: "nahid" };
let persons = ["A", "B", "C", true, false, null, undefined];
let persons2 = ["D", "E", "F"];
persons.push(person);
//  persons.forEach(function man (p,i){
//   console.log(p,i)
// })
// persons.map(function man(p, i) {
//   console.log(p, i);
// });

// console.log(persons.indexOf(true));
// console.log(persons.concat(persons2));
let filter = persons2.filter(function (b, c) {
  // console.log(b, c);
  return 2 === c;
});
console.log(filter);
