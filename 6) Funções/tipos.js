/**
 * ============================================================
 * TIPOS DE FUNÇÕES EM JAVASCRIPT
 * ============================================================
 * Existem diferentes sintaxes para definir funções em JavaScript.
 * Cada tipo possui características específicas e casos de uso apropriados.
 * 
 * Tipos abordados:
 * 1. Função Declarada (Function Declaration)
 * 2. Função Anônima (Anonymous Function)
 * 3. Arrow Function (Função Flecha)
 */

/**
 * ============================================================
 * 1. FUNÇÃO DECLARADA
 * ============================================================
 * É a forma tradicional de declarar uma função em JavaScript.
 * 
 * Características principais:
 * - Sofre hoisting (pode ser chamada antes de ser declarada)
 * - Pode ser nomeada ou anônima
 * - Usa a palavra-chave: function
 * - Tem seu próprio contexto 'this'
 * 
 * Utilizamos quando:
 * - Precisamos de uma função reutilizável e bem definida
 * - Queremos aproveitar o hoisting
 * - Trabalhamos com métodos de objetos tradicionais
 */

function funcaoDeclarada(parametro) {
  console.log(parametro);
  return parametro
}

// Chamando a função declarada
funcaoDeclarada('Sou uma função declarada');

/**
 * ============================================================
 * 2. FUNÇÃO ANÔNIMA
 * ============================================================
 * É uma função sem nome, normalmente armazenada em uma variável.
 * 
 * Características principais:
 * - Não sofre hoisting (não pode ser chamada antes da declaração)
 * - É atribuída a uma variável ou passada como argumento
 * - Usa a palavra-chave: function
 * - Tem seu próprio contexto 'this'
 * 
 * Utilizamos quando:
 * - Queremos encapsular código em uma variável
 * - Vamos usar a função como callback
 * - Precisamos trabalhar com métodos de objetos
 * 
 * EXEMPLO BÁSICO:
 */

const funcaoAninima = function(parametro) {
  console.log(parametro);
  return parametro;
}

// Chamando a função anônima
funcaoAninima('Sou uma função anônima');

/**
 * EXEMPLO COM OBJETO:
 * A palavra-chave 'this' dentro de um método se refere ao objeto proprietário.
 * No exemplo abaixo, 'this' se refere ao objeto 'pessoa'.
 */

const pessoa = {
    nome: 'João',
    sobreNome: 'Silva',
    idade: 30,
    peso: 80,
    altura: 1.75,
    falar: function() {
        return "OLÁ MEU NOME É: " + this.nome + " " + this.sobreNome 
    }
}

console.log(pessoa.falar());

/**
 * ============================================================
 * 3. ARROW FUNCTION (FUNÇÃO FLECHA)
 * ============================================================
 * Sintaxe moderna e concisa introduzida no ES6 (2015).
 * 
 * Características principais:
 * - Sintaxe mais curta e legível
 * - Não sofre hoisting
 * - Herda o contexto 'this' do escopo externo (não tem seu próprio 'this')
 * - Ideal para funções pequenas e callbacks
 * 
 * Sintaxe:
 * const nome = (parametros) => { corpo da função }
 * const nome = parametro => { corpo da função }  // um parâmetro (parênteses opcionais)
 * const nome = () => valor                        // sem parâmetros ou retorno único
 * 
 * Utilizamos quando:
 * - Precisamos de uma sintaxe mais compacta
 * - Vamos usar como callback (array.map, array.filter, etc)
 * - NÃO precisamos do próprio contexto 'this'
 * - Queremos funcionalidade moderna
 * 
 * EXEMPLO BÁSICO:
 */

const funcaoArrow = (parametro) => {
  console.log(parametro);
  return parametro;
}

// Chamando a arrow function
funcaoArrow('Sou uma arrow function');

/**
 * EXEMPLO: Arrow Function com sintaxe simplificada
 * Quando há um único parâmetro e um único return, podemos omitir parênteses e chaves.
 */

const saudacao = nome => "Olá, " + nome;
console.log(saudacao("Maria"));

/**
 * IMPORTANTE: Arrow Function e 'this'
 * Arrow functions NÃO têm seu próprio 'this'.
 * Elas herdam 'this' do escopo externo (pai).
 * 
 * Por isso, usar arrow function dentro de um método de objeto pode causar problemas:
 */

const pessoa2 = {
    nome: 'João',
    sobreNome: 'Silva',
    idade: 30,
    peso: 80,
    altura: 1.75,
    // ❌ Problema: 'this' não se refere ao objeto 'pessoa2', mas ao escopo externo
    falar: () => {
        return "OLÁ MEU NOME É: " + this.nome + " " + this.sobreNome 
    },
    // ✓ Solução: Usar função anônima comum em métodos
    apresentar: function() {
        return "OLÁ MEU NOME É: " + this.nome + " " + this.sobreNome 
    }
}

console.log(pessoa2.apresentar());

/**
 * ============================================================
 * RESUMO: QUANDO USAR CADA TIPO?
 * ============================================================
 * 
 * FUNÇÃO DECLARADA:
 * - Funções principais e reutilizáveis
 * - Quando precisa de hoisting
 * - Métodos de objetos tradicionais
 * 
 * ARROW FUNCTION:
 * - Métodos de objetos
 * - Callbacks simples (map, filter, setTimeout, etc)
 * - Funções que trabalham no contexto do escopo pai
 * - Código moderno e conciso
 */
