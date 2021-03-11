// addEventListener
// adiciona uma função ao elemento, ativada quando o evento ocorrer, callback function

const img = document.querySelector("img");
// elemento.addEventListener(event, callback, options)
img.addEventListener("click", function () {
  console.log("Clicou");
});

// callback
// É uma boa prática separar a função de callback
// do addEventListener, ou seja, declarar uma função
// ao invés de passar diretamente uma função anônima.

function callback() {
  console.log("clicou");
}

img.addEventListener("click", callback);
img.addEventListener("click", callback());
img.addEventListener("click", function () {
  console.log("Clicou");
});
img.addEventListener("click", () => {
  console.log("Clicou");
});

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