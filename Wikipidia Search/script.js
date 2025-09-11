



document.addEventListener("DOMContentLoaded", () => {
    const searchInputElement = document.getElementById("searchInput");
    const loadingSpinner = document.getElementById("spinner");
    const searchResultsContainer = document.getElementById("searchResults");
    const errorMessageElement = document.getElementById("errorMessage");



    let createAndAppendSearchResult = (eachResult) => {
        const { title, link, description } = eachResult;



        let createSearchResultContainer = document.createElement("div");
        createSearchResultContainer.classList.add("result-item");
        searchResultsContainer.appendChild(createSearchResultContainer);


        let createLinkTitle = document.createElement("a");
        createLinkTitle.classList.add("result-title");
        createLinkTitle.target = "_blank";
        createLinkTitle.href = link;
        createLinkTitle.innerHTML = title;
        createSearchResultContainer.appendChild(createLinkTitle);


        let createLineBreak = document.createElement("br");
        createSearchResultContainer.appendChild(createLineBreak);



        let createURLTitle = document.createElement("a");
        createURLTitle.classList.add("result-url");
        createURLTitle.target = "_blank";
        createURLTitle.href = link;
        createURLTitle.innerHTML = link;
        createSearchResultContainer.appendChild(createURLTitle);


        let createDescription = document.createElement("p");
        createDescription.classList.add("line-description");
        createDescription.innerHTML = description;
        createSearchResultContainer.appendChild(createDescription);

    }




    let displaySearchResults = (searchResults) => {
        loadingSpinner.classList.toggle("d-none");
        for (let eachResult of searchResults) {
            createAndAppendSearchResult(eachResult);
        }


    }



    let searchWikipidia = async () => {
        try {
            loadingSpinner.classList.toggle("d-none");
            searchResultsContainer.innerHTML = "";
            errorMessageElement.classList.add("d-none");

            let userEnteredValue = searchInputElement.value;
            let URL = "https://apis.ccbp.in/wiki-search?search=" + userEnteredValue;

            const requestData = await fetch(URL);

            if (!requestData.ok) {
                throw new Error(`HTTP error! Status: ${requestData.status}`);
            }

            const data = await requestData.json();
            const { search_results } = data;
            displaySearchResults(search_results);
        }
        catch (error) {
            loadingSpinner.classList.toggle("d-none");
            errorMessageElement.innerHTML = `Something Went Wrong. Please try again.`;
            console.error("Fetch Error: ", error.message);
        }
    }



    searchInputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchWikipidia();
        }
    });
})