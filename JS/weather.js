function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You Live in", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weater for you.");   
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);