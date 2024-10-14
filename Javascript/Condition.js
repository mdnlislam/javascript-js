

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
	
	
	
	     let day;
		 
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
			    console.log(day)