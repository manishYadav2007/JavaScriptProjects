
document.addEventListener("DOMContentLoaded", () => {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const headlineEl = document.getElementById('headline');
    
    console.log(daysEl);
    console.log(hoursEl);
    console.log(minutesEl);
    console.log(secondsEl);
    console.log(headlineEl);





    let updateNewYearCountdwon = () => {
        let presentDate = new Date();
        console.log(presentDate);

        let nextYear = presentDate.getFullYear() + 1
        console.log(nextYear);


        let newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);

        console.log(newYearDate);


        let newYearDifferenceInSeconds = newYearDate - presentDate;

        console.log(newYearDifferenceInSeconds);


        if (newYearDifferenceInSeconds <= 0) {
            headlineEl.innerHTML = `Happy New Year, ${newYearDate.getFullYear()}`;
            daysEl.innerHTML = "0";
            minutesEl.innerHTML = "0";
            secondsEl.innerHTML = "0";
            hoursEl.innerHTML = "0";
            clearInterval(newYearCountdownTimeInterval);
        }


        const newYearDay = Math.floor(newYearDifferenceInSeconds / (1000 * 60 * 60 * 24));
        const newYearHours = Math.floor((newYearDifferenceInSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((newYearDifferenceInSeconds % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((newYearDifferenceInSeconds % (1000 * 60)) / 1000);



        daysEl.innerHTML = newYearDay;
        hoursEl.innerHTML = String(newYearHours).padStart(2, '0');
        minutesEl.innerHTML = String(minutes).padStart(2, '0');
        secondsEl.innerHTML = String(seconds).padStart(2, '0');






    }

    const newYearCountdownTimeInterval = setInterval(updateNewYearCountdwon, 1000);


    updateNewYearCountdwon()
})