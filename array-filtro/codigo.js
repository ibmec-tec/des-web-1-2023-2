

const body = document.body;

const pesquisa = document.createElement('div');
const texto_pesquisado = document.createElement('input');
const btn_pesquisar = document.createElement('button');

pesquisa.style.textAlign = 'center';

btn_pesquisar.innerHTML = "Pesquisar";
btn_pesquisar.onclick = () => {filtrar(texto_pesquisado.value)};

pesquisa.appendChild(texto_pesquisado);
pesquisa.appendChild(btn_pesquisar);
body.appendChild(pesquisa);

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


const constroi_atletas = (lista_atletas) => {
    for (const atleta of lista_atletas){
        cria_cartao(atleta);
    }
}

const filtrar = (entrada) => {
    const filtrado = atletas.filter(
        (ele) => ele.nome.toLowerCase().includes(entrada.toLowerCase())
    );
    constroi_atletas(filtrado);
}

// constroi_atletas(filtrado);  


