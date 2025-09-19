






const scrollIndicatorElement  = document.getElementById("scrollIndicator");

const maxScroll = window.document.body.scrollHeight - window.innerHeight; 



window.addEventListener("scroll", () => {
    const percentage = ((window.scrollY) / maxScroll) * 100;
    scrollIndicatorElement.style.width = `${percentage}%`;
})











