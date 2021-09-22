// GDP Layer Styling
function GDPstyleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: .5,
      fillColor: GDPgetColor(feature.properties.gdp_per_capita),
      color: "#000000",
    };
  }

function GDPgetColor(gdp) {
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