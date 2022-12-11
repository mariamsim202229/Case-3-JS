// Connecting HTML elements to Javascript 
const mat = document.getElementById("mat");
const matInput = document.getElementById("mat-input");
const ulEl = document.getElementById("ul-el");


// A new li element is created each time the input button is clicked by the user
matInput.addEventListener("click", function () {
    const li = document.createElement("li");

    // the value in the input box is logged out. 
    console.log(document.getElementById("mat").value);

//  Li gets its text content of same value as text typed in input form
    li.textContent = document.getElementById("mat").value;

    // Make the page to not reload when the user presses submit
    function myFunction(event) { event.preventDefault() }

    // Connects the submit button of the form with the function myFunction
    document.getElementById("myForm").addEventListener("submit", myFunction);

    // Create three buttons for deleting, highlighting and checking off food items & // Adding a CSS class to buttons for styling
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("myButton");
    button.addEventListener("click", function (e) {
        console.log("Någon klickade...", e.target.parentElement);
        e.target.parentElement.remove();
    });

    const button2 = document.createElement("button");
    button2.textContent = "Select"
    button2.classList.add("myButton");
    button2.addEventListener("click", function (e) {
        console.log("Någon klickade...", e.target.parentElement);
        e.target.parentElement.classList.add("marked");

    });

    const button3 = document.createElement("button");
    button3.textContent = "Check-off"
    button3.classList.add("myButton");
    button3.addEventListener("click", function (e) {
        console.log("Someone checked...", e.target.parentElement);
        e.target.parentElement.classList.add("checked");

    });

    // Connecting each child element to its parent element 
    ulEl.appendChild(li);
    li.appendChild(button);
    li.appendChild(button2);
    li.appendChild(button3);

})