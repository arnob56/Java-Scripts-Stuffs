let i_name = prompt("Enter your name: ");
username= "@"+i_name.toLowerCase().replace(/\s+/g, "")+i_name.length;
console.log(`Your username is: ${username}`);