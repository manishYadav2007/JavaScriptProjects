let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factTextEl = document.getElementById("factText");




let getFact = () => {
    spinnerEl.classList.remove("d-none");
    factTextEl.textContent = "";
    let userInputId = userInputEl.value;
    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputId;

    fetch(url).then((response) => {
        return response.json();
    })

        .then((data) => {
            console.log(data);
            spinnerEl.classList.add("d-none");
            factTextEl.textContent = data.fact;
        })
}




userInputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getFact();      
    }
})




