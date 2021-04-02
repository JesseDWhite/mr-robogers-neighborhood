// ------------------------------------utility logic------------------------------------------------
function noInputtedWord(number) {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (arguments[i].trim().length === 0) {
            return true;
        }
    }
    return false;
}

// ------------------------------------business logic-----------------------------------------------
function beepBoop(number) {
    if (noInputtedWord(number)) {
        return null
    }
    const beepBoopArray = number.split(" ")
    let responseArray = []
    beepBoopArray.forEach(function (element) {
        if (element.includes(3)) {
            responseArray.push("WON'T YOU BE MY NEIGHBOR?")
            console.log("I FOUND A 3!")
        } else if (element.includes(2)) {
            responseArray.push("BOOP!")
            console.log("I FOUND A 2!")
        } else if (element.includes(1)) {
            responseArray.push("BEEP!")
            console.log("I FOUND A 1!")
        }
    })
}
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
        event.preventDefault()
        const response = $("#user-input").val()

        $("#response").text(beepBoop(response));
        $("#response").fadeIn(response)
        // $("#response").fadeOut(response)
    })
})