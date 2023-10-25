

//Problem 1: Write a function to calculate the area of a triangle.


function triangleArea(base , height){

    let area = (base * height) / 2; 
          
            console.log(area);

}

triangleArea(10 , 20 );

//Problem 2: Write a function to convert degrees to radians.

function degreesToRadians(degrees){
    
    let radians =  degrees * Math.PI / 180;
    console.log(radians);
}
degreesToRadians(90);
 
//Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
let number = 5;
function calculateFactorial(number){
    if (number === 0){
        return 1;
    }
    else{
        return number *calculateFactorial(number -1);
    }
    
}

console.log(calculateFactorial(number));

//Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(num){
    if(num === 1)
    {
        return false;
    }
    else if(num === 2)
    {
        return true;
    }
    else{
       for (let i = 2; i< num; i++){
        if(num % i === 0){
            return false;
        }
       }
       return true;
    }

}
console.log(isPrime(58));

//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

function mergeArrays(arr1, arr2){
    let marged = arr1.concat(arr2)
    console.log(marged);
}

mergeArrays([8, 9, 11, 12], [1, 2, 5, 7])

//Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
 
function isLeapYear(year){
if (year % 100 === 0? year % 400 === 0 : year % 4 === 0 ){
    return "This is a leap year";
}
else{
    return "Not a leap year";
}

}
let year = 2022;
let result = isLeapYear(year);
console.log(result);

//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

let array = ['mango','apple','apple','orange', 'mango','banana'];

function removeDuplicates(array){
   
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(removeDuplicates(array));


//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.



function convertToCelsius(Fahrenheit){
    let Celsius = (Fahrenheit - 32) * 5/9;

    console.log(Celsius);

}
convertToCelsius(100)


//Problem 9: Write a function to find the maximum of five numbers.

function maxNumber(arr){
    return Math.max(...arr);
}
let arr = [20, 30, 10, 25, 88];
console.log(maxNumber(arr));

//Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(Number){
    let length = Number.length;
    if(length % 2 == 0) {
        console.log("The number is even.");
    }else {
        console.log("The number is odd.");
    }
}
evenOdd('JavaScript')
evenOdd('Hello')






/*
=> Answer any 4 questions.

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

2. What is JavaScript, and what is its primary purpose in web development?

JavaScript is a scripting language for creating dynamic web page content. It creates elements for improving site visitors’ interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors.



3. Explain the difference between var, let, and const when declaring variables in JavaScript.

var: The var keyword declares a function-scoped or global variable, optionally initializing it to a value.Function-scoped means that the variable is only available within the function it was declared in. Global variables are available throughout your entire code.

const: The const keyword declares a block-scoped, immutable constant variable, i.e. a variable that can’t be reassigned.Constants are also called “immutable variables”, but that’s a bit of a misnomer since they are actually variables – just ones that can’t be reassigned.

let: The let keyword declares a block-scoped local variable, optionally initializing it to a value.
Block-scoped means that the variable is only available within the block it was declared in, which is usually denoted by curly braces {}.


4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

Global scope — Global scope contains all of the things defined outside of all code blocks. A code block simply consists of grouped statements inside curly braces ({ }). if statement, loops, function are examples of structure that create a code block. A global variable has global scope. A global variable is accessible from anywhere in the code.

Local Scope — Local scope contains things defined inside code blocks. A local variable has local scope. A local variable is only accessible where it’s declared.

5. What is the difference between "null" and "undefined" in JavaScript?

Null : Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.null is also an object.

Undefined : Undefined means a variable has been declared, but the value of that variable has not yet been defined.

*/