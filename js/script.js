// ------------------------------------utility logic------------------------------------------------
const robogerResponses = ["WON'T YOU BE MY NEIGHBOR?", "BOOP", "BEEP!"];

const robogersNumbers = ["3", "2", "1"];

// ------------------------------------business logic-----------------------------------------------

function beepBoop(number) {
    if (number === " ") {
        return null;
    }
    const beepBoopArray = number.split(" ");
    let responseArray = [];
    beepBoopArray.forEach(function (element) {
        if (element.includes(robogersNumbers[0])) {
            responseArray.push(" " + robogerResponses[0]);
        } else if (element.includes(robogersNumbers[1])) {
            responseArray.push(" " + robogerResponses[1]);
        } else if (element.includes(robogersNumbers[2])) {
            responseArray.push(" " + robogerResponses[2]);
        } else {
            responseArray.push(" " + element);
        }
    });
    return responseArray;
};
// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const userInput = $("#user-input").val();
        const robogersResponse = beepBoop(userInput);

        $("#response").text(robogersResponse);
        $("#response").slideDown(robogersResponse);
        $("#response").slideDown(robogersResponse);
    });
});