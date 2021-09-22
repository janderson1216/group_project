// GDP Layer Styling
function gdpStyleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: gdpGetColor(feature.properties.gdp_per_capita),
      color: "#000000",
    };
  }

function gdpGetColor(gdp) {
    if (gdp > 64000) {
        return '#800026';
    }
    if (gdp > 32000) {
        return '#BD0026';
    }
    if (gdp > 16000) {
        return '#E31A1C';
    }
    if (gdp > 8000) {
        return '#FC4E2A';
    }
    if (gdp > 4000) {
        return '#FD8D3C';
    }
    if (gdp > 2000) {
        return '#FEB24C';
    }
    if (gdp > 1000) {
        return '#FED976';
    }
    return '#FED976';
                        };

// Medals Layer Styling
function medalsStyleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: medalsGetColor(feature.properties.sumMedals),
      color: "#000000",
    };
  }

function medalsGetColor(medals) {
    if (medals > 64) {
        return '#800026';
    }
    if (medals > 32) {
        return '#BD0026';
    }
    if (medals > 16) {
        return '#E31A1C';
    }
    if (medals > 8) {
        return '#FC4E2A';
    }
    if (medals > 4) {
        return '#FD8D3C';
    }
    if (medals > 2) {
        return '#FEB24C';
    }
    if (medals > 1) {
        return '#FED976';
    }
    return '#FFEDA0';
                        };
    
// Medals per Capita Layer Styling
function medalsPopStyleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: medalsPopGetColor(feature.properties.MedalsPerCapitaMill),
      color: "#000000",
    };
  }

function medalsPopGetColor(medalsPop) {
    if (medalsPop > 6.4) {
        return '#800026';
    }
    if (medalsPop > 3.2) {
        return '#BD0026';
    }
    if (medalsPop > 1.6) {
        return '#E31A1C';
    }
    if (medalsPop > .8) {
        return '#FC4E2A';
    }
    if (medalsPop > .4) {
        return '#FD8D3C';
    }
    if (medalsPop > .2) {
        return '#FEB24C';
    }
    if (medalsPop > .1) {
        return '#FED976';
    }
    return '#FFEDA0';
                        };

// Medals per GDP (thousands of USD) Layer Styling
function medalsGdpStyleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: medalsGdpGetColor(feature.properties.MedalsPerGdpThous),
      color: "#000000",
    };
  }

function medalsGdpGetColor(medalsGdp) {
    if (medalsGdp > 6.4) {
        return '#800026';
    }
    if (medalsGdp > 3.2) {
        return '#BD0026';
    }
    if (medalsGdp > 1.6) {
        return '#E31A1C';
    }
    if (medalsGdp > .8) {
        return '#FC4E2A';
    }
    if (medalsGdp > .4) {
        return '#FD8D3C';
    }
    if (medalsGdp > .2) {
        return '#FEB24C';
    }
    if (medalsGdp > .1) {
        return '#FED976';
    }
    return '#FFEDA0';
                        };