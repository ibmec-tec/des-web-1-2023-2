const params = new URLSearchParams(window.location.search);

document.getElementById('id').innerHTML = params.get('id');
document.getElementById('nome').innerHTML = params.get('nome_completo');