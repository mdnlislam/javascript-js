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
// let person = { fristname: "rakib", secondname: "nahid" };
// let persons = ["A", "B", "C", true, false, null, undefined];
// let persons2 = ["D", "E", "F"];
// persons.push(person);
//  persons.forEach(function man (p,i){
//   console.log(p,i)
// })
// persons.map(function man(p, i) {
//   console.log(p, i);
// });

// console.log(persons.indexOf(true));
// console.log(persons.concat(persons2));
// let filter = persons2.filter(function (b, c) {
//   // console.log(b, c);
//   return 2 === c;
// });
// console.log(filter);

//let produc = ["BMW", "RAKIB", "ALAMIN", "AlMON"];

//et text = "";
//for (let i = 0; i < produc.length; i++) {
 // text += produc[i];
// }
//console.log(text);

// let per = produc.copyWithin(2);

// // console.log(produc);

// console.log(per);

// let myarray = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let newarray = myarray.flat();

// console.log(newarray);

// https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/

//onst cars = ["BMW", "Volvo", "Saab", "Ford"];

//for (i = cars.length; i > 0; i--) {
 // result = cars[i];
    // console.log(result);
// }


// array filter


//const numbers=[5,8,10,15,77,150];
//const product=["BMW","sojoki","honda"];


//const filterNumber=product.filter(function(name){
	//if(number>10 || number<8 ){
	//return  name== "BMW"
		
	// }
	
	
// });


//console.log( filterNumber)
  


//const findNumber=product.find(function(name){
	//if(number>10 || number<8 ){
	//return  name== "BMW"
		
	// }
	
	
// });

//console.log(findNumber)






  const numbers =["A+","B+","c+","F","D","F","A+","C-","F"];
  
  
  
     const filterNumber= numbers.filter(function(number){
		    // if(number==="A+" ||number==="B+" || number==="C+"||number==="C-"||number==="D+"  ){
	  	          // return true
			// } 
				  
			if(number !== "F")  {
				return true
			}
			
			//  if(number === "C+")  {
			//	return true
			// }
			// if(number === "C-")  {
			//	return true
			// }
		//	if(number === "D")  {
			//	return true
			// }
			
			//if(number === "F")  {
				// return true
			//}
		 
		 
	 });
  
  
       console.log(filterNumber)

























