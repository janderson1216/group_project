// Add console.log to check to see if our code is working.
console.log("working");

// Tile layer for map background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              minZoom: 1,
              maxZoom: 18,
              id: 'mapbox/streets-v11',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: API_KEY
              });

// Create map object
let map = L.map('mapid', {
	center: [40.7, 0],
	zoom: 2,
	layers: [streets]
});

/////////////////////////////////////////////////////////

// DEFINE LAYERS
// Add base layer to map
let baseLayer = L.geoJson(countryOutline, {
                    onEachFeature: addPopup
                }).addTo(map);

// Base layer with country outlines
let baseMaps = {baseLayer};

// Add layer group
let gdpOverlay = new L.LayerGroup();

// GDP layer
L.geoJson(countryOutline, {
    style: styleInfo,
    onEachFeature: addPopup
}).addTo(gdpOverlay);

// Add overlays
let overlays = {
    'GDP': gdpOverlay
};

/////////////////////////////////////////////////////////

// CONTROL DEFINITION AND LEGEND
L.control.layers(baseMaps, overlays).addTo(map);

// Create Legend

// Define Control Legend
let legend = L.control({
    position: "topright"
    });
    
    // Add details
    legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    
    const gdpIntervals = ['$0',
                          '$1,000', 
                          '$5,000', 
                          '$10,000', 
                          '$25,000', 
                          '$50,000', 
                          '$75,000',
                          '$100,000'];
    const colors = [
        '#FFEDA0',
        '#FED976',
        '#FEB24C',
        '#FD8D3C',
        '#FC4E2A',
        '#E31A1C',
        '#BD0026',
        '#800026'
    ];
    // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < gdpIntervals.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        gdpIntervals[i] + (gdpIntervals[i + 1] ? "&ndash;" + gdpIntervals[i + 1] + "<br>" : "+");
        }
        return div;
    };
    
    // Finally, we our legend to the map.
    legend.addTo(map);

/////////////////////////////////////////////////////////

// ADD POP-UP FOR COUNTRY DATA
function addPopup(feature, layer){
    if (feature.properties.ISO_A3) {
        layer.bindPopup('Country: ' + feature.properties.ADMIN +
                        '<br>' + 'Code: ' + feature.properties.ISO_A3 + 
                        '<br>' + 'Population: ' + feature.properties.population +
                        '<br>' + 'GDP per Capita (USD): ' + feature.properties.gdp_per_capita +
                        '<br>' + 'Total Medals: ' + feature.properties.sumMedals + 
                        '<br>' + 'Total Athletes: ' + feature.properties.countAthletes +
                        '<br>' + 'Mean Athlete Height: ' + feature.properties.meanAthHeight +
                        '<br>' + 'Mean Athlete Weight: ' + feature.properties.meanAthWeight + 
                        '<br>' + 'Mean Athlete Age: ' + feature.properties.meanAthAge                       
                        );  
    }
};

/////////////////////////////////////////////////////////

// GDP Layer Styling
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: getColor(feature.properties.gdp_per_capita),
      color: "#000000",
    };
  }

function getColor(gdp) {
    if (gdp > 100000) {
        return '#800026';
    }
    if (gdp > 75000) {
        return '#BD0026';
    }
    if (gdp > 50000) {
        return '#E31A1C';
    }
    if (gdp > 25000) {
        return '#FC4E2A';
    }
    if (gdp > 10000) {
        return '#FD8D3C';
    }
    if (gdp > 5000) {
        return '#FEB24C';
    }
    if (gdp > 1000) {
        return '#FED976';
    }
    return '#FFEDA0';
                        };