// export default function initAccordion() {
//   const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
//   const activClass = 'ativo';
  
//   function activeAccordion() {
//     this.classList.toggle(activClass);
//     this.nextElementSibling.classList.toggle(activClass);
//   }

//   if (accordionList.length) {
//     accordionList[0].classList.add(activClass);
//     accordionList[0].nextElementSibling.classList.add(activClass);

//     accordionList.forEach((item) => {
//       item.addEventListener('click', activeAccordion);
//     });
//   } else {
//     console.log("Erro, página não possui elemento necessário");
//   }
// }

export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activClass = 'ativo';
  }
  
  toggleAccordion(item) {
    item.classList.toggle(this.activClass);
    item.nextElementSibling.classList.toggle(this.activClass);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item da lista
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
