const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 56;

const body = document.body;
body.style.display = 'flex';
body.style.gap = '.5em';
body.style.flexWrap = 'wrap';


const cria_cartao = (entrada) => { 

    const container_atleta = document.createElement('article');
    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = '#777777';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';
    
    container_atleta.dataset.id = entrada.id;
    container_atleta.dataset.altura = entrada.altura;
    container_atleta.dataset.nome_completo = entrada.nome_completo;
    container_atleta.dataset.nascimento = entrada.nascimento;
    
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

    container_atleta.onclick = manipulaClick;

    document.body.appendChild(container_atleta);
}

const manipulaClick = (e) => {
    console.log(e.target.closest('article').dataset.id);
}

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_json(url).then( (r) => console.log(r));

pega_json(`${url}/all`)
.then((r) => {
    for (atleta of r){
        cria_cartao(atleta)
    }});

console.log('síncrono');
