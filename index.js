// var firstRandomNumber = Math.floor(Math.random() * 6) + 1;
// var firstDiceImage = '../images/dice' + firstRandomNumber + '.png';
// document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// var secondRandomNumber = Math.floor(Math.random() * 6) + 1;
// var SecondDiceImage = '../images/dice' + secondRandomNumber + '.png';
// document.querySelectorAll("img")[1].setAttribute("src", SecondDiceImage);

var random1 = Math.floor(Math.random() * 6) + 1;
var sawirkeenid = 'dice' + random1 + '.png';
document.querySelectorAll("img")[0].setAttribute("src", sawirkeenid);

var random2 = Math.floor(Math.random() * 6) + 1;
var sawirkeenid2 = 'dice' + random2 + '.png';
document.querySelectorAll("img")[1].setAttribute("src", sawirkeenid2);
if (random1 > random2) {
    document.querySelectorAll('h3')[1].innerHTML = "The winner is Player One";
} else if (random1 < random2) {
    document.querySelectorAll('h3')[1].innerHTML = "The winner is Player Two";
} else {
    document.querySelectorAll('h3')[1].innerHTML = "Waa bareejo";
}