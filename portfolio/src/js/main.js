
// SELECIONAR ELEMENTOS
const elemento = document.querySelector(".depoimentos-conteudo > div > h2");

elemento.setAttribute("id", "depoimento");
elemento.removeAttribute("id");

elemento.classList.add("depoimento");
elemento.classList.remove("depoimento");
elemento.classList.contains("depoimento");
elemento.classList.toggle("depoimento");

elemento.style.backgroundColor = "#f00";
elemento.style.fontSize = "24px";

elemento.innerText = "Teste"
elemento.innerHTML = `
    <span> SPAN </span>
`;

function teste(params) {
    console.log("teste");
}
elemento.addEventListener("click", teste)

