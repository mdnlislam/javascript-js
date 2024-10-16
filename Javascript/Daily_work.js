

 const student={
	 bangla:50,
	 english:60,
	 arabic:65,
	 
 };
         function numberToPoint(marks){
			 let point=0;
			 if(marks>=80){
				 
				point=5.0; 
				 
			 }
			else if(marks>=70){
				 
				point=4.0; 
				 
			 }
			else if(marks>=60){ 
				 
				point=3.0; 
				 
			 }
			else if(marks>=50){
				 
				point=2.0; 
				 
			 }
			 
			 
			 
			 return point;
			 
			 
		 };
		   
		  
     const subjects=Object.keys(student);
	 const subjectLength=subjects.length;
           console.log(subjects)
   // const bangla= numberToPoint(student['bangla']);
  //  const arabic= numberToPoint(student['arabic']);
	
	   //console.log(subjectLength)
	   
	            let points=0;
	 /*  for (let subject of subjects){
		 const subjectNumber=student[subject]; 
    const x= numberToPoint(subjectNumber);
		   
		   points=points+x;
		   
	   };*/
	     for (let subject in  student){
		 const subjectNumber=student[subject]; 
    const x= numberToPoint(subjectNumber);
		   
		   points=points+x;
		   
	   };
	   
	   const GPA=points/subjectLength;
		  // console.log(GPA)
	   
	   
	   function PointToGreade(point){
		     let greade=0;
		     if(point>=5.0){
				 
				greade="A+"; 
			 }
			 else if (point>4.0){
				 greade="B+";
			 }
			  else if (point>3.0){
				 greade="B+";
			 }
			  else if (point>2.0){
				 greade="C+";
			 };
			 
		      
		   return greade;
	   };
	const greadePoint=PointToGreade(GPA);
	
	  console.log(greadePoint);