// Exemplos de como selecionar tags e elementos no html
// const animais = document.getElementById('animais');
// const gridSection = document.getElementsByClassName('grid-section');
// const primeiraLi = document.querySelector('li');
// const primeiraUl = document.querySelector('ul');
// const linkInterno = document.querySelector('[href^="#"]');
// const animaisImg = document.querySelectorAll('.animais img');

const retornaImg = document.querySelectorAll("img");
console.log(retornaImg);

const imagensAnimais = document.querySelectorAll('img[src^="imagens/imagem"]');
console.log(imagensAnimais);

const pegarRef = document.querySelectorAll('[href^="#"]');
console.log(pegarRef);

const animaisH2 = document.querySelector(".animais-descricao h2");
console.log(animaisH2);

const paragrafos = document.querySelectorAll("p");
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

const menu = document.querySelector(".menu");

menu.classList.add("ativo", "teste");
menu.classList.remove("teste");
menu.classList.toggle("azul"); // adiciona ou remove

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// console.log(menu.classList);

const img = document.querySelector("img");
img.setAttribute("alt", "é uma raposa");
const possuiAlt = img.hasAttribute("alt");
img.removeAttribute("alt");

// console.log(possuiAlt);
// console.log(img.getAttribute('src'));

// adiciona ao 'a' a classe ativo
const itensMenu = document.querySelectorAll(".menu a");
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

console.log(itensMenu);

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

const link = document.querySelector('a[href^="http"]');
link.setAttribute("href", "https://google.com");

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

const browserSmall = window.matchMedia("(max-width: 720px)").matches;
if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}

// addEventListener
// adiciona uma função ao elemento, ativada quando o evento ocorrer, callback function

// const img = document.querySelector("img");
// elemento.addEventListener(event, callback, options)
// img.addEventListener("click", function () {
//   console.log("Clicou");
// });

// callback
// É uma boa prática separar a função de callback
// do addEventListener, ou seja, declarar uma função
// ao invés de passar diretamente uma função anônima.

function callback() {
  console.log("clicou");
}

// img.addEventListener("click", callback);
// img.addEventListener("click", callback());
// img.addEventListener("click", function () {
//   console.log("Clicou");
// });
// img.addEventListener("click", () => {
//   console.log("Clicou");
// });

// Event primeiro parâmetro do callback referente ao evento que ocorreu
// const animaisLista = document.querySelector('animais-lista');
// function executarCallback(event){
//     const currentTarget = event.currentTarget;
//     const target = event.target; // onde o clique ocorreu
//     const type = event.type; // tipo de evento
//     const path = event.path;
//     console.log(currentTarget, target, type, path);
// }

// animaisLista.addEventListener('click', executarCallback);

function callback(event) {
  console.log(event);
}

// img.addEventListener('click', callback);

// const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

// animaisLista.addEventListener('click', callbackLista);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event){
//   event.preventDefault();
//   console.log('Clicou');
// }

// linkExterno.addEventListener('click', handleLinkExterno);

// function handleKeyboard(event){
//   if (event.key === 'a') {
//     document.body.classList.toggle('azul');
//   }else if (event.key === 'v') {
//     document.body.classList.toggle('vermelho');
//   }
// }

// window.addEventListener('keydown', handleKeyboard);

// const imgs = document.querySelectorAll('img');
// function handleImg(event){
//   console.log(event.target);
// }
// imgs.forEach((img) => {
//   img.addEventListener('click', handleImg);
// });

// const linksInterno = document.querySelectorAll('a[href^="#"]');

// function handleLinkInterno(event) {
//   event.preventDefault();
//   linksInterno.forEach((link) =>{
//     link.classList.remove('ativo');
//   });
//   event.currentTarget.classList.add('ativo');
// }

// linksInterno.forEach((link) => {
//   link.addEventListener('click', handleLinkInterno);
// });

// const todosElementos = document.querySelectorAll('body *');

// function handleBody(event){
//   console.log(event.currentTarget);
//   // event.currentTarget.remove();
// }

// todosElementos.forEach((item) => {
//   const clicou = item.addEventListener('click', handleBody);
//   if (clicou) {
//     item.currentTarget.remove();
//   }
// });

function handleFont(event) {
  if (event.key === "t") {
    document.body.classList.toggle("aumentar-fonte");
  }
}

window.addEventListener("keydown", handleFont);

const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(animaisLista.innerText);

// const lista =  document.querySelector('.animais-lista');

// lista.parentElement; // Pai
// lista.parentElement.parentElement; // Pai do pai
// lista.previousElementSibling; // Elemento acima
// lista.nextElementSibling; // Elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // Primeiro filho
// lista.children[--lista.children.length]; // Último filho

// lista.querySelectorAll('li'); // Todas as LI's
// lista.querySelectorAll('li:last-child'); // Último filho

// Element vs Node
// Element's representam um elemento html, ou seja, uma tag.
// Node representa um nó, e pode ser um elemento (Element),
// texto comentário, quebra de linha e mais.

const lista =  document.querySelector('.animais-lista');

// lista.previousElementSibling; // Elementos acima
// lista.previousSibling; // Node acima

// lista.firstChild; // Primeiro node child
// lista.childNodes; // Todos os node child

// const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(titulo); // Move lista para o final de contato
contato.insertBefore(lista, titulo); // Insere a lista antes de título
contato.removeChild(lista); // Remove o título de contato
contato.replaceChild(lista, titulo); // Substitui o título por lista

const animais = document.querySelector('animais');
const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

// Clonar Elementos
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado
// no anterior, é necessário utilizar o método cloneNode()

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo; // titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true); // true sinaliza para incluir os filhos
const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

const primeiroDt = document.querySelector('.faq');
// const primeiroElemento = primeiroDt.querySelector('dt');;
// const proximoElemento = primeiroElemento.nextElementSibling;

const animais = document.querySelector('.animais');
primeiroDt.innerHTML = animais.innerHTML;
