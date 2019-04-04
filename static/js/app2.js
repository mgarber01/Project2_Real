// PLOT 1 (HAS TWO BAR GRAPHS)

var btn = document.getElementById("VIZ1");
btn.addEventListener("click",handleclick1);
function handleclick1(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns1 = JSON.parse(this.responseText);
        
                        var xax_arr1 = rspns1.map(a => a.year);
                        var yax_arr1 = rspns1.map(a => a.total_barrels);

                        var xax_arr1_2 = rspns1.map(a => a.year);
                        var yax_arr1_2 = rspns1.map(a => a.brewery_count);
                        console.log(rspns1);
                        console.log(xax_arr1_2);
                        console.log(yax_arr1_2);


                        var data_1 = [
                        {
                                x : xax_arr1,
                                y : yax_arr1,
                                name : 'Total Barrels by Year',
                                type : 'bar'
                        }
                ];
                       
                        
                        
                        var layout_1 = {
                                title:  'Total Barrels by Year',
                                xaxis: {
                                        title: "Year"
                                },
                                yaxis: {
                                        title: "Total Barrels"
                                
                                },
                                autosize: false,
                                width: 650,
                                height: 500,
                                margin: {
                                  l: 100,
                                  r: 100,
                                  b: 100,
                                  t: 100,
                                  pad: 30
                                },
                        };
                
                Plotly.newPlot('myDiv1', data_1, layout_1);
                
        };
}        

                
        
        Http.send()
        };
// PLOT 2
var btn = document.getElementById("VIZ2");
btn.addEventListener("click",handleclick2);
function handleclick2(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns2 = JSON.parse(this.responseText);
                        console.log(rspns2)
                        
                        var xax_arr2 = rspns2.map(a => a.year);
                        var yax_arr2 = rspns2.map(a => a.exported_barrels);
                        var zax_arr2 = rspns2.map(a => a.total_barrels);
                        console.log(rspns2);
                        console.log(xax_arr2);
                        console.log(yax_arr2);
                        console.log(zax_arr2);

                        var data_2 = [
                        {
                                x : xax_arr2,
                                y : yax_arr2,
                                z : zax_arr2,
                                name : 'Exported Barrels by Total Barrels by Year',
                                mode : 'markers',
                                type: 'scatter3d'
                        }
                ];
                        var layout_2 = {
                                title:  'Exported Barrels by Total Barrels by Year',
                                xaxis: {
                                        title: "Year"
                                },
                                yaxis: {
                                        title: "Total Barrels",
                                        // range: [0, 2000000],
                                        color: 'rgb(205,92,92)'
                                
                                },
                                zaxis: {
                                        title: "Exported Barrels"
                                },
                                autosize: false,
                                width: 650,
                                height: 650,
                                margin: {
                                  l: 100,
                                  r: 100,
                                  b: 100,
                                  t: 100,
                                  pad: 30
                                },
                                showlegend: true
                        };
                
                Plotly.newPlot('myDiv2', data_2, layout_2);


                }










                        
                
                }



        
        Http.send()
};

var btn = document.getElementById("VIZ3");
btn.addEventListener("click",handleclick3);
function handleclick3(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns3 = JSON.parse(this.responseText);
                        console.log(rspns3);
                        
                        var xax_arr3 = rspns3.map(a => a.year);
                        var yax_arr3 = rspns3.map(a => a.brewery_count);
                        console.log(rspns3);
                        console.log(xax_arr3);
                        console.log(yax_arr3);


                        var data_3 = [
                                {
                                        x: xax_arr3,
                                        y: yax_arr3,
                                        name: 'Total Breweries by Year',
                                        type: 'bar'
                                }
                        ];
                
                
                        var layout_3 = {
                                title:  'Total Breweries by Year',
                                xaxis: {
                                title: "Year"
                                },
                                yaxis: {
                                title: "Total Breweries"
                        
                                },
                                autosize: false,
                                width: 650,
                                height: 500,
                                margin: {
                                  l: 100,
                                  r: 100,
                                  b: 100,
                                  t: 100,
                                  pad: 30
                                },
                        };
                        
                        Plotly.newPlot('myDiv3', data_3, layout_3);
                
                
                
                
                
                
                }
        }
        Http.send()
};