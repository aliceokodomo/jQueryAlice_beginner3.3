//$(document).ready(function () {
let randomNumber = Math.floor(Math.random() * 100) + 1;
let essai = 0;
console.log(randomNumber);

$("button").on("click", function() {
    essai++
    console.log(essai);

    let guess = $("input").val();
    if (isNaN(guess) === false) {
        if (parseInt(guess, 10) === randomNumber) {
            alert("Bravo, c'est " + randomNumber + ". Vous avez deviné en " + essai + " essais !");
        } else if (essai === 5) {
            alert("Vous avez perdu, c'était le numéro : " + randomNumber);
        } else if (parseInt(guess, 10) < randomNumber) {
            alert("Non, c'est moins que prévu.");
        } else {
            alert("Non, c'est plus que prévu.");
        }
    } else {
        alert("Non, vous devez entrer un nombre.");
    }
});