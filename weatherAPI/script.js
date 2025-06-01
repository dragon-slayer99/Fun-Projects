const API_KEY = "";
const weatherForm = document.querySelector(".weatherForm");
const cardDisplay = document.getElementById("cardDisplay");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = document.getElementById("inputCity").value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
            displayWeatherInfo(weatherData);

        } catch (error) {
            displayError("OOPS! something went wrong");
            throw new Error(error);
        }
    }
    else {
        displayError("please enter a city");
    }

});


function displayError(msg) {
    cardDisplay.innerHTML = `<p class="error">${msg}</p>`;
}

async function getWeatherData(city) {

    const webURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(webURL);

    return await response.json();
}

function displayWeatherInfo(data) {

    const { name, main: { humidity, temp }, sys: { country }, weather: [{ id }], wind: { speed } } = data;
    cardDisplay.innerHTML = `
            <p class="emoji">${displayEmoji(id)}</p>
            <p class="temperature">${temp}&#176c</p>
            <h3 class="place">${name}, ${country}</h3>
            <p class="humidity">Humidity: ${humidity}%</p>
            <p class="windSpeed">wind speed: ${speed}meters/sec</p>`;
    console.log(id);        

}

function displayEmoji(id) {

    switch (true) {
        case (id >= 200 && id < 300):
            card.style.background = "linear-gradient(180deg, aqua, blue)"
            card.style.color = "white";
            return "⛈️";
        case (id >= 300 && id < 400):
            card.style.background = "linear-gradient(180deg, yellow, blue)"
            card.style.color = "white";
            return "🌦️";
        case (id >= 500 && id < 600):
            card.style.background = "linear-gradient(180deg, lightblue, aqua)"
            return "🌧️";
        case (id >= 600 && id < 700):
            card.style.background = "linear-gradient(180deg, aliceblue, cyan)"
            return "🌨️";
        case (id >= 700 && id < 800):
            card.style.background = "linear-gradient(180deg, antiquewhite, cadetblue)"
            return "🌫️";
        case (id === 800):
            card.style.background = "linear-gradient(180deg, aqua, yellow)"
            return "🌤️";
        case (id >= 801 && id < 810):
            card.style.background = "linear-gradient(180deg, aqua, antiquewhite)"
            return "☁️";
    }

}


