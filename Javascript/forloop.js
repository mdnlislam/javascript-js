
   
 const person={
	 
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
	  
	  
	  
	  
	  
  }; 
 

             
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