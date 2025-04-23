let map;
let center = [65.00, 25.00];
let zoom = 6;


let cities = [
    {
        location: [62.14, 25.44],
        text: "Jyväskylä"
    },
    {
        location: [62.36, 25.43],
        text: "Tikkakoski"
    },
    {
        location: [61.50, 21.78],
        text: "Pori"
    }
]

function initializeMap() {
    map = L.map('map').setView(center, zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
}

function init() {
    initializeMap(); 
    cities.forEach ( city => createMarker(city));
    places = JSON.parse(localStorage.getItem("places")) || []
    places.forEach(place => {
        addMarker(place);
    })
}

function createMarker(city) {
    L.marker(city.location).addTo(map).bindPopup(city.text);

}