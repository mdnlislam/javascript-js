

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
		     let greade="";
		    if(point>=5.0){
				 
				greade="A+"; 
			}
			else if (point>4.0){
				greade="B+";
			}
			else if (point>3.0){
				greade="B+";
			}
			else if (point>=2.0){
				greade="C+";
			};
		      
		   return greade;
		};   
 
 
 
 function subjectsToGrad(student){
	const subjects=Object.keys(student);
	const subjectLength=subjects.length;
	console.log(subjects)

	let points=0;
    const results=[];       
	for (let subject in  student){
		const subjectNumber=student[subject]; 
		const point= numberToPoint(subjectNumber);
		const grade=  PointToGreade(point);
		points=points+point;
		const result={
		  subject:subject,
		  number:subjectNumber,
		  point:point,
		  grade:grade,
		}; 
		results.push(result);
		
	};

	const GPA=points/subjectLength;
	// console.log(GPA)


	const greade=PointToGreade(GPA);
	return {greade,results,name:'rakib'};
	
}; 
		 
			 
		 
		 
 const student1={
	/* Depertment:{
		subjects: {
			bangla:50,
			english:60,
			arabic:65,
		}
	}, */

		subjects: {
			bangla:50,
			english:60,
			arabic:65,
		}
 };
 
 
  
		 /*		 
		 const student={
			
			 subjects:{ bangla:50,
			 english:60,
			 arabic:65,}
		 }; */
 
 
 const students=[student1];
                
 for(let student of students ){
	 student['result']={};
	// console.log(subjectStudents)
	//const Depertment=student['Depertment'];
	const subj=student['subjects'];
	const x=subjectsToGrad(subj)
	console.log(x,111)
	  
 };   
		 
	//console.log(students);