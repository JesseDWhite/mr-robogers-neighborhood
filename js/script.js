// ------------------------------------utility logic------------------------------------------------
const robogerResponse = ["WON'T YOU BE MY NEIGHBOR?", "BOOP!", "BEEP!"]

// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    if (number === " ") {
        return null;
    }
    const beepBoopArray = number.split(" ");
    let responseArray = [];
    beepBoopArray.forEach(function (element) {
        if (element.includes(3)) {
            responseArray.push(robogerResponse[0]);
            // console.log("I FOUND A 3!")
            // console.log(responseArray)
        } else if (element.includes(2)) {
            responseArray.push(robogerResponse[1]);
            // console.log("I FOUND A 2!")
            // console.log(responseArray)
        } else if (element.includes(1)) {
            responseArray.push(robogerResponse[2]);
            // console.log("I FOUND A 1!")
            // console.log(responseArray)
        } else {
            responseArray.push(element);
            // console.log(responseArray)
        }
        return responseArray.toString();
    });
};
// function beepBoop(number) {
//     if (noInputtedWord(number)) {
//         return null
//     }
//     const beepBoopArray = number.split(" ");
//     let responseArray = []
//     for (let i = 0; i < beepBoopArray.length; i++) {
//         let convertResponseArr = number.toString()
//         if (convertResponseArr.includes(3)) {
//             responseArray.push(" WON'T YOU BE MY NEIGHBOR?");
//             console.log(beepBoopArray)
//             console.log(convertResponseArr)
//             console.log(responseArray)

//         } else if (convertResponseArr.includes(2)) {
//             responseArray.push(" BOOP!");
//             console.log(beepBoopArray)
//             console.log(convertResponseArr)
//             console.log(responseArray)

//         } else if (convertResponseArr.includes(1)) {
//             responseArray.push(" BEEP!");
//             console.log(beepBoopArray)
//             console.log(convertResponseArr)
//             console.log(responseArray)

//         } else {
//             responseArray.push(convertResponseArr);
//         }
//     } return responseArray;
// }

// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        const robogersResponse = $("#user-input").val();

        $("#response").text(beepBoop(robogersResponse));
        // $("#response").fadeIn(response);
        // $("#response").fadeOut(response)
    });
});