var imageSrc = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNum1 = Math.floor(Math.random()* 6)+1;
var randomNum2 = Math.floor(Math.random()* 6)+1;
console.log(randomNum1,randomNum2);
//document.querySelector("h1").innerHTML = "Refresh Me";
document.querySelector(".img1").setAttribute("src",imageSrc[randomNum1-1]);
document.querySelector(".img2").setAttribute("src",imageSrc[randomNum2-1]);
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "⛳ Player 1 Wins!";
}else if(randomNum1 == randomNum2){
    document.querySelector("h1").innerHTML = "Draws!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! ⛳";
} 