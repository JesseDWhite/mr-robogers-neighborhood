// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["3", "2", "1"]


// ------------------------------------business logic-----------------------------------------------

function beepBoop(number) {
    const beepBoopArray = number.split("");
    let responseArray = []
    for (let i = 0; i < number.length; i++) {
        let convertResponseArr = number.toString()
        if (beepBoopArray[i] === numbersArray[0]) {
            responseArray.push(" Won't you be my neighbor?");

        } else if (beepBoopArray[i] === numbersArray[1]) {
            responseArray.push(" Boop!");

        } else if (beepBoopArray[i] === numbersArray[2]) {
            responseArray.push(" Beep!");

        } else (beepBoopArray[i] !== numbersArray) {
            responseArray.push(number);
        }
    } return responseArray;
}

// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()
        const response = $("#user-input").val()

        $("#response").text(beepBoop(response));
        $("#response").fadeIn(response)
        // $("#response").fadeOut(response)
    })
})