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


