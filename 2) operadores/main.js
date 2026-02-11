// TIPOS DE OPERADORES:

// ===== OPERADORES ARITMÉTICOS =====

// SOMA = +
console.log(2 + 3) // 5

// SUBTRAÇÃO = -
console.log(5 - 2) // 3

// MULTIPLICAÇÃO = *
console.log(4 * 6) // 24

// DIVISÃO = /
console.log(10 / 2) // 5

// MÓDULO (resto da divisão) = %
console.log(10 % 3) // 1 (resto da divisão de 10 por 3 é 1)

// POTÊNCIA = **
console.log(2 ** 3) // 8 (2 elevado a 3 é 8)

// PRECEDENCIA: () > ** > * / % > + -

// EXEMPLO DE USO:
const notas = [8.55, 7.75, 9]

const media = (notas[0] + notas[1] + notas[2]) / 3
console.log( media.toFixed(2) );

// CONCATENAÇÃO
const nome = "Luan"
const sobrenome = "Fagioni"
const nomeCompleto = nome + sobrenome // "LuanFagioni"
console.log(nomeCompleto)


// ===== OPERADORES DE RELACIONAIS =====
// PERGUNTAM PARA O COMPUTADOR SE UMA CONDIÇÃO É VERDADEIRA OU FALSA
console.log( 5 > 3 ) // true
console.log( 5 < 3 ) // false
console.log( 5 >= 5 ) // true
console.log( 5 <= 3 ) // false
console.log( 5 == 5 ) // true (comparação de valor)
console.log( 5 === 5 ) // true (comparação de valor e tipo)
console.log( 5 != 3 ) // true (diferente)
console.log( 5 !== "5" ) // true (diferente em valor e tipo)

// EXEMPLO DE USO:
const mediaEscola = 7
const mediaAluno = 5
console.log( mediaAluno >= mediaEscola ) // false (aluno não passou);

const idade = 18
const podeDirigir = idade >= 18
console.log(podeDirigir);

const senha = "luan"
const senhaCorreta = "luan"
console.log( senha == senhaCorreta ) // true (senha correta)


// ===== OPERADORES LÓGICOS =====
// AND (&&), OR (||), NOT (!)
const temCarteira = true
const temCarro = false

// AND (&&): verdadeiro se ambos forem verdadeiros
console.log( temCarteira && temCarro ) // false

// OR (||): verdadeiro se pelo menos um for verdadeiro
console.log( temCarteira || temCarro ) // true

// NOT (!): inverte o valor lógico
console.log( !temCarro ) // true (negação de false é true)

// EXEMPLO DE USO:
const mediaAluno2 = 8
const faltasAluno2 = 3
const idadeAluno2 = 20
console.log( mediaAluno2 >= 7 && faltasAluno2 < 5 ) 
