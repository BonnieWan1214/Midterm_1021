const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/*
Plan
Create a function that simulates a lunch money management system for students.


1. if (the student has enough money to buy lunch) = [student name] purchased [lunch item] purchased!
enough money: amount of lunch money > lunch item costs
2. else = [student name] does not have sufficient funds to buy [lunch item]!
Don't have enough money: amount of lunch money < lunch item costs


 */

//determine a proper function name and parameter variable name
function lunchmoneymanagementsystem(_studentname, lunchmoney, _lunchitem, lunchcost){
  if (lunchmoney > lunchcost ){
    console.log("[student name] purchased [lunch item] purchased!");
  }
  else{
    console.log("[student name] does not have sufficient funds to buy [lunch item]");
  }

}

function StartApp(){
  readline.question('What is your name', _name => {
    readline.question('How much lunch money do you have?', _lunchmoney => {
      const lunchmoney = Number(_lunchmoney); 
      readline.question('What do you want for lunch?', _lunch => {
        readline.question('How much does the item costs?', _lunchcost => {
      const lunchcost = Number(_lunchcost); 

          //call your function here.
          function lunchmoneymanagementsystem(_studentname, lunchmoney, _lunchitem, lunchcost)
          // readline.close();
          if(_lunchcost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();