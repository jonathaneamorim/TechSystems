var infoUser = document.querySelector('#infoUser');

var info = `
    <p class="lead">Você ainda não possui dados cadastrados, cadastre e comece a usar!</p>
` 

export function verificaDados() {
    
    var data = window.localStorage.getItem('data');

    const layout = {
        "produtos": [],
        "entregas": [],
        "pedidos": [],
        "assistencias": []
    };

    if(data === null || data === '') {
        infoUser.innerHTML = info;
        window.localStorage.setItem('data', JSON.stringify(layout));
    }
}

export function verificaProdutos() {
    var listaProdutos = window.localStorage.getItem('data');
}