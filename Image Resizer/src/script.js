const warningMsgEl = document.getElementById("warningMsg");

const widthResizerImageEl  =document.getElementById("widthResizerImage");

const imgWidthEl =document.getElementById("imgWidth");


const decreaseBtnEl =document.getElementById("decreaseBtn");
const increaseBtnEl =document.getElementById("increaseBtn");






let defaultWidth = 290;
let minWidth = 100;
let maxWidth = 350; 

const maxWidthWarningMsg = "Too big. Decrease the size of the Image.";
const minWidthWarningMsg = "Can't Visible. Increase the size of the Image.";




widthResizerImageEl.style.width = `${defaultWidth}px`; 





increaseBtnEl.addEventListener("click", () => {
    if (defaultWidth >= maxWidth) {
        warningMsgEl.textContent =  maxWidthWarningMsg;
    }
    else {
        defaultWidth += 10; 
        let updatedImageWidth = defaultWidth + "px"; 
        warningMsgEl.textContent = "";
        widthResizerImageEl.style.width = updatedImageWidth; 
        imgWidthEl.textContent = updatedImageWidth; 
    }
})


decreaseBtnEl.addEventListener("click", () => {
    if (defaultWidth <= minWidth) {
        warningMsgEl.textContent = minWidthWarningMsg; 
    }
    else {
        defaultWidth -= 10; 
        let updatedImageWidth = defaultWidth + "px"; 
        warningMsgEl.textContent = ""; 
        widthResizerImageEl.style.width = updatedImageWidth;
        imgWidthEl.textContent = updatedImageWidth; 
    }
})