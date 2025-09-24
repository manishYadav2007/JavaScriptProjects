
const todoItemsContainerElement = document.getElementById("todoItemsContainer");
const addTodoItemsElement = document.getElementById("addTodoItems");
const saveButtonElement = document.getElementById("saveButton");







let getTodoItemsFromLocalStorage = () => { 
    let parsedTodoList = JSON.parse(localStorage.getItem("todoItem")); 
    return parsedTodoList === null ? [] : parsedTodoList;
}





let todoItems = getTodoItemsFromLocalStorage(); 




function onDeleteTodoItems(todoId) {
    let todoElement = document.getElementById(todoId); 

    todoItemsContainerElement.removeChild(todoElement);


    let deleteTodoItem = todoItems.findIndex((eachTodo) => {
        let eachTodoIds = "todoItem" + eachTodo.id;
        return eachTodoIds === todoId ? true : false;
    })

    todoItems.splice(deleteTodoItem, 1);

}



let todoLength = todoItems.length;





saveButtonElement.addEventListener("click", () => {
    localStorage.setItem("todoItem", JSON.stringify(todoItems));
    alert("Your Data Deleted Successfully")
})







const onTodoStatusChange = (checkBoxIds, labelIds, eachTodoItemIds) => {
    const checkBoxElement = document.getElementById(checkBoxIds);
    const labelElement = document.getElementById(labelIds);

    labelElement.classList.toggle("checked"); 


    let todoObjectIndex = todoItems.findIndex((eachTodoElement) => {
        let eachTodoId = "todoItem" + eachTodoElement.id; 

       return eachTodoId === eachTodoItemIds ? true : false;
    })



    let todoObject  = todoItems[todoObjectIndex];




    return todoObject.isChecked === true ? todoObject.isChecked = false : todoObject.isChecked = true;



}







let createAndAppendTodoItem = (todoItem) => {

    const eachTodoItemIds = "todoItem" + todoItem.id;
    const checkBoxIds = "checkbox" + todoItem.id;
    const labelIds = "label" + todoItem.id;


    let createListItems = document.createElement("li");
    createListItems.classList.add("todo-item-container", "d-flex", "flex-row");
    createListItems.setAttribute("id", eachTodoItemIds);
    todoItemsContainerElement.appendChild(createListItems);




    let createCheckBoxElement = document.createElement("input");
    createCheckBoxElement.setAttribute("type", "checkbox");
    createCheckBoxElement.classList.add("checkbox-input");
    createCheckBoxElement.setAttribute("id", checkBoxIds);
    createCheckBoxElement.checked = todoItem.isChecked; 
    createCheckBoxElement.addEventListener("click", () => onTodoStatusChange(checkBoxIds, labelIds, eachTodoItemIds));
    createListItems.appendChild(createCheckBoxElement);



    let createLabelContainer = document.createElement("div");
    createLabelContainer.classList.add("d-flex", "flex-row", "label-container");
    createListItems.appendChild(createLabelContainer);



    let createLabelElement = document.createElement("label");
    createLabelElement.setAttribute("for", checkBoxIds);
    createLabelElement.textContent = todoItem.text;
    createLabelElement.setAttribute("id", labelIds);
    
    createLabelElement.classList.add("checkbox-label");
    
        if (todoItem.isChecked === true) { 
            createLabelElement.classList.add("checked"); 
        }
    createLabelContainer.appendChild(createLabelElement);



    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    createLabelContainer.appendChild(deleteIconContainer);


    let createDeleteIconElement = document.createElement("i");
    createDeleteIconElement.classList.add("far", "fa-trash-alt", "delete-icon");

    createDeleteIconElement.addEventListener("click", () => {
        onDeleteTodoItems(eachTodoItemIds);
        alert("Your Data Successsfully Deleted!");
    }); 


    deleteIconContainer.appendChild(createDeleteIconElement);


    




}






for (let eachTodoItem of todoItems) {
    createAndAppendTodoItem(eachTodoItem);
}







let addTodoItems = () => {
    let userInput = document.getElementById("todoUserInput")
    let userEnteredValue = userInput.value;
    

    todoLength += 1; 

    let newTodoItem = {
        id: todoLength,
        text: userEnteredValue,
        isChecked: false
    }

    todoItems.push(newTodoItem); 
    createAndAppendTodoItem(newTodoItem);
    userInput.value = ""; 


}





addTodoItemsElement.addEventListener("click", () => addTodoItems()); 





document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTodoItems();
    }
})





