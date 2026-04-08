
const inputPalindromo = document.querySelector('#inputPalindromo');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

function verificaPalindromo() {
    const texto = inputPalindromo.value
    const textoInvertido = texto.split('').reverse().join('');

    if (texto === textoInvertido) {
        resultado.innerText = 'É um palíndromo!';
        resultado.style.color = 'green';
    } else {
        resultado.innerText = 'Não é um palíndromo!';
        resultado.style.color = 'red';
    }

}

botao.addEventListener("click", verificaPalindromo)