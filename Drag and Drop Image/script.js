

let bgEl = document.getElementById("backgroundContainer");





let createAndAppendDragAndDropItems = () => {

    // create lable element which acts like a container

    let createLabelElement = document.createElement("label");
    createLabelElement.classList.add("input-file-label");
    createLabelElement.id = "dropArea";
    createLabelElement.setAttribute("for", "inputFile");
    bgEl.appendChild(createLabelElement);


    // create input element
    let createInputElement = document.createElement("input");
    createInputElement.type = "file";
    createInputElement.id = "inputFile";
    createInputElement.accept = "image/*";
    createInputElement.hidden = true;
    createLabelElement.appendChild(createInputElement);


    // file upload image container 

    let createFileUploaderContainer = document.createElement("div");
    createFileUploaderContainer.classList.add("file-content");
    createFileUploaderContainer.id = "fileContent";
    createLabelElement.appendChild(createFileUploaderContainer);

    // create image uploader icon  

    let createImageElement = document.createElement("img");
    createImageElement.src = "image.png";
    createImageElement.classList.add("upload-file-img");
    createFileUploaderContainer.appendChild(createImageElement);


    // create bg image 
    let createBackgroundImage = document.createElement("img");
    createBackgroundImage.classList.add("w-100");
    createBackgroundImage.id = "dropImg";
    createFileUploaderContainer.appendChild(createBackgroundImage);


    // create span element for file uploader card description 

    let createCardDescription = document.createElement("span");
    createCardDescription.textContent = "Drag and drop or click here to upload image";
    createCardDescription.classList.add("card-description", "text");
    createFileUploaderContainer.appendChild(createCardDescription);

    // create sub description 

    let createSubDescription = document.createElement("span");
    createSubDescription.textContent = "Upload any images from desktop";
    createSubDescription.classList.add("sub-description", "text");
    createFileUploaderContainer.appendChild(createSubDescription);




    /**
     * The function `uploadImage` takes an input file, creates a URL for the image, displays the image on
     * the webpage, and updates the styling of certain elements.
     */

    let uploadImage = () => {
        let inputFile = createInputElement.files[0];
        console.log(inputFile);

        let imageURL = URL.createObjectURL(inputFile);
        createBackgroundImage.src = imageURL;
        console.log(imageURL);

        createImageElement.classList.add("d-none");
        createFileUploaderContainer.classList.add("image-uploaded");
    }





    /* The line `createInputElement.addEventListener("change", uploadImage);` is adding an event listener
    to the `createInputElement` element for the `change` event. */
    createInputElement.addEventListener("change", uploadImage);



    /* The code snippet `createLabelElement.addEventListener("dragover", (event) => {
            event.preventDefault(); 
        })` is adding an event listener to the `createLabelElement` element for the `dragover` event. */
    createLabelElement.addEventListener("dragover", (event) => {
        event.preventDefault();
    })


    /* This code snippet is adding an event listener to the `createLabelElement` element for the `drop`
    event. When a user drags and drops a file onto the `createLabelElement`, this event listener will
    trigger. */
    createLabelElement.addEventListener("drop", (event) => {
        event.preventDefault();
        createInputElement.files = event.dataTransfer.files;
        uploadImage();
    })
}



/* The `createAndAppendDragAndDropItems()` function is responsible for creating and appending elements
to the DOM that allow for drag and drop file uploading functionality. */
createAndAppendDragAndDropItems(); 