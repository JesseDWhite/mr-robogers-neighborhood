// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["1", "2", "3"]


// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    const beepBoopArray = parseInt(number.split(" "));
    if (beepBoopArray === 1) {
        console.log("Beep!")
    }
    else {
        console.log("That didn't work...")
    }

}


// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()

    })
})