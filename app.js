//Permitir incerir o nome de amigos numa lista. Realizar o sorteio aleatório de um amigo da lista. usar o botão adicionar para incerir novos amigos. Exibir os nomes inceridos abaixo do botão adicionar. Exibir o nome do amigo sorteado abaixo da lista de amigos.

let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nomeAmigo = input.value.trim();
    if (nomeAmigo != '') {
        amigos.push(nomeAmigo);
        input.value = '';
        exibirAmigos();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        let resultado = document.getElementById('resultado');
        resultado.textContent = amigoSorteado;
    } else {
        alert('A lista de amigos está vazia.');
    }
}

document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigo);
document.getElementById('nomeAmigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});
document.getElementById('sortear').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sortearAmigo();
    }
});