/**
 * ============================================================
 * DESESTRUTURAÇÃO (DESTRUCTURING)
 * ============================================================
 * 
 * Desestruturação é uma forma elegante e eficiente de extrair
 * múltiplas variáveis a partir de um objeto ou array em uma 
 * única linha de código, sem precisar acessar cada propriedade
 * ou elemento individualmente.
 * 
 * Benefícios principais:
 * • Sintaxe mais limpa e legível
 * • Menos repetição de código
 * • Facilita trabalhar com estruturas de dados complexas
 * • Reduz necessidade de acessar propriedades várias vezes
 * 
 * Operador: = para atribuição, {} para objetos, [] para arrays
 */


/**
 * ============================================================
 * 1. DESESTRUTURAÇÃO DE OBJETOS
 * ============================================================
 * 
 * Permite extrair propriedades de um objeto e criar variáveis
 * com o mesmo nome das propriedades (ou nomes customizados).
 * 
 * Sintaxe: const {propriedade1, propriedade2, ...} = objeto
 * 
 * A ordem NÃO importa, apenas os nomes das propriedades.
 */

const pessoa = {
    nome: "Luan",
    sobreNome: "Fagioni",
    idade: "24",
    email: "luan@gmail.com",
    nomeCompleto: ()=>{
        return this.nome + this.sobreNome
    }
}

// Extrae apenas as propriedades que nos interessam
// Cria 3 variáveis locais com esses valores
const {nome, idade, email} = pessoa
console.log(nome, idade, email); // "Luan" "24" "luan@gmail.com"

// Agora temos acesso direto às variáveis sem precisar usar pessoa.nome, pessoa.idade, etc.


/**
 * ============================================================
 * 2. DESESTRUTURAÇÃO DE ARRAYS
 * ============================================================
 * 
 * Permite extrair elementos de um array baseado na POSIÇÃO
 * (ordem importa aqui, diferente de objetos).
 * 
 * Sintaxe: const [elem1, elem2, elem3, ...] = array
 * 
 * Você pode pular elementos usando apenas a vírgula.
 */

const notas = [10, 9, 7, 4, 2]

// Obtém os 3 primeiros elementos do array
let [primeiro, segundo, terceiro] = notas 
console.log(primeiro, segundo, terceiro); // 10, 9, 7

// Note: quarto e quinto elementos (4, 2) foram ignorados

// Exemplo ignorando um elemento do meio:
const [nota1, , nota3] = notas
console.log(nota1, nota3); // 10, 7 (elemento 2 foi pulado)


/**
 * ============================================================
 * 3. DESESTRUTURAÇÃO EM LOOPS (forEach, for...of, etc)
 * ============================================================
 * 
 * Muito útil quando você está iterando sobre uma coleção de 
 * objetos ou arrays. Extrae os dados direto no parâmetro do
 * loop.
 */

const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 28, email: "ana.silva@email.com", banco: "Nubank", saldo: 1500.5, ativo: true },
  { id: 2, nome: "João Souza", idade: 35, email: "joao.souza@email.com", banco: "Itaú", saldo: -450, ativo: true },
  { id: 3, nome: "Maria Oliveira", idade: 42, email: "maria.o@email.com", banco: "Bradesco", saldo: 3200.75, ativo: true },
]

// SEM desestruturação (tradicional):
// usuarios.forEach((usuario) => {
//   console.log(usuario.nome, usuario.saldo, usuario.banco);
// })

// COM desestruturação (mais limpo):
usuarios.forEach(({nome, saldo, banco, ativo}) => {
    console.log(nome, saldo, banco, ativo);
    // Extrae as propriedades direto no parâmetro da função
})


/**
 * ============================================================
 * 4. OPERADOR REST (...resto)
 * ============================================================
 * 
 * O operador REST (repouso/resto) captura os elementos 
 * restantes de um array ou as propriedades restantes de um 
 * objeto em uma nova variável.
 * 
 * Sintaxe: ...nomeVariavel
 * • Em arrays: obtém elementos não desestruturados
 * • Em objetos: obtém propriedades não desestruturadas
 * • DEVE SER O ÚLTIMO elemento da desestruturação
 * • Cria um novo array/objeto com os valores restantes
 */

// ===== REST COM ARRAYS =====
const notas2 = [10, 8, 7, 5, 6, 8]

// Obtém primeiro e segundo nota, e o resto em um array
const [primeiro2, segundo2, ...resto2] = notas2
console.log(primeiro2); // 10
console.log(segundo2);  // 8
console.log(resto2);    // [7, 5, 6, 8] - um novo array com os restantes

// Exemplo prático: separando principal das demais séries
const seriesBuscadas = ["The good doctor", "TWD", "Vikings", "mentalist", "a casa do dragrão"]
const [principal, ...series] = seriesBuscadas
console.log(principal); // "The good doctor"
console.log(series);    // ["TWD", "Vikings", "mentalist", "a casa do dragrão"]

// ===== REST COM OBJETOS =====
const usuario = {
    nome2: "Luan",
    sobreNome2: "Fagioni",
    idade2: "24",
    email2: "luan@gmail.com",
    nomeCompleto: ()=>{
        return this.nome2 + this.sobreNome2
    }
}

// Extrae nome2 e idade2, e coloca o resto em 'restante'
const {nome2, idade2, ...restante} = usuario
console.log(nome2);      // "Luan"
console.log(idade2);     // "24"
console.log(restante);   // {sobreNome2: "Fagioni", email2: "luan@gmail.com", nomeCompleto: [Function]}


/**
 * ============================================================
 * 5. OPERADOR SPREAD (...spread)
 * ============================================================
 * 
 * O operador SPREAD (espalhar) expande um array ou objeto 
 * para seus elementos individuais. É usado para:
 * • Juntar arrays ou objetos
 * • Copiar arrays ou objetos
 * • Passar elementos como argumentos para funções
 * 
 * Sintaxe: ...variavel
 * 
 * Nota: Spread e Rest usam a mesma sintaxe (...) mas têm 
 * propósitos diferentes:
 * • REST: agrupa elementos (lado esquerdo do =)
 * • SPREAD: espalha elementos (lado direito do =)
 */

// ===== SPREAD COM ARRAYS =====
const filmes1 = ["A", "B", "C"]
const filmes2 = ["D", "E", "F"] 

// Junta dois arrays em um novo array
const filmesCompleto = [...filmes1, ...filmes2]
console.log(filmesCompleto); // ["A", "B", "C", "D", "E", "F"]

// Você pode adicionar elementos no meio
const filmesOrdenados = [filmes1[0], ...filmes2, ...filmes1.slice(1)]
console.log(filmesOrdenados); // ["A", "D", "E", "F", "B", "C"]

// ===== SPREAD COM OBJETOS =====
const usuario1 = { nome: "Luan", idade: 24 }
const usuario2 = { email: "luan@gmail.com", banco: "Nubank" }

// Junta dois objetos em um novo objeto
const usuarioCompleto = { ...usuario1, ...usuario2 }
console.log(usuarioCompleto); 
// { nome: "Luan", idade: 24, email: "luan@gmail.com", banco: "Nubank" }

// Sobrescrita de propriedades (última sobrescreve a anterior):
const usuario3 = { ...usuario1, idade: 25, ativo: true }
console.log(usuario3); 
// { nome: "Luan", idade: 25, ativo: true } - idade foi sobrescrita

