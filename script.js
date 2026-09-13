// ==========================
// WEATHER
// ==========================

function checkWeather() {

    const weatherResult =
        document.getElementById("weatherResult");

    weatherResult.innerHTML =
        "🌡️ Temperature: 28°C<br>" +
        "☁️ Weather: Partly Cloudy<br>" +
        "💧 Humidity: 65%<br>" +
        "🌧️ Rain Chance: 30%";
}


// ==========================
// MARKET PRICE
// ==========================

function checkPrice() {

    const priceResult =
        document.getElementById("priceResult");

    priceResult.innerHTML =
        "🧅 Onion: ₹25/kg<br>" +
        "🍅 Tomato: ₹30/kg<br>" +
        "🥔 Potato: ₹22/kg<br>" +
        "🌾 Wheat: ₹28/kg";
}


// ==========================
// SMART RECOMMENDATION
// ==========================

function getRecommendation() {

    const recommendations = [

        "💧 Check soil moisture before watering the crops.",

        "🌱 Use organic fertilizer for healthy crop growth.",

        "☀️ Avoid watering crops during hot afternoon.",

        "🐛 Check your plants regularly for pests.",

        "🌿 Remove weeds regularly from the field.",

        "💦 Use drip irrigation to save water."

    ];

    const randomIndex =
        Math.floor(Math.random() * recommendations.length);

    const recommendationResult =
        document.getElementById("recommendationResult");

    recommendationResult.innerHTML =
        recommendations[randomIndex];
}


// ==========================
// BUS MAP
// ==========================

// Pune location
const map = L.map("map").setView(
    [18.5204, 73.8567],
    12
);


// Map tiles
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// Bus location
const busLocation = [18.5204, 73.8567];


// Bus marker
const busMarker = L.marker(busLocation)
    .addTo(map)
    .bindPopup(
        "<b>🚌 BUS-01</b><br>" +
        "Status: On Route<br>" +
        "ETA: 10 minutes"
    )
    .openPopup();


// College / destination
const collegeLocation = [18.5590, 73.7868];

L.marker(collegeLocation)
    .addTo(map)
    .bindPopup(
        "<b>🎓 College</b><br>" +
        "Bus Destination"
    );


// Bus route line
const route = [
    busLocation,
    [18.5350, 73.8250],
    [18.5500, 73.8050],
    collegeLocation
];

L.polyline(route, {
    weight: 5
}).addTo(map);


// Bus movement
let position = 0;

function moveBus() {

    position++;

    if (position >= route.length) {
        position = 0;
    }

    busMarker.setLatLng(route[position]);
}

setInterval(moveBus, 5000);