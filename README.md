# _mr-robogers-neighborhood_🤖
#### _Talk with Mr. Roboger and see if he will let you move in._
#### By _Jesse White_
## Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
## Description
_Mr. Roboger runs a great neighborhood, but he doesn't just let anyone in. Go ahead and start a converstation with him and see if he will let you move in! He will only respond to 1, 2, and 3, so be specific._
## Setup/Installation Requirements
* _Download all files from this repository_
* _Open index.html in your browswer once it is downloaded_
* _You will then have an empty form field that you can ask Mr. Roboger a question_
* _Once you submit the question, you should see his response below_
## Known Bugs
* _Empty spaces are not ignored._
## License
_MIT (C) Jesse White 2021_
## Contact Information
Jesse White - _jesse.white6@gmail.com_
## Specs

Describe beepBoop()

Test: "it should return an array with a given number if a given number is inputed."
Code: beepBoop(0)
Expected Output: ["0"]

Test: "it should return an array of "Beep!" if the number 1 is given."
Code: beepBoop(1)
Expected Output: ["Beep!"]

Test: "it should return "Won't you be my neighbor?" if 3 is given."
Code: beepBoop(3)
Expected Output: ["Won't you be my neighbor?"]

Test: "it should return "Boop!" if the number 2."
Code: beepBoop(2)
Expected Output: ["Boop!"]

Test: "it should compare the number in the given array and reaplace them with Beep, boop, and won't you be my neighbor?"
Code: beepBoop("1 2 3")
Expected Output: ["Beep!", "Boop", "Won't you be my neighbor?"]

Test: "it should return beep, boop, and won't you be my neighbor regardless of the input position."
Code beepBoop("2 3 1")
Expected output: ["Boop", "Beep!", "Won't you be my neighbor?"]

Test: "it should return the different responses to the webpage."
Code:
const number = "1"
beepBoop(1)
Expected Output: "Beep!"

Test: "it should display all user inputs onto the webpage."
Code:
const number = "123"
beepBoop(123)
Expected Output: "Beep!BoopWon't you be my neighbor?"

Test: "it should replace the number 32 with "Won't you be my neighbor?"
Code:
const number = "32"
beepBoop(32)
Expected Output: "Won't you be my neighbor?"

Test: "it should return the value of a number outside of 1,2, or 3"
Code:
const number = "5"
beepBoop(5)
Expected Output: "5"

Test: "it should return a new translation when 32 and 1 are added with a space seperating them."
Code:
const number = "32 1"
beepBoop("32", "1")
Expected Output: "Won't you be my neighbor?, Beep!"