document.write(typeof undefined);
document.write("<br>"); //Adding line breaks for readability
document.write(2E310); //Writing a value of infinity
document.write("<br>");
document.write(-3E310); //Writing a value of -infinity
document.write("<br>");
document.write(20 > 10); //Using operators to get a true boolean value
document.write("<br>");
document.write(20 < 10); //Using operators to get a false boolean value
document.write("<br>");
console.log(3 + 8); //Writing a numeric value to the console log
console.log(3 + 8 > 16); //Using operators to get a false boolean value to the console log
document.write(40 == 40); //Using == operators to get a true boolean value
document.write("<br>");
document.write(40 == 24); //Using == operators to get a false boolean value
document.write("<br>");
document.write("<br>");
const String = "How many numbers? "; 
const Number = 12;
const Combine = String + Number; //Combining a string and a number into a JavaScript expression
console.log(Combine); //Printing that value to the console
A = 14;
B = 14;
C = 19;
D = "19";
E = "Hamburglar";
F = "Hamburglar";
document.write(A === B); //Using === operators to get a true boolean value with identical data types and values
document.write("<br>");
document.write(C === E); //Using === operators to get a false boolean value with different data types and values
document.write("<br>");
document.write(C === D); //Using === operators to get a false boolean value with identical values and different data types
document.write("<br>");
document.write(B === C); //Using === operators to get a false boolean value with identical data types and different values
document.write("<br>");
document.write(E === F); //Using === operators to get a true boolean value comparing identical strings
document.write("<br>");
document.write("<br>");
document.write(5 > 2 && 10 > 4); //Using && operators to determine a true boolean value
document.write("<br>");
document.write(5 < 2 && 10 > 4); //Using && operators to determine a false boolean value
document.write("<br>");
document.write(5 > 10 || 10 > 4); //Using || operators to determine a true boolean value
document.write("<br>");
document.write(5 > 10 || 10 < 4); //Using || operators to determine a false boolean value

function not_FunctionT() { //Using ! operator to determine a true boolean value
    document.getElementById("NotT").innerHTML = !(20 < 10);
}

function not_FunctionF() { //Using ! operator to determine a false boolean value
    document.getElementById("NotF").innerHTML = !(20 > 10);
}