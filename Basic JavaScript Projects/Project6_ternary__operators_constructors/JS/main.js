function Ride_Function() { //Function that uses a ternary operation to determine a participant's ability to ride based upon their height in cm
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //These final two lines determine what message is shown to the participant based upon their eligibility
}

function AgeMachine() { //Function that uses a ternary operation to determine a participant's ability to vote based upon their age
    let Age, CanVote;
    Age = document.getElementById("Age").value;
    CanVote = (Age < 18) ? "You are not old enough to vote. Please try again next year.":"Vote away, Homeslice!";
    document.getElementById("Vote").innerHTML = CanVote; //These final two lines determine what message is shown to the participant based upon their eligibility
}

function Used() {
    var x = 14
    document.getElementById("New_and_This").innerHTML = x; // Displaying the number 14 in the New_and_This p element
}

function CosmeticTypes(lipstick, powder, spray, blush, eyeshadow, bronzer, brows) { //Creating an object constructor that displays types of makeup and sets their values to placeholder values
    this.lipstick = lipstick;
    this.powder = powder;
    this.spray = spray;
    this.blush = blush;
    this.eyeshadow = eyeshadow;
    this.bronzer = bronzer;
    this.brows = brows;
}
var Olga = new CosmeticTypes("matte", "setting", "setting", "cream", "neutral", "shimmer", "powder"); //Initializing three instances of the makeup object contstructor using three different people 
var Dina = new CosmeticTypes("satin", "foundation", "fixative", "powder", "blues", "matte", "gel");
var Jorge = new CosmeticTypes("sheer", "matte", "dewy", "sheer", "purples", "deep", "pencil");
function makeupConstructor() { //This function shows object Dina's makeup properties in sentence form upon clicking on the Makeup paragraph tag
    document.getElementById("Makeup_Constr").innerHTML = "Dina uses a " + Dina.lipstick + " lip, " + Dina.powder + " powder, " + Dina.spray + " spray, " + Dina.blush + " blush, \"" + Dina.eyeshadow + "\" eyeshadow, " + Dina.bronzer + " bronzer, and " + Dina.brows + " brows.";
}

function count_Function() { //Example of a nested function where the inner function decrements from the variable set in the outer function and returns it
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;
    }
}
