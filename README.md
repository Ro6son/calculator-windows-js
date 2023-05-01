# Project: Calculator Windows 

Link: https://calculator-windows-js.vercel.app/

## About:

This HTML, CSS and JavaScript code implements a simple calculator. The interface is built with HTML, using classes and IDs to select the elements of interest. The CSS style file is used to define the appearance of the calculator's buttons. The JavaScript code defines the calculator's operating logic, using DOM element selectors to interact with the interface and implementing auxiliary functions to process the calculations.

The 'display' variable is used to select the HTML element that displays the result of the operation. The remaining variables select the calculator buttons.

The state of the calculator is held in variables such as 'first', 'operator', 'previousNumber' and 'currentNumber'. The 'updateDisplay' function is responsible for updating the content displayed on the calculator's display.

Auxiliary functions, such as 'adjustCommaPoint', 'cleanDisplay', 'calculate', 'deleteLast', 'invertSign', 'calcPorc', 'calcDivisionOne' and 'calcPower', are used to perform the mathematical operations of the calculator. These functions are called according to the buttons suffered by the user.

In summary, the code implements a calculator that allows you to perform simple mathematical operations, such as addition, subtraction, multiplication, division, calculated percentage, square root, power and sign inversion.

## Concepts - Learning:

1 - Simplifying the logic:
The code has several functions and conditionals that could be simplified to reduce the size and complexity of the code, for example, instead of having a function for each calculator button, there could be a single function to handle all the buttons, using information from the attributes of each button to determine the corresponding action.
2 - Use more modern resources:
the code uses old JavaScript resources, such as the eval() method, which can be replaced by other safer and more efficient alternatives, such as Function(). In addition, it would be possible to use more modern features of JavaScript, such as asynchronous functions and arrow functions syntax.
3 - Improve code readability:
the code could be better organized and documented to make it easier and more efficient to read and maintain. This includes using consistent formatting, choosing more descriptive variable and function names, and adding explanatory comments.

Note: Using libraries and frameworks:
there are several JavaScript libraries and frameworks that could be used to simplify calculator development and make it more efficient. For example, libraries like React or Vue.js allow you to create user interfaces faster and more efficiently, while libraries like math.js can be used to simplify complex math calculations.



