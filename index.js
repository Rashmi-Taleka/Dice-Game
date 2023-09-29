var ranvar1=Math.floor(Math.random()*6)+1  ;//1-6

var randomDice = "dice" + ranvar1 + ".png";//dice1.png -dice6.png

var randimageSrc = "images/" + randomDice;//images./dice1-6.png

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randimageSrc);

var ranvar2=Math.floor(Math.random()*6)+1;

var randimageSrc2 = "images/dice" + ranvar2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randimageSrc2);

if(ranvar1>ranvar2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";

}else if(ranvar2>ranvar1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";

}else{
    document.querySelector("h1").innerHTML="Draw!";
}