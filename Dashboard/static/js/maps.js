// Add console.log to check to see if our code is working.
console.log("working");

// Tile layer for map background
let darkMap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              minZoom: 1.5,
              maxZoom: 18,
              id: 'mapbox/dark-v10',
              tileSize: 512,
              zoomOffset: -1,
              accessToken: API_KEY
              });

// Set boundries for map
const bounds = [
    [-70, -170],
    [84, 170]
    ];

// Create map object
let map = L.map('mapid', {
	center: [40.7, 0],
	zoom: 1.5,
	layers: [darkMap],
    maxBounds: bounds
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
let medalsOverlay = new L.LayerGroup();
let medalsPopOverlay = new L.LayerGroup();
let medalsGdpOverlay = new L.LayerGroup();

// GDP layer
L.geoJson(countryOutline, {
    style: gdpStyleInfo,
    onEachFeature: addPopup
}).addTo(gdpOverlay);

// Medals layer
L.geoJson(countryOutline, {
    style: medalsStyleInfo,
    onEachFeature: addPopup,
}).addTo(medalsOverlay);

// Medals per capita
L.geoJson(countryOutline, {
    style: medalsPopStyleInfo,
    onEachFeature: addPopup,
}).addTo(medalsPopOverlay);

// Medals per GDP
L.geoJson(countryOutline, {
    style: medalsGdpStyleInfo,
    onEachFeature: addPopup
}).addTo(medalsGdpOverlay);


// Add overlays
let overlays = {
    'GDP (USD)': gdpOverlay,
    'Total Medals': medalsOverlay,
    'Medals per Capita (millions)': medalsGdpOverlay,
    'Medals per GDP (USD in thousands)': medalsPopOverlay,
};

/////////////////////////////////////////////////////////

// CONTROL DEFINITION AND LEGEND
L.control.layers(overlays).addTo(map);

// Update legend on layer change

map.on('baselayerchange', function (eventLayer) {
    console.log(eventLayer.name)
    if (eventLayer.name === 'GDP (USD)') {
        gdpLegend.addTo(map);
        map.removeControl(medalsLegend);
        map.removeControl(medalsPopLegend);
        map.removeControl(medalsGdpLegend);
                                    }
    else if (eventLayer.name === 'Total Medals') {
        medalsLegend.addTo(map);
        map.removeControl(gdpLegend);
        map.removeControl(medalsPopLegend);
        map.removeControl(medalsGdpLegend);        
                                    } 
    else if (eventLayer.name === 'Medals per Capita (millions)') {
        medalsPopLegend.addTo(map);
        map.removeControl(gdpLegend);
        map.removeControl(medalsLegend);
        map.removeControl(medalsGdpLegend);        
                                    } 
    else if (eventLayer.name === 'Medals per GDP (USD in thousands)') {
        medalsGdpLegend.addTo(map);
        map.removeControl(gdpLegend);
        map.removeControl(medalsLegend);
        map.removeControl(medalsPopLegend);        
                                    }       
});


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
