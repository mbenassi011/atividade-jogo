const jogos = []

function criarjogos(){
    const nomeJogo = prompt("Qual é o nome do jogo?")
    const marcaJogo  = prompt("Qual é a marca?")

    const novoJogo = {
        id: jogos.length +1,
        nome: nomeJogo,
        marca: marcaJogo
    }
jogos.push(novoJogo)

}

function listarjogos(){
    let lista = ""

    for (let i = 0; i < jogos.length;i++){
        lista += `Id: ${jogos[i].id}, Nome: ${jogos[i].nome}, marca ${jogos[i].marca}\n`
    }
    alert("Lista de jogos: \n\n" + lista)
}

function removerjogos(){
    const idJogos = prompt("Digite o id do jogo que você deseja deletar ")

    const index = jogos.findIndex(a => a.id == idJogos)

 if(index == -1){
    alert("jogo não encontardo")
 }else{
    jogos.splice(index, 1)
    alert("jogo deletado com sucesso")
    }
}

function buscarjogos(){
    const nomeJogo= prompt ("Digite o nome do jogo que você deseja buscar")

    const jogoEncontrado = jogos.find (a => a.nome.toLowerCase() == nomeJogo.toLocaleLowerCase())

    if(jogoEncontrado){
        alert("jogo encontrado \n, id: " + jogoEncontrado.id + 
        "nome: " + jogoEncontrado.nome +
        "email: " +jogoEncontrado.marca)
    }else{
        alert("Nenhum jogo encontrado") 
    }
}

function removerultimo(){

  jogos.pop();

 alert("Ultimo jogo removido")
}

function limpartudo(){
    
    jogos.length = 0

    alert("Jogos removidos")
}

function quantidadejogos(){
    alert("Quantidade de jogos: " + jogos.length)
}
     

