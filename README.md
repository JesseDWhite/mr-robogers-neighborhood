# _{Application Name}_
#### _{Brief description of application}_
#### By _**{List of contributors}**
## Technologies Used
* _List all_
* _the major technologies_
* _you used in your project_
* _here
## Description
_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}
## Setup/Installation Requirements
* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_
_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_
## Known Bugs
* _Any known issues_
* _should go here_
## License
_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_
## Contact Information
_{Add your contact information here.}_
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