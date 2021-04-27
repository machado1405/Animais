export default function initAnimacaoScroll() {
  const activClass = 'ativo';
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add(activClass);
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
