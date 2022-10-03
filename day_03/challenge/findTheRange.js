const array1 = [1, 4, 11, 2, 37, -4];

/*
console.log("Max: " + Math.max(...array1));
console.log("Min: " + Math.min(...array1));
*/

let smallest = array1[0];
let largest = array1[0];

for (let x = 1; x < array1.length; x++) {
    if (smallest > array1[x]) {
        smallest = array1[x];
    } else if (largest < array1[x]) {
        largest = array1[x];
    }
}

console.log("Min: " + smallest + ",", "Max: " + largest)
    