const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 73 and 85, display "Great job! [Student Name] has a B."
- If the score is between 61 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/*
Plan

Create a function that simulates a student midterm exam grading system.

1. if score >= 86 "Excellent! [Student Name] has an A."
2. else if score >= 73 <= 85  "Great job! [Student Name] has a B."
3. else if score >= 61 <= 72  "Good effort!  [Student Name] has a C."
4. else if score >= 50 <= 60  "Needs improvement. [Student Name] has a D."
5. else if score <50  "Fail. [Student Name] has a F."

 */

//determine a proper function name and parameter variable name
let studentname="Bonnie";
function examgradingsystem(studentname,score){
  if (score >= 86 ){
    console.log(`Excellent! ${studentname} has an A `);
  }
  else if (score >= 73 && score <=85 ){
    console.log(`Great job! ${studentname} has a B `);
  }
  else if (score >= 61 && score <=72 ){
    console.log(`Good effort! ${studentname} has a C `);
  }
  else if (score >= 50 && score <=60 ){
    console.log(`Needs improvement ${studentname} has a D `);
  }
  else if (score<50 ){
    console.log(`Fail.${studentname} has a F `);
  }

  //write your code here
}

function StartApp(){
  readline.question('What is student name ?', _name => {
    studentname="_name";
    readline.question('What is student name score ?', _score => {
      const score = Number(_score); 

      //call your function here.
      examgradingsystem(studentname,score)

      // readline.close();
      if(_score !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();