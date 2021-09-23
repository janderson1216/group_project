// Create scatter plot using GDP and Medal percentiles for ML comparison
var trace1 = {
  x: scatterGDP,
  y: scatterMedals,
  mode: 'markers',
};

var data = [trace1];

var layout = {
  title: "GDP vs Medals per Capita ",
  xaxis: { title: "GDP Percentile" },
  yaxis: { title: "Medals per Capita Percentile" }
};

Plotly.newPlot("bubble", data, layout);