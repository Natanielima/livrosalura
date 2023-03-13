


import { conectaApi } from "./main.js";
import exibirOsLivrosNaTela from "./exibirLivros.js";

const elementoComValorTotalDeLivrosDisponiveis = document.querySelector("#valor_total_livros_disponiveis")

function exibirValorTotalDosLivrosDisponiveisNaTela(somaTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML=`
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$${somaTotal},00</span></p>
    </div>
    `
}
const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn=> btn.addEventListener('click', filtrarLivros))

async function filtrarLivros(){
    const id = this.id  
    if(id!="btnFiltrarLivrosTodos"){
    const elementoBtn = document.getElementById(id);
    const categoria = elementoBtn.value;

    const livrosCompletos = await conectaApi.listaLivro();
    const livros= livrosCompletos.livros
    const livrosFiltrados = (categoria=='disponivel' ? livros.livros.filter(livro => livro.quantidade > 0) :  livros.filter(livro =>livro.categoria==categoria));
    console.log(livrosFiltrados)
    const somaTotal = livrosFiltrados.reduce(getTotal,0);
    function getTotal(total,item){
        return total + (item.preco)
    }
    exibirOsLivrosNaTela(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(somaTotal)
    }else{
        const livros = await conectaApi.listaLivro();
        const somaTotal = livros.reduce(getTotal,0);
    function getTotal(total,item){
        return total + (item.preco)
    }
        exibirOsLivrosNaTela(livros)
        exibirValorTotalDosLivrosDisponiveisNaTela(somaTotal)
    }
}




async function buscaVideos(evento){
    evento.preventDefault();   
    const dadosDePesquisa = document.querySelector(".pesquisar").value;
    const busca = await conectaApi.buscaLivros(dadosDePesquisa);

    const lista =document.querySelector("#livros");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    const somaTotal = busca.reduce(getTotal,0);
    function getTotal(total,item){
        return total + (item.preco)
    }
    exibirOsLivrosNaTela(busca);
    exibirValorTotalDosLivrosDisponiveisNaTela(somaTotal);
}

const botaoDePesquisa = document.querySelector(".btn-ativa-pesquisa");
botaoDePesquisa.addEventListener("click", evento => buscaVideos(evento) )
