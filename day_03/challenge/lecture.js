/*for (let x = 0; x <= 6; x += 2) {
    console.log(x);
} 
console.log("1" == 1, "1" === 1);
console.log("1" != 1, "1" !== 1);
*/

let tinyNum = 5
let hugeNum = 200000


//1. Given the following code, what will I see in the terminal? Write it out.

if(tinyNum > hugeNum){
    console.log("I am a teeny tiny number")
} else {
    console.log(`I am a huge number, my value is ${hugeNum}`)
}

//--------------------------------------------
// I am a huge number, my value is 200000
//--------------------------------------------

//2. Given the following code, what will I see in the terminal? How many times?

for(let i = 0; i < tinyNum; i++){
    console.log("I am a teeny tiny number")
}

//--------------------------------------------
/* 
I am a teeny tiny number
I am a teeny tiny number
I am a teeny tiny number
I am a teeny tiny number
I am a teeny tiny number
*/
//--------------------------------------------

//3. Given the following code, what will I see in the terminal? Why?

let myNum = 15

if(myNum % 5 === 0){
    console.log("I am divisible by 5")
} else if (myNum % 3 === 0){
    console.log("I am divisible by 3")
} else if(myNum % 5 === 0 && myNum % 3 === 0){
    console.log("I am divisible by 3 and 5")
}

//--------------------------------------------
// I am divisible by 5.
// 15 modulo 5 goes in 3 times with the remainder of 0; "% === 0" is true
//--------------------------------------------

//4. Given the following code, what will I see in the terminal?

let superNum = 25

if(superNum < 50){
    superNum *= 5
} else if(superNum > 75){
    superNum -= 15
}

if(superNum < 150 && superNum > 75){
    superNum /= 25
} else {
    superNum += 5
}

for(let i = 0; i < superNum; i++){
    console.log(i)
}

//--------------------------------------------
/*
0
1
2
3
4
*/
//--------------------------------------------

//5. Given the following code, what will I see in my terminal?

let words = ["purple","blue","orange","green","yellow"]

let colorStr = "Some colors I like are "

for(let i = 0; i < words.length; i++){
    if(i % 2 && i != 0 && i != words.length){
        colorStr += `${words[i]}, `
    } else if(i === words.length){
        colorStr += `and ${words[i]}.`
    }
}

console.log(colorStr)

//--------------------------------------------
// Some colors I like are blue, green,
// Only works on odd numbers where "i % 2" = 1 which is true
// else if never runs cuz our for loop only runs when i < words.length
//--------------------------------------------