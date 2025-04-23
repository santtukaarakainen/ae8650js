let map;
let center = [20.00, -30.00]
let finlandcenter = [65.00, 25.00];
let mymap;


let cities = [
    {
        location: [62.88, 27.66],
        text: "Kuopio"
    },
    {
        location: [60.99, 25.66],
        text: "Lahti"
    },
    {
        location: [61.50, 21.78],
        text: "Pori"
    }
]

let zoom = 3;
let places = [];

function addMarker(place){
    L.marker([place.latitude, place.longitude])
    .addTo(map)
    .bindPopup(place.name);
}

function addPlace(name, latitude, longitude){
    let place = {
        name: name,
        latitude: latitude,
        longitude: longitude
    }
    places.push(place);
    localStorage.setItem("places", JSON.stringify(places))
    addMarker(place);
}

function addButtonPressed(){
    let name = document.getElementById("name").value
    let latitude = document.getElementById("latitude").value
    let longitude = document.getElementById("longitude").value

    if (name === "") {
        alert("Nimi ei voi olla tyhjä!");
        return;
    }
    if (isNaN(latitude)) {
        alert("Latitude pitää olla luku!");
        return;
    }
    if (isNaN(longitude)) {
        alert("Longitude pitää olla luku!");
        return;
    }

    addPlace(name, latitude, longitude);
}

function initializeMap() {
    map = L.map('map').setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
}

function init() {
    initializeMap(); 
    places = JSON.parse(localStorage.getItem("places")) || []
    places.forEach(place => {
        addMarker(place);
    })

}

