const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const LocationElement = document.querySelector(".location p");
const NotificationElement = document.querySelector(".notification");
let inputValue = document.querySelector('.inputValue');

const weather = {};
weather.temperature = {
    unit : "celsius"
};

const KELVIN = 273;
const KEY = "62f7ba282a6bdc30f5c263bf084aefa5";

export class Weather{
     ShowWeather() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=" + KEY)
            .then(response => response.json())
            .then(data => {
                var longValue = data['coord']['lon'];
                var latValue = data['coord']['lat'];

                this.getWeather(latValue, longValue);
            })
            .catch(err => alert("Wrong city name"))
     }

     setPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        this.getWeather(latitude, longitude);
     }

     showError(error) {
        NotificationElement.style.display = "block";
        NotificationElement.innerHTML = "<p>Geo locatie geblokeerd</p>";
     }

     getWeather(latitude, longitude) {
        let api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + KEY;

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
            this.displayWeather();
        })
    }

    displayWeather() {
        iconElement.innerHTML = "<img src=../Icons/" + weather.iconId + ".png/>";
        tempElement.innerHTML = weather.temperature.value + "°<span>C</span>";
        descElement.innerHTML = weather.description;
        LocationElement.innerHTML = weather.city + " " + weather.country;
     }
}

const weatherclass = new Weather();

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(weatherclass.setPosition, weatherclass.showError);
}else{
    NotificationElement.style.display = "block";
    NotificationElement.innerHTML = "<p>Browser does not support geolocation</p>";
}



