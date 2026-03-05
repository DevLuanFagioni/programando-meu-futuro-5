/**
 * ============================================================
 * REQUISIÇÕES DE API E FUNÇÕES ASSINCRONAS
 * ============================================================
 * 
 * O que aprender:
 * - Como fazer requisições HTTP usando a API Fetch
 * - Como trabalhar com Async/Await para operações assincronas
 * - Como manipular respostas em formato JSON
 * 
 * ============================================================
 */

/**
 * ============================================================
 * 1. FETCH API - CONCEITOS BÁSICOS
 * ============================================================
 * 
 * Fetch é a API moderna para fazer requisições HTTP em JavaScript.
 * 
 * - Método padrão: GET (recupera dados)
 * - Retorna: Uma Promise que resolve com a resposta
 * - Suporta: GET, POST, PUT, DELETE, etc.
 * 
 * Sintaxe básica:
 *   fetch(URL, [options])
 *     .then(resposta => resposta.json())
 *     .then(dados => console.log(dados))
 */

/**
 * ============================================================
 * 2. FUNÇÕES ASSINCRONAS (ASYNC/AWAIT)
 * ============================================================
 * 
 * O que é:
 * - ASYNC: Palavra-chave que declara uma função assincona
 * - AWAIT: Pausa a execução até a Promise ser resolvida
 * - Permite código mais limpo e legível que .then()
 * 
 * Benefícios:
 * - Código parece sincrónico, mas é não-bloqueante
 * - Erros podem ser capturados com try/catch
 * - Mais fácil de entender e manter
 * 
 * Fluxo:
 * 1. Define função como 'async'
 * 2. Usa 'await' antes de operações assincronas
 * 3. O resto do código continua rodando
 * 4. Quando await resolvéé, continua a função
 */

/**
 * ============================================================
 * 3. JSON - CONVERSÃO DE DADOS
 * ============================================================
 * 
 * JSON é o formato de dados padrão em APIs web.
 * 
 * Conversão:
 * - resposta.json(): Converte resposta JSON → Objeto JavaScript
 * - JSON.stringify(obj): Converte Objeto JavaScript → JSON
 * 
 * Exemplo:
 * - API retorna: '{"nome": "Gato", "url": "..."}'
 * - resposta.json() → { nome: "Gato", url: "..." }
 */

/**
 * ============================================================
 * EXEMPLO PRÁTICO: Buscar dados de uma API
 * ============================================================
 */

async function buscarDados() {
    // Faz requisição GET para a API de gatos
    const resposta = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    
    // Aguarda a conversão de JSON para objeto JavaScript
    const gatos = await resposta.json()
    
    // Itera sobre cada gato retornado
    gatos.forEach(gato => {
        console.log(gato.url);
    });
    
    return gatos // Retorna os dados processados
}

// Executa a função
buscarDados()

/**
 * ============================================================
 * RESUMO DO FLUXO
 * ============================================================
 * 
 * 1. fetch() → Faz requisição HTTP
 * 2. await → Espera a resposta chegar
 * 3. resposta.json() → Converte JSON para objeto
 * 4. await novamente → Espera a conversão
 * 5. Processa os dados com forEach()
 * 
 * Tudo isso de forma simples com async/await!
 */






