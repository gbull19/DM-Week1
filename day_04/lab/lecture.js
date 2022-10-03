let randomStuff = [42, "roof", null, "car", false, undefined, 205]

//1. Given the randomStuff array, answer the following questions:
//a) What does the following print to the terminal?

console.log(randomStuff[4])

//--------------------------------------------
// false
//--------------------------------------------

//b) What does the following print to the terminal?

console.log(`My ${randomStuff[1]} is red.`)

//--------------------------------------------
// My roof is red.
//--------------------------------------------

//(The following questions make permanent changes to the array)

//c) What does the following print to the terminal?

randomStuff.pop()

console.log(randomStuff)

//--------------------------------------------
// [42, "roof", null, "car", false, undefined]
//--------------------------------------------

//d) What does the following print to the terminal?

randomStuff.shift()  // ["roof", null, "car", false, undefined]

console.log(randomStuff[3])

//--------------------------------------------
// false
//--------------------------------------------

//e-1) What does the following print to the terminal?

randomStuff.unshift("puppies")
randomStuff.push("taxes")
randomStuff.splice(3,2,627)  // ["puppies", "roof", null, 627, undefined, "taxes"]
let randomThing = randomStuff.slice(2,3)

console.log(randomThing);

for(let i = 0; i < randomStuff.length; i++){
    console.log(randomStuff[i])
}

//--------------------------------------------
//answer here
// puppies
// roof
// null
// 627
// undefined
// taxes
//--------------------------------------------

//e-2) What does randomStuff look like now?

//--------------------------------------------
// ["puppies", "roof", null, 627, undefined, "taxes"]
//--------------------------------------------

//e-3) What does the following print to the terminal?

console.log(randomThing)

//--------------------------------------------
// [null]
//--------------------------------------------

//f) What does the following print to the terminal? (Multiple answers)

while(randomStuff.length < 10){
    randomStuff.push("stuff");
}
// let randomStuff = ["puppies", "roof", null, 627, undefined, "taxes", "stuff", "stuff", "stuff", "stuff"]

if(randomStuff.shift() === "stuff"){
    console.log(randomStuff[7]);  //removes "puppies" but doesn't log
} else if (randomStuff.pop() === "stuff") {
    console.log(randomStuff[3]);   //pops "stuff", logs [3] = false
} else {
    console.log(randomStuff[randomStuff.length - 1]);
}

console.log(randomStuff.length) //Was 10, after shift and pop = 8

//--------------------------------------------
// undefined
// 8
//--------------------------------------------