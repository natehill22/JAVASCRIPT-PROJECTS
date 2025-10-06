var str = "This is the button text!";
var str2 = "This is the OTHER button text!";

document.addEventListener('DOMContentLoaded', function() { //Parses the entire HTML document to ensure all eleemnts are accounted for before running the function 

    let clickCount = 0; //Creating a counter to keep track of button clicks and setting it to 0
    const myElement = document.getElementById("Button_Text");

    myElement.onclick = function() {
        clickCount++; //Incremeneting the counter upon each click
        if (clickCount === 1) {
            myElement.textContent = "This is the button text!"; //Sets button text to this text upon first click
        } else if (clickCount === 2) {
            myElement.textContent = "This is the OTHER button text!"; //Sets button text to updated text upon second click
            clickCount = 0; //Optionally resets the counter for subsequent clicks to repeat the cycle
        }
    }
});

document.addEventListener('DOMContentLoaded', function() { { //Parses the entire HTML document to ensure all eleemnts are accounted for before running the function
        var Rtext = "Time to say,";
        var RtextF = " \"Hello and Goodbye!\"";
        document.getElementById("PText").innerHTML = Rtext + RtextF; //Concatenating both set variables into paragraph text
    }
});

function myFunction() { //Creating a paragraph that updates/alters upon button click
    var clicknote = "If you click on this phrase";
    clicknote += " more text will magically appear!"; //Additional text is appended to the varaible string
    document.getElementById("Conjure") .innerHTML = clicknote;
}