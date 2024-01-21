/**                                                       Control Flow
 * 0) Control Flow: the order in which statements in a program are executed. It determines the flow of execution based on conditions, loops, and function calls.
 *     
 * 
 * 1) If: A fundamental building block in programming that enables conditional execution of code. It allows you to control the 
 *  flow of your program based on whether a specified condition is true or false.
 * 
 * 2) Else-if: A statement extends the if statement by providing an alternative block of code to execute when the condition is false.
    If the condition is true, the code inside the first set of curly braces is executed; otherwise, the code inside the second set of curly braces is executed.
 * 
 * 3) Else: else statement is used in conjunction with the if statement to provide an alternative block of code to execute when 
 *      the specified condition in the if statement is false.
 * 
 * 4) Switch: allows you to perform different actions based on the value of an expression. It provides a concise way to handle multiple conditions by 
 *      evaluating an expression and executing the code block associated with the matching case.
 * 
 */

    // 1) If
    let temperature = 25;

    if (temperature > 30) {
      console.log("It's a hot day!"); // This block will be executed if the condition is true
    } else {
      console.log("It's not too hot."); // This block will be executed if the condition is false
    }

    // 2) Else-if
    let hour = 14;

    if (hour < 12) {
      console.log("Good morning!"); // This block is executed if the condition is true
    } else if (hour < 18) {
      console.log("Good afternoon!"); // This block is executed if the previous condition is false and this condition is true
    } else {
      console.log("Good evening!"); // This block is executed if both previous conditions are false
    }
    // 3) Else
    let isRaining = false;

    if (isRaining) {
      console.log("Grab an umbrella!"); // This block is executed if the condition is true
    } else {
      console.log("Enjoy the weather!"); // This block is executed if the condition is false
    }
    // 4) Switch
    let dayOfWeek = "Monday";

    switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Wednesday":
        console.log("It's the middle of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's another day.");
}