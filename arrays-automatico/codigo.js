//const ingrid = atletas[0];

const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (entrada) => { 

    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
}


atletas.forEach((atleta) => {cria_cartao(atleta)});

/*
const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_descricao.innerText = atleta.descricao;
}

preenche(atletas[3]);
*/  


