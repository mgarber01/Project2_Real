function buildBar() {
    /* data route */

    var data = rspns1;

    var trace1 = {
		x: 'brewery_size',
		y: 'total_barrels',
		name: 'Sales',
		type: 'bar'
	};

	var trace2 = {
		x: 'brewery_ize',
		y: 'total_barrels',
		name: 'Production',
		type: 'bar'
	};

	var barData = [trace1, trace2];

	var layout = {barmode: 'group'};

  Plotly.newPlot("plot", barData, layout);
  
};

buildBar();
