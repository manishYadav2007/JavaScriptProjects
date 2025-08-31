document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const previousButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const pageNumbers = document.getElementById("page-numbers");
    const pageLinks = document.querySelectorAll(".page-link");


    const cardsPerPage = 4;



    let cards = Array.from(container.getElementsByClassName("card"));
    console.log(cards);



    let totalPages = Math.ceil(cards.length / cardsPerPage);
    console.log(totalPages);



    let currentPage = 1;


    let displayPage = (currentPage) => {
        let startIndex = (currentPage - 1) * cardsPerPage;
        let endIndex = startIndex + cardsPerPage;
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        })
    }


    let updatePageNumbers = () => {
        pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`; 
        previousButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        pageLinks.forEach((link) => {
            const page = parseInt(link.getAttribute("data-page"));
            link.classList.toggle("active", page === currentPage);
        })
    }


    previousButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            updatePageNumbers();
        }
    })

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
            updatePageNumbers();
        }
    })



    pageLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = parseInt(link.getAttribute("data-page")); 

            if (page !== currentPage) {
                currentPage = page;
                displayPage(currentPage);
                updatePageNumbers(); 
            }
        })
    })




    displayPage(currentPage);
    updatePageNumbers();





})