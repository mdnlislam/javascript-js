const pointToGrade=require("./pointToGrade");
function subjectToGrade(subject) {
  function NumberTopoint(marks) {
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
  //const points=NumberTopoint(50);

  //console.log(point,points);
  let points = 0;
  let results={};
  for (let student in subject) {
    const subjectNumber = subject[student];
    const point = NumberTopoint(subjectNumber);
	const grade=pointToGrade(point)
    points = points + point;
    //console.log(point)
	const result={
		//subject:student,
		number:subjectNumber,
		point:point,
		grade:grade,
	}
	results[student]=result;
	console.log(result)
  }
 // console.log(results);

  const subjectName = Object.keys(subject);
  const subjectLength = subjectName.length;
  const GPA = points / subjectLength;
  //console.log(subjectName,subjectLength,GPA);
function pointToGrade(point) {
    let grade = "";
    if (point >= 5.0) {
      grade = "A+";
    } else if (point >= 4.0) {
      grade = "B+";
    } else if (point >= 3.0) {
      grade = "C+";
    } else if (point >= 2.0) {
      grade = "D+";
    }
    return grade;
  };
  const Grade = pointToGrade(GPA);
  //console.log(Grade);
  const GpaPoint=GPA.toFixed(2);
  
  return {Grade,GpaPoint,results};
}; 

module.exports=subjectToGrade;