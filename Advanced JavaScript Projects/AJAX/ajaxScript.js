function getMsg() {
    //STEP 1: Setup the XML HTTP Reuest object
    let ajaxRequest = new XMLHttpRequest(); //A JavaScript API that enables web applications to make HTTP requests to web servers and receive responses without requiring a full page reload

    //Get input value of name to display to user after request has been made
    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once request as been received
    ajaxRequest.onload = function() { //Once the server data has been loaded, update the HTML element "tkuMsg" (in response) with a string message containing the inputVal value
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //STEP 2: Prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'response.html', true); //Informs the server about the type of reqest being made and is used to establish the connection (type of request, url of requested file, determines if the request is handled asynchronously or not)

    //STEP 3: Defines the AJAX response callback method that establishes whether the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function() { //Defines a function that will be executed whenever the readyState property of the XMLHttpRequest object changes
        if(this.readyState === 4 && this.status === 200) { //If readystate has been completed and the response is ready and the HTTP status code equals 200 (successful) 
            document.getElementById('content').innerHTML = ajaxRequest.responseText; //Update the HTML element 'content' (in ajax_basics) with the value of ajaxRequest's responseText. responseText provides the server's response as a plain text string.
            
        }
    }

    //STEP 4: Send the request
    ajaxRequest.send(); //Allows web applications to send and retrieve data from a server asynchronously without reloading the entire page
}

function showAJAXText() {
    //STEP 1: Setup the XML HTTP Reuest object
    let RequestTwo = new XMLHttpRequest(); //A JavaScript API that enables web applications to make HTTP requests to web servers and receive responses without requiring a full page reload

    //STEP 2: Prepare the type of request and what to request from the server
    RequestTwo.open('GET', 'content.html', true); //Informs the server about the type of reqest being made and is used to establish the connection (type of request, url of requested file, determines if the request is handled asynchronously or not)

    //STEP 3: Defines the AJAX response callback method that establishes whether the response was successful and where the data should be displayed
    RequestTwo.onreadystatechange = function() { //Defines a function that will be executed whenever the readyState property of the XMLHttpRequest object changes
        if(this.readyState === 4 && this.status === 200) { //If readystate has been completed and the response is ready and the HTTP status code equals 200 (successful) 
            document.getElementById('contentLoad').innerHTML = RequestTwo.responseText; //Update the HTML element 'content' (in ajax_basics) with the value of RequestTwo's responseText. responseText provides the server's response as a plain text string.

        }
    }

    //STEP 4: Send the request
    RequestTwo.send(); //Allows web applications to send and retrieve data from a server asynchronously without reloading the entire page
}