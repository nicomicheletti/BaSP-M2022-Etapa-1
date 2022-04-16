console.log('--EXERCISE 3: IF-ELSE');

//4. If else

/*a. Create a random number between 0 and 1 using the Math.random() function, 
if the value is greater than or equal to 0.5 display an alert with the message 
"Greater than 0.5" and otherwise an alert with the message "Lower than 0.5". */ 

console.log('-Exercise 4.a:');
console.log('Ready as an alert');

var numberRandom = Math.random();

if (numberRandom >= 0,5) {
    alert("Greater than 0.5");
} else {
    alert("Lower than 0.5");
}

console.log(' ');

/*b. Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
"Baby" if age is less than 2 years old;
"Child" if the age is between 2 and 12 years;
"Teenager" between 13 and 19 years of age;
"Young" between 20 and 30 years of age;
"Adult" between 31 and 60 years of age;
"Older adult" if between 61 and 75 years of age;
"Elderly" if over 75 years of age.*/

console.log('-Exercise 4.b:');
console.log('Ready as an alert');

var age = Math.floor(Math.random() * 101);
if (age < 2) {
    alert("Baby")
} else if (age >1 && age < 13) {
    alert("Child")
} else if (age > 12 && age < 20) {
    alert("Teenager")
} else if (age > 19 && age < 31) {
    alert("Young")
} else if (age > 30 && age < 61) {
    alert("Adult")
} else if (age > 60 && age < 76) {
    alert("Older adult")
} else {
    alert("Elderly")
}

console.log(' ');