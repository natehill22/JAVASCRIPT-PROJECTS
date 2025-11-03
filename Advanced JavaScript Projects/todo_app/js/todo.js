//This function gets the task from input (user enters them manually)
function get_todos() {
    var todos = new Array; //Creates an array that will holds a list of tasks
    var todos_str = localStorage.getItem('todo'); //Pulls the string value task that was saved in the web browser memory with the key named 'todo'
    if (todos_str !== null) { //If the input is not null, 
        todos = JSON.parse(todos_str); //JSON.parse will communicate with the web browser to make the task a JavaScript object (instead of a string)
    }
    return todos; //Returns the tasks value in JavaScript object format
}

//This function adds the inputed task to the get_todos function array
function add() {
    var task = document.getElementById('task').value; //Takes the entered input "task" and assigns it to the "task" variable

    var todos = get_todos(); //Assigns the 'todos' variable to the returned array for the 'get_todos' function
    todos.push(task); //Runs the function and adds a new 'task' to the end of the array (using the value arrived at with the get_todos function)
    localStorage.setItem('todo', JSON.stringify(todos)); //Converts the task input (for new inputs) to a JSON string (with the key "todo") and saves it to localStorage
    document.getElementById("task").value = ""; //Sets the value in the task input to clear
    show(); 

    return false;
}

//This function keeps the tasks permanently displayed on the screen
function show() {
    var todos = get_todos(); //Assigns the 'todos' variable to the returned array for the 'get_todos' function
    var html = '<ul>'; //Sets the 'html' variable to show as the html formatted text for the start of an unordered list
    for (var i = 0; i < todos.length; i++) { //For every item in the list, add the task as a list item (in the order it's input)
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>'; //Also adds an 'x' button, a class called 'remove' to each task, and an id that is the index number of each
    };
    html += '</ul>'; //Closes the unordered list
    document.getElementById('todos').innerHTML = html; //Displays the task as a list in the HTML
    
    //Tells the browser how to display the todo array after an item has been removed
    var buttons = document.getElementsByClassName('remove'); //Gets an array of all buttons with the 'remove' class and sets it to the 'buttons' variable
    for (var i = 0; i < buttons.length; i++) { //For the length of the new array, 
    buttons[i].addEventListener('click', remove); //Add eventlisteners to the buttons array and run the remove function upon click
    }
}

document.getElementById('add').addEventListener('click', add); //Displays the entered input task when the 'Add Item' button is clicked
show(); //Will keep the inputs displayed permanenetly on the screen

//Removes a todo item from the array when clicked on the 'x' button
function remove() {
    var id = this.getAttribute('id'); //Retrieves the value of the ID attribute from the HTML element clicked on
    var todos = get_todos(); //Assigns the 'todos' variable to the returned array for the 'get_todos' function
    todos.splice(id, 1); //Removes elements from the array. ID is the startIndex parameter (indicates where the modification should begin) and 1 is the deleteCount parameter (specifies number of elements to remove starting at the startIndex)
    localStorage.setItem('todo', JSON.stringify(todos)); //Resets the locally saved array and converts the task input to a JSON string (with the key "todo")
    show(); //Runs the show function to update what displays on the screen

    return false;
}