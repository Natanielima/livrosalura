
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
    const categoria = document.querySelector("[data-categoriaTipos]").value;

    await conectaApi.criaLivro(titulo, autor, preco, imagem,acessibilidade,quantidade,categoria);
}

formulario.addEventListener("submit", evento => criaLivro2(evento));

const selecaoPrincipal=document.getElementById("categoriaTipos");
const selecaoSecundaria = document.getElementById("categoriaSubTipos");



   const tipos = [{"item":1, "Tipo": "Programação"},
                 {"item":2, "Tipo": "Mobile"},
                 {"item":3, "Tipo": "Front-End"},
                 {"item":4, "Tipo": "Infraestrutura"},
                 {"item":5, "Tipo": "Business"},
                 {"item":6, "Tipo": "Desing & UX"}
                ];
    const subTipos=[{"id":1, "subTipos": "Lógica"},
                {"id":1, "subTipos": "Java"},
                {"id":1, "subTipos": ".NET"},
                {"id":1, "subTipos": "PHP"},
                {"id":1, "subTipos": "Games"},
                {"id":1, "subTipos": "OO"},
                {"id":1, "subTipos": "Funcional"},
                {"id":1, "subTipos": "Python"},
                {"id":1, "subTipos": "Outros"},
                {"id":2, "subTipos": "iOS"},
                {"id":2, "subTipos": "Android"},
                {"id":2, "subTipos": "Multiplataforma"},
                {"id":2, "subTipos": "Outros"},
                {"id":3, "subTipos": "HTML e CSS"},
                {"id":3, "subTipos": "JavaScript"},
                {"id":3, "subTipos": "Outros"},
                {"id":4, "subTipos": "Web"},
                {"id":4, "subTipos": "Dados"},
                {"id":4, "subTipos": "Outros"},
                {"id":5, "subTipos": "Startup"},
                {"id":5, "subTipos": "Marketing Digital"},
                {"id":5, "subTipos": "Gestão"},
                {"id":5, "subTipos": "Agile"},
                {"id":5, "subTipos": "Outros"},
                {"id":6, "subTipos": "Desing & UX"},
            ];
window.addEventListener('load', ()=>{
    const options = document.createElement("optgroup");
    options.setAttribute('label', 'Selecione abaixo a categoria que deseja')

    tipos.forEach(nomeTipo => {
        options.innerHTML+='<option>'+nomeTipo.Tipo+'</option>'
    });

    selecaoPrincipal.append(options);
});

selecaoPrincipal.addEventListener('change',()=>{

    limpaCampo(selecaoSecundaria);

    const valorItemSelecionado = selecaoPrincipal.value;
    const itemSelecionadoPrimeiro = tipos.filter(produto=>produto.Tipo==valorItemSelecionado);
    const numeroItemSelecionadoPrimeiro = itemSelecionadoPrimeiro[0].item;

    let options = ''

    subTipos.forEach(nomeTipo => {
        if(nomeTipo.id===numeroItemSelecionadoPrimeiro){
            options+='<option>'+nomeTipo.subTipos+'</option>'
        }
    });
    selecaoSecundaria.innerHTML=options; 
});

function limpaCampo(campoCombo) {
    while (campoCombo.length) {
        campoCombo.remove(0);
    }
}

console.log(document.querySelector("[data-categoriaTipos]").value)





