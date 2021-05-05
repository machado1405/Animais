export default function initAnimacaoScroll() {
  const activClass = 'ativo';
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add(activClass);
        } else if (section.classList.contains(activClass)) {
          section.classList.remove(activClass)
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
