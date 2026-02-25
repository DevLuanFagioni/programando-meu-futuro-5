// ===== METODOS (MÉTODOS) =====
// São funções prontas do JavaScript que podem ser usadas em objetos específicos (String, Array, Number, etc)
// Não modificam o valor original (maioria das vezes), retornam um novo valor

// ===== BIBLIOTECAS NATIVAS DO JAVASCRIPT =====

// ===== 1. STRING =====
// Métodos para manipular textos

let usuario = " LuAn FagIoni  "

// PROPRIEDADES:
usuario.length // 17 - retorna a quantidade de caracteres

// MÉTODOS DE TRANSFORMAÇÃO:
usuario.toUpperCase() // " LUAN FAGIONI  " - converte para MAIÚSCULAS
usuario.toLowerCase() // " luan fagioni  " - converte para minúsculas

// MÉTODOS DE REMOÇÃO DE ESPAÇOS:
usuario.trim() // "LuAn FagIoni" - remove espaços do início e fim
usuario.trimStart() // "LuAn FagIoni  " - remove espaços apenas do início
usuario.trimEnd() // " LuAn FagIoni" - remove espaços apenas do fim

// MÉTODOS DE BUSCA E SUBSTITUIÇÃO:
usuario.includes("FagIoni") // true - verifica se contém um texto
usuario.indexOf("FagIoni") // 6 - retorna o índice do texto (primeira ocorrência)
usuario.startsWith("LuAn") // true - verifica se começa com esse texto
usuario.endsWith("FagIoni") // false - verifica se termina com esse texto
usuario.replace("LuAn", "Ana") // " Ana FagIoni  " - substitui primeira ocorrência

// ENCADEAMENTO DE MÉTODOS:
const usuarioFormatado = usuario.trim().toLowerCase().replace("LuAn", "Ana")
// Resultado: "ana fagioni"

// IMPORTANTE: String.split() - divide uma string em um array usando um separador
const frutas = "banana maçã laranja"
const arrayFrutas = frutas.split(" ") // ["banana", "maçã", "laranja"] 

// ===== 2. NUMBER =====
// Métodos para manipular números

let numero = 3.14159
numero.toFixed(2) // "3.14" - retorna número com casas decimais específicas (retorna string)
numero.toString() // "3.14159" - converte número para string

// Funções GLOBAIS para converter string em número:
parseInt("5") // 5 - converte para número inteiro
parseInt("5.99") // 5 - ignora a parte decimal
parseFloat("5.99") // 5.99 - converte para número com decimais
Number("10") // 10 - converte para número

// IMPORTANTE: Não são métodos de String, são funções globais
let stringTeste = "5.99"
parseInt(stringTeste) // 5
parseFloat(stringTeste) // 5.99

// ===== 3. ARRAY =====
// Métodos para manipular arrays/listas

const notas = [6, 7, 8, 9, 10, 8.5, 6.3, 8.7, 7.2, 9.5]

// ===== MÉTODOS QUE MODIFICAM O ARRAY ORIGINAL (MUTAM O ARRAY) =====

// Remover elementos:
notas.shift() // remove o PRIMEIRO elemento e o retorna
notas.pop() // remove o ÚLTIMO elemento e o retorna

// Adicionar elementos:
notas.unshift(5, 10) // adiciona elementos NO INÍCIO do array
notas.push(10, 7, 9) // adiciona elementos NO FINAL do array

// ===== MÉTODOS QUE NÃO MODIFICAM O ARRAY ORIGINAL =====

const frutas2 = ["banana", "maçã", "laranja", "uva", "abacaxi"]

// slice() - cria novo array a partir de um índice inicial até final (sem modificar original)
const novoArray = frutas2.slice(1, 4) // ["maçã", "laranja", "uva"]
console.log(novoArray); // novo array
console.log(frutas2); // array original não foi alterado

// splice() - ALTERA o array original, removendo/adicionando elementos
frutas2.splice(1, 2, "abacate", "morango") // remove 2 elementos a partir do índice 1 e adiciona 2 novos
console.table(frutas2); // ["banana", "abacate", "morango", "uva", "abacaxi"]

// concat() - concatena arrays, retorna um novo array
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayConcatenado = array1.concat(array2) // [1, 2, 3, 4, 5, 6]
console.log(arrayConcatenado);

// join() - une elementos em uma string com um separador
const nomes = ["João", "Maria", "Pedro"]
const stringNomes = nomes.join(", ") // "João, Maria, Pedro"
console.log(stringNomes);

// reverse() - inverte a ordem dos elementos do array
const numeros = [1, 2, 3, 4, 5]
numeros.reverse() // [5, 4, 3, 2, 1] - MODIFICA o array original

// sort() - ordena os elementos do array
const numeros2 = [10, 5, 40, 25, 1000]
numeros2.sort() // [1, 10, 25, 40, 5, 1000] - boa para strings, não ideal para números
numeros2.sort((a, b) => a - b) // [1, 5, 10, 25, 1000] - ordenação correta para números

// ===== MÉTODOS DE ITERAÇÃO (PERCORRER POR ARRAYS) =====

const paises = ["Brasil", "Argentina", "Chile", "Uruguai"]

// forEach() - executa uma função para cada elemento (não retorna novo array)
paises.forEach((pais,) => {
    console.log(pais)
})
// Saída: 0: Brasil, 1: Argentina, 2: Chile, 3: Uruguai

// map() - executa função para cada elemento e RETORNA novo array com os resultados
const paises2 = ["Brasil", "Argentina", "Chile", "Uruguai"]
const paisesMinusculos = paises2.map((pais) => {
    return pais.toLowerCase()
})
console.log(paisesMinusculos) // ["brasil", "argentina", "chile", "uruguai"]

// filter() - retorna novo array com apenas elementos que atendem uma condição
const notas2 = [6, 7, 8, 9, 10, 8.5, 6.3]
const notasAltas = notas2.filter((nota) => nota >= 8) // [8, 9, 10, 8.5]
console.log(notasAltas);

// find() - retorna o PRIMEIRO elemento que atende uma condição
const notaAlta = notas2.find((nota) => nota >= 8) // 8
console.log(notaAlta);

// some() - verifica se ALGUM elemento atende uma condição (retorna true/false)
const temNotaAlta = notas2.some((nota) => nota >= 8) // true
console.log(temNotaAlta);

// every() - verifica se TODOS elementos atendem uma condição (retorna true/false)
const todasAltas = notas2.every((nota) => nota >= 6) // true
console.log(todasAltas);

// reduce() - reduz array a um único valor (soma, produto, etc)
const somaNotas = notas2.reduce((acumulador, nota) => {
    return acumulador + nota
}, 0) // 57.8
console.log(somaNotas);

// ===== 4. OBJECT =====
// ===== 5. MATH =====
// ===== 6. DATE =====

// 2. BIBLIOTECAS DO NODE.JS
// Precisamos importar quando necessário
// Exemplo: const fs = require('fs'); // para manipular arquivos
// Exemplo: const path = require('path'); // para trabalhar com caminhos

// 3. BIBLIOTECAS DE TERCEIROS
// São baixadas via NPM (Node Package Manager) e adicionadas ao projeto
// 
// Exemplos de Bibliotecas:
// - Lodash: utilitários para manipular arrays e objetos
// - Axios: para fazer requisições HTTP
// - Charts.js: para criar gráficos
// - GSAP: para animações
// 
// Exemplos de Frameworks (bibliotecas mais completas):
// - React: biblioteca para interfaces de usuário
// - Vue: framework progressivo para interfaces
// - Angular: framework completo para aplicações
// - Next.js: framework React com recursos avançados
// - Express: framework para criar servidores Node.js
//
// Para instalar: npm install nome-da-biblioteca