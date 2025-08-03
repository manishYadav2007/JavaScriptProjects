let sliderImages = document.querySelectorAll(".slider");

let previousBtnEl = document.getElementById("previousBtn");

let nextBtnEl = document.getElementById("nextBtn");

let sliderWrapper = document.querySelector(".slider-wrapper");

let counterValue = 0; 

sliderImages.forEach((eachSlider, index) => {
        eachSlider.style.left = `${index * 100}%`; 
        console.log(eachSlider.style.left = `${index * 100}%` );
})





let slideImages = () => {
    sliderWrapper.style.transform = `translateX(-${counterValue * 100}%)`;
    console.log(sliderWrapper.style.transform = `translateX(-${counterValue * 100}%)`);
}


previousBtnEl.addEventListener("click", () => {
    counterValue === 0 ? counterValue = sliderImages.length - 1 : counterValue--;     
    slideImages()
})

nextBtnEl.addEventListener("click", () => {
    counterValue === sliderImages.length - 1 ? counterValue = 0 : counterValue++;
    slideImages(); 
})










