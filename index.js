
// Section 1 Values 
// var $myName ='prashant'
// var myAge =20

// console.log($myName);



// Data Types 
// var isAmIPrashant =true;
// var myName ='prashant'
// var myAge = 26
// console.log(isAmIPrashant);
// console.log(typeof(isAmIPrashant));


// chalenges 
//  console.log(10+"20")
// console.log(9-"5");
// console.log("java"+"script");
// console.log(""+"")
// console.log(" "-0)
// console.log("pras"+"hant")
// var a = false - true
// console.log(a);


// INterview Questions
// Different between null and undefined

// var iamUseLess= null;
// console.log(iamUseLess);
// console.log(typeof(iamUseLess));


// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof(iAmStandBy));



// what is NaN  ?
// it is property of global variables
// initaial value of NaN is Not-A-Number


// var myPhoneNumber=7015535765
// var myName="Prashant"

// console.log(isNaN(myPhoneNumber))
// console.log(isNaN(myName))


// if (isNaN(myName)){
//     console.log("please enter a number first :-")
// }



// chalenge 

// var a = NaN === NaN
// console.log(a);

// console.log(Number.NaN===NaN);

// console .log (isNaN(NaN))
// console .log(isNaN(Number.NaN))
// console .log(Number.isNaN(NaN))


// Operators 

// 1 . Assignment Operators
// x=5; //assigning the x variable value 5 
// y=5;

// console.log(x==y)
// console.log("is they are equal or not :-" + x == y);
// console.log("is they are equal or not :-" , x == y);
// console.log(`is they are equal or not : ${  x == y}`);



// Arthmatic Operators
// + , - , * ,/ ,%  


// increment Operator ++ and Decrement Operator --

// // PostFix operator
// var num = 15 
// var newNum= num++
// console.log(num)
// console.log(newNum)

// // PreFix Operator 
// var num = 15 
// var newNum= ++num
// console.log(num)
// console.log(newNum)



// comparison operator
// ==, !=, > ,>= ,<,<= 


// Logical Operator 
// && , || ,! 


// string concatinate  Operator
// which concate two strings operands "a"+"b"="ab"


// chalenges 

// What will be the output of 3**3?

// var a = 3**3
// console.log(a);


// What will be the output, when we add a number and a string?

// var a = 2
// var b = "prashant"
//  console.log(a+b)


// Write a program to swap two numbers?
// var a =4 
// var b=5
// var c = b  
// b=a ;
// a=c ;

// console.log(a ,b )


// Write a program to swap two numbers?
// var a =4 
// var b=5

// a = a+b // a = 9
// b =a -b // b=4 
// a= a-b // a =5 

// console.log(a,b);





// interview Questions 
// diff b/w "==" v/s "==="
// == only check the value but === check the value as  well as the type



// Conditional Statements

// If - Else Statements


// var tomorrow="Rain"

// if (tomorrow=="Sun"){
//     console.log("Go to Swiming")
// }else{
//     console.log("stay At Home");
// }


// var year = prompt('Please enter a Year :-')

// year = year%4

// if (year==0){
//     console.log("this is a leap year");
// }else{
//     console.log('this is a normal year ')
// }


// challenge 

// check the year is leap year or not
// var year = 2014 ;

// if (year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//             console.log('this is a leap year');
//         }else{
//             console.log('this is a normal year ')
//         }
//     }else{
//         console.log('this is a leap year ')
//     }
// }else{
//     console.log('this is a normal year ')
// }


// What is truthy and falsy values in Javascript?
// we have total 5 falsy values in javascript
//  0,"", undefined, null, NaN, false** 

// if (0){
//     console.log("OMG, we Loss the Game");
// }else{
//     console.log("Yay , we Won the Game")
// }




// 2 Conditional (ternary) operator
// The conditional (ternary) operator is the only JavaScript operator / that takes three operands

// var age = 17;
// console.log((age >= 18 ? "you can vote" :"you can't vote"))



// 3 switch Statement
// Evaluates an expression, matching the expression's value to a
// case clause, and executes statements associated with that case.
// 1st without break statment
// Find the Area of circle, triangle and rectangle?

// var area = "rectangle";
// var pi=3.14 , l = 5 , b = 8 , r=4


// if(area=="circle"){
//     console.log("area of a circle is :-" ,pi*r**2)
// }else if(area=="rectangle"){
//     console.log("area of a rectangle is :-" ,l*b)
// }else if(area=="triangle"){
//     console.log("area of a triangle is :-" ,l*b/2)

// }else{
//     console.log("choose a valid option")
// }

// var area = "rrr";
// var pi=3.14 , l = 5 , b = 8 , r=4
// switch(area){
//     case 'circle':
//         console.log("area of a circle is :-" ,pi*r**2)
//         break;
//     case 'rectangle':
//         console.log("area of a rectangle is :-" ,l*b)
//         break;

//     case 'triangle':
//         console.log("area of a triangle is :-" ,l*b/2)
//         break;
//     default :
//     console.log("choose a valid option")
// }

// break
//Terminates the current loop, switch, or label
// statement and transfers
// program control to the statement following the terminated statement




// While Loop 
// printing 0 to 10 
// var a =0 

// while (a<= 10){
//     console.log(a)
//     a++ ;
  
// }

// table 2

// var a =0 

// while (a<= 9){
//     // console.log(a)
//     a++ ;
//     console.log(a*2)
// }



// Do while Loop 

//  var a =0
// do{
//     console.log(a)
//     a++;
// }while(a<= 10)

// var a =20
// do{
//     console.log(a)
//     a++;
// }while(a<= 10) 



// difference b/w while loop and do while Loop
// in while loop it will check the condition first and continue till the condition is true
// in do while loop it will execute first and then check the condition if the condition is false it run once  



// for loop 
// initailizer ,condition , iteration
// printing from 0 to 10
// for (var i=0 ; i<11 ; i++){
//     console.log(i)
// }


// printing table of 2
// for (var i=0 ; i<11 ; i++){
//     console.log(i*2)
// }

// printing the square root 0 to 10
// for (var i=0 ; i<11 ; i++){
//     console.log(i**2)
// }


// JavaScript program to print table for given number
// (8,9,12,15) using for Loop?

// var a = 8

// for(i=1 ;i<=10 ;i++){
//     console.log( a , "X" ,i ,"=",a*i )
// }



/**** Section 5 Functions in JavaScript ****/

//  A JavaScript function is a block of code designed to perform a particular task.

//  Function Definition

// Before we use a function, we need to define it.

// A function definition (also called a function declaration, or function statement)

// consists of the function keyword, followed by:

// The name of the function.
// A list of parameters to the function, enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, {.


// function sum(){
//     var a = 10;
//     var b = 20;
//     var total =a + b 
//     console.log(total)
// }


// sum()



// Function arguments and function parameters 
// Function parameters are the name listed  in the funtion's defination 
// funtion arguments are real  values passes to the funtion 


// function sum(a,b){
  
//     var total =a + b 
//     console.log(total)
// }


// sum(20,25)





//  Interview Question
//  Why Functions?
//  You can reuse code: Define the code once, and use it many times.
//  You can use the same code many times with different arguments,
// // to produce different results.
//  OR
// // A function is a group of reusable code which can be called anywhere
//  in your program. This eliminates the need of writing the same code
// // again and again.



// Function expressions
// Function expressions simply means
//  create a function and put it into the variable funExp"

// function sum(a,b){
  
//     var total =a + b 
//     console.log(total)
// }


// var funExp=sum(20,25)
// funExp;




// 5 Return Keyword
// / When JavaScript reaches a return statement,
// the function will stop executing.
// Functions often compute a return value.
// The return value is "returned" back to the "caller"



// function sum (a,b){
 
//     return total =a + b ;
// }

// var funExp = sum(20,25)
//   console.log(funExp)


// 6 Anonymous Function
// A function expression is similar to and has the same syntax
// as a function declaration One can define "named"
// function expressions (where the name of the expression might
//be used in the call stack for example)
// or "anonymous" function expressions.




// var anonymousFunction = function(a,b){
//     return total = a + b;
// }

// console.log(anonymousFunction(15,20))


// var anonymousFunction = function(a,b){
//     return total = a + b;
// }

// var sum = anonymousFunction(78,89)

// console.log(sum)








// 3 Now It's Time for Modern JavaScript 9

//   Features of ECMAScript 2015 also known as ES6

// 1 LET VS CONST vS VAR


// var myName = "Prashant"
// console.log(myName)
// myName ="Vashisth"
// console.log(myName)



// let myName = "Prashant"
// console.log(myName)
// myName ="Vashisth"
// console.log(myName)



// const myName = "Prashant"
// console.log(myName)
// myName ="Vashisth"
// console.log(myName)


// var => function Scope 
// let , cosnt => block Scope 


// var
// function  sum (){
//     var a=10 
//     if(true){
//         var b =20 ;
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a)
//     console.log(b)
// }

// 


// let 

// function  sum (){
//     let a=10 
//     if(true){
//         let b =20 ;
//         console.log(a)
//         console.log(b)
//     }
//     console.log(a)
//     console.log(b)
// }
// sum()


// const 


// function  sum (){
//     const a=10 
//     if(true){
//         const b =20 ;
//         console.log(a)
//         console.log(b)
//     }
  
//     console.log(b)
// }
// sum()




// Template literals (Template strings)
// JavaScript program to print table for given number (8)?

// var a= 8

// for(var i=1 ;i<=10 ;i++){
//     // console.log(a +" * " +i +" = " +i*a)
//     console.log(`${a} * ${i} = ${i*a}`) //Template literals (Template strings)
// }





// Default Parameters
// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.

// function mult(a,b = 8){
//   return a*b;
// }

// console.log(mult(4));



// Fat Arrow funtions 

// normal funtion
// function mult(){
//   return a*b;
// }

// console.log(mult(4));

// arrow funtion

// const mult =( )=>{
//     var a = 20 , b = 67
//    return (
//     `hello  i am fat arrow funtion${a*b}`
//    )
// }



// console.log(mult());



/**** Section 7 Arrays in JavaScript ****/
// When we use var, we can stored only one value at a time."
// When we feel like storing multiple values in one variable then
// instead of var, we will use an Array.
// In JavaScript, we have an Array class, and / arrays are the prototype of this class.


// var   myFriends = ["Amit",22 ,"male",true,"Priya" ,20 ,"female" ,true] //we will store any type of value in it .

// console.log(myFriends);




//Array Subsection 1
// navigate through an array
// Traversal in array
// if we want to get the single data at a time and also
// if we want to change the data


// var   myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]

// console.log(myFriends[1]);


// if we want to check the length of elements of an array

// var   myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]
// console.log(myFriends.length);
// console.log(myFriends[myFriends.length - 1]);


// if we use loop to navigate 

// var   myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]

// for(let i=0 ; i<myFriends.length ; i++) {

//     console.log(myFriends[i]);
// }



// After ES6 there is for in and for of methods are introduced



// var  myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]

// for(let elements in myFriends){
//     console.log(elements);
// }

// for(let element of myFriends){
//     console.log(element);
// }



// Array. prototype. forEach() 
// Calls a function for each element in the array.

// var  myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]


// myFriends.forEach(function(element , index , array) {
//     console.log(element , index , array)
// })

// by fat arrow functions

// myFriends.forEach((element , index, array) => {
//     console.log(element , index , array)
// })



//Array Subsection 2
//Searching and Filter in an Array
// Array. prototype. index0f() ©
// Returns the first (least) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the
// Oth index number


// var  myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]

// console.log(myFriends.indexOf("Pooja" ,1))



// Array. prototype. lastIndex0f() 
// Returns the last (Greatest) index of an element within the array equal
// to an element, or -1 if none is found. It search the element from the

// var  myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]

// console.log(myFriends.lastIndexOf("Pooja" ,5))


// Array. prototype. includes() 
// determines whether the array contains a value ,
// returning true or false as appropriate


// var  myFriends = ["Amit","Priya","Mamta","Anju","Pooja","Krishan"]
// console.log(myFriends.includes("Priya" ));
// console.log(myFriends.includes("Priya",1 ));
// console.log(myFriends.includes("Priya",4 ));



// Array. prototype.find()
// arr.find(callback(element[, indexl, array]l)[, thisArg])
// Returns the found element in the array, if some element in the / array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element


// const prices =[200,250,300,350,400,450,500,550,600,700,800,900]


// // price < 700

// const findElement = prices.find((currentValue)=>{
//     return currentValue
// })

// console.log(findElement)



// Array. prototype.findIndex() (©
// Returns the found index in the array, if an element in the
// array satisfies the testing function, or -1 if not found.

// const findElement = prices.findIndex((currentValue)=>{
//     return currentValue
// })

// console.log(findElement)


// Array.prototype.filter() ©
// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.


// const prices =[200,250,300,350,400,450,500,550,600,700,800,900]

// const newPriceTags = prices.filter((element ,index)=>{
//  return element < 700
// })

// console.log(newPriceTags)



//Array Subsection
//How to sort an Array
// Array. prototype.sort)
// The sort) method sorts the elements of an array in place and
//returns the sorted array. The default sort order is ascending, built //upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.


// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']

// console.log(months.sort())

// const num =[99,78,100000,1,56,2,8]

// console.log(num.sort())


// However, if numbers are sorted as strings,
// "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort) method will produce an incorrect
// result when sorting numbers.