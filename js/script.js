// ------------------------------------utility logic------------------------------------------------
const robogersArray = ["Beep!", "Boop", "Won't you be my neighbor?"]

const numbersArray = ["1", "2", "3"]


// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    const beepBoopArray = number.split(" ");
    for (let i = 0; i < beepBoopArray.length; i++) {
        if (beepBoopArray[i] === "3") {
            console.log("Won't you be my neighbor?");
            console.log(beepBoopArray);

        } else if (beepBoopArray[i] === "2") {
            console.log("Boop!");
            console.log(beepBoopArray);

        } else if (beepBoopArray[i] === "1") {
            return "Beep!";
            console.log(beepBoopArray);

        } else {
            console.log(beepBoopArray);
        }
    } return beepBoopArray
}


// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()
        const response = $("#user-input").val()

        $("#response").text(beepBoop(response))
    })
})