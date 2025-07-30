const timer = document.getElementById("timerCountdown");
const stopBtn = document.getElementById("stopButton");
const startBtn = document.getElementById("startButton");
const resetBtn = document.getElementById("resetButton");


let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;


let startTimer = () => {
    if (isRunning) return;

    isRunning = true; 
    startTime = Date.now() - elapsedTime; 
    timerInterval = setInterval(updateDisplay, 10); 
}



let stopTimer = () => {
    if (!isRunning) return;
    isRunning = false;
    elapsedTime = Date.now() - startTime; 
    clearInterval(timerInterval);  
}


let resetTimer = () => {
    stopTimer(); 
    elapsedTime = 0; 
    timer.textContent = "00 : 00 : 00"; 
}



let updateDisplay = () => {
    const currentTime = Date.now() - startTime; 
    let minutes = Math.floor((currentTime / (1000 * 60)) % 60); 
    let seconds = Math.floor((currentTime / 1000) % 60); 
    let milliSeconds = Math.floor((currentTime % 1000) / 10); 
    

    const formattedMinutes = String(minutes).padStart(2, '0'); 
    const formattedSeconds = String(seconds).padStart(2, '0'); 
    const formattedMilliseconds  = String(milliSeconds).padStart(2, '0'); 

    timer.textContent = `${formattedMinutes} : ${formattedSeconds} : ${formattedMilliseconds}`; 


}



startBtn.addEventListener("click", () => startTimer());
stopBtn.addEventListener("click", () => stopTimer());
resetBtn.addEventListener("click", () => resetTimer());
