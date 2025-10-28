$(document).ready(function(){ //Ensures that your jQuery code executes only after the entire DOM has been fully loaded (.ready)

    //The shineLoop function uses the chaining technique to utilize multiple animate event methods in the same function
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000) //For the .shine class, animate the position of the background image to move along the x-axis to 1600px over 3 seconds
        .animate({backgroundPositionX: '-800px'}, 3000); //Do the same thing for the same class in the opposite direction to -800px over the same amount of time
    };

    //setInterval will repeat the shineLoop function and 0 sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function() { //Upon scroll of the page, run this function
        if ($(document).scrollTop() > 50) { //If the current vertical position of the scroll bar (for the first position) is greater than 50,
            $("h1").addClass("header-scrolled"); //Set all h1 elements to have the "header-scrolled" class
        } else {
            $("h1").removeClass("header-scrolled"); //Otherwise, remove the "header-scrolled" class
        }
    });

    $("#classicCars").on({ //Within the classic cars ID div,

        //Triggers the images to slide down one after the other when the user's mouse enters the div area with the #classicCars ID
        mouseenter: function() { //Run this function with the mouseenter event when the mouse enters the div area with the selected ID
            $("#titleOne").show(1000); //Show titleOne within a second
            $("#titleTwo").show(1500); //Show titleTwo within one and a half seconds
            $("#titleThree").show(2000); //Show titleThree within two seconds
        },

        //Triggers the images to slide up  and hide each title one after the other when the user's mouse leaves the div area with the #classicCars ID
        mouseleave: function() { //Run this function with the mouseleave event when the mouse leaves the div area with the selected ID
            $("#titleOne").hide(2000); //Hide titleOne within a second
            $("#titleTwo").hide(1500); //Hide titleTwo within one and a half seconds
            $("#titleThree").hide(1000); //Hide titleThree within two seconds
        }
    });

    //Creates a toggle effect on each FAQ question by checking each element's sibling so they don't all display when one question is clicked
    $('div.question').on('click', function() { //Upon any div elements with the question class, run the following function when clicked
        $(this).next().slideToggle('slow'); //This is the question class div and next element returns the next sibling element (answer). For that element, toggle a slide with a speed of slow (equals 600ms)
    })
}) 