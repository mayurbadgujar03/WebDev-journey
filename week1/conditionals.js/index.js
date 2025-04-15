// 1 🔢 A classic check: determine if a number is Even or Odd using conditionals.

function checkEvenOdd(num) {
    // Return "Even" if num is even, otherwise return "Odd"
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd"
    }
}

let res1 = checkEvenOdd(11);
// console.log(res1);


// 2 🏆 Given three numbers, return the one that reigns supreme — the largest of all.

function findLargest(a, b, c) {
    // Return the largest among a, b, and c
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

let res2 = findLargest(10, 20, 15);
// console.log(res2);



// 3 🗳️ A simple age gate: check if someone is eligible to vote based on their age.


function checkVotingEligibility(age) {
    // Return "Eligible" if age is 18 or more, otherwise return "Not Eligible"
    if(age >= 18) {
        return "Eligible"
    } else {
        return "Not Eligible";
    }
}

let res3 = checkVotingEligibility(10);
// console.log(res3);


// 4 📊 Convert raw marks into grades (A–F) using nested if-else. Like a mini school grading system!

function calculateGrade(marks) {
    // Return grade based on the marks
    if(marks >= 90){
        return "A"
    } else if (marks >= 80 && marks < 89) {
        return "B"
    } else if (marks >= 70 && marks < 79) {
        return "C"
    } else if (marks >= 60 && marks < 69) {
        return "D"
    } else if  (marks < 60) {
        return "F"
    }
}

let res4 = calculateGrade(92);
// console.log(res4);



// 5 📅 Enter a year, and the code tells you if it’s a leap year or not (based on real leap year rules).

function isLeapYear(year) {
    // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
    if (year%4==0 && year%100!==0||year%400==0) {
        return "Leap Year"
    } else {
        return "Not a Leap Year"
    }
}

let res5 = isLeapYear(2000);
// console.log(res5);



// 6 🚦 Simulate a basic traffic light logic with responses for Red, Yellow, and Green lights.

function trafficLightAction(color) {
    // Return "Stop", "Slow Down", or "Go" based on the traffic light color
    if (color === "Red") {
        return "Stop"
    } else if (color === "Yellow") {
        return "Slow Down"
    } else if (color === "Green") {
        return "Go"
    } else {
        return "Invalid Color"
    }
}

let res6 = trafficLightAction("Red");
// console.log(res6);



// 7 📆 Map numbers 1–7 to days of the week. Anything else? "Invalid Day".

function getDayOfWeek(day) {
    // Return the corresponding day of the week based on the input number
    if (day === 1) {
        return "Monday";
    } else if (day === 2) {
        return "Tuesday";
    } else if (day === 3) {
        return "wednesday";
    } else if (day === 4) {
        return "Thuesday";
    } else if (day === 5) {
        return "Friday";
    } else if (day === 6) {
        return "Saturday";
    } else if (day === 7) {
        return "Sunday";
    } else {
        return "Invalid Day";
    }
}

let res7 = getDayOfWeek(7);
// console.log(res7);




// 8 ➕➖ A quick check to tell if a number is Positive, Negative, or Zero.

function checkNumberType(num) {
    // Return "Positive", "Negative", or "Zero" based on the input number
    if (num > 0) {
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

let res8 = checkNumberType(-1);
// console.log(res8);



// 9 🌡️ Convert temperature values between Celsius and Fahrenheit, based on the given scale.

function convertTemperature(value, scale) {
    // Convert temperature based on the scale ("C" to "F" or "F" to "C")
    if (scale === "C") {
        let temp = value * (9/5) + 32;
        return `${temp}°F`;
    } else if (scale === "F") {
        let temp = (value - 32) * (5/9) ;
        return `${temp}°C`;
    } else {
        return "Invalid Scale"
    }
}

let res9 = convertTemperature(32, "F");
// console.log(res9);



// 10 🧮 A mini calculator that performs basic arithmetic using if-else logic.

function calculator(num1, num2, operator) {
    // Perform basic arithmetic operations using switch case

    if( operator == "+" ) {
        return num1 + num2;
    } else if ( operator == "-" ) {
        return num1 - num2;
    } else if ( operator == "*" ) {
        return num1 * num2;
    } else if ( operator == "/" ) {
        return num1 / num2;
    }  else {
        return "(Invalid Operator. Check List: "+", "-", "*", "/" )";
    }
}

let res10 = calculator(11, 4, "0");
console.log(res10);