function Call_Loop() {
    var selectedVal = ""; //Sets selectedVal to an undefined value
    var upperMax = 45; //Sets upperMax to 45
    while (upperMax > 0) { //Until upperMax drops below 0, run the code below
        selectedVal += (upperMax) + "<br>"; //Sets selectedVal to equal the value of upperMax followed by a break to keep things orderly
        upperMax -= 5; //Decrement uppermax by 5 each time through the loop
    }
    document.getElementById("Loop").innerHTML = selectedVal; //Display the value on the loop id paragraph in the HTML
}

let myString = "Hello World!"; //Setting a string value for myString
let stringLength = myString.length; //Finding the length of that string value
console.log(stringLength); //Displaying that length value to the console log

var Instruments = ["Keytar", "Musical Saw", "Mellotron", "Synth Bass", "Theremin", "Toha", "Pan Flute", "Handpan", "Stylophone"]; //Setting an array of instruments
var Content = ""; //Defining the Content variable as empty
var Y; //Defining the Y variable as undefined
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //Setting the value of Y to 0, giving the condition of if Y is under the length of the instruments array, and then setting up the increment upon the repetition of the loop
        Content += Instruments[Y] + "<br>"; //Setting the value of Content to equal whatever the value of Instruments currently is on this iteration and adding a break for readability
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //Connecting the saved value to this paragraph so it will show on the HTML
}

function array_Function() {
    var oddSport = []; //Defines an array of odd sports
    oddSport[0] = "Cheese Rolling";
    oddSport[1] = "Wife-carrying";
    oddSport[2] = "Extreme Ironing";
    oddSport[3] = "Underwater hockey";
    oddSport[4] = "Chess Boxing";

    let randomIndex = Math.floor(Math.random() * oddSport.length); //Setting the selection of which array element is chosen to random
    document.getElementById("ArrayList").innerHTML = oddSport.join("<br>"); //Displays all items within the list
    document.getElementById("Array").innerHTML = "Tomorrow I will be playing a rousing game of " + oddSport[randomIndex] + "!"; //Dispalys the selected item within the list with some explanation text
}

const bike = {color:"purple", speed:"fast", material:"aluminum", brand:"trek", weight:"light", tires:"thin", horn:"honka"}; //Using a constant to define a javascript object with many properties
function constant_Function() {
    document.getElementById("Constant").innerHTML = "This bike is made with " + (bike.material) + ", has " + (bike.tires) + " tires, and a " + (bike.horn) + " horn."; //Showing a sentence with multiple object values in it on the HTML
}

let x = 14; //Setting a global value using "let"
console.log(x); //Printing to the console log
{
    let x = 22; //Setting a block-level value to the same variable using "let"
    console.log(x);
}
console.log(x); //Seeing how the global value is showing outside of the brackets


function getVoterAge() { 
    return document.getElementById("age").value; //Gets the value from the user input box in the HTML
}

function checkAge(age) {
    
    age = getVoterAge() //Calling the function to get the value and setting that value to the "age" variable
    if (age === "" || age === "null" || age === "undefined") { //Protecting against empty values
        message = "Please enter a value.";
    }
    else if (age < 18) { //Determines voter status by returning different messages based on if the user is over or under 18
        message = "You are too young to vote. Try again next year.";
    }
    else{
        message = "You are an adult! You can do whatever the H you want.";
    }

    document.getElementById("returns").innerHTML = message; //Displaying the conditional message in the HTML p tag
}

//A return is used when the function should produce a usable output (usable to other programs/functions). It is rarely going to be visible, as it's primary use is by other programs.

let myCar = { //Using let to define a object about a car using properties and methods
    make: "Geo",
    model: "Metro",
    year: "1993",
    color: "fuchsia",
    description: function() { //Method to return all information about car in the format of a sentence
        return "My car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};
document.getElementById("Car_Object").innerHTML = myCar.description(); //Out the method to the HTML

let i = 0; 
while (i < 8) { //Defining a while loop that utilizes the break statement to stop at 4
    if (i === 4) {
        break;
    }
    i +=1;
}
console.log(i);

for (let i = 0; i < 8; i++) { //Defining a for loop that utilizes the continue statement to skip the 3rd iteration
    if (i === 3) {
        continue; //Skip the iteration when it is 3
    }
    console.log(i);
}