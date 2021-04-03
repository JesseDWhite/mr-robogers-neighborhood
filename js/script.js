// ------------------------------------utility logic------------------------------------------------
const roboger = ["WON'T YOU BE MY NEIGHBOR?", "BOOP", "BEEP!"];

const robogersNumbers = ["3", "2", "1"];

// ------------------------------------business logic-----------------------------------------------
function countUp(number) {
    const countArray = number;
    let numberArray = [];
    for (let i = 0; i < countArray; i++) {
        numberArray.push(i + 1);
    } return numberArray;
}


function beepBoop(number) {
    if (number !== robogersNumbers) {
        countUp(number);
    }
    const beepBoopArray = number.split(" ");
    let responseArray = [];
    beepBoopArray.forEach(function (element) {
        if (element.includes(robogersNumbers[0])) {
            responseArray.push(" " + roboger[0]);
        } else if (element.includes(robogersNumbers[1])) {
            responseArray.push(" " + roboger[1]);
        } else if (element.includes(robogersNumbers[2])) {
            responseArray.push(" " + roboger[2]);
        } else {
            responseArray.push(" " + element);
        }
    });
    return responseArray;
}

// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const userInput = $("#user-input").val();
        const count = countUp(userInput);
        const robogersResponse = beepBoop(userInput);

        $("#response").text(robogersResponse);
        $("#response").slideDown(robogersResponse);
        // $("#response").text(count);
        // $("#response").slideDown(count);

    });
});