// import initTabNav from './modules/tabnav.js';
// import initAccordion from './modules/accordion.js';
// import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
// import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento-horario.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

// initTabNav();
// initAccordion();
// initScrollSuave();
initAnimacaoScroll();
// initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// IMPORTAÇÕES REFATORAÇÃO

import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();