let sliderImages = document.querySelectorAll(".slider"); //  Select all elements with the class name "slider"

let previousBtnEl = document.getElementById("previousBtn"); //  Select the element with the id "previousBtn"

let nextBtnEl = document.getElementById("nextBtn"); //  Select the element with the id "nextBtn"

let sliderWrapper = document.querySelector(".slider-wrapper"); //  Select the element with the class name "slider-wrapper"

let counterValue = 0;  //  Set the initial value of the counter to 0

sliderImages.forEach((eachSlider, index) => { //  Loop through each slider image and set its left position to the index multiplied by 100%
        eachSlider.style.left = `${index * 100}%`; 
        console.log(eachSlider.style.left = `${index * 100}%` );
})





let slideImages = () => { //  Function to slide the images
    sliderWrapper.style.transform = `translateX(-${counterValue * 100}%)`; //  Set the transform property of the slider wrapper to translateX by the counter value multiplied by 100%
    console.log(sliderWrapper.style.transform = `translateX(-${counterValue * 100}%)`);
}


previousBtnEl.addEventListener("click", () => { //  Add an event listener to the previous button
    counterValue === 0 ? counterValue = sliderImages.length - 1 : counterValue--;      // This function decreases the counter value by 1 if it is not equal to 0, otherwise it sets the counter value to the length of the sliderImages array minus 1. It then calls the slideImages function.prevBtnEl.addEventListener("click", () => {
    slideImages()
})

nextBtnEl.addEventListener("click", () => { // This function increases the counter value by 1 if it is not equal to the length of the sliderImages array minus 1, otherwise it sets the counter value to 0. It then calls the slideImages function.
    counterValue === sliderImages.length - 1 ? counterValue = 0 : counterValue++;
    slideImages(); 
})










