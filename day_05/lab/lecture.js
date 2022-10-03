//SOME AWESOME METHODS FOR STRINGS
//                                         
let practice_with_some_strings = "Hello, world";
let test = practice_with_some_strings;
//an object wrapper around all primitives String(practice_with_some_strings)
// let str = 'hello';
// let temp = new String("new string"); // wrapper object
// console.log(temp);
// temp.custom = 1;
// console.log(temp.custom);


//obtaining portions of a string
//substring and return "ell" ----->
// console.log(practice_with_some_strings.substring(1,4));

//slice and return "worl" -----> 
// console.log(practice_with_some_strings.slice(7,-2));

//split and return an array of both words -----> 
let arr1 = practice_with_some_strings.split(", ");
// console.log(arr1);

//Bonus: what method can take an array of words and put them back together
let arr2 = arr1.join(", ");
// console.log(arr2);

//searching a string
//indexOf "H" ---->
// console.log(test[0]);

//lastIndexOf "l" ---->
// console.log(test[10]);

//boolean searching funtions
//startsWith "Hello" gives us?--->
// console.log(test.startsWith("Hello")); //true

//endsWith "!" --->
// console.log(test.endsWith("!")); //false

//includes "no" --->
// console.log(test.includes("no")); //false

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
// console.log(test.replace("llo", "ya"));

//toLowerCase ---> take a guess lol
// console.log(test.toLowerCase());

//toUpperCase ---> take another guess
// console.log(test.toUpperCase());

//inspecting individual characters of a string
//charAt 0 ---> 
// console.log(test.charAt(0));

//charCodeAt 0  --->
// console.log(test.charCodeAt(0));

//Bonus: find the range of lower and uppercase letters
const onlyUpper = test.replace(/[a-z, ]/g, ""); //g is the global flag
console.log(onlyUpper.length + " upper case letter(s)");

const onlyLower = test.replace(/[A-Z, ]/g, ""); //g is the global flag
console.log(onlyLower.length + " lower case letter(s)");

//space trim funtctions !bonus mess with these methods!
let test1 = "   test "
//trim test --->
// console.log(test1.trim());

//Bonus: mess with the other trims
// //trimStart and trimEnd
// console.log(test1.trimStart());
// console.log(test1.trimEnd());