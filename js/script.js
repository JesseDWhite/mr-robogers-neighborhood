// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["1", "2", "3"]


// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    const beepBoopArray = number.split(" ");
    for (let i = 0; i < beepBoopArray.length; i++)
        if (beepBoopArray[2] === numbersArray[i]) {
            console.log("Won't you be my neighbor?");
        } else if (beepBoopArray[1] === numbersArray[i]) {
            console.log("Boop!");
        } else if (beepBoopArray[0] === numbersArray[i]) {
            console.log("Beep!");
        } else {
            console.log(beepBoopArray);
        }
}


// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()

    })
})