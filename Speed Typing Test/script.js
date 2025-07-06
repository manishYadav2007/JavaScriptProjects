let secondsTimerEl = document.getElementById("secondsTimer");
let randomQuoteEl = document.getElementById("randomQuote");
let quoteInputEl = document.getElementById("quoteInput");
let spinnerEl = document.getElementById("spinner");


let submitBtnEl = document.getElementById("submitBtn");
let resetButtonEl = document.getElementById("resetButton");
let typingResultEl = document.getElementById("typingResult");

let textContentSectionEl = document.getElementById("textContentSection");


let timerInitilization = 0;
let intervalId = null;



let getRandomQuote = () => {

    spinnerEl.classList.remove("d-none");
    randomQuoteEl.textContent = "";
    typingResultEl.textContent = "";
    quoteInputEl.value = "";


    clearInterval(intervalId);
    timerInitilization = 0
    secondsTimerEl.textContent = "0 Seconds";

    let url = "https://apis.ccbp.in/random-quote";
    fetch(url).then(res => res.json())
        .then((resData) => {
            spinnerEl.classList.add("d-none");
            randomQuoteEl.textContent = resData.content;

            intervalId = setInterval(() => {
                timerInitilization += 1
                secondsTimerEl.textContent = `${timerInitilization} Seconds`;
            }, 1000);
        })

}




resetButtonEl.addEventListener("click", getRandomQuote);










let setTimer = () => {
    let typedText = quoteInputEl.value.trim();
    let originalQuote = randomQuoteEl.textContent.trim();

    if (typedText === "") {
        typingResultEl.textContent = "Please type your quote in textarea!";
        typingResultEl.style.color = "red";
    }
    else if (typedText === originalQuote) {
        typingResultEl.textContent = "You typed in " + timerInitilization + " seconds!";
        clearInterval(intervalId);
    }
    else {
        typingResultEl.textContent = "You typed the sentence incorrectly.";
        typingResultEl.style.color = "red";
    }
};




submitBtnEl.addEventListener("click", setTimer)

window.addEventListener("DOMContentLoaded", getRandomQuote); 