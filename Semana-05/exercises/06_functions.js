console.log('--EXERCISE 6: FUNCTIONS');

//6. Functions

/*a. Create a sum function that receives two numeric values and returns the result. 
Execute the function and save the result in a variable, displaying the value 
of that variable in the browser console.*/

console.log('-Exercise 6.a:');
 
function sum(sum1, sum2)
{
    var result;
    result = sum1 + sum2;
    return result;
}
console.log("19 + 94 = "+ sum(19, 94) );
console.log(' ');

/* b. To the sum function above, add a validation to it to check if any of the 
parameters is not a number, display a warning that one of the parameters has 
an error, and return the value NaN as the result and return the value NaN as the result.*/

console.log('-Exercise 6.b:');

function sumValidation(valid1, valid2) {
    if ((typeof valid1) != 'number' || (typeof valid2) != 'number') {
        alert('Error');
        return NaN;
    } else {
        return valid1 + valid2;
    }
}
var sumTest = sumValidation('19',94);

console.log(sumTest);
console.log(' ');

/*c. Create a validate integer function that receives a number as a parameter 
and returns true if it is an integer.*/

console.log('-Exercise 6.c:');

function validateInteger(validInt1) {
    return ((validInt1 % 1) === 0);
}
var sumTestC = validateInteger(10);

console.log(sumTestC)
console.log(' ');

/*d. To the function sum of the exercise 6 b) add a call that validates that the numbers are integers.
 In case there are decimals, display an alert with the error and return the number converted to integer (rounded).*/

 console.log('-Exercise 6.d:');

function sumValidInt(sumValid1,sumValid2) {
    if ((typeof sumValid1) != 'number' || (typeof sumValid2) != 'number') {
        alert('Error');
        return NaN;
    } else if (((sumValid1 % 1) !== 0) || ((sumValid2 % 1) !== 0)) {
        alert('The numbers have been rounded');
        return Math.round(sumValid1) + Math.round(sumValid2);
    } else {
        return sumValid1 + sumValid2;
    }
}
var sumTestD = sumValidInt(17.5,33);

console.log(sumTestD);
console.log(' ');

/*e. Convert the validation of exercise 6 d) into a separate function and 
call it inside the sum function testing that everything still works the same.*/

console.log('-Exercise 6.e:');

function newValidation(numValid1,numValid2) {
    if (((numValid1 % 1) !== 0) || ((numValid2 % 1) !== 0)) {
        alert('The numbers have been rounded (valid function)');
        return Math.round(numValid1) + Math.round(numValid2);
    }
}

function newSumValidation(newV1,newV2) {
    if ((typeof newV1) != 'number' || (typeof newV2) != 'number') {
        alert('Error');
        return NaN;
    } else {
        return newValidation(newV1,newV2);
    }
}
var sumTestE = newSumValidation(7,22.4);

console.log(sumTestE);