const Counter=document.getElementById("counter");
const Decrease=document.getElementById("Decrease");
const Reset=document.getElementById("Reset");
const Increase=document.getElementById("Increase");
let C=0;

Increase.onclick=function(){
    C++;
    Counter.textContent=C;
}
Decrease.onclick=function(){
    C--;
    Counter.textContent=C;
}
Reset.onclick=function(){
    C=0;
    Counter.textContent=C;
}

 
 
 
 
 
 
 
 
 
  




 
 
 /*const pi=3.14;
let radius;
let c;
document.getElementById("Submit").onclick= function() {
radius=document.getElementById("MyText").value;
if(radius==Number(radius)){

c=2*pi*radius;
document.getElementById("MyH3").textContent="c="+c;
}else{
    document.getElementById("MyH3").textContent="ERROR: Invalid radius";
}}
*/