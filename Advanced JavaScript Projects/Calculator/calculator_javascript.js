//Creates an object to keep track of values
const Calculator = {
    Display_Value: '0', //Displays a 0 on the calculator screen as a default
    First_Operand: null, //Holds the first operand for any expressions, we set it to null for now
    Wait_Second_Operand: false, //Checks whether or not the second operand has been inputted by the user
    operator: null, //Holds the operator, null for now
};

//Modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator; //Assigning these variables to the value of the Calculator.Display_Value / Wait_Second_Operand object properties
    if (Wait_Second_Operand === true) { //If the second operand has a non-null value, set Display_Value to the key that was clicked on and set the Wait_Second_Operand variable back to false
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { //Overwrites Display_Value with "digit" if the current value is 0, otherwise it concatenates "digit" onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//Section handles decimals
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return; //If Wait_Second_Operand has a non-null value, the function stop right here. This ensures that accidental clicking of the decimal point doesn't cause bugs in the operation
    if (!Calculator.Display_Value.includes(dot)) { //If Display_Value does not contain a decimal point, add a decimal point
        Calculator.Display_Value += dot;
    }
}

//Section handles operators--runs when an operator button is clicked
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator; //Assigning these variables to the value of the Calculator. object properties
    const Value_of_Input = parseFloat(Display_Value); //Converts the current number displayed on the screen to a decimal and then assigns it to the value of the Value_of_Input variable
    if (operator && Calculator.Wait_Second_Operand) { 
        Calculator.operator = Next_Operator; 
        return; //Checks if an operator already exists and if Wait_Second_Operand is true, updates the operator and exits from the function
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input; //If First_Operand doesn't have a value, give Calculator.First_Operand the value of the Value_of_Input variable
    } else if (operator) { 
        const Value_Now = First_Operand || 0; //If the operator exists, give either the value of First_Operand OR 0 to the Value_Now variable
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input); //Property lookup is performed for the operator in the Perform_Calculation object and the function that matches the operator is executed
        result = Number(result).toFixed (9); //We add a fixed amount of numbers after the decimal
        result = (result * 1).toString(); //Removes any trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//Updates the calculator screen with the contents of Display_Value
function Update_Display() {
    const display = document.querySelector('.calculator-screen'); //Makes use of the calculator-screen class to target the input tag in the HTML document
    display.value = Calculator.Display_Value;
}

Update_Display();

//Section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {target } = event; //The target variable is an object that represents the element that was clicked
    if (!target.matches('button')) { //If the element that was clicked on is not a button, exit the function
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    //Ensures that AC clears all inputs from the Calculator screen
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})