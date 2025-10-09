var x = 14 //Sets a global variable, then uses that variable to do basic additon within two functions
function Basic_add() {
    return 23 + x;
}

function Basic_add2() {
    let y = 19; //Sets a local variable to use in addition calculation
    console.log(x + y);
}

function Basic_add3() {
    console.log(x + y + 27); //Text with an error that I debugged with console commands (but showing it was requirement #3)
}

console.log(Basic_add());
Basic_add2(); // Calling the functions in 2 different ways
Basic_add3();

var now = new Date();
/* now.setHours(now.getHours() + 3);
console.log(now.toLocaleTimeString()); //This code is for testing the function below. Adjust the number after the + sign to see different behavior. Commented out as it's not currently being tested. 
*/

function get_Date() {
    var now = new Date();
    if (now.getHours() < 18) { //Pulls in the current hour of today using the new Date() function. If current hour is under 18 (6pm), sends out a daytime greeting.
        document.getElementById("Greeting").innerHTML = "How are you today?";
    } else { //Otherwise this function, sends out a evening time greeting.
        document.getElementById("Greeting").innerHTML = "How are you tonight?";
    }
}

function NumAssign() {
    var randomNum = Math.floor(Math.random() * 10) + 1; //Gets a random integer between 1 and 10
    if (randomNum <= 5) { //If random number is less than or equal to 5, returns first message
        document.getElementById("rando").innerHTML = randomNum + " is less than or equal to 5.";
    } else if (randomNum > 5) { //If random number is greater than 5, this alter message is given
        document.getElementById("rando").innerHTML = randomNum + " is greater than 5.";
    }
}

function coinFlip() {
    const randomBoolean = Math.random() >= 0.5; //Returns a random boolean value in values of either true or false
     if (randomBoolean === false) {
        var HorT = "Tails"; 
        document.getElementById("FlipReturn").innerHTML = HorT; //Assigns the false boolean to display the value of the flip (Tails) on the HTML
    } else {
        var HorT = "Heads"; // Creating a variable to Assign the word "Tails" to false, and "Heads" to true
        document.getElementById("FlipReturn").innerHTML = HorT; //Assigns the true boolean to display the value of the flip (Heads) on the HTML
    }
    Guess = document.getElementById("Guess").value;
    if (Guess.toLowerCase() === HorT.toLowerCase()) { //Comparing the users guess with the previously assigned "Heads/Tails values"
        document.getElementById("GuessVerif").innerHTML = "Congratulations! You've won!!"; //If the user's guess matches the coin flip, the HTML document will show a success message
    } else {
        document.getElementById("GuessVerif").innerHTML = "Better luck next time!! Try again!"; //If the user's guess doesn't match the coin flip, the HTML document shows a failure message
    }
}

function Time_function() {
    var now = new Date();
    var Time = now.getHours(); //Pulls in the current hour of today using the new Date() function.
    var Reply;
    if (Time < 12 && Time > 0) { //If current hour above 0 AND under 12, the Reply variable gets loaded with a daytime greeting.
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) { //If current hour is GTE 12 and under 6pm, the Reply variable gets loaded with an afternoon greeting.
        Reply = "It is afternoon.";
    }
    else { //Otherwise, the Reply variable gets loaded with an evening greeting.
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Loads the Reply variable to the Time button on the HTML page.
}