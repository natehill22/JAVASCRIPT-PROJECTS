function getReceipt() {
    //Initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; //Assigns the text1 variable html text that says "You Ordered"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //Defines sizeArray and gives it the values of all elements for pizza size
    for (var i = 0; i < sizeArray.length; i++) { //Defines i as 0, and then loops through sizeArray incrementing until it's the same size as the length of size array 
        if (sizeArray[i].checked) { //If the current selection of sizeArray has been checked, pass its value to the selectedSize variable
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"; //Then append that selectedSize value to the text1 variable
        }
    }
    //Setting sizeTotal for whatever pizza size is selected
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Behemoth Pizza") {
        sizeTotal = 80;
    }
    runningTotal = sizeTotal; //Defining runningTotal and giving it the value of sizeTotal
    console.log(selectedSize+" = $"+sizeTotal+".00"); //Shows the selected Pizza Size and its Price Amount in the console
    console.log("size text1: "+text1); //Shows value of text1 (should be header and pizza selection) in the console
    console.log("subtotal: $"+runningTotal+".00"); //Shows the current running total in the console
    
    getTopping(runningTotal, text1); //Calling this function at the end of the getReceipt function and passing runningTotal and text1 as its paramaters
};

function getTopping(runningTotal, text1) { //Defining the function
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //Defines toppingArray and gives it the values of all elements for pizza toppings
    for (var j = 0; j < toppingArray.length; j++) { //Defines j as 0, and then loops through the toppingsArray incrementing until it's the same size as the length of topping array 
        if (toppingArray[j].checked) { //If the current selection of toppingArray has been checked, add its value to the selectedTopping array
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")"); //Shows the selected topping in the console
            text1 = text1+toppingArray[j].value+"<br>"; //Then append that selected topping value to the text1 variable
        }
    }
    var toppingCount = selectedTopping.length; //Defines toppingCount and assigns it the length (number) of selected toppings
    if (toppingCount > 1) { 
        toppingTotal = (toppingCount - 1); //If toppingCount is more than 1, define toppingTotal and give it the value (number) of toppingCount minus 1 
    } else {
        toppingTotal = 0; //Otherwise set toppingTotal to 0
    }
    runningTotal = (runningTotal + toppingTotal); //Redefining runningTotal (which currently = sizeTotal) to equal itself plus the toppingTotal value
    console.log("total selected topping items: "+toppingCount); //Shows the numeric value of toppingCount in the console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //Shows the calculated value of toppingCount minus 1 to get the toppingTotal in the console
    console.log("topping text1: "+text1); //Shows the fully updated text1 field (with size, and toppings) in the console
    console.log("Purchase Total: "+"$"+runningTotal+".00"); //Shows the runningTotal in the console
    document.getElementById("showText").innerHTML = text1; //Displays text as a list in the HTML showText container
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; //Displays the runningTotal in the HTML totalPrice container
};
