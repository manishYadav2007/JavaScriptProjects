document.addEventListener("DOMContentLoaded", () => {
    const cityName = document.querySelector(".city");
    const tempValue = document.querySelector(".temp");
    const humidityValue = document.querySelector(".humidity");
    const windValue = document.querySelector(".wind");
    const inputFieldEl = document.getElementById("inputField");
    const searchButtonEl = document.getElementById("searchButton");
    const weatherIconEl = document.getElementById("weatherIcon");
    const weatherContainerEl = document.getElementById("weatherContainer");
    const spinerEl = document.getElementById("spinner");
    const errorEl = document.getElementById("error");




    let displayWeather = (data) => {
        let { name, main, wind } = data;
        spinerEl.classList.add("d-none");
        weatherContainerEl.appendChild(spinerEl);
        cityName.textContent = name;
        tempValue.textContent = Math.round(main.temp) + "°C";
        humidityValue.textContent = main.humidity + "%";
        windValue.textContent = wind.speed + "km/h";

        

        weatherContainerEl.classList.add("d-block");




    }




    let checkWeather = async () => {
        spinerEl.classList.remove("d-none");
        cityName.innerHTML = "";
        tempValue.innerHTML = "";
        humidityValue.innerHTML = "";
        windValue.innerHTML = "";
        weatherIconEl.innerHTML = "";


        let apiKey = "19de726cec98645c73f72539289e6c43";
        let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        let userEnteredValue = inputFieldEl.value.trim();
        let url = `${apiUrl}${userEnteredValue}&appid=${apiKey}`;
        try {
            let sendRequest = await fetch(url);
            let data = await sendRequest.json();
            displayWeather(data);

        }
        catch (error) {
            console.log(error);
            
        }




    }


    searchButtonEl.addEventListener("click", checkWeather);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkWeather();
        }
    } )




})