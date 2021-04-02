// ------------------------------------utility logic------------------------------------------------


// ------------------------------------business logic-----------------------------------------------

function beepBoop(number) {
    const beepBoopArray = number.split(" ");
    let responseArray = []
    for (let i = 0; i < beepBoopArray.length; i++) {
        let convertResponseArr = number.toString()
        if (convertResponseArr.includes(3)) {
            responseArray.push(" Won't you be my neighbor?");
            console.log(beepBoopArray)
            console.log(convertResponseArr)
            console.log(responseArray)

        } else if (convertResponseArr.includes(2)) {
            responseArray.push(" Boop!");
            console.log(beepBoopArray)
            console.log(convertResponseArr)
            console.log(responseArray)

        } else if (convertResponseArr.includes(1)) {
            responseArray.push(" Beep!");
            console.log(beepBoopArray)
            console.log(convertResponseArr)
            console.log(responseArray)

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