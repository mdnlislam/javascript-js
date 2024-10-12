


/* Boolean

    1. valus of Boolean
    2. number to boolean
    3. string to boolean - 3ways kora jai
    4. boolean to number
    5. boolean to string */
	
	
	
	
	
	 let goodBoy=false;
	 
	 // console.log(goodBoy);
	  
	  let roll=246718;
	  let numberToBoolean=Boolean(roll);
	  let boolean=!!roll;
	  
	//  console.log(  boolean);

       // string to Boolean
	   
	   let name="rony";
	   
	  // let stringToBoolean=(name.toLowerCase()==="rony");
	   
	   function stringToBoolean(name){
		   return name.toLowerCase()==="rony";
	   };
	let x=   stringToBoolean("rony")
	  // console.log(typeof x)
	   
	   
	   
	   
	   // boolean to number
	   
	   let goodboy=false;
	   let booleanToNumber=Number(goodboy);
	   
	  // console.log(  booleanToNumber);
	   
	   
	   
	  // Boolean to string
	  
	  
	     let goodGirl=true;
		 let booleanToString=String(goodGirl); 
		 console.log( typeof booleanToString);