// Loops offer a quick and easy way to do something repeatedly. 
// In loops are a way to print the multiple statements repeately in different Form.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.
// Looping in programming languages is a feature that facilitates the execution of a set of instructions/functions repeatedly while  
// some condition evaluates to true. For example, suppose we want to print “Hello World” 10 times. 

// Different kinds of loops---
// .For loop
// .While loop
// .do while loop
// .for in loop
// .for of loop

// what do you need it 
// Loops are need for repeative task to again and again run. 
// loops are used for more number of data and values to work more faster 
// It is used for faster work and easy to execute the code in javascript. 

// for loop syntax 
// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
// for (initialization; condition; afterthought)
//   statement
for (let CricketScore = 1; CricketScore <=10 ; CricketScore++) {
                
       console.log(`CricketScore is ${CricketScore} `);         
}
// while loop syntax 
// A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:
// while (condition)
//   statement
 
// example of while loop
let CricketScore = 1 
while (CricketScore <= 25) {
        console.log(CricketScore);
        CricketScore++        
}
// do while syntax 
// The do...while statement repeats until a specified condition evaluates to false.
// do
//   statement
// while (condition);
// example of do while loop 
let i=1
do {
   console.log(i);
   i++             
} while (i<=5);