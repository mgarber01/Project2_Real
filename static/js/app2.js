var btn = document.getElementById("VIZ1");
btn.addEventListener("click",handleclick);
function handleclick(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns1 = JSON.parse(this.responseText);
                        console.log(rspns1)
                        
                        



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
                        
                        var rspns2 = JSON.parse(this.responseText);
                        console.log(rspns2)













                        
                
                }


        }

        
var btn = document.getElementById("VIZ2");
btn.addEventListener("click",handleclick);
function handleclick(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns3 = JSON.parse(this.responseText);
                        console.log(rspns3);
                
                
                }
        }
        Http.send()
};