document.addEventListener("DOMContentLoaded", () => {
    const blurFilter = document.getElementById("blur");
    const contrastFilter = document.getElementById("contrast");
    const hueRotateFilter = document.getElementById("hueRotate");
    const sepiaFilter = document.getElementById("sepia");


    const noFlip = document.getElementById("no-flip");
    const flipXdirection = document.getElementById("flip-x-direction");
    const flipYdirection = document.getElementById("flip-y-direction");

    const uploadImageButtonEl = document.getElementById("uploadImageButton");
    const choseImageEl = document.getElementById("choseImage");




    let resetStats = () => {
        blurFilter.value = "0";
        contrastFilter.value = "100";
        hueRotateFilter.value = "0";
        sepiaFilter.value = "0";
        noFlip.checked = true;
        applyFilter();
        rotateImage();

    }



    uploadImageButtonEl.onchange = () => {
        resetStats(); 


        document.querySelector(".image-container").style.display = "block";
        let fileReader = new FileReader();
        fileReader.readAsDataURL(uploadImageButtonEl.files[0]); 
        
        fileReader.onload = () => {
            choseImageEl.setAttribute("src", fileReader.result); 
        }        

    }

    let applyFilter = () => {
        choseImageEl.style.filter = `blur(${blurFilter.value}px) contrast(${contrastFilter.value}%) hue-rotate(${hueRotateFilter.value}deg) sepia(${sepiaFilter.value}%)`; 

    }


    let rangeSliders = document.querySelectorAll(".filter input[type='range']"); 

    rangeSliders.forEach((eachRangeSliders) => {
        eachRangeSliders.addEventListener("input", applyFilter); 
    })



    let rotateImage = () => {
        if (flipXdirection.checked) {
            choseImageEl.style.transform = "scaleX(-1)"; 
        }
        else if (flipYdirection.checked) {
            choseImageEl.style.transform = "scaleY(-1)"; 
        }
        else {
            choseImageEl.style.transform = "scale(1, 1)"; 
        }
    }




    let radioButtons = document.querySelectorAll(".flip-options input[type='radio']"); 

    radioButtons.forEach((eachOptions) => {
        eachOptions.addEventListener("click", rotateImage);   
    })



})