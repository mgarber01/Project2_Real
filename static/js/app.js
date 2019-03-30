// Bar chart svg
var svg1Width = 960;
var svg1Height = 660;

var chart1Margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30

};
// chart area minus margins
var chart1Width = svg1Width - chart1Margin.left - chart1Margin.bottom;
var chart1Height = svg1Height - chart1Margin.top - chart1Margin.bottom;

// create svg container
var svg1 = d3
  .select('.barchart')
  .append("svg")
  .attr("height", svg1Height)
  .attr("width", svg1Width);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg1.append("g")
.attr("transform", `translate(${chart1Margin.left}, ${chart1Margin.top})`);

// Load data from beer csv
d3.csv("aggr-data-beer-2010-2015_barrels-kegs.csv", function(error, BeerData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the BeerData
  console.log(BeerData);

  // Cast the hours value to a number for each piece of BeerData
  BeerData.forEach(function(data) {
    data.State = +data.State;
});

var barSpacing = 10; // desired space between each bar
var scaleY = 10; // 10x scale on rect height
});


// Tree chart svg

// Wavy chart svg