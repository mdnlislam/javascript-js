const subjects1 = {
  bangla: 50,
  english: 60,
  arabic: 65,
};
const subjects2 = {
  bangla: 70,
  english: 60,
  arabic: 70,
};
  const students=[subjects1,subjects2];
  for (let subjects of students ){
	  
	const grade=subjectsToGrade(subjects)
    console.log(grade);
	  
  };

function subjectsToGrade(subjects) {
  function NumberToPoint(marks) {
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

  const subjectNames = Object.keys(subjects);
  const subjectLength = subjectNames.length;

  let points = 0;

  for (let subject of subjectNames) {
    const subjectNumber = subjects[subject];
    const x = NumberToPoint(subjectNumber);
    points = points + x;
  }

  const GPA = points / subjectLength;

  function pointToGrade(point) {
    let grade = "";
    if (point >= 5.0) {
      grade = "A+";
    } else if (point >= 4.0) {
      grade = "B+";
    } else if (point >= 3.0) {
      grade = "C+";
    } else if (point >= 2.0) {
      grade = "C";
    }
    return grade;
  }
  const grade = pointToGrade(GPA);

  return grade ;
}
