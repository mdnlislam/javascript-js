

     		 
  const student={
	 bangla:50,
	 english:60,
	 arabic:65,
	
	 
 };
 
     const subjects=Object.keys(student);
	 const subjectLength=subjects.length;
	  
	  
	  
	  function NumberToPoint(marks){
		   let point=0;
		  if(marks>=80){
			  point=5.00;
		  }
		  else if(marks>=70){
			  point=4.00;
		  }
		   else if(marks>=60){
			  point=3.00;
		  }
		   else if(marks>=50){
			  point=2.00;
		  }
		  
		  return point;
		  
	  };
	  
	  
	  
	    for(let subject of subjects){
		 const subjectNumber=student[subject];
	const points=NumberToPoint(subjectNumber);
	  console.log(points);
			
		};