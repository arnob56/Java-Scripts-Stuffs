//conditional operators

let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
}


let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
    console.log("Dark mode is enabled");
} else {
    color = "white";
    console.log("Light mode is enabled");
}


//odd or even
let number = 15;
if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
    alert("The number is odd");
}


//ternary operator

//condition ? valueIfTrue : valueIfFalse

let age = 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligibility);