console.log("test");

let {array1, array2, array3} = require("./data")
let {elementByIndex, 
    removeItemAll, 
    removeDuplicates, 
    arraySum, 
    randomInRange,
    capitalFirstLetter,
    capitalizedAll,
    lastLetter} = require("./functions")

console.log(array1[0]);
let c = array1.length;
console.log(array1[c-1]);
console.log(array1);
console.log(array1.pop());
console.log(array1);
array1.push(4)
console.log("------ from elem 1 ------");
console.log(array1.slice(1));

console.log("------ export N index function ------");
console.log(elementByIndex(array1, 1));

console.log("------ deleting the elem/elems by 'value' ------");
console.log(array2);
let x = removeItemAll(array2, "remove");
console.log(x);
console.log("------ deleting the eduplicates: ------");
console.log(array3);
console.log(removeDuplicates(array3));

console.log("------ Array sum own function ------");
console.log(arraySum(array3));

console.log("------ Random in Range ------");
console.log(randomInRange(29,19));

console.log("------ First letter and whole capitalized ------");
console.log(capitalFirstLetter("abcd"));
console.log(capitalizedAll("capitalizedAll"));
console.log(capitalizedAll("abcd"));
let str = "abcde";
console.log(str.slice(-1));
console.log(lastLetter(str, "e"));
















