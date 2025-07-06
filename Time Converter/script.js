let hoursInputField = document.getElementById('hoursInput');
let minutesInputField = document.getElementById('minutesInput');
let convertButton = document.getElementById('convertToSecondsBtn');
let errorMessage = document.getElementById('errorMsg');
let timeInSecondsOutput = document.getElementById('timeInSeconds');



let errorMsgHour = "Please enter a valid number of hours.";
let errorMsgMinutes = "Please enter a valid number of minutes.";


convertButton.addEventListener("click", () => {
    let userEnteredHour = parseInt(hoursInputField.value);
    let userEnteredMinute = parseInt(minutesInputField.value);

    errorMessage.textContent = "";
    timeInSecondsOutput.textContent = "";

    if (userEnteredHour && userEnteredMinute >= 0) {
        if (isNaN(userEnteredHour)) {
            errorMessage.textContent = errorMsgHour
            return;
        }

        else if (isNaN(userEnteredMinute)) {
            errorMessage.textContent = errorMsgMinutes;
            return;
        }
        
    }
    
    let timeInSecondsValue = userEnteredHour * 3600 + userEnteredMinute * 60;
    timeInSecondsOutput.textContent = `${timeInSecondsValue}s`;
});



