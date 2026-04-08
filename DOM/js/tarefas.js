
const inputTarefa = document.getElementById('tarefa');
const formulario = document.getElementById('formulario');
const listaTarefas = document.getElementById('tarefas');


function adicionarTarefa() {
    const tarefa = inputTarefa.value.trim().toLowerCase();

    listaTarefas.innerHTML += `
        <p>${tarefa}</p>
    `
}

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    adicionarTarefa();
})
