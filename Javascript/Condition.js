

/* Condition

    1. if else      
    2. switch */


     const time = new Date().getHours();
	 
	  let greeting;
	  if(time<9){
		  greeting='good morning';
	  }
	  
	  else if (time<12){
		  greeting='good day';
	  }
	  else{
		  greeting='good evening';
		  
		 
	  }
	  
	  console.log(greeting)
	  
	  
	  
	    //   const marks=prompt('enter the new number: ');
		   
		   
		       
			   
    // switch in javascript
	
	
	
	 /*    let day;
		 
		 switch(new Date().getDay()){
			 case 0:
			 day="sunday";
		  break;
		  case 1:
			 day="monday";
		  break;
		  case 2:
			 day="tuesday";
		  break;
		  case 3:
			 day="Wednesday";
		  break;
		  case 4:
			 day="Thursday";
		  break;
		  case 5:
			 day="Friday";
		  break;
		   case 6:
			 day="Saturday";
		 }
			    console.log(day) */
				
				
				
				
			/*	const todayName=new Date().getDay();
				  let day;
				  
				  if(todayName===0){
					  day="sunday"
				  }
				  else if(todayName===1){
					 day="monday" 
				  }
				   else if(todayName===2){
					 day="tuesday" 
				  }
				   else if(todayName===3){
					 day="Wednesday" 
				  }
				   else if(todayName===4){
					 day="Thursday" 
				  }
				   else if(todayName===5){
					 day="Friday" 
				  }
				   else if(todayName===6){
					 day="Saturday" 
				  }
				  
				  else{
					  day="nothing day"
				  }
				  
				  console.log(day) */
				  
				  
				  
				  let x ='0';
				  let b;
				  switch(x){
					case 0:
                    b="off";
                    break;

                    case 1:
                    b ="no";
                    break;
                    default:
                       b ="no value found"					
					  
				  };
				  console.log(b);