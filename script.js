const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    inputEl.value = "" //input fält blir tom efter knappen klickas
    const li = document.createElement("li");


    li.textContent = "exempel";

    const button = document.createElement("button");
    button.textContent = "Ta bort"
    button.addEventListener("click", function (e) {
        console.log("Någon klickade...", e.target.parentElement);
        e.target.parentElement.remove();
    });

    const button2 = document.createElement("button");
    button2.textContent = "Markera"
    button2.addEventListener("click", function (e) {
        console.log("Någon klickade...", e.target.parentElement);
        e.target.parentElement.highlight();
    });


    ulEl.appendChild(li);
    li.appendChild(button);
    li.appendChild(button2);


})








