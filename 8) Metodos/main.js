// METODOS:
// São funções de bibliotecas do javascript, ou seja, são funções que já estão prontas para serem usadas.

// TIPOS DE BIBLIOTECAS:

// bibliotecas nativas do javascript:
// 1. String
// Metodos de string: length, toUpperCase, toLowerCase, slice, substring, indexOf, includes, etc
let usuario = " LuAn FagIoni  "

usuario.length // 17

usuario.toUpperCase() // " LUAN FAGIONI  "
usuario.toLowerCase() // " luan fagioni  "

usuario.trim() // "LuAn FagIoni"
usuario.trimStart() // "LuAn FagIoni  "
usuario.trimEnd() // " LuAn FagIoni"
usuario.replace("LuAn", "Ana") // " Ana FagIoni  "

usuario.includes("FagIoni") // true
usuario.endsWith("@gmail.com") // false
usuario.startsWith("luan") // false

const frutas = "banana maçã laranja"
const arrayFrutas = frutas.split(" ") // ["banana", "maçã", 

// 2. Number
// Metodos de number: toFixed, toString, parseInt, parseFloat, etc
let numero = 3.14159
let numeroFixado = numero.toFixed(2) // "3.14"
let numeroParaString = numeroFixado.toString() // "3.14159"

let stringTeste = "$5.99"
stringTeste.parseInt() // 5
stringTeste.parseFloat() // 5.99


// 3. Array
// 4. Object
// 5. Math
// 6. Date

// bibliotecas node:
// precisamos importar a biblioteca para usar seus métodos, por exemplo:
// fs = biblioteca para manipulação de arquivos

// bibliotecas terceiros:
// são bibliotecas criadas por outros desenvolvedores, como por exemplo:

// Bibliotecas = solucionam um problema especifico, exemplo: Lodash, Axios, echarts, gsap e etc
// Frameworks = são bibliotecas mais completas, um conjunto de bibliotecas que solucionam varios problemas, por exemplo: React, Angular, Vue, etc