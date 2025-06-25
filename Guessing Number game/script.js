let bgContainerEl = document.getElementById("bgContainer")





let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);




let appendNumberGuessContent = () => {

    // create row container 
    let createRowContainer = document.createElement("div");
    createRowContainer.classList.add("row", "bg-white");
    bgContainerEl.appendChild(createRowContainer);


    // create column container

    let createColumnContainer = document.createElement("div");
    createColumnContainer.classList.add("col-12", "col-md-6", "pt-5", "pb-5", "m-auto", "bg-white");
    createRowContainer.appendChild(createColumnContainer);

    // create image element 

    let createImageEl = document.createElement("img");
    createImageEl.classList.add("img-fluid", "guess-game-img");
    createImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png";
    createColumnContainer.appendChild(createImageEl);


    // create game description element

    let createGameDescriptionEl = document.createElement("p");
    createGameDescriptionEl.classList.add("game-description", "text-center");
    createGameDescriptionEl.textContent = "Guess the number between 1 and 100";
    createColumnContainer.appendChild(createGameDescriptionEl);


    // create row container for input and button

    let createRowContainerElement = document.createElement("div");
    createRowContainerElement.classList.add("row");
    bgContainerEl.appendChild(createRowContainerElement);

    // create column container for input and buttons

    let createColumnContainerElement = document.createElement("div");
    createColumnContainerElement.classList.add("col-12", "guess-bg-container", "text-center");
    createRowContainerElement.appendChild(createColumnContainerElement);

    // create heading element 

    let createHeadingEl = document.createElement("h1");
    createHeadingEl.classList.add("guess-heading");
    createHeadingEl.textContent = "Guess the Number";
    createColumnContainerElement.appendChild(createHeadingEl);

    // create guess number symbol image 

    let createGuessNumberImage = document.createElement("img");
    createGuessNumberImage.classList.add("img-fluid", "guess-number-image");
    createGuessNumberImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png";
    createHeadingEl.appendChild(createGuessNumberImage);

    // create input element
    let createInputEl = document.createElement("input");
    createInputEl.classList.add("user-input");
    createInputEl.type = "text";
    createInputEl.id = "userInput";
    createColumnContainerElement.appendChild(createInputEl);


    // create button container

    let createButtonContainer = document.createElement("div");
    createButtonContainer.classList.add("button-container");
    createColumnContainerElement.appendChild(createButtonContainer);

    // create button element

    let createButtonEl = document.createElement("button");
    createButtonEl.classList.add("btn", "btn-info", "check-guess");
    createButtonEl.textContent = "Check Guess";
    createButtonContainer.appendChild(createButtonEl);


    // create game result message 

    let createGameResultMessage = document.createElement("p");
    createGameResultMessage.classList.add("game-result");
    createGameResultMessage.id = "gameResult";
    createGameResultMessage.textContent = "";
    createColumnContainerElement.appendChild(createGameResultMessage);

    // add evenet listner to button element 
    // define the logic for the game 

    createButtonEl.addEventListener("click",  () => {
        let userInputValue = document.getElementById("userInput").value;


        let guessedNumber = parseInt(userInputValue);
        
        if (guessedNumber > randomNumber) {
            createGameResultMessage.textContent = "Your guess is too high";
            createGameResultMessage.style.backgroundColor = "#1e217c";
        } 
        else if (userInputValue === "") {
            alert("Please enter a number in the input field!")
        }

        else if (guessedNumber < randomNumber) {
            createGameResultMessage.textContent = "Your guess is too low";
            createGameResultMessage.style.backgroundColor = "#1e217c";
        }
        else if (guessedNumber === randomNumber) {
            createGameResultMessage.textContent = "Congratulations! You guessed the right number";
            createGameResultMessage.style.backgroundColor = "green";
        }
        else {
            createGameResultMessage.textContent = "Please enter a valid number"
            createGameResultMessage.style.borderBlockColor = "#1e217c";
        }

    });

}


appendNumberGuessContent();