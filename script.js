/*'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as outer scope's variable
      const firstName = 'Stephen';

      //Reassigning outer scope's variable
      output = 'New Output!';

      const str = `oh, and you're a millenial, ${firstName} `;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  console.log(firstName);
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

//variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Oyindamola';
let job = 'student';
const year = 1999;

//functions
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
