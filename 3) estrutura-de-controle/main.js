// EXEMPLO com sistema de login:
// dados do usuário (armazenados no sistema)
const nomeUsuario = "luan"
const senhaUsuario = "luan123"
const emailUsuario = "luan@gmail.com"
const cpfUsuario = "12345678900"

// dados de entrada (digitados pelo usuário)
const nomeInput = "luan"
const senhaInput = "luan123"
const emailInput = "luan@gmail.com"
const cpfInput = "12345678901" // erro de digitação

const login = nomeUsuario === nomeInput &&
              senhaUsuario === senhaInput && 
              emailUsuario === emailInput &&
              cpfUsuario === cpfInput


// ===== Estrutura de controle: IF, ELSE IF, ELSE =====
// IF = "se"
// ELSE IF = "senão se"
// ELSE = "senão"
// USADO PARA VERIFICAR SE UMA CONDIÇÃO É VERDADEIRA OU FALSA E EXECUTAR CÓDIGOS DIFERENTES PARA CADA CASO

if (5 == 4) {
    // Só executa se a condição do IF for verdadeira
    console.log("LOGIN EFETUADO COM SUCESSO");

} else {
    // Só executa se a condição do IF for falsa
    console.log("ERRO NO LOGIN")    
}

// EXEMPLO DE USO COM UMA CONDIÇÃO:
if (login){
    console.log("Login efetuado com sucesso!")
} else {
    console.log("Login falhou!")
}

// EXEMPLO COM MULTIPLAS CONDIÇÕES:
const mediaAluno = 8
const mediaEscola = 7

if (mediaAluno >= mediaEscola) {
    console.log("PARABÉNS, VOCÊ FOI APROVADO!");

} else if (mediaAluno >= 5 && mediaAluno < 7) {
    console.log("Você está de recuperação!")

} else if (mediaAluno < 5){
    console.log("Infelizmente, você foi reprovado.")

} else{
    console.log("ERRO, TENTE NOVAMENTE.")
}

// ESTRUTURA DE CONTROLE: SWITCH CASE
// USADO QUANDO QUEREMOS VERIFICAR O VALOR DE UMA VARIÁVEL E EXECUTAR CÓDIGOS DIFERENTES PARA CADA VALOR
const clima = "ensolarado"

switch (clima){
    case "ensolarado":
        console.log("Dia bom para praia");
        break // O "break" serve para interromper a execução do switch case, evitando que ele continue verificando os próximos casos mesmo depois de encontrar um caso verdadeiro
    case "chuvoso":
        console.log("Dia bom para ficar em casa");
        break
    case "nublado":
        console.log("Dia bom para passear");
        break
    default:
        console.log("Clima desconhecido");
}


