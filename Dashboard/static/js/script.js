const countryStart = 'static/js/data/countries.json'
const countryNames = 'static/js/data/countries_names.json'
const countryData = 'static/js/data/countryData.json'

d3.json(countryStart).then(function(data){
    console.log(data[0].code);
});

d3.json(countryStart).then(function(data){
    firstCountry = data[0];
    Object.entries(firstCountry).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});
});

function init() {
    var selector = d3.select("#selDataset");
  
    d3.json(countryNames).then((data) => {
      console.log(data);
      var countries = data.names;
      countries.forEach((name) => {
        selector
          .append("option")
          .text(name)
          .property("value", name);
      });
  })}
  
  init();

  function optionChanged(newCountry) {
    buildDemographicData(newCountry);
  }

function buildDemographicData(element) {
    d3.json(countryData).then((data) => {
      var DemographicData = data.countryData;
      var resultArray = DemographicData.filter(elementObj => elementObj.country == element);
      var result = resultArray[0];
      console.log(result);
      var PANEL = d3.select("#country-data");
  
      PANEL.html("");
      PANEL.append("h6").text('Code: ' + result.code);
      PANEL.append("h6").text('Population: ' + result.population);
      PANEL.append("h6").text('GDP Per Capita (USD): ' + result.gdp_per_capita);
    });
  }

//////////////////////////////////

// Add ML Summary Tables
let tbody = d3.select("tbody");

console.log(summaryML);

// Compile data based on JS file
summaryML.forEach(function(element) {
   console.log(element);
   let row = tbody.append("tr");

  Object.entries(element).forEach(function([key, value]) {
  console.log(key, value);
  let cell = row.append("td");
  cell.text(value);
});
});