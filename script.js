'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  console.log(firstName);
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
