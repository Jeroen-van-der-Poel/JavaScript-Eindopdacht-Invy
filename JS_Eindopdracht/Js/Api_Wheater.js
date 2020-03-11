const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const LocationElement = document.querySelector(".location p");
const NotificationElement = document.querySelector(".notification");
let button = document.querySelector('.weatherbutton');
let inputValue = document.querySelector('.inputValue')

const weather = {};

weather.temperature = {
    unit : "celsius"
};

const KELVIN = 273;
const KEY = "62f7ba282a6bdc30f5c263bf084aefa5";

button.addEventListener('click', function () {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=${KEY}`)
        .then(response => response.json())
        .then(data => {
            var longValue = data['coord']['lon']
            var latValue = data['coord']['lat']

            getWeather(latValue, longValue);
        })

        .catch(err => alert("Wrong city name"))
})

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error) {
    NotificationElement.style.display = "block";
    NotificationElement.innerHTML = `<p>${error.message}</p>`;
}

function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
    }).then(function (data) {
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    }).then(function () {
            displayWeather();
    })
}

function displayWeather() {
    iconElement.innerHTML = `<img src="Icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    LocationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahr(temperature) {
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function () {
    if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celsius"){
        let fahr = celsiusToFahr(weather.temperature.value);
        fahr = Math.floor(fahr);

        tempElement.innerHTML = `${fahr}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }
    else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});