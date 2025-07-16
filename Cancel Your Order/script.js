


let orderedDetails = [
    {
        itemName: "Burger",
        uniqueNo: 1,
    },
    {
        itemName: "Pizza",
        uniqueNo: 2,
    },
    {
        itemName: "Pasta",
        uniqueNo: 3,
    },
    {
        itemName: "Veg Roll",
        uniqueNo: 4,
    },

]


let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");





let createTitle = document.createElement("h1");
createTitle.textContent = "Your Ordered Items";
createTitle.classList.add("order-heading", "mb-4", "text-center");
orderedItemsContainerEl.appendChild(createTitle);



let createAndAppendOrderItems = (items) => {
    let uniqueButton = "button" + items.uniqueNo;
    let uniqueOrderedItem = "orderedItem" + items.uniqueNo;

    
    // create unordered list
    let createUnorderedList = document.createElement("ul");
    orderedItemsContainerEl.appendChild(createUnorderedList);


    // create list item
    let createListItem = document.createElement("li");
    createListItem.textContent = items.itemName;
    createListItem.id = uniqueOrderedItem;
    createUnorderedList.appendChild(createListItem);

    let createCancelButton = document.createElement("button");
    createCancelButton.textContent = "Cancel";
    createCancelButton.id = uniqueButton;
    createCancelButton.classList.add( "cancelBtn")
    createCancelButton.addEventListener("click", () => {
        createListItem.remove(); 
    })
    createListItem.appendChild(createCancelButton);

}



for(let item of orderedDetails) {
    createAndAppendOrderItems(item);
}




