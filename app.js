// values :
let enterValue = document.getElementById('pognon');

let listePognonLost = [];

// sections:
let lost = document.getElementById('lost');
let gains = document.getElementById('gains');
let epargnes = document.getElementById('epargne');
let resultScreen = document.getElementById('result');

// button:
let envois = document.getElementById('envois');
let resetAll = document.getElementById('resetAll');

let buttonValues = document.getElementsByTagName('option');

// function ajout:
function ajout (){
    let createDiv = document.createElement('div');


    lost.appendChild(createDiv);
    createDiv.innerHTML = enterValue.value;
    listePognonLost.push(enterValue.value);
}

// button events:
envois.addEventListener('click', ajout);

resetAll.addEventListener('click', function (){

} )