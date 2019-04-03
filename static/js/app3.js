var btn = document.getElementById("VIZ1");
btn.addEventListener("click",handleclick1);
function handleclick1(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns1 = JSON.parse(this.responseText);
                        console.log(rspns1.year)
                        
                        



                }
        }
        Http.send()
};

var btn = document.getElementById("VIZ3");
btn.addEventListener("click",handleclick2);
function handleclick2(){

        const Http = new XMLHttpRequest();
       
        const url = "http://127.0.0.1:5000/grab";
        
        Http.open("GET",url,true);
       
        Http.onload = function() {
                if(this.status === 200) {
                        
                        var rspns2 = JSON.parse(this.responseText);
                        console.log(rspns2)













                        
                
                }


        }
        Http.send()
}; 


var btn = document.getElementById("VIZ2");
btn.addEventListener("click",handleclick3);
function handleclick3(){

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