

async function listaLivro(){
    const conexao = await fetch ("https://natanielima.github.io/casadocodigo/db.json");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaLivro (titulo, autor, preco, imagem,acessibilidade,quantidade,categoria){
    const conexao = await fetch("https://natanielima.github.io/casadocodigo/db.json",{
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            preco: preco,
            autor: autor,
            imagem: imagem,
            alt: acessibilidade,
            quantidade: quantidade,
            categoria: categoria
        })

    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function buscaLivros(termoDeBusca){
    const conexao = await fetch(`https://github.com/Natanielima/livrosalura/edit/master/db.json?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}


export const conectaApi={
    listaLivro,
    criaLivro,
    buscaLivros
}




