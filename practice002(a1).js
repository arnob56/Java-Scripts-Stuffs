//BRACU CGPA chekceer

let num = prompt("Enter a number:");
let grade;
let points;
if  (num < 0 || num > 100) {

    console.log("Invalid input. Please enter a number between 0 and 100.");
    }

else {
    if (num>=97 && num<=100) {
        grade = "A+";
        points=4.00;
    } 
    else if (num>=90 && num<97) {
        grade = "A";
        points=4.00;
    }
    else if (num>=85 && num<90) { 
        grade = "A-";
        points=3.70;
    }
    else if (num>=80 && num<85) {
        grade = "B+";
        points=3.30;
    }
    else if (num>=75 && num<80) {
        grade = "B";
        points=3.00;
    }
    else if (num>=70 && num<75) {
        grade = "B-";
        points=2.70;
    }
    else if (num>=65 && num<70) {
        grade = "C+";
        points=2.30;
    }
    else if (num>=60 && num<65) {
        grade = "C";
        points=2.00;
    }
    else if (num>=55 && num<60) {
        grade = "C-";
        points=1.70;
    }
    else if (num>=50 && num<55) {
        grade = "D";
        points=1.00;
    }
    else {
        grade = "F";
        points=0.00;
    }
    console.log(`Grade: ${grade}, Points: ${points}`);
    alert(`Grade: ${grade}, Points: ${points}`);
}