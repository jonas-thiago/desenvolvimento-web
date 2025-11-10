let url = 'https://rickandmortyapi.com/api/character'

async function buscarDados() {
    let resposta = await fetch(url)
    let body = await resposta.json()
    let conteudo = document.getElementById('conteudo')
        
    for (let i =0; i < body.results.length; i++) {
        let item = document.createElement('p')
        item.innerHTML = `${body.results[i].name} - ${body.results[i].species}`
        conteudo.appendChild(item)
    }
}

buscarDados()

async function listarDados(){
    let resposta = await fetch(url)
    let body = await resposta.json()
    let lista = document.getElementById('lista')
    for (let i=0; i < body.results.length; i++){
        let item = document.createElement('li')
        //item.innerHTML = `${body.results[i].name} - ${body.results[i].species}`
        item.textContent = `${body.results[i].name} - ${body.results[i].species}`
        lista.appendChild(item)
    }
}

listarDados()






