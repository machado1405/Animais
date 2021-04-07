const activClass = 'ativo';

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activClass);
      });
      tabContent[index].classList.add(activClass);
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

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
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
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });

    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
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

initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll();