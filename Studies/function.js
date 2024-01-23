                                                        Function
/**
 * 0) Function:  a reusable block of code that performs a specific task or set of tasks. Functions are defined to organize code into manageable 
 * and modular pieces, allowing for easier maintenance and reusability. A function typically takes input parameters, processes them, and returns a result.
 * 
 * 
 * 1) The two phases to using a functions: first we must    ? Next we can execute (or two other words for executing a function) a function by?
 *      First: we must Function Definition: In this phase, you define the function by specifying its name, parameters, and the code block that makes up the function body.
 *      Second: Function Invocation (or Calling): After defining the function, you can use (or invoke) it by calling its name along with any required arguments.
 * 
 * 2) What's the difference between a function's parameters and arguments passed to a function?
 *      Parameters: Parameters are variables listed in the function definition. They act as placeholders for the actual values (arguments) that will be passed into the function.
 *  Parameters are used within the function's body and serve as local variables.
 *      Arguments: Arguments are the actual values that are passed to the function when it is called. They replace the parameters in the function call.
 *  Arguments provide the values that the function will use to perform its task.
 * 
 * 3) What's the syntax for a named function?
 * function: This keyword is used to define a function in JavaScript.
 * functionName: This is the name of the function. You can choose any valid identifier as the function name.
 * (parameter1, parameter2): These are the parameters (input variables) that the function takes. You can have zero or more parameters, separated by commas.
 * The code block {} contains the statements that make up the function body.
 * var result = parameter1 + parameter2;: This line represents the code inside the function body, performing a specific task.
 * return result;: This line specifies that the function will return a result. The return statement is optional and is used to send a value back to the caller.
 * 
 * 4) How do we assign a function to a variable?
 * var myFunction: This declares a variable named myFunction.
 * function(parameter1, parameter2) { ... }: This is a function expression defining an anonymous function. It can take parameters and has a 
 *   body that contains the code defining the function's behavior.
 * The entire function expression is assigned to the variable myFunction.
 * 
 * 5) Functions can optionally take inputs, and optionally return a single calue. How do we specify inputs, and how do we specify outputs?
 *  You can specify inputs and outputs using parameters and the return statement.
 *      Specifying Inputs (Parameters): define parameters in the function declaration. Parameters act as placeholders 
 *   for the values that will be passed to the function when it is called.
 *      Specifying Outputs: use the return statement to specify the value that the function should produce as its result. 
 *   This is optional; a function may not necessarily return a value.
 * 
 * 6) Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true.
 * 
 * 7) Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
 *      that closure stays alive, and data can continue to exist in these closures.
 */

// 0) Function definition
function addNumbers(a, b) { // a and b is the parameters
    // Function body
    var sum = a + b;
    return sum; // Output of the function
} // Function definition 

// Calling the function with arguments 3 and 5
var result = addNumbers(3, 5); // the argument 3 and 5

// Printing the result
console.log(result); // Output: 8 // Function calling


// 3) the syntax of a function
function functionName(parameter1, parameter2) {
    // Function body
    // Code that defines what the function does
    var result = parameter1 + parameter2;
    return result;
}

// 4) Assigning a function to a variable
var myFunction = function(parameter1, parameter2) {
    // Function body
    // Code that defines what the function does
    var result = parameter1 + parameter2;
    return result;
};

// Calling the function using the variable
var sumResult = myFunction(3, 5);

// Printing the result
console.log(sumResult); // Output: 8

// 5) Inputs and Outputs
// inputs
function addNumbers(a, b) {
    // Function body
    var sum = a + b;
    return sum; // Output of the function
}
// outputs
function multiplyNumbers(x, y) {
    var product = x * y;
    return product; // Output of the function
}
// using both input and output
function power(base, exponent) {
    var result = Math.pow(base, exponent);
    return result; // Output of the function
}

// Calling the function with arguments 2 and 3
var result = power(2, 3);

// Printing the result
console.log(result); // Output: 8

// 6) Scopes

var outsideVar = "I am outside the functions";// outside scope

function parentFunction() {
    var parentVar = "I am in parentFunction"; // parent scope

    function childFunction() {
        console.log(childVar);    // Accessing childVar from the local scope
        console.log(parentVar);   // Accessing parentVar from the parent scope
        console.log(outsideVar);  // Accessing outsideVar from the global scope
    }

    var childVar = "I am in childFunction";  // Declaration of childVar // local variable

    childFunction();
}

parentFunction();
// Inverse
function outerFunction() {
    var outerVariable = 20;

    function innerFunction() {
        var innerVariable = 30;
        // innerVariable is accessible only within innerFunction
        // Attempting to access outerVariable here would work, but not the other way around
    }

    innerFunction();
}

outerFunction();

// 7) Closures
function outFunction() {
    var outVariable = "I am in the outer function";

    function inFunction() {
        console.log(outVariable);  // Accessing outerVariable from the closure
    }

    return inFunction;  // Returning the inner function
}

var closureFunction = outFunction();  // outerFunction is executed, and closureFunction now holds innerFunction
closureFunction();  // Invoking closureFunction still has access to outerVariable