let random1 = Math.floor(Math.random() * 6 )+1;
let randomimagesrc1 = "images/dice"+random1+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesrc1);

let random2 = Math.floor(Math.random()*6)+1;
let randomimagesrc2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimagesrc2);

if(random1>random2){
    document.querySelector("h1").innerHTML="player one wins";
}
else if(random1==random2){
    document.querySelector("h1").innerHTML="draw Refresh Again";
}
else{
    document.querySelector("h1").innerHTML="player second wins"
}
