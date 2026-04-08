
const inputEntrada = document.querySelector('#entrada');
const formulario = document.querySelector('form');
const saida = document.querySelector('#saida');

function cifrar(evento) {
    evento.preventDefault();
    
    const texto = inputEntrada.value;
    
    saida.innerText = "SAIDA" + " " + texto
}

formulario.addEventListener('submit', cifrar)
