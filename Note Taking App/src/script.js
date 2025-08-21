let noteInputEl = document.getElementById("noteInput");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
const copyButton = document.getElementById("copyBtn");
const speakerBtnEl = document.getElementById("speakerBtn");



window.addEventListener("DOMContentLoaded", () => {
    let savedValue = localStorage.getItem("userEnteredValue"); 
    if (savedValue) {
        noteInputEl.value = JSON.parse(savedValue); 
    }
})



saveBtnEl.addEventListener("click", function () {
    const userInput = noteInputEl.value; 

    localStorage.setItem("userEnteredValue", JSON.stringify(userInput));
    alert("Note saved successfully!"); 


})


clearBtn.addEventListener("click", () => {
    localStorage.removeItem("userEnteredValue"); 
    noteInputEl.value = ""; 
    alert("Note cleared successfully!"); 
})



copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(noteInputEl.value); 
    alert("Your note has been copied to the clipboard!"); 
})

speakerBtnEl.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(noteInputEl.value); 
    utterance.lang = "en-US"; 
    speechSynthesis.speak(utterance); 
})