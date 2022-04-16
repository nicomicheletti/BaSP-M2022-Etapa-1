console.log('--EXERCISE 2: STRINGS');

//2. Strings

/*a. Crear una variable de tipo string con al menos 10 caracteres y 
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var word10 = 'uppercase example';

console.log('-Exercise 2.a:');
console.log('We use this words: ', word10);
console.log('Using toUpperCase we will see like this: ', word10.toUpperCase());
console.log(' ');

/*b. Create a string variable with at least 10 characters and generate a new string with the 
first 5 characters saving the result in a new variable (use substring).*/

var newWord10 = 'substring example';
var result2B = newWord10.substring(0, 5);

console.log('-Exercise 2.b:');
console.log('We use this words: ', newWord10);
console.log('Using substring we can do this:', result2B);
console.log(' ');

/*c. Create a string variable with at least 10 characters and generate a new string 
with the last 3 characters saving the result in a new variable (use substring).*/

var otherNewWord10 = 'subtring example';
var result2C = otherNewWord10.substring(13);

console.log('-Exercise 2.c:');
console.log('We use this words: ', otherNewWord10);
console.log('Using substring we also can do this:', result2C);
console.log(' ');

/*d. Create a string variable with at least 10 characters and generate a new string
 with the first letter in uppercase and the others in lowercase. Save the result in 
 a new variable (use substring, toUpperCase, toLowerCase and the + operator).*/

 var word10D = 'exercise d example';
 var result2D = word10D.substring(0,1).toUpperCase() + word10D.substring(1).toLowerCase();

console.log('-Exercise 2.d:');
console.log('We use this words: ', word10D);
console.log('The result is: ', result2D);
console.log(' ');

/*e. Create a string variable with at least 10 characters and some white space. 
Find the position of the first blank space and store it in a variable (use indexOf).*/

var word10E = 'exercise example';
var result2E = word10E.indexOf(' ');

console.log('-Exercise 2.e:');
console.log('In this exercise the source indexOf shows the first blank space store in "exercise example" text ');
console.log('Result: ',result2E);
console.log(' ');

/*f. Create a string variable with at least 2 long words (10 characters and some space in between). 
Use the methods from the previous exercises to generate a new string that has the first letter 
of both words in uppercase and the other letters in lowercase 
(use indexOf, substring, toUpperCase, toLowerCase and the + operator).*/

var word10F = 'information technology';
var spaceWord10F = word10F.indexOf(' ');
var newSpace = ' ';
var firstWord = word10F.substring(0,1).toUpperCase() + word10F.substring(1,spaceWord10F).toLowerCase();
var secondWord = word10F.substring(spaceWord10F+1,spaceWord10F+2).toUpperCase() 
+ word10F.substring(spaceWord10F+2).toLocaleLowerCase();
var result2F = firstWord + newSpace + secondWord;


console.log('-Exercise 2.f:');
console.log('We use this words: ', word10F);
console.log('The result is: ', result2F);
console.log(' ');
