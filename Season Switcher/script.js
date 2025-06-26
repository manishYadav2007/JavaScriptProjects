




/* The `createButtonObject` is an array of objects that stores information about different seasonal
buttons. Each object in the array represents a button with the following properties: */
let createButtonObject = [
    {
        BtnText: "🌸 Spring",
        className: "spring",
        buttonId: 1
    },
    {
        BtnText: "☀️ Summer",
        className: "summer",
        buttonId: 2
    },
    {
        BtnText: "🍂 Autumn",
        className: "autumn",
        buttonId: 3
    },
    {
        BtnText: "❄️ Winter",
        className: "winter",
        buttonId: 4
    }
]

let seasonsContainerEl = document.getElementById("seasonsContainer");




/**
 * The function `createAndAppendSeasonContent` creates and appends season images and buttons to a
 * container element, allowing users to switch between different seasons.
 */


let createAndAppendSeasonContent = () => {


    // create season small image 
    let createSeasonSmallImage = document.createElement("img");
    createSeasonSmallImage.classList.add("season-image", "d-inline", "d-md-none");
    createSeasonSmallImage.id = "seasonSmallImage";
    seasonsContainerEl.appendChild(createSeasonSmallImage);

    // create season  medium image 
    let createSeasonMediumImage = document.createElement("img");
    createSeasonMediumImage.classList.add("season-image", "d-none", "d-md-inline");
    createSeasonMediumImage.id = "seasonMediumImage";
    seasonsContainerEl.appendChild(createSeasonMediumImage);




    // create button container 

    let createButtonContainer = document.createElement("div");
    createButtonContainer.classList.add("button-group", "mt-4");
    seasonsContainerEl.appendChild(createButtonContainer);




    /* The `seasonImages` object is storing URLs for small and medium images representing different
    seasons. Each season (spring, summer, autumn, winter) has a corresponding object with properties
    `small` and `medium` that hold the URLs for the small and medium images of that season. These URLs
    are used to update the displayed images when a user clicks on a seasonal button to switch between
    different seasons. */

    let seasonImages = {
        springSeason: {
            small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png",
            medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png"
        },
        summerSeason: {
            small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png",
            medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png"
        },
        autumnSeason: {
            small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png",
            medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png"
        },
        winterSeason: {
            small: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png",
            medium: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png"
        }
    }


    /**
     * The function `updateSeasonImage` updates the image sources for small and medium season images based
     * on the provided season name and stores the selected season data in local storage.
     * @param seasonName - The `seasonName` parameter is a string that represents the name of the season
     * for which you want to update the image.
     */

    let updateSeasonImage = (seasonName) => {
        let { small, medium } = seasonImages[seasonName];
        createSeasonSmallImage.src = small;
        createSeasonMediumImage.src = medium;

        localStorage.setItem("selectedSeason", JSON.stringify({ small, medium }));
    }




    /* The code snippet you provided is adding an event listener to the `window` object for the
    "DOMContentLoaded" event. This event is fired when the initial HTML document has been completely
    loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. */

    window.addEventListener("DOMContentLoaded", () => {
        let savedSeason = localStorage.getItem("selectedSeason");
        if (savedSeason) {
            let { small, medium } = JSON.parse(savedSeason);
            createSeasonSmallImage.src = small;
            createSeasonMediumImage.src = medium;
        }
    })




    /* The code snippet you provided is iterating over each object in the `createButtonObject` array using
    the `forEach` method. For each object (representing a seasonal button), the code performs the
    following actions: */

    createButtonObject.forEach((btn) => {

        let btnId = "button" + btn.buttonId;

        let createButtonElement = document.createElement("button");
        createButtonElement.textContent = btn.BtnText;
        createButtonElement.classList.add("season-btn", btn.className);
        createButtonElement.id = btnId;
        createButtonContainer.appendChild(createButtonElement)


        let seasonMap = {
            spring: "springSeason",
            summer: "summerSeason",
            autumn: "autumnSeason",
            winter: "winterSeason"
        }


        createButtonElement.addEventListener("click", () => {
            updateSeasonImage(seasonMap[btn.className]);
        })

    })

}



createAndAppendSeasonContent(); 

