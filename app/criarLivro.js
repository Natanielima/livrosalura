
import { conectaApi } from "./main.js";

const formulario = document.querySelector("[data-formulario]");



async function criaLivro2(evento){
    evento.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const autor = document.querySelector("[data-autor]").value;
    const precoString = document.querySelector("[data-preco]").value;
    const preco= parseInt(precoString);
    const imagem = document.querySelector("[data-imagem]").value;    
    const acessibilidade = document.querySelector("[data-acessibilidade]").value;
    const quantidadeString = document.querySelector("[data-quantidade]").value;
    const quantidade= parseInt(quantidadeString);
    const categoria = document.querySelector("[data-categoria]").value;

    await conectaApi.criaLivro(titulo, autor, preco, imagem,acessibilidade,quantidade,categoria);
}

formulario.addEventListener("submit", evento => criaLivro2(evento));

