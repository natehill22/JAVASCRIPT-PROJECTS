function countdown() {
    var seconds = document.getElementById("seconds").value; //The users' input value in seconds

    function tick() {
        seconds = seconds - 1; //Decrements the users' input value by 1
        document.getElementById("timer").innerHTML = seconds; //Sets the paragraph with the timer id to equal the updated value of seconds
        var time = setTimeout(tick, 1000); //Sets the time variable to run the tick function every second
        if (seconds == -1) { 
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = ""; //When seconds reach -1, trigger an alert, stop the time variable from running, and set the timer id paragraph to show a blank value
        }
    }
    tick(); //Calls the tick function repeatedly until the time varible is cleared (when seconds = -1) 
}

let slideIndex = 1; //slideIndex is used as a marker for which picture is currently being shown
showSlides(slideIndex); //Sets the slideIndex to 1 (to show the first picture) and then gives that value to the showSlides function

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); //Takes the plusSlides function with the value given in the HTML (-1 for Prev, 1 for Next) and adds it to the current value of slideIndex (where we are in the slideshow) to give the slideIndex page to be shown
}

//Dot thumbnails image controls
function currentSlide(n) {
    showSlides(slideIndex = n); //Takes the currentSlide function with the value given in the HTML (1-5 based on selection) and sets slideIndex--our current page--to match the value of the one from HTML input
}

function showSlides(n) {
    let i; //Declaring i and letting it have an undefined value
    let slides = document.getElementsByClassName("mySlides"); //Pulls all 5 mySlides class elements into an array and names it "slides"
    let dots = document.getElementsByClassName("dot"); //Pulls all 5 dot class elements into an array and names it "dots"
    if (n > slides.length) {slideIndex = 1} //Sets the condition that if our selected page ever goes over the number of elements in our array, it resets back to page 1
    if (n < 1) {slideIndex = slides.length} //Sets the condition that if our selected page ever becomes less-than the first page--element in our array--, it loads the highest number in the page--our last page. These two conditionals together make a seamless never-ending slideshow
    for (i = 0; i < slides.length; i++) { //Declares i as 0, gives a condition, and then increments it if passing. This repeats until i=the max length of the array
        slides[i].style.display = "none"; //Hides all picture slides by setting their css display property to "none"
    }
    for (i = 0; i < dots.length; i++) { //Declares i as 0, gives a condition, and then increments it if passing. This repeats until i=the max length of the array
        dots[i].className = dots[i].className.replace(" active", ""); //Removes the "active" class from all dots elements
    }
    slides[slideIndex-1].style.display = "block"; //Uses the adjusted value of slideIndex (-1 to account for the zero-based array indices) to find the correct slide in the slides array and sets its css display property to block, making it visible
    dots[slideIndex-1].className += " active"; //Uses the adjusted value of slideIndex (-1 to account for the zero-based array indices) to find the correct location in the dots array and sets its css status to active, making it uniquely styled
}
//why reuse showSlides? showSlides is not being re-used so much as it's being called during multiple different behaviors: the whole function is run upon initial page load (so you have the first image being shown), on either page next or prev buttons being pressed, and whenever the dots are selected (so you have the appropriate picture being both dispalyed and active)
//Does it increment afterwards? Yes. The loop runs through the file with the initial setting of i first. Once it's completed, it increments and restarts. i starts at 0 because it's working with JavaScript array indices that are zero-based. The < operator is used because with the number starting at 0, there are 5 counts between 0 and 4 (which are being used to reference the correct indices) and the length of the array (1-5). 
//Why slideIndex-1? slideIndex is getting set upon page load, page next/prev, and dot selection. Because we initialized the variable with a value of 1 (to appropriately show the first picture upon page load AND to match the .length of the array), we need to subtract a 1 to account for javascript default of zero-based array indices..in order to make it "display: block" and "active" the correct picture