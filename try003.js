//loopp
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Calculate sum of n numbers
let n= prompt("Enter a number:");
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`The sum of first ${n} numbers is: ${sum}`);

//while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//do while loop
let num = 90;
do {
    console.log(num);
    num++;
}while (num < 5);


//for of loop
let arr = [1, 2, 3, 4, 5];
let str = "Hello";
for (let i of str) {
    console.log(i)
}
for (let value of arr) {
    console.log(value);
}

//template literals
let Profile={
    instaProfile :"user123",
    postCount : 150,
    followers : 2000,
    following : 180
,}

let output = `This is ${Profile.instaProfile}'s profile.His post count is ${Profile.postCount}, followers are ${Profile.followers}, and following is ${Profile.following}.`;
console.log(output);