import AnimaNumeros from './anima-numeros.js';
import initAnimaNumeros from './anima-numeros.js';
export default function fetachAnimais(url, target) {    
    // Cria a div contendo informações com o total de animais
    function createAnimal(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
        return div;
    }

    // Preenche cada animal no DOM
    const numerosGrid = document.querySelector(target);
    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    };

    // Anima os números de cada animal
    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
        animaNumeros.init();
    }

    // Puxa os animais através de um json
    // e cria cada animal utilizando createAnimal
    async function criarAnimais() {
        try {
            const animaisResponse = await fetch(url);
            // Transforma a resposta em JSON
            const animaisJSON = await animaisResponse.json();
            animaisJSON.forEach(animal => preencherAnimais(animal));
            animaAnimaisNumeros();
        } catch(erro) {
            console.log(erro);
        }
    };

    return criarAnimais();
}
