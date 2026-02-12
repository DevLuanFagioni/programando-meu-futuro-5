
/**
 * ===== TIPOS DE DADOS PRIMITIVOS =====
 * 
 * Tipos primitivos são os valores mais básicos em JavaScript.
 * São imutáveis: não podem ser alterados, apenas substituídos.
 * 
 * const = constante (não pode ser alterada depois)
 * let = variável (pode ser alterada)
 */

// STRING: texto entre aspas duplas, simples ou template literal
const nome = "Luan" // texto
const mensagem = 'Olá mundo' // strings simples também funcionam
const saudacao = `Bem-vindo, ${nome}!` // template literal permite variáveis

// NUMBER: números inteiros ou decimais
const idade = 25 // inteiro
let altura = 1.75 // decimal (ponto flutuante)
const resultado = 10 / 3 // resultado: 3.333...

// BOOLEAN: verdadeiro ou falso (true/false)
let pessoaFisica = true // usado em condições
let maiorDeIdade = idade >= 18 // avalia para true/false

// NULL: ausência INTENCIONAL de valor (você atribui)
let exemplo = null // você escolhe não ter valor

// UNDEFINED: falta de atribuição (JavaScript define automaticamente)
let sobrenome // declarada mas não inicializada = undefined
let teste = undefined // explícito (raro usar assim)


// ===== OPERAÇÕES COM VARIÁVEIS =====

let dinheiro = 50
dinheiro = 20 // let permite reatribuição
console.log(dinheiro) // 20

/**
 * Com variáveis podemos:
 * 1. ACESSAR: ler o valor armazenado
 * 2. ALTERAR: mudar o valor (apenas com let/var, não com const)
 * 3. USAR EM OPERAÇÕES: matemática, comparações, etc
 */


// ===== TIPOS DE REFERÊNCIA - ARRAY =====

/**
 * ARRAY: lista ordenada de valores
 * 
 * - Cada item tem uma POSIÇÃO (índice)
 * - Os índices começam do ZERO (0)
 * - Usamos [] para acessar valores
 * - Arrays são MUTÁVEIS: você pode adicionar, remover e alterar itens
 */

//             0       1       2
let nomes = ["luan", "ana", "carlos"]

// ACESSANDO valores do array:
console.log(nomes[0]) // "luan"
console.log(nomes[1]) // "ana"

// ALTERANDO um valor existente:
nomes[2] = "José" // índice 2 agora é "José"

// ADICIONANDO novos valores:
nomes[3] = "Maria" // cria índice 4
nomes[4] = "João"

// ACESSANDO posição vazia (retorna undefined):
console.log(nomes[10]) // undefined


// ===== TIPOS DE REFERÊNCIA - OBJETO =====

/**
 * OBJETO: coleção de pares CHAVE-VALOR (desorganizado)
 * 
 * - Usa CHAVES {} para delimitar
 * - Cada propriedade é: chave: valor
 * - Acesso via PONTO (.) ou [] com o nome da chave
 * - Objetos são MUTÁVEIS: você pode adicionar/alterar propriedades
 * - NÃO tem ordem de índice, organização é por nomes
 */

let pessoa = {
    nome: "Luan",
    idade: 25,
    altura: 1.75,
    peso: 70
}

// ACESSANDO valores do objeto (via PONTO):
console.log(pessoa.nome)   // "Luan"
console.log(pessoa.idade)  // 25

// ALTERANDO um valor existente:
pessoa.altura = 1.80
pessoa.peso = 75

// ADICIONANDO uma nova propriedade (que não existia antes):
pessoa.sexo = "masculino"
console.log(pessoa.sexo)   // "masculino"


// ===== EXEMPLO NO MUNDO REAL - ESTRUTURA COMPLEXA =====

/**
 * Objetos podem conter ARRAYS e outros OBJETOS.
 * Isso permite modelar dados complexos do mundo real.
 * 
 * ACESSO ANINHADO:
 * - objeto.propriedade → acessa uma propriedade
 * - objeto.array[índice] → acessa item do array
 * - objeto.propriedade.subpropriedade → aninhamento profundo
 */

const cliente = {
    nome: "Maria",
    idade: 30,
    email: "teste@teste.com",
    
    // Array de skills
    //                 0               1
    habilidades: ["comunicacao", "lideranca"],
    
    // Objeto aninhado (endereço dentro de cliente)
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    },
    
    estadoCivil: "solteira"
}

// ACESSANDO dados simples:
console.log(cliente.nome)           // "Maria"
console.log(cliente.idade)          // 30

// ACESSANDO array dentro do objeto:
console.log(cliente.habilidades[0]) // "comunicacao"
console.log(cliente.habilidades[1]) // "lideranca"

// ACESSANDO objeto dentro de objeto (aninhado):
console.log(cliente.endereco.rua)   // "Rua A"
console.log(cliente.endereco.numero) // 123
console.log(cliente.endereco.cidade) // "São Paulo"

