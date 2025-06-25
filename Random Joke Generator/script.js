// let jokeBtnEl = document.getElementById("jokeBtn"); 
// let spinnerLoading = document.getElementById("spinner");
// let jokeTextEl = document.getElementById("jokeText"); 




// jokeBtnEl.addEventListener("click", () => {
//     let url = "https://apis.ccbp.in/jokes/random";
//     spinnerLoading.classList.remove("d-none"); 
//     jokeTextEl.textContent = ""; 


//     fetch(url)
//     .then((response) => {
//         return response.json(); 
//     })

//     .then((responseData) => {
//         spinnerLoading.classList.add("d-none"); 
//         jokeTextEl.textContent = responseData.value;
//         // console.log(responseData);
         
//     })

// })






let bgContainerEl = document.getElementById("bgContainer");


let appendJokeContent = () => {

    // create Image element and append it to the bgContainerEl
    let createImgEl = document.createElement("img");
    createImgEl.classList.add("w-25", "ml-auto",  "mr-auto");
    createImgEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png";
    bgContainerEl.appendChild(createImgEl);

    
    // create joke text add text dynamically using api
    let createJokeText = document.createElement("p");
    createJokeText.classList.add("joke-text", "mt-4");
    createJokeText.textContent = "Click the button below to get a random Joke!";
    createJokeText.id = "jokeText";
    bgContainerEl.appendChild(createJokeText);



    // create loading spinner contaimner 
    let createLoadingContainer = document.createElement("div");
    createLoadingContainer.classList.add(  "d-none", "mt-5", "mb-5");
    createLoadingContainer.id = "spinner";
    bgContainerEl.appendChild(createLoadingContainer);

    // create loading container wrapper 

    let createLoadingContainerWrapper = document.createElement("div");
    createLoadingContainerWrapper.classList.add("d-flex", "flex-row", "justify-content-center");
    createLoadingContainer.appendChild(createLoadingContainerWrapper);


    // create main loading spinner container 

    let createMainLoadingContainer = document.createElement("div");
    createMainLoadingContainer.classList.add("spinner-border");
    createLoadingContainer.role = "status";
    createLoadingContainerWrapper.appendChild(createMainLoadingContainer);

    
    
    // joke generate button element 

    let createJokeBtn = document.createElement("button");
    createJokeBtn.classList.add("joke-button", "p-1", "ml-auto", "mr-auto", "mt-3");
    createJokeBtn.id = "jokeBtn";
    createJokeBtn.textContent = "Joke";
    bgContainerEl.appendChild(createJokeBtn);


    createJokeBtn.addEventListener("click", () => {
        createLoadingContainer.classList.remove("d-none");
        createJokeText.textContent = "";
        let url = "https://apis.ccbp.in/jokes/random";

        fetch(url).then((response) => {
            return response.json();
        })

        .then((jsonData) => {
            createLoadingContainer.classList.add("d-none");
            createJokeText.textContent = jsonData.value; 
        })
    })

}


appendJokeContent(); 