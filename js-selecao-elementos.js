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

// forEach selecionar uma lista de itens do dom

// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array){
//     console.log(item, index, array);
// });

// forEach é um método array, alguns arrays-like possuem esse método
// caso não possua o ideial é transformá-los em um array

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item){
//     console.log(item);
// });


// Alternativa de escrita, removendo o function e usando => (fat arrow)
// 1 unico argumento n precisa de () forEach() => {}
// const imgs = document.querySelectorAll('img');
// imgs.forEach((item) => {
//     console.log(item);
// }) 

// const paragrafo = document.querySelectorAll('p');
// paragrafo.forEach(function(item){
//     console.log(item.innerText);
// });

// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item, index){
//     console.log(item, index);
// })

// let i = 0;
// imgs.forEach(() => {
//     console.log(i++);
// });

// imgs.forEach(() => console.log(i++));

const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('teste');
menu.classList.toggle('azul'); // adiciona ou remove

if (menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
}else {
    menu.classList.add('nao-possui-azul');
}

// console.log(menu.classList);

const img = document.querySelector('img');
img.setAttribute('alt', 'é uma raposa');
const possuiAlt = img.hasAttribute('alt');
img.removeAttribute('alt');

// console.log(possuiAlt);
// console.log(img.getAttribute('src'));

// adiciona ao 'a' a classe ativo
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
   item.classList.add('ativo'); 
});

itensMenu.forEach((item) => {
    item.classList.remove('ativo'); 
 });
itensMenu[0].classList.add('ativo');

console.log(itensMenu);

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
});

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://google.com');

console.log(link);

const section = document.querySelector(".animais");
section.clientWidth;
section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
// Também serve para o width!
section.offsetTop; // Distância entre o topo do elemento e o topo da página
section.offsetLeft; // Distância entre o canto esquerdo do elemento e o canto esquerdo da página

const listaAnimais = document.querySelector(".animais-lista");
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector("h2");

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

const testeRect = primeiroh2.getBoundingClientRect(); // retorna um objeto pode acessar os itens individualmente

window.innerHeight; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço
window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

// if (window.innerWidth < 600){
//     console.log('Tela menor que 600px');
// }

// // media query para verificar a largura do browser
// const small = window.matchMedia('(max-width: 600px)');
// if (small.matches) {
//     console.log('Usuário mobile');
// }else {
//     console.log('Usuário desktop');
// }

const primeiraImagem = document.querySelector("img");
const imgHeight = primeiraImagem.offsetTop;
// console.log(imgHeight);

// pega a largura de cada imagem e soma usando o foreach
// function somaLargura() {
//   const todasImagens = document.querySelectorAll("img");
//   let soma = 0;
//   todasImagens.forEach((imagem) => {
//     soma = soma + imagem.offsetWidth;
//   });
//   console.log(soma);
// }

// window.onload = function () {
//   somaLargura();
// };

// verifica o heigh e a width dos "a" no site verifica os pixels
const links = document.querySelectorAll("a");
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth && linkHeight < 48) {
    console.log("Não possui mínimo recomendado");
  } else {
    console.log("Possuem o mínimo recomendado");
  }
});

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if (browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}