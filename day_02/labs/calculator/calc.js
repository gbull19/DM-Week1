const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	let num3 = 0;

	/*console.log("mathSymbol" , mathSymbol);
	console.log("num1" , num1);
	console.log("num2" , num2);*/
	if (tokens[3] != null) {
		num3 = Number(tokens[3]);
	}

	switch (mathSymbol) {
		case "+":
			console.log(num1 + num2 + num3);
			break;
		case "-":
			console.log(num1 - num2 - num3);
			break;
		case "*":
			console.log(num1 * num2 * num3);
			break;
		case "/":
			console.log(num1 / num2 / num3);
			break;
		case "√":
			console.log(Math.sqrt(num1));
			break;
		case "^2":
			console.log(Math.pow(num1, 2));
			break;
		case "^3":
			console.log(Math.pow(num1, 3));
			break;
		case "^":
			console.log(Math.pow(num1, num2));
			break;
		case "%":
			console.log(Math.floor(num1/num2) + " Rem " + (num1 % num2));
			break;
		//This line tests if JS follows the order of operations
		case "order":
			console.log(num1 + num2 * num3);
			break;
		// This line closes the connection to the command line interface
		/*case "exit":
			reader.close();
			break;*/
		default:
			console.log("You suck at math.");
			break;
		}
	// How do I make this recursive?
	reader.close();
});

/* This is a backup of my original code

reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	let num3 = 0;

	console.log("mathSymbol" , mathSymbol);
	console.log("num1" , num1);
	console.log("num2" , num2);
	if (tokens[3] != null) {
		num3 = Number(tokens[3]);
	}

	if (mathSymbol === "+") {
		console.log(num1 + num2 + num3);
	}
		else if (mathSymbol === "-") {
			console.log(num1 - num2 - num3);
		}
		else if (mathSymbol === "*") {
			console.log(num1 * num2 * num3);
		}
		else if (mathSymbol === "/") {
			console.log(num1 / num2 / num3);
		}
		else if (mathSymbol === "√") {
			console.log(Math.sqrt(num1));
		}
		else if (mathSymbol === "^2") {
			console.log(Math.pow(num1, 2));
		}
		else if (mathSymbol === "^3") {
			console.log(Math.pow(num1, 3));
		}
		else if (mathSymbol === "^") {
			console.log(Math.pow(num1, num2));
		}
		else if (mathSymbol === "%") {
			console.log(Math.floor(num1/num2) + " Remainder " + (num1 % num2));
		}
		//This line tests if JS follows the order of operations
		else if (mathSymbol === "order") {
			console.log(num1 + num2 * num3)
		}
		else {
			console.log("You suck at math.");
		}

	// This line closes the connection to the command line interface.
	reader.close()

});
*/