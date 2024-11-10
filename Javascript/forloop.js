
   
/* const person={
	 
	 name:"rakib",
	 roll:246718,
	 colour:"black",
 };
 
 
 // console.log(person)
  
  
  const person2={
	  
	  name:"rony",
	  roll:6745,
	  
  };
  
  
  
  const persons=[person,person2];
  
  
  for (let i=0;i<persons.length;i++){
	  
	  let p =persons[i];
	  
	  if( p["name"]==="rony"){
		  
		 p["colour"]="blow" 
		  
		  
		  
	  }
	  
	  console.log(p)
	  
	  
	  
	  
	  
  }; */
 

             
	/*	## Loop

    1. for
    2. while
    3. Do while
    4. map
    5. forEach
    6. for in
    7. for of
    8. for loop decrement */


                  
    // for Loop
	
	
	
	  /*   const product=['BMW','sozuki','honda'];
		  
		    for(i=0;i<5;i++){
				
				console.log(product);
			};
				

          
	      const products=['BMW','sozuki','honda'];
		  
		    for(let i=0;i<products.length;i++){
				
				console.log(product[i])
			};  */



                   // for of
               
			   
			/*   const cars =["BMW","volvo","mini"];
			   
			   
			   for (let carsName of cars){
				      console.log(carsName)
			   };
			   
			   
			   
			   const language ="javascript";
			   
			   for(let x of language ){
				    
					console.log(x);
			   }; */
			   
			   
			   
						// for in
						
				
              /*   const person = {
					 name:"rony",
					 age:27,
					 height:5.7,
				 };				
			   
			   
			   for(let men in person){
				   console.log(person[men]);
			   }; */

/*const number =[4,9,16,25];
const result=number.map(Math.sqrt);
console.log(result);


const numbers=[65,44,12,4];
const newArr = numbers.map(myFunction);
function myFunction(num){
	return num/2;
};
console.log(newArr);



// map
const person=[
{firstname:"rony",lastname:"mia"},
{firstname:"abu",lastname:"hanif"},
{firstname:"rakib",lastname:"mia"},


];
const results=person.map(getFullName);
function getFullName(item){
	return [item.firstname,item.lastname,item]
};
console.log(results);


const cars =["BMW","VOLVO","SAAB","FORD"];
for(let i=0;i<cars.length;i++){
	const result=cars[i];
	console.log(result);
};

for (let i=0;i<5;i++){
	const bang='Bangladesh'+[i];
	console.log(bang);
};


const man ={
	fname:"rony",
	lname:"mia"
};

for(let x in man ){
	const manname=man[x];
	console.log(manname);
};

const num1=[45,4,9,16,25];
for(let y in num1){
	const resultNum=num1[y];
	console.log(resultNum);
}; */

/*	## Loop

    1. for
    2. while
    3. Do while
    4. map
    5. forEach
    6. for in
    7. for of
    8. for loop decrement */

//const products=["BMW","HONDA","TVS","SOZUKI","RUNNER"];

/*for(i=0;i<5;i++){
	console.log(product[i]);
};*/

/*for(let product of products){
	
	console.log(product)
}; */

//for in

const products={
	A:'apple',
	B:'belt',
	C:'cat',
};
for(let product in products ){
	const result=products[product];
console.log(result)
	
};

// map

const person=[
{firstname:"malcom",lastname:"Reynolds"},
{firstname:"Keylee",lastname:"Frye"},
{firstname:"jayne",lastname:"Cobb"},

];
const result=person.map(getFullName);
function getFullName(item){
	return [item.firstname,item.lastname]
	
};
console.log(result);