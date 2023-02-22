async function listaLivro(){
    const conexao = await fetch ("http://localhost:3000/livros");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaLivro (titulo, autor, preco, imagem,acessibilidade,quantidade,categoria){
    const conexao = await fetch("http://localhost:3000/livros",{
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
    const conexao = await fetch(`http://localhost:3000/livros?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conectaApi={
    listaLivro,
    criaLivro,
    buscaLivros
}




