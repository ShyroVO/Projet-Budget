// Values Add:
let enterValueGains = document.getElementById('pognonGains');
let enterValueLost = document.getElementById('pognonLost');
let enterValueEpargne = document.getElementById('pognonEpargne');

// All values:
let listePognonLost = [0];
let listePognonGain = [0];
let listePognonEpargne = [0];

// Values Input for add:
let lostFric = document.getElementsByClassName('lostFric');
let gainFric = document.getElementsByClassName('gainFric');
let epargneFric = document.getElementsByClassName('epargneFric');

// Screen sections:
let lost = document.getElementById('lost');
let gains = document.getElementById('gains');
let epargnes = document.getElementById('epargne');
let resultScreen = document.getElementById('result');

// Add Button:
let envoisGains = document.getElementById('envoisGain');
let envoisLost = document.getElementById('envoisLost');
let envoisEpargne = document.getElementById('envoisEpargne');

// Reset and Calculate button:
let resetAll = document.getElementById('resetAll');
let calcul = document.getElementById('calcul');

// Function add Lost Money:
function ajoutLost (){
    let createDiv = document.createElement('div');
    lost.appendChild(createDiv);
    createDiv.innerHTML = enterValueLost.value;
    listePognonLost.push(Number.parseFloat(enterValueLost.value));

    console.log(listePognonLost);
}

// Function add Money:
function ajoutGain (){
    let createDiv = document.createElement('div');
    gains.appendChild(createDiv);
    createDiv.innerHTML = enterValueGains.value;
    listePognonGain.push(Number.parseFloat(enterValueGains.value));

    console.log(listePognonGain);
}

// Function add other Money:
function ajoutEpargne (){
    let createDiv = document.createElement('div');
    epargnes.appendChild(createDiv);
    createDiv.innerHTML = enterValueEpargne.value;
    listePognonEpargne.push(Number.parseFloat(enterValueEpargne.value));

    console.log(listePognonEpargne);
}

// button events:
envoisLost.addEventListener('click', ajoutLost)
envoisGains.addEventListener('click', ajoutGain);
envoisEpargne.addEventListener('click', ajoutEpargne);

calcul.addEventListener('click', function (){
    //Add input values:
    for ( let i = 0; i < lostFric.length ; i++){
        listePognonLost.push(Number.parseFloat(lostFric[i].value));
    }

    for ( let j = 0; j < gainFric.length ; j++){
        listePognonGain.push(Number.parseFloat(gainFric[j].value));
    }

    for (let k = 0; k < epargneFric.length ; k++){
        listePognonEpargne.push(Number.parseFloat(epargneFric[k].value))
    }

    //Calcul:
    let resultLost = listePognonLost.reduce(function (acumulateur, valueurs){
        return acumulateur + valueurs;
    })
    let resultGain = listePognonGain.reduce(function (acumulateur, valueurs){
        return acumulateur + valueurs;
    })
    let resultEpargne = listePognonEpargne.reduce(function (acumulateur, valueurs){
        return acumulateur + valueurs;
    })
    let finalResult = ((resultGain + resultEpargne) - resultLost);
    resultScreen.innerHTML += "<br>" + finalResult ;
})