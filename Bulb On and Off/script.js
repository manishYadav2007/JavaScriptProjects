

let darkBackgroundEl = document.getElementById("darkBackground");





let switchOffCaseImages = {
    bulbImage: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png",
    catImage: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
}

let switchOnCaseImages = {
    bulbImage: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png",
    catImage: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
}






let DOMCreate = () => {


    // create image container
    let imageContainerEl = document.createElement("div");
    darkBackgroundEl.appendChild(imageContainerEl);

    // create image element 

    let createBulbImageEl = document.createElement("img");
    createBulbImageEl.classList.add("bulb-image");
    imageContainerEl.appendChild(createBulbImageEl);

    // cat image container element

    let createCatImageContainerEl = document.createElement("div");
    darkBackgroundEl.appendChild(createCatImageContainerEl);

    // cat image element
    let createCatImageEl = document.createElement("img");
    createCatImageEl.classList.add("cat-image");
    createCatImageContainerEl.appendChild(createCatImageEl);


    // create main body container 

    let createMainBodyContainerEl = document.createElement("div");
    createMainBodyContainerEl.classList.add("d-flex", "flex-row", "justify-content-center", "pt-5");
    darkBackgroundEl.appendChild(createMainBodyContainerEl);


    // create switch button container

    let createSwitchButtonContainerEl = document.createElement("div");
    createSwitchButtonContainerEl.classList.add("switch-board");
    createMainBodyContainerEl.appendChild(createSwitchButtonContainerEl);


    // create switch status title 

    let createSwitchStatusTitleEl = document.createElement("h3");
    createSwitchStatusTitleEl.classList.add("switch-status");
    createSwitchStatusTitleEl.textContent = "Switch On";
    createSwitchButtonContainerEl.appendChild(createSwitchStatusTitleEl);

    // switch off button 
    let createSwitchOffButtonEl = document.createElement("button");
    createSwitchOffButtonEl.classList.add("off-switch");
    createSwitchOffButtonEl.textContent = "OFF";
    createSwitchButtonContainerEl.appendChild(createSwitchOffButtonEl);

    // switch on button
    let createSwitchOnButtonEl = document.createElement("button");
    createSwitchOnButtonEl.classList.add("on-switch");
    createSwitchOnButtonEl.textContent = "ON";
    createSwitchButtonContainerEl.appendChild(createSwitchOnButtonEl);







    let renderSwitchOffCase = () => {
        createBulbImageEl.src = switchOffCaseImages.bulbImage;
        createCatImageEl.src = switchOffCaseImages.catImage;
        createSwitchOffButtonEl.style.backgroundColor = "#cbd2d9";
        createSwitchOnButtonEl.style.backgroundColor = "green";
        createSwitchStatusTitleEl.textContent = "Switched Off";
    }




    let renderSwitchOnCase = () => {
        createBulbImageEl.src = switchOnCaseImages.bulbImage;
        createCatImageEl.src = switchOnCaseImages.catImage;
        createSwitchStatusTitleEl.textContent = "Switched On";
        createSwitchOffButtonEl.style.backgroundColor = "#e12d39";
        createSwitchOnButtonEl.style.backgroundColor = "#cbd2d9"
    }


    createSwitchOffButtonEl.addEventListener("click", renderSwitchOffCase)


    createSwitchOnButtonEl.addEventListener("click",  renderSwitchOnCase)


    renderSwitchOffCase();
    renderSwitchOnCase();
}



DOMCreate();

