var btn = document.getElementById("VIZ1");
btn.addEventListener("click",handleclick);
function handleclick(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns = JSON.parse(this.responseText);
                        console.log(rspns);
                }
        }
        Http.send()
};

var btn = document.getElementById("VIZ3");
btn.addEventListener("click",handleclick);
function handleclick(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns = JSON.parse(this.responseText);
                      
                          console.log(rspns);
                }

                }
         Http.send()
        };




var btn = document.getElementById("VIZ2");
btn.addEventListener("click",handleclick);
function handleclick(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns = JSON.parse(this.responseText);
                        console.log(rspns);
                
                
                }
        }
        Http.send()
};