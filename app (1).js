function buildBar() {
    /* data route */

    var data = rspns1;

    var trace1 = {
		x: 'Brewery_Size',
		y: 'Total Barrels',
		name: 'Sales',
		type: 'bar'
	};

	var trace2 = {
		x: 'Brewery_Size',
		y: 'Domestic_Consumption',
		name: 'Production',
		type: 'bar'
	};

	var barData = [trace1, trace2];

	var layout = {barmode: 'group'};

  Plotly.newPlot("plot", barData, layout);
  })
}

buildBar();
