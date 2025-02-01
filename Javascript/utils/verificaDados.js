var infoUser = document.querySelector('#infoUser');

var info = `
    <p class="lead">Você ainda não possui dados cadastrados, cadastre e comece a user!</p>

` 

export function verificaDados() {
    var data = window.localStorage.getItem('data');
    if(data === null || data === '') {
        infoUser.innerHTML = info;
    }
}