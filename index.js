// Task 1 

// function isDivisible(n, x, y) {
//   if (n % x === 0 && n % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var cavab = isDivisible(100, 50, 2)
// console.log(cavab);

//Task 2 

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   if (num > 0) {
//     return num * -1
//   }
//   else {
//     return num
//   }
// }

// var cavab = makeNegative(5)

// console.log(cavab);


// Task 3

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   var cem = 0;
//   for (i = 0; i <= num; i++) {
//     cem += i;
//   }
//   return cem;
// };

// console.log(summation(8));

//Task 4

/* It's pretty straightforward.
 Your goal is to create a function that removes the first and last characters of a string.
 You're given one parameter, the original string.
 You don't have to worry with strings with less than two characters.*/

// function removeChar(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i !== 0 && i !== str.length - 1) {
//       newStr += str[i]
//     }
//   }
//   return newStr

// };

// console.log(removeChar("Tehran"));

// Task 5

// Write a function to split a string and convert it into an array of words.
// Sətiri bölmək və onu sözlər massivinə çevirmək üçün funksiya yazın.

// function stringToArray(string) {

//   return string.trim().split(' ')

// }

// console.log(stringToArray('Hello World'));

//  Task 6
/*  Given a non-empty array of integers, return the result of multiplying the values together in order.
 Tam ədədlərin boş olmayan massivini nəzərə alaraq, dəyərlərin ardıcıllıqla vurulmasının nəticəsini qaytarın.
 Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

// function vurma(arr) {
//   let cavab = 1;

//   for (let i = 0; i < arr.length; i++) {
//     cavab *= arr[i];
//   }

//   return cavab;
// }

// console.log(vurma([1,2,3,4]));

// Task 7
// Given an array of integers, return a new array with each value doubled.
// Tam ədədlər massivini nəzərə alaraq, hər dəyəri ikiqat artıraraq yeni massiv qaytarın.
// Example: [1, 2, 3] --> [2, 4, 6]

// function maps(x) {
//   let newarr = [];
//   for (let i = 0; i < x.length; i++) {
//     let ikiqat = 2 * x[i];

//     newarr.push(ikiqat);
//   }

//   return newarr;
// }

// console.log(maps([1, 2, 3]));


// Task 8 

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

//Birinci əsr 1-ci ildən 100-cü ilə qədər, ikinci əsr 101-ci ildən 200-cü ilə qədər və s.
// Bir il verilmiş, onun içində olduğu əsri qaytarın.

// Example: 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// function century(year) {
//   let cavab =Math.ceil(year / 100);
//  cavab
//   return cavab;
// }

// console.log(century(1705));


// Task 9 

/*
 Your job is to write a function, which takes three
 integers a, b, and c as arguments, and returns True if
 exactly two of of the three integers are positive numbers (greater than zero),
  and False - otherwise.*/
/*
Examples
twoArePositive(2, 4, -3) == true
twoArePositive(-4, 6, 8) == true
twoArePositive(4, -6, 9) == true
twoArePositive(-4, 6, 0) == false
twoArePositive(4, 6, 10) == false
twoArePositive(-14, -3, -4) == false

*/
// function twoArePositive(a, b, c) {
//     if (a > 0 && b > 0 && c <= 0) {
//         return true;
//     }
//     else if (a > 0 && b <= 0 && c > 0) {
//         return true;
//     }
//     else if (a <= 0 && b > 0 && c > 0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// Task 10

/* The Hamming Distance is a measure of similarity between two strings of equal length.
 Complete the function so that it returns the number of positions where the input strings do not match. 
Examples:
a = "I like turtles"
b = "I like turkeys"
Result: 3

a = "Hello World"
b = "Hello World"
Result: 0

a = "espresso"
b = "Expresso"
Result: 2

*/

// function hamming(a, b) {
//     let sehvSayi = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] !== b[i]) {
//            sehvSayi++
//         }
//     }
//     console.log(sehvSayi);
// }

// hamming('Hello World', "Hello World")
