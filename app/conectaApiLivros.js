// async function listaLivro(){
//     const conexao = await fetch ("http://localhost:3000/livros");
//     const conexaoConvertida = await conexao.json();
//     return conexaoConvertida;
// }

// async function criaLivro (titulo, preco, autor, imagem, alt, quantidade, categoria){
//     const conexao = await fetch("http://localhost:3000/livros",{
//         method: "POST",
//         headers:{
//             "content-type":"aplication/json"
//         },
//         body: JSON.stringify({
//             titulo: titulo,
//             preco: preco,
//             autor: autor,
//             imagem: imagem,
//             alt: alt,
//             quantidade: quantidade,
//             categoria: categoria
//         })

//     });
//     const conexaoConvertida = await conexao.json();
//     return conexaoConvertida
// }

// async function buscaLivro(termoDeBusca){
//     const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
//     const conexaoConvertida = conexao.json();

//     return conexaoConvertida;
// }

// export const conectaApi={
//     listaLivro,
//     criaLivro,
//     buscaLivro
// }