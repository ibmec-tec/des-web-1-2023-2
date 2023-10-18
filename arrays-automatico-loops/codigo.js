//const ingrid = atletas[0];

const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (entrada) => { 

    const container_atleta = document.createElement('div');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    const titulo = document.createElement('h3');
    titulo.innerHTML = entrada.nome;
    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;
    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);
}


//atletas.forEach((atleta) => {cria_cartao(atleta)});

/*
let indice = 0;

while (indice < atletas.length){
    cria_cartao(atletas[indice]);
    console.log(indice);
    indice++;
}
*/

/*for(let indice = atletas.length - 1; indice >= 0; indice--){
    cria_cartao(atletas[indice]);
    console.log('loop for', indice);
}
*/

for (const atleta of atletas){
    cria_cartao(atleta);
    console.log('loop for of', atleta.id);
}

/*
const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_descricao.innerText = atleta.descricao;
}

preenche(atletas[3]);
*/  


