// hero swiper
document.addEventListener('DOMContentLoaded', () => {
    // Delay Swiper init slightly to allow browser layout pass and prevent forced reflow
    requestAnimationFrame(() => {
        const heroSwiper = new Swiper(".heroSwiper", {
            loop: true,
            // autoHeight: true removed to avoid layout thrashing, as images have fixed aspect ratio
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });
});

// specialisations tabs
const specTabs = document.querySelectorAll('#specialisations .tab-btn');
const specPanels = document.querySelectorAll('#specialisations [data-panel]');

specTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        // update tab active state
        specTabs.forEach(t => t.classList.remove('tab-btn--active'));
        tab.classList.add('tab-btn--active');

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

// Patient Voices Videos
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const videoId = card.dataset.videoId;
        if (!videoId) return;
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.className = 'w-full h-full';
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        iframe.setAttribute('allowfullscreen', '');
        
        // Replace inner content
        card.innerHTML = '';
        card.appendChild(iframe);
        
        // Remove cursor pointer since it's now an interactive iframe
        card.classList.remove('cursor-pointer');
    });
});

// Patient Voices Tabs (Optional logic if they want to switch panels later)
const videoTabs = document.querySelectorAll('#patient-voices .tab-btn');
videoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        videoTabs.forEach(t => t.classList.remove('tab-btn--active'));
        tab.classList.add('tab-btn--active');
        // Panel switching logic can be added here if multiple grids are added
    });
});

// FAQ Accordion
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {
    
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        
        // Close all cards
        faqCards.forEach(c => {
            c.classList.remove('active');
            const content = c.querySelector('.faq-content');
            const iconWrapper = c.querySelector('.faq-icon-wrapper');
            const icon = iconWrapper.querySelector('svg');
            
            if (content) content.classList.add('hidden');
            iconWrapper.classList.remove('active');
            icon.classList.remove('text-white');
            icon.classList.add('text-[#666666]');
            icon.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>'; // down arrow
        });
        
        // Open the clicked one if it wasn't active
        if (!isActive) {
            card.classList.add('active');
            const content = card.querySelector('.faq-content');
            const iconWrapper = card.querySelector('.faq-icon-wrapper');
            const icon = iconWrapper.querySelector('svg');
            
            if (content) content.classList.remove('hidden');
            iconWrapper.classList.add('active');
            icon.classList.remove('text-[#666666]');
            icon.classList.add('text-white');
            icon.innerHTML = '<polyline points="18 15 12 9 6 15"></polyline>'; // up arrow
        }
    });
});