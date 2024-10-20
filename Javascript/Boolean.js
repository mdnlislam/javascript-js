/* Boolean

    1. valus of Boolean
    2. number to boolean
    3. string to boolean - 3ways kora jai
    4. boolean to number
    5. boolean to string */

/*	 let goodBoy=false;
	 
	 // console.log(goodBoy);
	  
	  let roll=246718;
	  let numberToBoolean=Boolean(roll);
	  let boolean=!!roll;
	  
	//  console.log(  boolean);

       // string to Boolean
	   
	   let name="rony";
	   
	  // let stringToBoolean=(name.toLowerCase()==="rony");
	   
	   function stringToBoolean(name){
		   return name.toLowerCase()==="rony";
	   };
	let point=   stringToBoolean("rony")
	  // console.log(typeof point)
	   
	   
	   
	   
	   // boolean to number
	   
	   let goodboy=false;
	   let booleanToNumber=Number(goodboy);
	   
	  // console.log(  booleanToNumber);
	   
	   
	   
	  // Boolean to string
	  
	  
	     let goodGirl=true;
		 let booleanToString=String(goodGirl); 
		 console.log( typeof booleanToString); */

/*
		  1. first a subject number nibo
		  2. number to point ber korbo
		  3. buject ar length berkorbo
		  4. tar point + krbo
		  5. gpa ber korbo 
		  6.  tar por gpa to grade berkorbo
		  7
		 */

const subjects = {
  bangla: 75,
  english: 80,
  arabic: 65,
};
const subjects1 = {
  bangla: 50,
  english: 70,
  arabic: 50,
};
const students = [subjects, subjects1];
for (let subjects of students) {
  const grade = subjectsToGrade(subjects);
  console.log(grade);
}

function subjectsToGrade(subjects) {
  function numberToPoint(marks) {
    let point = 0;
    if (marks >= 80) {
      point = 5.0;
    } else if (marks >= 70) {
      point = 4.0;
    } else if (marks >= 60) {
      point = 3.0;
    } else if (marks >= 50) {
      point = 2.0;
    }
    return point;
  }

  let points = 0;
  let results = {};
  for (let subject in subjects) {
    const subjectNumber = subjects[subject];
    const point = numberToPoint(subjectNumber);
    const grade = pointToGrade(point);
    points = points + point;
    /*first subject name
				 2. number
				 3.point
				 4.grade
				 */
    const result = {
     // subject: subject,
      number: subjectNumber,
      point: point,
      grade: grade,
    };
	results[subject]=result;
    //results.push(result);
  }
  const subjectsName = Object.keys(subjects);
  const subjectsLength = subjectsName.length;

  const GPA = points / subjectsLength;

  function pointToGrade(point) {
    let grade = "";
    if (point >= 5.0) {
      grade = "A+";
    } else if (point >= 4.0) {
      grade = "B+";
    } else if (point >= 3.0) {
      grade = "B+";
    } else if (point >= 2.0) {
      grade = "C+";
    }
    return grade;
  }
  const grade = pointToGrade(GPA);
  return {totalGrade: grade,GPA:GPA, results };
}
