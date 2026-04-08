const container = document.querySelector("#filmes");

async function buscarFilmes() {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=pt-br",{
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer TOKEN_AQUI'
        }
    });

    const dados = await res.json();
    const filmes = dados.results;

    filmes.forEach(filme => {
        container.innerHTML += `
            <div class="filme" >
                <h2>${filme.title}</h2>
                <p>${filme.overview}</p>
            </div>
        `
    });
    

}
buscarFilmes()