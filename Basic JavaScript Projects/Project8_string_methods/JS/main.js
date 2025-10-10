function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Creating a sentence out of 4 individual strings using the .concat method
    document.getElementById("ConcatenateEx").innerHTML = whole_sentence; //Pushing the combined concatenation to the HTML
}

var holy = "HOLY";
var guac = "GUACAMOLE";
var bangs = "!!!!";

var DivineGuac = holy.concat(" ", guac, bangs); //Using the .concat method to say Holy Guacamole
document.write(DivineGuac);

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33); //Removing the word "Johnny" from the sentence
    document.getElementById("Slice").innerHTML = Section; //Displaying the removed word on the HTML
}

var vegetableFull = "Tomatoes and Potatoes and Peas";
var justPotatoes = vegetableFull.slice(13, 21); //Slicing Potatoes out of the phrase
document.write("<br><br>");
document.write(justPotatoes);
document.write("<br><br>");
document.write(justPotatoes.toUpperCase()); //Using Javascript .toUpperCase to Make potatoes uppercase
document.write("<br><br>");
var lookingForTatoes = vegetableFull.search("tatoes"); //Using Javascript .search to find phrases within my vegetable string
document.write(lookingForTatoes);
document.write("<br><br>");

function string_MethodEx() {
    var fiveHundredTwenty = 520;
    document.getElementById("NumberToString").innerHTML = fiveHundredTwenty.toString(); //Turning the number 520 into a string using the Javascript .toString method
}

function precisionMethod() {
    var X = 981.6682194;
    document.getElementById("Precise").innerHTML = X.toPrecision(6); //Using the Javascript .toPrecision method to give a 6 digit (rounded) version of the given number
}

var y = 5583.201
document.write(y.toFixed(2)); //Utilizing the JavaScript .toFixed method to reduce the number of digits after the decimal to 2
document.write("<br><br>");

const Minutes = {
    hours: 3,
    minutes: 12,
    valueOf() {
        return this.hours * 60 + this.minutes; //Setting this object to behave like primitive values in a mathematical expression
    }
};
document.write(Minutes.valueOf()); //Returning the value of the function's finished operation
document.write("<br><br>");
document.write(Minutes); //Returning the function itself