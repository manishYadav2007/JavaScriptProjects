const tabEl = document.querySelectorAll(".tab");

const pomodoroTabs = document.querySelectorAll(".pomodoro-tab")

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
}


tabEl.forEach((eachTab) => {
    eachTab.addEventListener("click", () => {
        const targetTab = document.querySelector(eachTab.dataset.target);
        getActiveTab(targetTab, eachTab);
    })
})










