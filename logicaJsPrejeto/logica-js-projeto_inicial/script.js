const myButton = document.querySelector('button');
const numberTyped = document.querySelector('input');
const tryAgain = document.querySelector('.numberSmallerLarger');
const limitNumber = 100;
const numberSecret = parseInt(Math.random() * `${limitNumber}` + 1);
console.log(numberSecret);
let attempts = 0;


function disableInputAndButton() {
    numberTyped.disabled = true; // Desativa o campo de entrada
    myButton.disabled = true; // Desativa o botão
}

function resultNumberSecret() {
    const tryAgain = document.querySelector('.numberSmallerLarger');
    const userAttempts = document.querySelector('.attempts');

    console.log(attempts);
    if (numberTyped.value == '') {
        alert('TENTE NOVAMENTE. Número não encontrado!');;
    } else if (numberTyped.value > limitNumber) {
        alert('ERRO! Número inserido MAIOR do que pedido!');
    } else if (isNaN(numberTyped.value)) {
        alert('VALOR INVALIDO!')
    } else if (numberTyped.value > numberSecret) {
        attempts++;
        tryAgain.style.visibility = 'visible';
        tryAgain.innerHTML = `O número secreto é <span class="container__texto-red">MENOR</span> que = ${numberTyped.value}`;
    } else if (numberTyped.value < numberSecret) {
        attempts++
        tryAgain.style.visibility = 'visible';
        tryAgain.innerHTML = `O número secreto é <span class="container__texto-red">MAIOR</span> que = ${numberTyped.value}`;
    } else {
        attempts++;
        if (attempts <= 1) {
            userAttempts.innerHTML = `E você acertou com ${attempts} Tentativa.`;
        } else {
            userAttempts.innerHTML = `E você acertou com ${attempts} Tentativas.`;
        }
        tryAgain.style.visibility = 'visible';
        tryAgain.innerHTML = `<span class="container__texto-green">CONGRATULATIONS</span> você acertou o número secreto = ${numberSecret}`;
        disableInputAndButton();
    }
}

myButton.addEventListener('click', resultNumberSecret)


// tryAgain.style.visibility = 'visible';
// tryAgain.innerHTML = `O número secreto é <span class="container__texto-red">MENOR</span> que = ${numberTyped.value}`
// } else {
// tryAgain.innerHTML = `O número secreto é maior ${numberTyped.value}`
// }