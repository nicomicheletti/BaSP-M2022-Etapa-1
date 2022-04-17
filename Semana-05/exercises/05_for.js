console.log('--EXERCISE 5: FOR');

//5. For

/*a. Create an array containing 5 words and traverse that array using a JavaScript 
for loop to display an alert using each of the words.*/

console.log('-Exercise 5.a:');

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for (var i = 0; i < 5; i++) {
    console.log('Today is: ', days[i]);
}

console.log(' ');

/*b. To the previous array convert the first letter of each word to uppercase 
and display an alert for each modified word.*/

console.log('-Exercise 5.b:');

var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
for (var i = 0; i < 5; i++) {
    daysCapital = (days[i].substring(0,1)).toUpperCase() 
    + (days[i].substring(days[i].length - (days[i].length - 1))).toLowerCase();
    console.log('Today is: ', daysCapital);
}

console.log(' ');

/*c. Create a variable called "sentence" that has an empty string, 
then run through the array in point a) with a for loop to store each word in the 
sentence variable. At the end display a single alert with the complete string.*/

console.log('-Exercise 5.c:');

var days = ['monday ', 'tuesday ', 'wednesday ', 'thursday ', 'friday '];
var sentence = '';
for (var i = 0; i < 5; i++) {
    sentence = sentence + days[i];
}

console.log(sentence);
console.log(' ');

/*d. Create an empty array with a for loop of 10 repetitions. 
Fill the array with the number of the repetition, 
that is to say that at the end of the execution of the for loop there should be 
10 elements inside the array, from number 0 to number 9. 
Display the final array in the browser console (use console.log).*/

console.log('-Exercise 5.d:');

var empty = [];
for (var i = 0; i < 10; i++) {
    empty.push(i);
}

console.log(empty);
console.log(' ');
