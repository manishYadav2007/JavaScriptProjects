const accordionEl = document.querySelectorAll(".accordianContainer");



accordionEl.forEach((element) => {
    const icon = element.querySelector(".icon");
    const content = element.querySelector(".answerSection");

    element.addEventListener("click", () => {
        if (icon.classList.contains("active")) {
            icon.classList.remove("active");
            content.style.maxHeight = null;
        }
        else {
            icon.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px"; 
            console.log(content.scrollHeight);
        }
    })
    

})