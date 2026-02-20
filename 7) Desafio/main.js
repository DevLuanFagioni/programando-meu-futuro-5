// DESAFIO: 
// CRIE UM SISTEMA DE CALCULO DE NOTAS PARA UMA ESCOLA
// DEVE RECEBER UMA LISTA COM AS NOTAS DO ALUNO
// CRIE UMA VARIAVEL PARA ARMAZENAR A MÉDIA DO ALUNO
// PERCORRAR PELA LISTA PARA CALCULAR A MÉDIA DO ALUNO
// PEGUE A MEDIA E VERIFIQUE SE O ALUNO FOI APROVADO, REPROVADO OU ESTÁ DE RECUPERAÇÃO E IMPRIMA O RESULTADO NO CONSOLE
// A MÉDIA PARA APROVAÇÃO É 7, PARA RECUPERAÇÃO É ENTRE 5 E 7, E PARA REPROVAÇÃO É MENOR QUE 5

// Array que armazena todas as notas do aluno
const notasAluno = [8, 7, 9, 6, 10, 8, 6, 5, 3, 9, 10, 7, 8, 6, 5, 4, 9, 10, 8, 7, 6, 10, 8]

// Função para adicionar uma nova nota ao array
function adicionarNota(nota) {
  // PUSH = metodo para adicionar um valor no final de um array
  notasAluno.push(nota)
}

// Adicionando algumas notas de exemplo
adicionarNota(10)
adicionarNota(6)
adicionarNota(8)

// Função para remover a última nota do array
function removerNota() {
  // POP = metodo para remover o ultimo valor de um array
  notasAluno.pop()
}

// Função responsável por calcular a média das notas
function calcularMedia(notas) {
  let mediaAluno = 0
  // Loop for...in percorre os índices do array
  for (const i in notas) {
    // Soma o valor da nota atual ao acumulador mediaAluno
    mediaAluno = mediaAluno + notas[i]
  }
  // Divide a soma total pelo número de notas (length) para obter a média
  return mediaAluno = mediaAluno / notas.length
}

// Calcula a média usando a array de notas
const resultadoMedia = calcularMedia(notasAluno)


// Função que verifica a situação do aluno baseada na média
function verificarMedia(media) {
  let mensagem = ""
  // Se a média for maior ou igual a 7, aprovado
  if (media >= 7) {
    mensagem = "VOCE PASSOU"
    // Se for menor que 7 E maior ou igual a 5, recuperação
  } else if (media < 7 && media >= 5) {
    mensagem = "VOCE ESTÁ DE RECUPERAÇÃO"
    // Caso contrário (menor que 5), reprovado
  } else {
    mensagem = "VOCE REPROVOU :("
  }
  return mensagem
}

// Verifica a situação e imprime no console
const verificaoMedia = verificarMedia(resultadoMedia)
console.log(verificaoMedia);
