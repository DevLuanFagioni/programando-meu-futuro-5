/**
 * ============================================================
 * INTRODUÇÃO ÀS FUNÇÕES
 * ============================================================
 * Funções são blocos de construção fundamentais em JavaScript.
 * Elas permitem agrupar um conjunto de instruções para realizar uma tarefa ou calcular um valor.
 * 
 * Principais benefícios:
 * 1. Reutilização de código: Defina uma vez, use várias vezes com dados diferentes.
 * 2. Organização: Divide problemas complexos em partes menores e gerenciáveis.
 * 3. Manutenção: Facilita a correção e atualização do código em um único lugar.
 * 
 * Conceitos abordados abaixo:
 * - Parâmetros (Entrada de dados)
 * - Retorno (Saída de dados)
 * - Hoisting (Içamento)
 * - Escopo (Visibilidade)
 */

const notasAluno = [8, 7, 9, 6, 10, 8, 6, 5, 3, 9, 10, 7, 8, 6, 5, 4, 9, 10, 8, 7, 6]
let mediaAluno = 0

/**
 * ============================================================
 * 1. HOISTING (IÇAMENTO)
 * ============================================================
 * O JavaScript possui um comportamento padrão de mover declarações para o topo 
 * do escopo atual antes da execução do código.
 * 
 * Isso significa que uma função pode ser chamada ANTES de ser declarada no código.
 */

function adicionarNota() {
  // FUNCIONALIDADE DE ADICIONAR NOTA
  console.log("NOTA ADICIONADA COM SUCESSO");
}

function removerNota() {
  // FUNCIONALIDADE DE REMOVER NOTA
  console.log("NOTA REMOVIDA COM SUCESSO");
}

function calcularMedia() {
  // FUNCIONALIDADE DE CALCULO DE MEDIA
  const resultado = 0
  for (const nota in notasAluno) {
    resultado = resultado + notasAluno[nota]
  }
  resultado = resultado / notasAluno.length

  return resultado
}

function verificarMedia() {
  // FUNCIONALIDADE DE VERIFICAÇÃO DE MEDIA
  let mensagem = ""

  if (mediaAluno >= 7) {
    mensagem = "PARABENS VOCE FOI APROVADO"
  } else if (mediaAluno >= 5 && mediaAluno < 7) {
    mensagem = "VOCE ESTÁ DE RECUPERAÇÃO"
  } else {
    mensagem = "VOCE FOI REPROVADO"
  }

  return mensagem
}

// Exemplos de chamadas das funções
removerNota()
adicionarNota()
calcularMedia()
verificarMedia()


/**
 * ============================================================
 * 2. SINTAXE DE FUNÇÃO
 * ============================================================
 * A estrutura básica para declarar uma função.
 */
function nomeDaFuncao() {
  // Bloco de código a ser executado
  console.log("Teste de função");
}

// CHAMANDO A FUNÇÃO
// Para executar a função, utilizamos o nome seguido de parênteses
nomeDaFuncao()
nomeDaFuncao()

/**
 * ============================================================
 * 3. ESCOPO (SCOPE)
 * ============================================================
 * O escopo define a acessibilidade (visibilidade) das variáveis.
 * 
 * - GLOBAL: Variáveis declaradas fora de qualquer função. 
 *   Podem ser acessadas e modificadas de qualquer lugar do código.
 * 
 * - LOCAL: Variáveis declaradas dentro de uma função. 
 *   Só podem ser acessadas dentro daquela função específica.
 */

// ESCOPO GLOBAL
const nomeFora = "Luan"

function exibirNome() {
  // ESCOPO LOCAL
  const nomeDentro = "Ana"

  // Tentativa de modificação de variáveis (Atenção: const não pode ser reatribuída)
  nomeDentro = "Teste"
  nomeFora = "Teste"

}

/**
 * ============================================================
 * 4. SINTAXE DE FUNÇÃO COM PARÂMETROS
 * ============================================================
 * Parâmetros funcionam como variáveis locais dentro da função, 
 * recebendo valores passados durante a chamada.
 */

function nomeDaFuncao(parametro1, parametro2) {
  // codigo utiliza os parâmetros
}

/**
 * ============================================================
 * 5. SINTAXE DE FUNÇÃO COM RETORNO
 * ============================================================
 * A palavra-chave `return` encerra a execução da função e 
 * especifica um valor a ser devolvido para quem chamou a função.
 */

function nomeDaFuncao() {
  return "valor";
}

/**
 * ============================================================
 * EXEMPLOS PRÁTICOS DE RETORNO E PARÂMETROS
 * ============================================================
 */

// EXEMPLO 1: Função retornando string concatenada
function mostrarNome() {
  const nome = "Luan"
  const sobreNome = " Fagioni"
  return nome + sobreNome
}

// Se não capturarmos o retorno, o valor é processado mas "perdido" (ignorado)
mostrarNome()

// Se queremos usar o valor depois, precisamos armazená-lo em uma variável
const nomeCompleto = mostrarNome()
console.log(nomeCompleto)


// EXEMPLO 2: Função retornando um Objeto (Múltiplos valores)
function calcularMedia2() {
  let quantidadeDeNotas = notasAluno.length
  let somatorio = 0
  let media = 0
  return {
    notas: quantidadeDeNotas,
    soma: somatorio,
    media: media
  }
}
const resultado = calcularMedia2()
console.log(resultado)


// EXEMPLO 3: Early Return (Retorno Antecipado)
// Podemos usar o return para encerrar a função precocemente baseado em uma condição
function calcularMedia3() {
  const notas = [0, 1, 4]

  if (notas.length == 0) {
    return "Não possui notas"
  }

  // O código abaixo só será executado se o return acima NÃO for acionado
  // lógica de calculo
  const media = 7.5
  return media
}
const resultadoMedia = calcularMedia3()
console.log(resultadoMedia)


/**
 * ============================================================
 * 6. SINTAXE DE FUNÇÃO COM PARÂMETROS E RETORNO
 * ============================================================
 * Combinando entrada de dados (parâmetros) e saída de dados (retorno).
 */

function nomeDaFuncao(parametro1, parametro2) {
  return "valor";
}


/**
 * ============================================================
 * 7. SINTAXE DE FUNÇÃO ANINHADA (NESTED FUNCTION)
 * ============================================================
 * Uma função definida dentro de outra função.
 */


/**
 * ============================================================
 * 8. SINTAXE DE FUNÇÃO DE CALLBACK
 * ============================================================
 * Uma função passada como argumento para outra função.
 */


/**
 * ============================================================
 * 9. SINTAXE DE ARROW FUNCTION (FUNÇÃO DE FLECHA)
 * ============================================================
 * Uma sintaxe mais curta para escrever funções.
 */