





  const student = {
	  
	 // id:246718,
	   bangla: 85,
	   math : 70,
	   arabic: 65,
	   english:75,
  };



 function numberToPoint(marks){

		let point=0;	
			if(marks>=80){
				//return 5.00
				point=5.0;
			}
			
			else if (marks>=70){   
				//return 5.00
				point=4.0;
			}
			else if (marks>=60){
				//return 5.00
				point=3.0;
			}
			
			else if (marks>=50){
				//return 5.00
				point=2.0;
			}
			
			
			
			 return point;
			
		}

   const subjects=Object.keys(student);
   const subjectLength=subjects.length;

  /* const bangla = numberToPoint(student.bangla);
	
    const math = numberToPoint(student.math);
    const arabic = numberToPoint(student.arabic);
	const points=bangla+math+arabic;
	const GPA=points/subjectLength;*/
	let points=0;
   
   for (let subject  of subjects) {
	   const subjectNumber=student[subject];
	   const x = numberToPoint(subjectNumber);
  // code block to be executed
    // console.log(subject,x);
    
	points=points+x;
     console.log(x);
	
	}
   
	const GPA=points/subjectLength;
     
     //console.log(bangla,math,arabic);

	 










      //  function Numbertopoint(marks,marks2,marks3){
			
		//	if(marks>80){
			//	console.log(marks,"A+")
		//	}
		//	if(marks>70){
			//	console.log(marks2,"B+")
		//	}
			
		//	if(marks>60){
		//	console.log(marks3,"C+")
		//	}
			// return marks
			
	//	}

 //   const x = Numbertopoint(student.bangla,student.math,student.arabic);
	
    //const x = Numbertopoint(student.math);
	


   //  console.log(x)



