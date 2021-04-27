export default function initAccordion() {
  const activClass = 'ativo';
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  if (accordionList.length) {
    accordionList[0].classList.add(activClass);
    accordionList[0].nextElementSibling.classList.add(activClass);
    function activeAccordion() {
      this.classList.toggle(activClass);
      this.nextElementSibling.classList.toggle(activClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  } else {
    console.log("Erro, página não possui elemento necessário");
  }
}