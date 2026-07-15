// hero swiper
const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// specialisations tabs
const specTabs = document.querySelectorAll('.specialisation-tab');
const specPanels = document.querySelectorAll('[data-panel]');

specTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // update tab active state
        specTabs.forEach(t => t.classList.remove('specialisation-tab--active'));
        tab.classList.add('specialisation-tab--active');

        // show matching panel, hide others
        specPanels.forEach(panel => {
            panel.style.display = panel.dataset.panel === target ? '' : 'none';
        });
    });
});

// results tabs
const resultsTabs = document.querySelectorAll('.results-tab');
const resultsPanels = document.querySelectorAll('[data-results-panel]');

resultsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.resultsTab;

        // update tab active state
        resultsTabs.forEach(t => t.classList.remove('results-tab--active'));
        tab.classList.add('results-tab--active');

        // show matching panel, hide others
        resultsPanels.forEach(panel => {
            panel.style.display = panel.dataset.resultsPanel === target ? '' : 'none';
        });
    });
});