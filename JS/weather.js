const API_KEY = "b2c787ed5a4b41f39453feab7ba51cc0";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url);
}

function onGeoError() {
    alert("Can't find you. No weater for you.");   
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);