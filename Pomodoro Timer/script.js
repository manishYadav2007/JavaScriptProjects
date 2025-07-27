const tabEl = document.querySelectorAll(".tab");

const pomodoroTabs = document.querySelectorAll(".pomodoro-tab")


const backgroundContainerEl = document.getElementById("backgroundContainer");

const startButton = document.querySelectorAll(".start-btn");



const pomodoroStartBtnEl = document.getElementById("pomodoroStartBtn");
const shortBreakStartBtnEl = document.getElementById("shortBreakStartBtn");
const longBreakStartBtnEl = document.getElementById("longBreakStartBtn");


const statusMsgEl = document.getElementById("statusMsg");




const pomodoroTimerEl = document.getElementById("pomodoroTimer");







let timeIntervalId = null;
let isTimerRunning = false;






let getActiveTab = (targetTab, eachTab) => {
    // Loop through each element in the pomodoroTabs array
    pomodoroTabs.forEach((el) => {
        // Add the "hidden" class to each element
        el.classList.add("hidden");
        el.classList.remove("block");
    });

    // Show the target panel
    targetTab.classList.remove("hidden");
    targetTab.classList.add("block");

    // Remove active-btn class from all tabs
    tabEl.forEach(tab => tab.classList.remove("active-btn"));

    // Add active-btn class to the clicked tab
    eachTab.classList.add("active-btn");



    const changeBgContainer = () => {
        if (eachTab.dataset.target === "#pomodoroTabPanel") {
            backgroundContainerEl.style.backgroundColor = "#b94a49";
            pomodoroStartBtnEl.style.color = "#b94a49";
            statusMsgEl.textContent = "Time to focus!";
        }
        else if (eachTab.dataset.target === "#shortBreakPanel") {
            backgroundContainerEl.style.backgroundColor = "#38868a";
            shortBreakStartBtnEl.style.color = "#38868a";
            statusMsgEl.textContent = "Take a short break!";
        }
        else if (eachTab.dataset.target === "#longBreakPanel") {
            backgroundContainerEl.style.backgroundColor = "#397097";
            longBreakStartBtnEl.style.color = "#397097";
            statusMsgEl.textContent = "Take a long break!";
        }

    }





    changeBgContainer();




}


tabEl.forEach((eachTab) => {
    eachTab.addEventListener("click", () => {
        const targetTab = document.querySelector(eachTab.dataset.target);
        getActiveTab(targetTab, eachTab);
    })
})




let totalSeconds = 5 * 60;






let getFormattedTimes = () => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
}


// console.log(getFormattedTimes());





pomodoroTimerEl.textContent = getFormattedTimes(totalSeconds);





let pomodoroTabCountdown = () => { //  Define a function to start the pomodoro timer
    
    // Check if the timer is not running
    if (!isTimerRunning) {
        // Set an interval to decrement the totalSeconds variable every second
        intervalId = setInterval(() => {
            // Check if the totalSeconds variable is less than or equal to 0
            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                intervalId = false;
                pomodoroStartBtnEl.textContent = "Start";
                alert("Times up!");
                return;
            }
            totalSeconds--;
            pomodoroTimerEl.textContent = getFormattedTimes(totalSeconds);
        }, 1000);

        pomodoroStartBtnEl.textContent = "Pause";  //  Change the text content of the start button to "Pause"
        isTimerRunning = true;  //  Set the isTimerRunning variable to true

    }

    else { //  If the timer is running
        clearInterval(intervalId);  //  Clear the interval
        intervalId = null; //  Set the intervalId variable to null
        pomodoroStartBtnEl.textContent = "Start";  //  Change the text content of the start button to "Start"
        isTimerRunning = false;  //  Set the isTimerRunning variable to false
    }

}



pomodoroStartBtnEl.addEventListener("click", () => pomodoroTabCountdown());  //  Add an event listener to the start button
