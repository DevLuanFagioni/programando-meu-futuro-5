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
// buscarDados()

async function getMovies(pagina) {
    if (!pagina) {
        return "Precisa passar uma pagina"
    }

    const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjI4MjQzOTkwZmMxNTNmNTFhOTJiMWM5YWI5YTRlMSIsIm5iZiI6MTcyOTAwOTg3OS44LCJzdWIiOiI2NzBlOThkN2Q1ZjkzYTNkYTBiYzYyMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sK77erEYNapVaTdoIzPrs9ONLMSA9XqVRKCZgs_g7To"

    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-br&page=${pagina}`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    
    if (!res.ok) {
        return "Falha na requisição, tente novamente."
    }
    
    const filmes = await res.json()

    filmes.results.forEach((filme)=>{
        const {title, overview, vote_average, release_date} = filme
        console.log("Titulo: " + title);
        console.log("Nota: " + vote_average);
        console.log("Data: " + release_date);
        console.log("Descrição: " + overview);
        console.log("--------------");
        
    })

}
getMovies(2)
getMovies()


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






