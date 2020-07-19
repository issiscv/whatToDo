const weather = document.querySelector(".js-weather");

const API_KEY = "660435ed1ff0e6702b63f8b699dcebf1";
const COORDS_LS = "coords";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        const temperture = json.main.temperture;
        const location = json.name;
        weather.innerText = `${temperture} @ ${location}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handlegeoError() {
    console.log("에러 발생!");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handlegeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        askForCoords()
    }
    else {
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }   
}

function init() {
    loadCoords();
}

init();