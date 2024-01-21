/**                                                          String Manipulation
 * 0) String Manipulation: modifying or manipulating strings using various operators and string methods in various ways to achieve desired results.
 * you can perform string manipulation using a combination of operators and string methods.
 * 
 * 1) String Operators: used to perform operations on strings.
 *          Concatenation Operator (+): combining two or more strings into a single string.
 *          String Assignment Operator (+=): shorthand for concatenating and assigning the result to the original string variable.
 * 
 * 2) String Methods: functions or operations that can be performed on strings in programming languages. 
 * These methods allow you to manipulate and interact with strings in various ways.
 *          Length: Returns the number of characters in a string.
 *          CharAt(index): Returns the character at the specified index in a string.
 *          Slice: allows negative indexes to count from the end of the string.
 *          indexOf: Returns the first index at which a specified substring is found in a string.
 *          Replace: Replaces a specified substring or pattern with another substring.
 *          toUpperCase() and toLowerCase(): Convert a string to uppercase or lowercase, respectively.
 *          Trim: Removes leading and trailing whitespaces from a string.
 *          Split: Splits a string into an array of substrings based on a specified separator.
 */

// String Operators

// 1) Concatenation Operators(+)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// 2) String Assignment Operators (+=)
let greeting = "Hello";
greeting += " World"; // "Hello World"

// String Methods

// 1) Length
let str1 = "Hello";
let length = str1.length; // 5
// 2) CharAt
let str2 = "Hello";
let firstChar = str2.charAt(0); // "H"
// 3) Slice
let str3 = "Hello World";
let sliced = str3.slice(6, 11); // "World"
// 4) indexOf
let str4 = "Hello World";
let position = str4.indexOf("World"); // 6
// 5) Replace
let str5 = "Hello World";
let newStr = str5.replace("World", "Universe"); // "Hello Universe"
// 6) toUpperCase() and toLowerCase()
let str6 = "JavaScript";
let upper = str6.toUpperCase(); // "JAVASCRIPT"
let lower = str6.toLowerCase(); // "javascript"
// 7) trim
let str7 = "   Trim Me   ";
let trimmed = str7.trim(); // "Trim Me"
// 8) Split
let str8 = "Hello,World";
let arr = str8.split(","); // ["Hello", "World"]