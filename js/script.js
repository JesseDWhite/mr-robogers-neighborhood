// ------------------------------------utility logic------------------------------------------------
const robogerResponse = ["WON'T YOU BE MY NEIGHBOR?", "BOOP!", "BEEP!"]

const robogersNumbers = ["3", "2", "1"]

// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    const beepBoopArray = number.split(" ")
    let responseArray = []
    beepBoopArray.forEach(function (element) {
        for (let i = 0; i < beepBoopArray.length; i++) {
            if (beepBoopArray[i] === robogersNumbers[0]) {
                responseArray.push(robogerResponse[0]);


            } else if (beepBoopArray[i] === robogersNumbers[1]) {
                responseArray.push(robogerResponse[1]);


            } else if (beepBoopArray[i] === robogersNumbers[2]) {
                responseArray.push(robogerResponse[2]);


            } else {
                responseArray.push(element);
            }
        } return console.log(responseArray.toString());

    })
}



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


// function beepBoop(number) {
//     if (number === " ") {
//         return null;
//     }
//     const beepBoopArray = number.split(" ");
//     let responseArray = [];
//     beepBoopArray.forEach(function (element) {
//         if (element.includes(3)) {
//             responseArray.push(robogerResponse[0]);
//             // console.log("I FOUND A 3!")
//             // console.log(responseArray)
//         } else if (element.includes(2)) {
//             responseArray.push(robogerResponse[1]);
//             // console.log("I FOUND A 2!")
//             // console.log(responseArray)
//         } else if (element.includes(1)) {
//             responseArray.push(robogerResponse[2]);
//             // console.log("I FOUND A 1!")
//             // console.log(responseArray)
//         } else {
//             responseArray.push(element);
//             // console.log(responseArray)
//         }
//         return responseArray.toString();
//     });
// };


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
        const robogersResponse = beepBoop(userInput)

        $("#response").text(robogersResponse);
        $("#response").fadeIn(response);
        // $("#response").fadeOut(response)
    });
});