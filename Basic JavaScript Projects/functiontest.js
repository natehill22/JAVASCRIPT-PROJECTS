document.addEventListener('DOMContentLoaded', function () {
    function multFunction(x, y, z) { //Function to compute the product of x, y, and z
        return (x * y) * z
    }

    let result = multFunction(3, 5, 3);
    document.getElementById("mult").innerHTML = "The result is: " + result;
});

/* function addFunction() {
    var addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
} */

function addFunction() {
    document.getElementById("add").innerHTML = isNaN(7);
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}