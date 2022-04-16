console.log('--EXERCISE 3: ARRAYS');

//3. Arrays

/*a. Given the following array: ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"] 
show by console the months 5 and 11 (use console.log).*/

var months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];

console.log('-Exercise 3.a:');
console.log('Months 5 and 11: ', months[5] + ' and ' + months[11]);
console.log(' ');

//b. Sort the months array alphabetically and display it by console (use sort).

console.log('-Exercise 3.b:');
console.log(months.sort());
console.log(' ');

//c. Add an element to the beginning and end of the array (use unshift and push).

months.unshift("firstNewMonth");
months.push("lastNewMonth");

console.log('-Exercise 3.c:');
console.log(months);
console.log(' ');

//d. Remove an element from the beginning and end of the array (use shift and pop).

months.shift();
months.pop();

console.log('-Exercise 3.d:');
console.log(months);
console.log(' ');

//e. Invert the array order (use reverse).

console.log('-Exercise 3.e:');
console.log(months.reverse());
console.log(' ');

/*f. Join all elements of the array into a single string 
where each month is separated by a hyphen - (use join).*/

console.log('-Exercise 3.f:');
console.log(months.join("-"));
console.log(' ');

//g. Create a copy of the months array containing May through November (use slice).

var months = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];

console.log('-Exercise 3.g:');
console.log(months.slice(4,11));
console.log(' ');
