// Define GDP Legend
var gdpLegend = L.control({
    position: "topright"
    });
    
    // Add details
    gdpLegend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    
    const gdpIntervals = ['$0',
                          '$1,000', 
                          '$2,000', 
                          '$4,000', 
                          '$8,000', 
                          '$16,000', 
                          '$32,000',
                          '$64,000'];
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

// Define Medals Legend
var medalsLegend = L.control({
    position: "topright"
    });
    
    // Add details
    medalsLegend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    
    const medalsIntervals = ['0',
                             '1', 
                             '2', 
                             '4', 
                             '8', 
                             '16', 
                             '32',
                             '64'];
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
    for (var i = 0; i < medalsIntervals.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        medalsIntervals[i] + (medalsIntervals[i + 1] ? "&ndash;" + medalsIntervals[i + 1] + "<br>" : "+");
        }
        return div;
    };

// Define Medals per Capita Legend
var medalsPopLegend = L.control({
    position: "topright"
    });
    
    // Add details
    medalsPopLegend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    
    const medalsPopIntervals = ['0',
                                '.1', 
                                '.2', 
                                '.4', 
                                '.8', 
                                '1.6', 
                                '3.2',
                                '6.4'];
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
    for (var i = 0; i < medalsPopIntervals.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        medalsPopIntervals[i] + (medalsPopIntervals[i + 1] ? "&ndash;" + medalsPopIntervals[i + 1] + "<br>" : "+");
        }
        return div;
    };

// Define Medals per GDP Legend
var medalsGdpLegend = L.control({
    position: "topright"
    });
    
    // Add details
    medalsGdpLegend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    
    const medalsGdpIntervals = ['0',
                                '.1', 
                                '.2', 
                                '.4', 
                                '.8', 
                                '1.6', 
                                '3.2',
                                '6.4'];
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
    for (var i = 0; i < medalsGdpIntervals.length; i++) {
        console.log(colors[i]);
        div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        medalsGdpIntervals[i] + (medalsGdpIntervals[i + 1] ? "&ndash;" + medalsGdpIntervals[i + 1] + "<br>" : "+");
        }
        return div;
    };