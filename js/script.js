// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["3", "2", "1"]


// ------------------------------------business logic-----------------------------------------------

function beepBoop(number) {
    const beepBoopArray = number.split(" ");
    let responseArray = []
    for (let i = 0; i < beepBoopArray.length; i++) {
        let convertResponseArr = number.toString()
        if (convertResponseArr.includes("3")) {
            responseArray.push(" Won't you be my neighbor?");

        } else if (convertResponseArr.includes("2")) {
            responseArray.push(" Boop!");

        } else if (convertResponseArr.includes("1")) {
            responseArray.push(" Beep!");

        } else {
            responseArray.push(convertResponseArr);
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