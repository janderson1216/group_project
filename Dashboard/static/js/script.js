const countryStart = 'static/js/countries.json'
const countryNames = 'static/js/countries_names.json'
const countryData = 'static/js/countryData.json'

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
    buildMetadata(newCountry);
    //buildCharts(newCountry);
  }

function buildMetadata(sample) {
    d3.json(countryData).then((data) => {
      var metadata = data.countryData;
      var resultArray = metadata.filter(sampleObj => sampleObj.country == sample);
      var result = resultArray[0];
      console.log(result);
      var PANEL = d3.select("#country-data");
  
      PANEL.html("");
      PANEL.append("h6").text('Code: ' + result.code);
      PANEL.append("h6").text('Population: ' + result.population);
      PANEL.append("h6").text('GDP Per Capita (USD): ' + result.gdp_per_capita);
    });
  }