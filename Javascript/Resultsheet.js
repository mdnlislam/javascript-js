





 


     // akhane number nitasi return hoitaase point
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
	
	function subjectToGrad(student){
		// console.log(greadePoint);
   const subjects=Object.keys(student);  //object ar keys ( subject berkortasi)
   const subjectLength=subjects.length;    // subject ar length berkortasi ( koto golo subject ase)

	let points=0;    
   /* 1. subject er number berkortesi
	2. akhane x er value hisabe subject er point paitasi
	3. porboborti point sathe new point add hoitase*/
   for (let subject  in  student) {       
	   const subjectNumber=student[subject];
	   const x = numberToPoint(subjectNumber);
 
     
	points=points+x;
     //console.log(x);
	
	}
   
	const GPA=points/subjectLength;
     
	const greadePoint=PointToGreade(GPA);
    
          return greadePoint
	};
	
       const student = {
	  
	 // id:246718,
	   bangla: 85,
	   math : 70,
	   arabic: 65,
	   english:75,
	   chamisty:90,
  };
             console.log(subjectToGrad(student))










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



