// "use strict"; // Kan bruges i toppen af filer, eller toppen af funktioner

//totalGlobalVariable = "Never EVER!!! do this!!!"; // Will fail with strict mode
//var globalVariable = "Also NEVER ever do this!!!";

//console.log(globalVariable);

// use const whenever possible, else use let

// about const:
// const cannot be undeclared or redeclared
// but its value can be changed as long as you don't change the assignment

// Three scopes

// global scope

function someOtherScope() {
  // function scope
  //console.log("This is a function scopes");
}

{
  // block score
  //console.log("This is a block scopes");
}

{
  var someValue = true;

  {
    var someValue = false;
  }

  //console.log(someValue); // Will print out false, because var variables pollutes
}

{
  let someValue = true;
  {
    let someValue = false;
  }
  //console.log(someValue);
}

// Will print out 6 six times
for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Will print out 0 1 2 3 4 5
for (let i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
