import { conectaApi } from "./main.js"


const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

export default function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML=''
    elementoParaInserirLivros.innerHTML=''
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificarDisponibilidadeDoLivro(livro);
      let disponibilidade = livro.quantidade>0 ? 'livro__imagens': 'livro__imagens indisponivel'
        elementoParaInserirLivros.innerHTML+=`<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livros.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(1)}0</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}

async function listaLivro(){
  try{

  const listaAPI = await conectaApi.listaLivro();
  exibirOsLivrosNaTela(listaAPI.livros)
  } catch{
      lista.innerHTML=`<h2 class="mensagem__titulo">Não foi possível carregar a lista de livros</h2>`
  }
}

listaLivro();

// function verificarDisponibilidadeDoLivro (livro) {
//   if(livro.quantidade>0){
//     return 'livro__imagens'
//   }else{
//     return 'livro__imagens indisponivel'
//   }
// }