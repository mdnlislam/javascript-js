
// function sum(num1){  // ball mill ,receive
//	const num2=2;

//	return num1 +num2; // kiln output  ,back
// }


     
// const result=sum(7) // convear belt,in

 //  console.log(result)
   
 //  {  let v1
	   
//	   { let v2
		   
	//	   {let v3}
//   }
 //  }
 
 
 
 
 
 
   function  sleep (name){
	      
        console.log(name)
	   
   }
 
 sleep ("roni 10 pm")
 sleep ("baki 11 pm")
 sleep ("al-amin 12 pm")
 
 
       /*     ## Others

    1. Array Filter
    2. Array reduce
    3. date Function
    4. math function  */
	
	
	
									// 1. Array Filter
									
									
	            
	           /*   const ages =[32,33,16,40,10,8,5];
				  
				  const agesFiltering=ages.filter(function(age){
					   if(age>16 || age<16){
						   
					   };
					  return age
				  });
	                     console.log(agesFiltering);  */
						 
						 
						 
						/* const greadings=["A+","B+","A+","C+","F","D","F","C-"];
						 
						 
						 const greadFilter=greadings.filter(function(gread){
							 
							 if(gread==="A+" || gread==="B+" || gread==="C+" || gread==="D+" || gread==="C-" ){
							 return true
								 
							 };
							 
						 });
		
		
		                    console.log(greadFilter); */
						 
						 
						 
						 	 
					/*	 const greadings=["A+","B+","A+","C+","F","D","F","C-"];
						 
						 
						 const greadFilter=greadings.filter(function(gread){
							 
							 if(gread!=="F" ){
							 return true
								 
							 };
							 
						 });
		
		
		                    console.log(greadFilter); */
						 
						 
						 
						 
						 
					/*	  const greadings=["A+","B+","A+","C+","F","D","F","C-"];
						 
						 
						 const greadFilter=greadings.filter(function(gread){
							 
							 if(gread!=="F" ){
							 return true
								 
							 };
							 
						 });
		
		
		                    console.log(greadFilter); */
							
							
							
							
							
							
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
  
            
			
			 const numbers =["A+","B+","c+","F","D","F","A+","C-","F"];
  
   const newResults=[];
   
   
   
              for(let number in numbers){
				//console.log(number);
				 if(number[number] !== "F")  {
					//newResults.push(number)
					if(number[number]==="c+" ){
						newResults.push("c-")
						
					} else{
						newResults.push(number)
					}
				}
				
			  };
				   console.log(newResults,"new");