
/*
1. friste subject number nibo
2. tar por number to point ber korbo
3. point ber kortar system dinamic korbo loop use korbo
4. tar point golo jok korbo
5. object ar length ber korbo
6. avares point ber korbo
7. point to grade ber korbo
8. total system ta dinamic korbo
9. tar por akadik subject1 nibo 
10. portek buject ar ar alada alada number /point/grade ber korbo
11. alada alada result ta akta object ar bitore doabo
12. gpa . ar por 2 digit nibo
*/

/* const subject1={
	 bangla:80,
	 English:80,
	 Arabic:85,
 }
 const subject2={
	 bangla:50,
	 English:60,
	 Arabic:50,
 };
 const subjects=[subject1,subject2]
	const result=subjects.map(mapfunction);
 function mapfunction(item){
	 //return [item,item];
	 const grade=subjectsToGrade(item)
	console.log(grade)	
	 
 };
	//console.log(result)

/* for (let subject1 of subjects ){
	 const grade=subjectsToGrade(subject1)
	console.log(grade);
 }; */
 /*function subjectsToGrade(subjets){
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
//console.log(point);


let points=0;
for(let subjects in subjets ){
	const subjectName=subjets[subjects];
	const x=NumberToPoint(subjectName) 
    
	points=points+x;
};
	const subjectKeys=Object.keys(subjets);
	const subjectLength=subjectKeys.length;
	const GPA=points/subjectLength;


function pointToGrade(point){
	 let grade="";
	if(point>=5.00){
		grade="A+";
	}
	else if(point>=4.00){
		grade="B+";
	}
	else if(point>=3.00){
		grade="C+";
	}
	else if(point>=2.00){
		grade="C+";
	}
	return grade;
}
const Grade=pointToGrade(GPA);
	return Grade;
};*/


/*1.first subject number nibo
  2. number to point ber korbo
  3.total number to gpa ber korbo
  4.point to grate ber korbo
  5. pore dimamic korbo */
  
  // subject name and number nibo
  const student={
	  bangla:70,
	  english:65,
	  arabic:80,
  };
  
    const student1={
	  bangla:50,
	  english:50,
	  arabic:50,
  };
  
const students=[student,student1];
for(let student of students ){
 const grade=subjectTograde(student)
 console.log(grade)
	
//console.log(student)
};
  function subjectTograde(subjects){
	  function NumberToPoint(marks){
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
  //console.log(points)
  
        points=0;
	for(let subject in student){
	const subjectToNumber=subjects[subject];
  const x=NumberToPoint(subjectToNumber)
		points=points+x;
	};
const subjectKeys=Object.keys(subjects);
const subjectLength=subjectKeys.length;
const GPA=points/subjectLength;	
	
		//console.log(GPA)
let grade='';
function pointToGrade(point){
	if(point>=5.00){
		grade='A+';
	}
	else if(point>=4.00){
		grade='B+';
	}
	else if (point>=3.00){
		grade='C+';
	}
	else if (point>=2.00){
		grade='D';
	}
	return grade;
};
const Grade=pointToGrade(GPA)
//console.log(Grade);
     return Grade;
  };
  