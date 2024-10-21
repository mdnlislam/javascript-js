
/*
1. friste subject number nibo
2. tar por number to point ber korbo
3. point ber kortar system dinamic korbo loop use korbo
4. tar point golo jok korbo
5. object ar length ber korbo
6. avares point ber korbo
7. point to grade ber korbo
8. total system ta dinamic korbo
9. tar por akadik student nibo 
10. portek buject ar ar alada alada number /point/grade ber korbo
11. alada alada result ta akta object ar bitore doabo
12. gpa . ar por 2 digit nibo
*/

 const student={
	 bangla:75,
	 English:65,
	 Arabic:85,
 };
 const grade=subjectsToGrade(student)
 function subjectsToGrade(subjets){
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
for(let subjects in student ){
	const subjectName=student[subjects];
	const x=NumberToPoint(subjectName)
	points=points+x;
};
	const subjectKeys=Object.keys(student);
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
};
const Grade=pointToGrade(GPA);
	console.log(Grade);
};
 

	
	
