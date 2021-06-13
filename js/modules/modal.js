// export default function initModal() {
//     const botaoAbrir = document.querySelector('[data-modal="abrir"]');
//     const botaoFechar = document.querySelector('[data-modal="fechar"]');
//     const containerModal = document.querySelector('[data-modal="container"]');

//     if (botaoAbrir && botaoFechar && containerModal) {
//         function toggleModal(event) {
//             event.preventDefault();
//             containerModal.classList.toggle('ativo');
//         }

//         function clickForaModal(event) {
//             event.target === this ? toggleModal(event) : true;
//         }

//         botaoAbrir.addEventListener('click', toggleModal);
//         botaoFechar.addEventListener('click', toggleModal);
//         containerModal.addEventListener('click', clickForaModal);
//     }
// }

export default class Modal {
    constructor(abrir, fechar, container) {
        this.botaoAbrir = document.querySelector(abrir);
        this.botaoFechar = document.querySelector(fechar);
        this.containerModal = document.querySelector(container);
        // bind diz ao callback para referenciar ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickForaModal = this.clickForaModal.bind(this);
    }

    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    clickForaModal(event) {
        event.target === this.containerModal ? this.toggleModal() : true;
    }

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.clickForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }
}
