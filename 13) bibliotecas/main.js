import axios from "axios"

async function buscarGatos() {
    const dados = await axios.get("https://api.thecatapi.com/v1/images/search")
    console.log(dados);
}
buscarGatos()