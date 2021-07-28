//Frist Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; //1 to 6 number

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png" ; //images/dice1.png

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1)  ;


//Second Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2) ;

//Working Process

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins" ;
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Winner is Player Two" ;
}

else{
    document.querySelector("h1").innerHTML = "DRAW MATCH" ;
}