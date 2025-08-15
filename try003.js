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
    following : 180,
    isActive: true,
    isVerified: false};

let output = `This is ${Profile.instaProfile}'s profile.His post count is ${Profile.postCount}, followers are ${Profile.followers}, and following is ${Profile.following}.`;
console.log(output);




//str.toUpperCase() and toLowerCase()
//str.trim() and str.trimStart() and str.trimEnd()
let stWr = "   Hello World!   ";
console.log(stWr.trim()); // "Hello World!"
console.log(stWr.trimStart()); // "Hello World!   "     

let str1 = "Hello World!";
console.log(str1.toUpperCase()); // "HELLO WORLD!"



//str.slice() and str.substring()
let str2 = "Hello World!";
console.log(str2.slice(0, 5)); // "Hello"

//str.concat(str2)
let str3 = "Hello";
let str4 = " World!";
let str5 = str3.concat(str4);
console.log(str5); // "Hello World!"

//str.replace(seacrhValue, replaceValue)
let str6 = "Hello World!";
let newStr = str6.replace("World", "JavaScript");  
console.log(newStr); // "Hello JavaScript!"

//str.charAt(index)
let str7 = "Hello World!";
console.log(str7.charAt(6)); 