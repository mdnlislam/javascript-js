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
  
  
             
			 
		/*	 const numbers=[5,10,23,9,10,12,];
			const product=["BMW","sojoki","honda"];
			 
			 const filterNumber=product.filter(function(name){
				 
				// if(number>=10 ||number<10 ){
					 return name=="BMW";
				// };
			 });
  
                console.log(filterNumber); */
  
  
  
  
  
  
  


//const findNumber=product.find(function(name){
	//if(number>10 || number<8 ){
	//return  name== "BMW"
		
	// }
	
	
// });

//console.log(findNumber)






 /* const numbers =["A+","B+","c+","F","D","F","A+","C-","F"];
  
   const newResults=[];
   
   
   
              for(let number of numbers){
				//console.log(number);
				 if(number !== "F")  {
					//newResults.push(number)
					if(number==="c+" ){
						newResults.push("c-")
						
					} else{
						newResults.push(number)
					}
				}
				
			  };
				   console.log(newResults,"new");*/
  
   
   
   
   
   
   
   
   
              // for(let i=0;i<numbers.length;i++){
				//   newResults.push(numbers[i])
//let number=numbers[i];
				
			//	if(number === "F")  {
			//	newResults.push(number)
		//	}
				
				//console.log(number,"for");
			 //  };
				  // console.log(newResults,"new");
  
  
    // const filterNumber= numbers.filter(function(number){
		// console.log(number,"filter");
		 
		    // if(number==="A+" ||number==="B+" || number==="C+"||number==="C-"||number==="D+"  ){
	  	          // return true
			// } 
				  
			//if(number !== "F")  {
			//	return true
			//}
			
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
		 
		 
	// });
  
  
      // console.log(filterNumber)









/* Array Object

    1. how to identify array
    2. data add,add data start of array,add data end of array,delete data start of array,delete dada end  of array
    3. data update ,delete
    4. find mathode  */




 //  1. how to identify array
 
   /*    const fruits =["Banana","Orange","Apple","Mango"];
	   
	   const result=Array.isArray(fruits);
     
             console.log( typeof result); */
			 


const fruits ={a:2,b:"bat"};
	   
	   const result=Array.isArray(fruits);
     
             console.log(result)
			 



			//data add
			
		/*	const numbers=[1,2,3,4,5,];
			
			numbers.push(6,7);
			   console.log(numbers) */


          //  unshift
		/*  const numbers=[1,2,3,4,5,];
			
			numbers.unshift(0);
			   console.log(numbers) */
			   
			   
			   // shift
			   
			   
            //    const numbers=[1,2,3,4,5,];
			
		//	numbers.shift(1);
			 //  console.log(numbers)
			   
			   
			   
			   //delete data start of array
			   
			   /*  const productItems=["BMW","honda","TVC","SUZUCI"];
				 
				      productItems.shift();
					  console.log(productItems); */
					  
					  
					  
			   //delete data end of array
					  
					/*   const productItems=["BMW","honda","TVC","SUZUCI"];
				 
				      productItems.pop();
					  console.log(productItems); */
					  
					  
					  
				/*	  const productItems=["BMW","honda","TVC","SUZUCI"];
				 
				         productItems.splice(2,0,"vpm");
					  console.log(productItems);  */
					  
					  
					  
					  
					  
					  
					  
    // find mathode  soto ba boro akta value return kore
	     const numbers=[10,6,8,20,30,35,];
		 
		 const findNumber=numbers.find(function(number){
			 return number<20;
			 
		 });
					  console.log(findNumber)
					  
					  
					  
					  
					  
					  
					  
	 const student={
	 bangla:50,
	 english:60,
	 arabic:65,
	 
 };
					  
					  
					  
					  
					  
					    let sub=0;
          for(let subjects in student ){
			  
			 const subjectLength=subjects.length
			 
			 sub=sub+subjectLength;
		  };
		  
		  const gpa= sub/subjectLength
		  
			  console.log(gpa)