


document.addEventListener("DOMContentLoaded", () => {
    const countdownTimerEl = document.getElementById("countdownTimer");
    const ctrlButtonEl = document.getElementById("ctrlButton");


    let totalSeconds = 5 * 60;


    let isTimerRunning = null;
    let intervalId = false;


    let formatTime = () => {
        let totalMinutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        let seconds = String(totalSeconds % 60).padStart(2, "0");
        return `${totalMinutes}:${seconds}`;
    }






    ctrlButtonEl.addEventListener("click", () => {



        if (!isTimerRunning) {

            intervalId = setInterval(() => {
                if (totalSeconds <= 0) {
                    clearInterval(intervalId);
                    isTimerRunning = false;
                    ctrlButtonEl.textContent = "Start";
                    alert("Times up!");
                    return;
                }
                totalSeconds--;
                countdownTimerEl.textContent = formatTime(totalSeconds);

            }, 1000)


            ctrlButtonEl.textContent = "Pause";
            isTimerRunning = true;

        }

        else {
            clearInterval(intervalId);
            intervalId = null;
            ctrlButtonEl.textContent = "Start";
            isTimerRunning = false;
        }

         

    })

    
    
})