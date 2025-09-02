

const leftContainerEl = document.getElementById("leftContainer");
const rightContainerEl = document.getElementById("rightContainer");
const boxEl = document.querySelectorAll(".box");


let uniqueId = [1, 2, 3, 4, 5, 6];



boxEl.forEach((item, index) => {


    const newIdNumber = uniqueId[index];

    item.setAttribute("id", "box" + newIdNumber);
    item.setAttribute("draggable", "true");



    item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });


    const handleDropZone = (event) => {
        event.preventDefault();
    }

    leftContainerEl.addEventListener("dragover", handleDropZone);
    rightContainerEl.addEventListener("dragover", handleDropZone); 


    const handleDrop = (event) => {
        event.preventDefault();

        const id = event.dataTransfer.getData("text/plain"); 
        const draggableElement = document.getElementById(id);

        if (draggableElement) {
            event.target.appendChild(draggableElement);
        }

    }

    leftContainerEl.addEventListener("drop", handleDrop);
    rightContainerEl.addEventListener("drop", handleDrop);



})


