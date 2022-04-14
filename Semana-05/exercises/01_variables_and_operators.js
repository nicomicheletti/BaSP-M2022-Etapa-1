console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

//1. Variables and operators

//a. Create two numeric variables and use the sum operator to store the sum value of both numbers in a 3rd variable.

var number1 = 5;
var number2 = 4;
var result = number1 + number2;

console.log('-Exercise 1.a:');
console.log('If we sum: ', number1);
console.log('and: ', number2);
console.log('The result is: ', result);
console.log(' ');


//b. Create two strings variables and concatenate them saving the result in a 3rd variable.

var firstName = "Nicolás ";
var lastName = "Micheletti";
var nameAndLastName = firstName + lastName;

console.log('-Exercise 1.b:');
console.log('My name is: ', firstName);
console.log('My last name is: ', lastName);
console.log('My full name is: ',nameAndLastName);
console.log(' ')

/*Create two String variables and add the length of each variable (number of letters of the string)
saving the result of the sum in a 3rd variable (use length).*/

var team1 = "Barcelona";
var team2 = "Espanyol";
var result3 = team1 + team2;

console.log('-Exercise 1.c:');
console.log('Barcelona has this number of letters: ', team1.length)
console.log('Espanyol has this number of letters: ', team2.length)
console.log('The sum of boths is: ', result3.length)