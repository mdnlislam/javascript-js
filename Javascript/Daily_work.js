

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
		 function subjectsToGrad(student){
			  const subjects=Object.keys(student);
	 const subjectLength=subjects.length;
          // console.log(subjects)
  
	   
	            let points=0;
	
	     for (let subject in  student){
		 const subjectNumber=student[subject]; 
    const x= numberToPoint(subjectNumber);
		   
		   points=points+x;
		   
	   };
	   
	   const GPA=points/subjectLength;
		  // console.log(GPA)
	   
	  
	const greadePoint=PointToGreade(GPA);
	           return greadePoint
		 }; 
		 
		 
		 
 const student={
	
	
	 Depertment:{ subjects:{ bangla:50,
	 english:60,
	 arabic:65,}},
 };
 
 /*		 
 const student={
	
	 subjects:{ bangla:50,
	 english:60,
	 arabic:65,}
 }; */
 
 
  const students=[student
	
	 
 ];
                
         for(let Student of students ){
			   // console.log(subjectStudents)
			   const Depertment=student['Depertment'];
			   const subj=Depertment['subjects'];
			const grade=subjectsToGrad(subj)
		      console.log(grade)
			  
		 };   
		 
		// amra jani
	/* 1.total man power 20 jon 
	   2. total working day 15 
	    3. 20 man working day 10 days
		 4. 10 din por some man power go so working complete 10 days after*/
		 
		 
		 
		      let totalManPower=20;
			  let completeWorkingTime=15;
		 
		             
		 
		 
		      // akhane total work ar unit ber korbo
			  
	 
     