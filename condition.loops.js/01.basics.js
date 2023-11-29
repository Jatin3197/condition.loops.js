// In conditional statements is present a condition and then verify the statement with true or false condition any one condition is 
// satisfied with true or false.
// Conditional statements in JavaScript allow you to execute specific blocks of code based on conditions.
// If the condition meets then a particular block of action will be executed otherwise it will execute  
// another block of action that satisfies that particular condition. 
// There are fiv types of conditional statement ...
// .If statement
// .If else statement
// .elseif statement
// .Switch statement
// .ternary operator 

// if statement Syntax
// if ( condition ) {
//                 // If the condition is met, 
//                 //code  will get executed.
//             }
// example of if statement
let num = 20; 

if (num % 2 === 0) { 
	console.log("Given number is even number."); 
} 

if (num % 2 !== 0) { 
	console.log("Given number is odd number."); 
};

// If else statement syntax
// if (condition1) {
//                 // Executes when condition1 is true
//                 if (condition2) {
//                     // Executes when condition2 is true
//                 }
//             }
// Example of if else statement
let age = 19; 

if (age >= 18) { 
	console.log("You are eligible of driving licence") 
} else { 
	console.log("You are not eligible for driving licence") 
};
// Else if statement syntax 
// if (1st condition) {
//                 // Code for 1st condition
//             } else if (2nd condition) {
//                 // ode for 2nd condition
//             } else if (3rd condition) {
//                 // Code for 3rd condition
//             } else {
//                 //  ode that will execute if all 
//                 // above conditions are false
//             }
// Example of if else statement 
let marks = 80
if (marks > 90){
      console.log("Grade is A");
}
else if (marks > 70 && marks <90) {
      console.log("Grade is B");
}
else if (marks > 50 && marks <70) {
      console.log("Grade is C");
}
else if (marks < 50) {
      console.log("Grade is D");
}
else {
      console.log("Grade is not given");
}
// switch statement syntax 
// switch (expression) {
//                 case value1:
//                     statement1;
//                     break;
//                 case value2:
//                     statement2;
//                     break;
//                 . . .
//                 case valueN:
//                     statementN;
//                     break;
//                 default:
//                     statementDefault;
//             };
// Example of switch statement 
let rating = 5

switch (rating) {
           case 1:
                console.log("poor"); 
           break;
           case 2:
                console.log("ok");
                break;
           case 3:
                console.log("good");
           break;
           case 4:
                console.log("awesome");
           break;       
           case 5:
                console.log("Excellent"); 
           break;     
           default:
                console.log("i have not gave a rating");
}
// syntax of ternary operator
// condition ? value if true : value if false
// Example of Ternary operator 

let number = 10

let integer = 
number < 0 ? "negative" : number > 0 ? "positive" : "zero" ;

console.log(integer);
// Output:Positive