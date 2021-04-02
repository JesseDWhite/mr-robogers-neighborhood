// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["1", "2", "3"]


// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    const beepBoopArray = number.split(" ");
    for (let i = 0; i < beepBoopArray.length; i++)
        if (beepBoopArray[i] === "3") {
            console.log("Won't you be my neighbor?");
        } else if (beepBoopArray[i] === "2") {
            console.log("Boop!");
        } else if (beepBoopArray[i] === "1") {
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