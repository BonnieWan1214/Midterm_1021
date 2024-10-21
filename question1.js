const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

/*
Plan

Create a function that simulates a simple password checking system.
1. If the userguess=password  "Access Granted!"
2. If the userguess not= password "Access Denied!"
3. If the user's input "forgot" = "Here is a hint!"
4. If the user's input "reset" = "Let's reset your account"

Bonus if password.length < 5 = "Password is inadequate"

 */


//determine a proper function name and parameter variable name
function passwordcheckingsystem(userguess, password){

  if (userguess === password ){
    console.log("Access Granted!");
  }
  else if (userguess === "forgot"){
    console.log("Here is a hint!");
  }
  else if (userguess === "reset"){
    console.log("Let's reset your account");
  }
  else{
    console.log("Access Denied");
  }
}


function StartApp(){
  readline.question('Please set the password', _num => {
    const password = Number(_num); 
    if (password.length < 5 ) {
      console.log("Password is inadequate");
      readline.close();
      return;
    }
    readline.question('Please type the password', _num2 => {
    const userguess = Number(_num2); 
      //call your function here.
      passwordcheckingsystem(userguess, password)

      // readline.close();
      if(_num2 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();