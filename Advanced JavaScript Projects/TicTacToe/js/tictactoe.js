let activePlayer = 'X'; //Keeps track of whose turn it is
let selectedSquares = []; //Stores an array of moves. We use this to determine win conditions

//Places an x or o in a square
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(item => item.includes(squareNumber))) { //Ensures a square hasn't been selected already. The .some() method is used to check each element of the selectSquare array to see if it contains the square number clicked on
        let select = document.getElementById(squareNumber); //Retrieves the HTML element id that was clicked
        if (activePlayer === 'X') { //If activePlayer = X, the x image is placed on the HTML
            select.style.backgroundImage = 'url("images/x-new.png")';
        } else { //If active player is not 'X' it must be 'O'
            select.style.backgroundImage = 'url("images/o-new.png")';
        }
        selectedSquares.push(squareNumber + activePlayer); //Both variables are concatenated together and added to the array
        checkWinConditions(); //Calls a function to check for any win conditions
        if (activePlayer === 'X') { //Condition to change the active player
            activePlayer = 'O'; //If active player is 'X', change it to 'O'
        } else { //Otherwise, change the activePlayer to 'X'
            activePlayer = 'X';
        }
        audio('./media/place.mp3'); //Plays placement sound
        if (activePlayer === 'O') { //Checks to see if it is the computers turn
            disableClick(); //Disables clicking for the computers turn
            setTimeout(function () {computersTurn()}, 1000); //Waits 1 second before the computer places an image and enables click
        }
        return true; //Returning true is needed for our computersTurn function to work
    }
    //Results in a random square being selected by the computer
    function computersTurn() {
        let success = false; //Boolean needed for our while loop
        let pickASquare; //Stores a random number 0-8
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9)); //A random number between 0 and 8 is selected
            if (placeXOrO(pickASquare)) { //If random number evaluated returns true, the square hasn't been selected yet
                placeXOrO(pickASquare); //Calls the function
                success = true; //Changes our boolean and ends the loop
            }
        }
    }
}

//Parses the selectedSquare array to search for win conditions
function checkWinConditions() { //drawWinLine() function is called to draw a line on the screen if the condition is met
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) } //X 0, 1, 2 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) } //X 3, 4, 5 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) } //X 6, 7, 8 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) } //X 0, 3, 6 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) } //X 1, 4, 7 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) } //X 2, 5, 8 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) } //X 6, 4, 2 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) } //X 0, 4, 8 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) } //O 0, 1, 2 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) } //O 3, 4, 5 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) } //O 6, 7, 8 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) } //O 0, 3, 6 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) } //O 1, 4, 7 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) } //O 2, 5, 8 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) } //O 6, 4, 2 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) } //O 0, 4, 8 condition
    else if (selectedSquares.length >= 9) { //Checks for a tie. If none of the above conditions are met and 9 squares are selected, the code executes
        audio('./media/tie.mp3'); //Plays the tie game sound
        setTimeout(function () {resetGame();}, 500); //Sets a .5 second timer before the resetGame function is called
    }
    //Checks if an array includes 3 strings. Used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) { //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true; }
    }
}

//Makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none'; //Makes our body unclickable
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000); //Makes our body clickable again after 1 second
}

//Takes a string parameter of the path you set earlier for placement sound ('./media/place.mp3')
function audio(audioURL) {
    let audio = new Audio(audioURL); //We create a new audio object and we pass the path as a parameter
    audio.play(); //Plays our audio sound
}

//Utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines'); //Accesses our HTML canvas element
    const c = canvas.getContext('2d'); //Gives us access to methods and properties to use on canvas; setting our canvas context in 2d
    let x1 = coordX1, //Indicates where the start of a line's x-axis is
        y1 = coordY1, //Indicates where the start of a line's y-axis is
        x2 = coordX2, //Indicates where the end of a line's x-axis is
        y2 = coordY2, //Indicates where the end of a line's y-axis is
        x = x1, //Stores temporary x-axis data we update in our animation loop
        y = y1 //Stores temporary y-axis data we update in our animation loop
    function animateLineDrawing() { //Interacts with the canvas
        const animationLoop = requestAnimationFrame(animateLineDrawing); //Creates a loop
        c.clearRect(0, 0, 608, 608); //Clears content from the last loop iteration
        c.beginPath(); //Starts a new path
        c.moveTo(x1, y1); //Moves us to a starting point in our line
        c.lineTo(x, y); //Indicates the end point in our line
        c.lineWidth = 10; //Sets the width of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; //Sets the color of our line
        c.stroke(); //Draws everything we laid out above
        if (x1 <= x2 && y1 <= y2) { //Checks if we've reached the endpoints
            if (x < x2) { x += 10; } //Adds 10 to the previous end x endpoint
            if (y < y2) { y += 10; } //Adds 10 to the previous end y endpoint
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //Stops the line from drawing once the endpoint is reached
        }
        if (x1 <= x2 && y1 >= y2) { //Checks if we've reached the endpoints. Condition is necessary for the 6, 4, 2 win conditions
            if (x < x2) { x += 10; } //Adds 10 to the previous end x endpoint
            if (y > y2) { y -= 10; } //Subtracts 10 from the previous end y endpoint
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); } //Stops the line from drawing once the endpoint is reached
        }
    }
    //Clears out the canvas after our win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //Starts our animation loop
        c.clearRect(0, 0, 608, 608); //Clears our canvas
        cancelAnimationFrame(animationLoop); //Stops our animation loop
    }
    disableClick(); //Disallows clicking while the win sound is playing
    audio('./media/winGame.mp3'); //Plays the win sound
    animateLineDrawing(); //Calls our main animation loop
    setTimeout(
        function () {
            clear();
            resetGame(); 
        }, 1000);
}

//Resets the game in the even of a tie or a win
function resetGame() {
    for (let i = 0; i < 9; i++) { //Iterates throug each HTML square element
        let square = document.getElementById(String(i)); //Gets the HTML element i and returns it as a string value
        square.style.backgroundImage = ''; //Removes our elements' backgroundImage
    }
    selectedSquares = []; //Resets our array so it is empty and we can start over
}

