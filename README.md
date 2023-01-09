# Random Password Generator 

## Description 

Technologies used: 
- HTML 
- CSS
- Vanilla JavaScript 

Deployed application: https://cedekpoole.github.io/random-password-generator

This is an application that can generate a random password for the user. You can pick a password length that is between 10 and 64 characters and choose what char types you want to include (uppercase, lowercase, numbers and/or special characters). Users are welcome to use this project in order to create a password that fits their specifications. 

This project was primarily used as means for me to practice functions in vanilla JavaScript. Functions are a few lines of reusable code that can be used to perform a specific task; use of them allows the code to be called many times without repetition (to learn more about functions, see here: https://javascript.info/function-basics) Not only that, this challenge allowed me to gain more experience in using HTML and CSS to structure and style web applications. 

## Installation 

N/A 

## Usage

The random password generator can be found [here](https://cedekpoole.github.io/random-password-generator). In order to start the script, press the 'Generate Password' button. This executes the function 'generatePassword()' where the user will be prompted to provide a valid password length (between 10 and 64 characters) and are asked to confirm the specific character types they would like to use. If you fail to give a valid input, you will be prompted to provide another. In addition to this, the user must pick at least one character type. Once you have completed the prompts, the script will randomly generate a random password that follows the criteria given. Said password will be displayed in the paragraph element which can be found below the 'generate password' button. Using the CSS property 'user-select: all', you can select the whole generated password in one click to make the process of copying it easier. 

To check the responsiveness of the app, open the deployed app on a different device or open up 'Device Mode' on Chrome Dev Tools (Option + Command + J on MacOS, Shift + Control + J on Windows/Linux, then Command + Shift + M on MacOS, or Control + Shift + M on Windows/Linux). You can increase/decrease the width and height of the screen to gain an understanding of how the page behaves. 

![Alt text](images/screenshot.png)

## Credits

N/A

## License 

Please refer to the LICENSE in the repository. 