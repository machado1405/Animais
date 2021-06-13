// export default function initTabNav() {
//   const activClass = 'ativo';
//   const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
//   const tabContent = document.querySelectorAll('[data-tab="content"] section');

// import initAnimacaoScroll from "./animacao-scroll";

//   if (tabMenu.length && tabContent.length) {
//     tabContent[0].classList.add(activClass);

//     function activeTab(index) {
//       tabContent.forEach((section) => {
//         section.classList.remove(activClass);
//       });
//       const direcao = tabContent[index].dataset.anime;
//       tabContent[index].classList.add(activClass, direcao);
//     }

//     tabMenu.forEach((itemMenu, index) => {
//       itemMenu.addEventListener('click', () => {
//         activeTab(index);
//       });
//     });
//   } else {
//     console.log("Erro, página não possui elemento necessário");
//   }
// }

export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activClass = 'ativo';
  }

  // Ativa a tab de acordo com index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activClass, direcao);
  }

  // Adicionaos eventos  as tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}