export default function initTabNav() {
  const activClass = 'ativo';
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activClass);
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activClass, direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  } else {
    console.log("Erro, página não possui elemento necessário");
  }
}