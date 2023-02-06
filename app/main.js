let livros =[]

const endpointDaAPI='https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBsucarLivrosDaAPI()


async function getBsucarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto)
}




