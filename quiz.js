import { questionOne } from './questions.js';
import { questionTwo } from './questions.js';

// get the element we want to add our list to
const quizContainer = document.querySelector('#quiz-container');

// Creating our new elements

// const button = document.createElement("button");
// const text = document.createTextNode(questionOne[4].acutalAnswer);

// document.body.appendChild(button);


//questionTwo[4].acutalAnswer

for (let i = 0; i < questionOne.length; i++) {
    const button = document.createElement("button");
    let answerOne = questionOne[i].answerOne;
    let answerTwo = questionOne[i].answerTwo;
    let answerThree = questionOne[i].answerThree;
    let answerFour = questionOne[i].actualAnswer;
   
    button.textContent = `${answerOne}: ${answerTwo} ; ${answerThree} ; ${answerFour}`
    //button.appendChild(button);
}

// title.appendChild(titleText);

// Now the title and list will be displayed since we have appended it to an element in the DOM.
//quizContainer.appendChild(button);
//quizContainer.appendChild(list);




//Adding event listener to click button
const x = document.querySelector('#submitButton');

x.addEventListener('click', respondClick);

function respondClick() {
    document.querySelector('#effect').innerHTML += 'Correct Answer' + '<br>';
}

function buildQuiz() {

}
