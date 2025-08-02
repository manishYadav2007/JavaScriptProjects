
document.addEventListener("DOMContentLoaded", () => { //  Add an event listener to the document when it is fully loaded
    let starIcon = document.querySelectorAll(".icon"); //  Select all elements with the class "icon"
    let ratingCounterValueEl = document.getElementById("ratingCounterValue");

    starIcon.forEach((eachIcon, eachIconIndex) => { //  Loop through each element with the class "icon"
        eachIcon.addEventListener("click", () => {
            const counterValue = eachIconIndex + 1; //  Set the counter value to the index of the clicked element + 1
            ratingCounterValueEl.textContent = `Rating is: ${counterValue}/5`
            console.log(ratingCounterValueEl);  //  Log the element with the id "ratingCounterValue" to the console


            starIcon.forEach((innerStar, innerIndex) => { //  Loop through each element with the class "icon"
                if (innerIndex < counterValue) { //  If the index of the current element is less than the counter value
                    if (counterValue <= 2) { //  If the counter value is less than or equal to 2
                        innerStar.style.color = "orange"; //  Set the color of the current element to orange
                    }
                    else if (counterValue <= 4) { //  If the counter value is less than or equal to 4
                        innerStar.style.color = "yellow";
                    }
                    else {
                        innerStar.style.color = "darkgreen";
                    }
                }
                else {
                    innerStar.style.color = ""; 
                }

            })

        })
    })



})




