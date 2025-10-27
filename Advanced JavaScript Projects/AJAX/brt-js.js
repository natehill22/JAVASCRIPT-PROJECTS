function loadParag() {
    //STEP 1: Setup the XML HTTP Reuest object
    let ajaxRequest = new XMLHttpRequest(); //A JavaScript API that enables web applications to make HTTP requests to web servers and receive responses without requiring a full page reload

    //STEP 2: Prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'brt-sub.html', true); //Informs the server about the type of reqest being made and is used to establish the connection (type of request, url of requested file, determines if the request is handled asynchronously or not)

    //STEP 3: Defines the AJAX response callback method that establishes whether the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function() { //Defines a function that will be executed whenever the readyState property of the XMLHttpRequest object changes
        if(this.readyState === 4 && this.status === 200) { //If readystate has been completed and the response is ready and the HTTP statue code equals 200 (successful) 
            document.getElementById("opinion").innerHTML = ajaxRequest.responseText; //Update the HTML element 'opinion' (in brt-base) with the value of ajaxRequest's responseText. responseText provides the server's response as a plain text string.
        }
    }

    //STEP 4: Send the request
    ajaxRequest.send(); //Allows web applications to send and retrieve data from a server asynchronously without reloading the entire page
}
