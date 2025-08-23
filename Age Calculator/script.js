

document.addEventListener("DOMContentLoaded", () => {
    const dateInputEl = document.getElementById("dateInput");
    const submitBtnEl = document.getElementById("submitBtn");
    const dobYearEl = document.getElementById("dobYear");
    const dobMonthEl = document.getElementById("dobMonth");
    const dobDaysEl = document.getElementById("dobDays");





    let storeDataOnLocalStorage = () => {
        let dobObject = {
            date: dateInputEl.value,
            age: {
                year: dobYearEl.textContent,
                month: dobMonthEl.textContent,
                days: dobDaysEl.textContent
            }
        }


        localStorage.setItem("dob", JSON.stringify(dobObject));
    }





    let loadDataFromLocalStorage = () => {
        let dobObject = localStorage.getItem("dob");
        if (dobObject) {
            let parsedData = JSON.parse(dobObject);
            dateInputEl.value = parsedData.date;
            dobYearEl.textContent = parsedData.age.year;
            dobMonthEl.textContent = parsedData.age.month;
            dobDaysEl.textContent = parsedData.age.days;
        }
    }





    let calculateAge = () => {
        let dob = dateInputEl.value;
        if (!dob) {
            alert("Please select your date of birth.");
            return;
        }


        let userDob = new Date(dob);
        let todayDate = new Date();



        let ageYear = todayDate.getFullYear() - userDob.getFullYear();
        let ageMonth = todayDate.getMonth() - userDob.getMonth();
        let ageDays = todayDate.getDate() - userDob.getDate();

        console.log(ageYear, ageMonth, ageDays);




        console.log(userDob);

    /* This code block is handling the scenario where the calculated age in days is negative. */
        if (ageDays < 0) {
            ageDays--;
            const lastMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
            ageDays += lastMonth.getDate();
        }


        if (ageMonth < 0) {
            ageMonth--;
            ageMonth += 12;
        }

        dobYearEl.textContent = ageYear;
        dobMonthEl.textContent = ageMonth;
        dobDaysEl.textContent = ageDays;

        storeDataOnLocalStorage();

    }


    submitBtnEl.addEventListener("click", calculateAge);


    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            calculateAge();
        }
    })


    loadDataFromLocalStorage();


})




