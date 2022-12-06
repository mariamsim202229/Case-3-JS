let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
//Kopplar HTML element till Javascript 

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value) //Lägger till text som skrivs i input fält i arrayen myLeads
    inputEl.value = "" //input fält blir tom efter knappen klickas
    renderLeads() //Kör renderLeads funktionen
    const li = document.createElement("li");


    li.textContent = "";

    const button = document.createElement("button");
    button.textContent = "Ta bort"
    button.addEventListener("click", function (e) {
        console.log("Någon klickade...", e.target.parentElement);
        e.target.parentElement.remove();
    });


    ulEl.appendChild(li);
    li.appendChild(button);


})


function renderLeads() {
    let listItems = "" //skapar en ny variabel som innehåller en tom sträng
    //loopen körs lika många gånger som arrayen myLeads är lång
    // Variabeln i har olika värden beroende på vilket varv loopen är på.
    for (let i = 0; i < myLeads.length; i++) {
        //  <li> element läggs till listItmes
        listItems += `
            <li>
                    ${myLeads[i]}
            
            </li>
        `
        // Ett <li> element skapas för varje sträng i arrayen och läggs till som text


        ulEl.innerHTML = listItems // Skickar in alla <li> element i HTML elementet i HTML filen
    }
}










