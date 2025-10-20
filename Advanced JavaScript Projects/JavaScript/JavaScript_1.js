function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value; //Pulling the color string from the input value
    var Color_String = " is pretty good, I guess...";
    switch(Colors) { //If the input matches the text in any case, assign the Color_Output variable to what is specified below and then jump to the end
        case "Vermillion":
            Color_Output = "Vermillion" + Color_String;
        break;
        case "Goldenrod":
            Color_Output = "Goldenrod" + Color_String;
        break;
        case "Teal":
            Color_Output = "Teal" + Color_String;
        break;
        case "Cerulean":
            Color_Output = "Cerulean" + Color_String;
        break;
        case "Fuchsia":
            Color_Output = "Fuchsia" + Color_String;
        break;
        case "Puce":
            Color_Output = "Puce" + Color_String;
        break;
        default: 
            Color_Output = "Please enter a color exactly as written on the above list."; //Otherwise, show this text
    }
    document.getElementById("Output").innerHTML = Color_Output; //Push the variable to the HTML in this location
}