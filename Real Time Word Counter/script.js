












/* The `btnObject` variable is an array of objects that stores information about different buttons.
Each object in the array represents a button with the following properties: */

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
    createBtnContainer.classList.add("btn-container", "d-flex", "justify-content-center", "flex-wrap", "mb-4");
    createGlassContainer.appendChild(createBtnContainer);




    /* The code snippet you provided is iterating over each object in the `btnObject` array using the
    `forEach` method. For each object in the array, it is creating a new button element dynamically in
    the DOM with the following properties: */
    btnObject.forEach((wordBtn) => {
        let buttonId = "btn" + wordBtn.uniqueId;
        let createBtnEl = document.createElement("button");
        createBtnEl.classList.add("custom-btn", wordBtn.className);
        createBtnEl.textContent = wordBtn.buttonText;
        createBtnEl.id = buttonId;
        createBtnContainer.appendChild(createBtnEl);
    })


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



    /* The `createTextArea.addEventListener("input", () => { ... })` code snippet is adding an event
    listener to the `createTextArea` element, which is a textarea input field in the DOM. This event
    listener listens for the "input" event, which is triggered whenever the value of the textarea input
    field changes (e.g., when a user types, pastes, or deletes text). */
    createTextArea.addEventListener("input", () => {
        createCharCounterValue.textContent = createTextArea.value.replace(/\s/g, "").length;

        let text = createTextArea.value.trim();
        let words = text.split(/\s+/).filter(Boolean);
        createWordCounterValue.textContent = words.length;
    })





    /* This code snippet is adding an event listener to the `window` object for the "DOMContentLoaded"
    event. This event is fired when the initial HTML document has been completely loaded and parsed,
    without waiting for stylesheets, images, and subframes to finish loading. */
    window.addEventListener("DOMContentLoaded", () => {
        let savedData = localStorage.getItem("data");
        if (savedData) {
            let parsedData = JSON.parse(savedData);

            createTextArea.textContent = parsedData.text,
                createWordCounterValue.textContent = parsedData.wordCount,
                createCharCounterValue.textContent = parsedData.charCount
        }
    })



    /* This code snippet is adding an event listener to the button element with an id generated by
    concatenating "btn" with the uniqueId of the first object in the btnObject array. */
    document.getElementById("btn" + btnObject[0].uniqueId).addEventListener("click", () => {
        let localStorageData = {
            text: createTextArea.value,
            wordCount: createWordCounterValue.textContent,
            charCount: createCharCounterValue.textContent
        }

        localStorage.setItem("data", JSON.stringify(localStorageData));
        alert("Your data has been successfully saved to local storage!");
    })


    /* This code snippet is adding an event listener to the button element with an id generated by
    concatenating "btn" with the uniqueId of the second object in the btnObject array. When this button
    is clicked, it performs the following actions: */
    document.getElementById("btn" + btnObject[1].uniqueId).addEventListener("click", () => {
        localStorage.removeItem("data");
        textareaInput.value = "";
        createWordCounterValue.textContent = "0";
        createCharCounterValue.textContent = "0";
        alert("Your data has been successfully deleted from local storage!");
    })

}





createWordCounterDOM();
