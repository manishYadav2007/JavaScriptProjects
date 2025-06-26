










window.addEventListener("DOMContentLoaded", () => {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        let parsedData = JSON.parse(savedData);
        document.getElementById("textareaInput").value = parsedData.text;
        document.getElementById("wordCounter").textContent = parsedData.wordCount;
        document.getElementById("charCounter").textContent = parsedData.charCount;
    }
})




// define button object 
let btnObject = [
    {
        buttonText: "💾 Save",
        className: "save-btn",
        uniqueId: 1
    },
    {
        buttonText: "🧹 Clear",
        className: "clear-btn",
        uniqueId: 2
    },
    {
        buttonText: "📋 Copy",
        className: "copy-btn",
        uniqueId: 3
    }
]



let wordCounterContainerEl = document.getElementById("wordCounterContainer");

let createWordCounterDOM = (wordBtn) => {


    // create Button Unique id 


    // create wrapper container for word counter
    let createWrapperContainer = document.createElement("div");
    createWrapperContainer.classList.add("justify-content-center");
    wordCounterContainerEl.appendChild(createWrapperContainer);



    // create glass container 
    let createGlassContainer = document.createElement("div");
    createGlassContainer.classList.add("glass-container", "p-4");
    createWrapperContainer.appendChild(createGlassContainer);


    // create title 

    let createTitle = document.createElement("h1");
    createTitle.classList.add("title", "mb-4");
    createTitle.textContent = "📝 Real-Time Word Counter";
    createGlassContainer.appendChild(createTitle);

    // create textarea
    let createTextArea = document.createElement("textarea");
    createTextArea.classList.add("textarea-input", "mb-4");
    createTextArea.placeholder = "Start typing your text...";
    createTextArea.rows = "10";
    createTextArea.id = "textareaInput";
    createGlassContainer.appendChild(createTextArea);

    // create button container
    let createBtnContainer = document.createElement("div");
    createBtnContainer.classList.add("btn-container", "d-flex", "justify-content-center", "flex-wrap", "gap-3", "mb-4");
    createGlassContainer.appendChild(createBtnContainer);


    // create buttons

    for (let wordBtn of btnObject) {
        let buttonId = "btn" + wordBtn.uniqueId;
        let createBtnEl = document.createElement("button");
        createBtnEl.classList.add("custom-btn", wordBtn.className);
        createBtnEl.textContent = wordBtn.buttonText;
        createBtnEl.id = buttonId;
        createBtnContainer.appendChild(createBtnEl);
    }

    // create real time woed counter container

    let createCounterContainer = document.createElement("div");
    createCounterContainer.classList.add("real-time-word-counter-container");
    createGlassContainer.appendChild(createCounterContainer);


    // word counter container 

    let createWordCounterContainer = document.createElement("div");
    createWordCounterContainer.classList.add("word-count-container", "box", "p-4");
    createCounterContainer.appendChild(createWordCounterContainer);


    // create span elememt counter value 

    let createWordCounterValue = document.createElement("span");
    createWordCounterValue.classList.add("counter");
    createWordCounterValue.id = "wordCounter";
    createWordCounterValue.textContent = "0";
    createWordCounterContainer.appendChild(createWordCounterValue);

    // create word paragraph element
    let createWordParagraph = document.createElement("p");
    createWordParagraph.classList.add("word-count");
    createWordParagraph.textContent = "Word";
    createWordCounterContainer.appendChild(createWordParagraph);


    // create char counter container
    let createCharCounterContainer = document.createElement("div");
    createCharCounterContainer.classList.add("char-count-container", "p-4", "box");
    createCounterContainer.appendChild(createCharCounterContainer);


    // create span element char counter value

    let createCharCounterValue = document.createElement("span");
    createCharCounterValue.classList.add("counter");
    createCharCounterValue.id = "charCounter";
    createCharCounterValue.textContent = "0";
    createCharCounterContainer.appendChild(createCharCounterValue);



    // create char paragraph element
    let createCharParagraph = document.createElement("p");
    createCharParagraph.classList.add("word-count");
    createCharParagraph.textContent = "Character";
    createCharCounterContainer.appendChild(createCharParagraph);


    // add event listener to textarea, create a real time word counter
    createTextArea.addEventListener("input", () => {
        createCharCounterValue.textContent = createTextArea.value.replace(/\s/g, "").length;

        let text = createTextArea.value.trim();
        let words = text.split(/\s+/).filter(Boolean);
        createWordCounterValue.textContent = words.length;
    })


    document.getElementById("btn" + btnObject[0].uniqueId).addEventListener("click", () => {
        let localStorageData = {
            text: createTextArea.value,
            wordCount: createWordCounterValue.textContent,
            charCount: createCharCounterValue.textContent
        }

        localStorage.setItem("data", JSON.stringify(localStorageData));
        alert("Your data has been successfully saved to local storage!");
    })


    document.getElementById("btn" + btnObject[1].uniqueId).addEventListener("click", () => {
        localStorage.removeItem("data");
        textareaInput.value = "";
        createWordCounterValue.textContent = "0";
        createCharCounterValue.textContent = "0";
        alert("Your data has been successfully deleted from local storage!");
    })

}





createWordCounterDOM();
