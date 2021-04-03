// ------------------------------------utility logic------------------------------------------------
const robogerResponses = ["WON'T YOU BE MY NEIGHBOR?", "BOOP!", "BEEP!"];

const robogersNumbers = ["3", "2", "1"];

// ------------------------------------business logic-----------------------------------------------
// function beepBoop(number) {
//     const beepBoopArray = number.split(" ");
//     let responseArray = [];
//     beepBoopArray.forEach(function (element) {
//         for (let i = 0; i < beepBoopArray.length; i++) {
//             if (beepBoopArray[i] === robogersNumbers[0]) {
//                 return responseArray.push(robogerResponse[0]);


//             } else if (beepBoopArray[i] === robogersNumbers[1]) {
//                 return responseArray.push(robogerResponse[1]);


//             } else if (beepBoopArray[i] === robogersNumbers[2]) {
//                 return responseArray.push(robogerResponse[2]);


//             } else {
//                 return responseArray.push(element);
//             }
//         } return responseArray.toString();

//     });
//     return responseArray.toString()
// }

// function beepBoop(number) {
//     const beepBoopArray = number.split("");
//     let responseArray = [];
//     for (let i = 0; i < beepBoopArray.length; i++) {
//         if (beepBoopArray[i] === robogersNumbers[0]) {
//             responseArray.push(robogerResponse[0])
//         } else if (beepBoopArray[i] === robogersNumbers[1]) {
//             responseArray.push(robogerResponse[1]);
//         } else if (beepBoopArray[i] === robogersNumbers[2]) {
//             responseArray.push(robogerResponse[2])
//         } else {
//             responseArray.push(beepBoopArray[i])
//         } return responseArray
//     }
// }

function beepBoop(number) {
    if (number === " ") {
        return null;
    }
    const beepBoopArray = number.split(" ");
    let responseArray = [];
    beepBoopArray.forEach(function (element) {
        if (element.includes(3)) {
            responseArray.push(robogerResponses[0]);
        } else if (element.includes(2)) {
            responseArray.push(robogerResponses[1]);
        } else if (element.includes(1)) {
            responseArray.push(robogerResponses[2]);
        } else {
            responseArray.push(element);
        }
    });
    return responseArray;
};

// function beepBoop(number) {
//     if (number === " ") {
//         return null;
//     }
//     const beepBoopArray = number.toString().split(" ");
//     let responseArray = []
//     for (let i = 0; i < beepBoopArray.length; i++) {
//         if (beepBoopArray[i] === robogersNumbers[0]) {
//             responseArray.push("WON'T YOU BE MY NEIGHBOR?");
//             console.log(beepBoopArray)
//             console.log(responseArray)

//         } else if (beepBoopArray[i] === robogersNumbers[1]) {
//             responseArray.push("BOOP!");
//             console.log(beepBoopArray)
//             console.log(responseArray)

//         } else if (beepBoopArray[i] === robogersNumbers[2]) {
//             responseArray.push("BEEP!");
//             console.log(beepBoopArray)
//             console.log(responseArray)

//         } else {
//             responseArray.push(number);
//         }
//     } return responseArray;
// }

// ------------------------------------user interface logic-----------------------------------------
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        const userInput = $("#user-input").val();
        const robogersResponse = beepBoop(userInput);
        const spaces = robogersResponse.concat(" ")

        $("#response").html(spaces);
        $("#response").fadeIn(response);
    });
});