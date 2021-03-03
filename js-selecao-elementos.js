// Exemplos de como selecionar tags e elementos no html
// const animais = document.getElementById('animais');
// const gridSection = document.getElementsByClassName('grid-section');
// const primeiraLi = document.querySelector('li');
// const primeiraUl = document.querySelector('ul');
// const linkInterno = document.querySelector('[href^="#"]');
// const animaisImg = document.querySelectorAll('.animais img'); 


const retornaImg = document.querySelectorAll('img');
console.log(retornaImg);

const imagensAnimais = document.querySelectorAll('img[src^="imagens/imagem"]');
console.log(imagensAnimais);

const pegarRef = document.querySelectorAll('[href^="#"]');
console.log(pegarRef);

const animaisH2 = document.querySelector('.animais-descricao h2');
console.log(animaisH2);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);