function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value; //Pulling the color string from the input value
    var Color_String = " is a great color!";
    switch(Colors) { //If the input matches the text in any case, assign the Color_Output variable to what is specified below and then jump to the end
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default: 
            Color_Output = "Please enter a color exactly as written on the above list."; //Otherwise, show this text
    }
    document.getElementById("Output").innerHTML = Color_Output; //Push the variable to the HTML in this location
}