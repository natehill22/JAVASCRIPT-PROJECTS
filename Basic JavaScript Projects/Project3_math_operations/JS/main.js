function addFunction() { //Function to add 25 to 7
    var addition = 25 + 7;
    document.getElementById("addMath").innerHTML = "25 + 7 = " + addition;
}

function subFunction() { //Function to subtract 9 by 7
    var subtraction = 9 - 7;
    document.getElementById("subMath").innerHTML = "9 - 7 = " + subtraction;
}

function multFunction() { //Function to multiply 25 by 9
    var multiplication = 25 * 9;
    document.getElementById("multMath").innerHTML = "25 * 9 = " + multiplication;
}

function divFunction() { //Function to divide 90 by 5
    var division = 90 / 5;
    document.getElementById("divMath").innerHTML = "90 / 5 = " + division;
}

function mathsFunction() { //Function to add 1 and 2, multiply by 10, divide by 2, and then subtract 5
    var allMaths = (1 + 2) * 10 / 2 - 5;
    document.getElementById("allMath").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 = " + allMaths;
}

function modFunction() { //Function to get the modulus of 25 by 9
    var modulus = 25 % 6;
    document.getElementById("modMath").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negFunction() { //Function to negate 12 using an operator
    var x = 12;
    document.getElementById("negMath").innerHTML = -x;
}

function incFunction() { //Function to increment 5 using a variable
    var y = 5
    y++;
    document.getElementById("increment").innerHTML = y;
}

function decFunction() { //Function to decrement 9 using a variable
    var z = 9
    z--;
    document.getElementById("decrement").innerHTML = z;
}

window.alert(Math.trunc(6.125)); //A JS alert that truncates the value of 6.125

function getRandomInt(min, max) { //Function that returns a random number between 4 and 21 (inclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomInt(4, 21);
console.log(randomInt);