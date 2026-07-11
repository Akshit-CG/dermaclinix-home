// hero swiper
const heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// News logo data - single source of truth
const newsLogos = [
    { src: "./assets/images/cnn-logo.png", alt: "CNN", type: "img" },
    { src: "./assets/images/times-logo.png", alt: "Times Now", type: "img" },
    { src: "./assets/images/Forbes-logo.png", alt: "Forbes", type: "img" },
    { src: "./assets/images/cnn-logo.png", alt: "CNN", type: "img" },
    { src: "./assets/images/dainik-logo 1.png", alt: "Dainik Bhaskar", type: "img" },
    { src: "./assets/images/ht-logo.png", alt: "Hindustan Times", type: "img" },
    { src: "./assets/images/indiatv-logo.png", alt: "India TV", type: "img" },
    { type: "ndtv" }
];

// Populate slides dynamically with lazy initialization
function initializeNewsSlides() {
    const wrapper = document.getElementById("logoWrapper");
    if (!wrapper || wrapper.children.length > 0) return; // Already initialized
    
    const duplications = 4; // Number of times to duplicate the slides

    for (let i = 0; i < duplications; i++) {
        newsLogos.forEach(logo => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide news-logo-slide";

            if (logo.type === "img") {
                const img = document.createElement("img");
                img.src = logo.src;
                img.alt = logo.alt;
                img.className = "news-logo-img";
                // Use loading="lazy" but since it's below fold, it's less critical
                slide.appendChild(img);
            } else if (logo.type === "ndtv") {
                const html = document.createElement("span");
                html.className = "news-logo-html";
                html.setAttribute("aria-label", "NDTV");
                html.innerHTML = '<span class="ndtv-logo"><span>N</span>NDTV</span>';
                slide.appendChild(html);
            }

            // Add separator dot
            const dot = document.createElement("span");
            dot.className = "news-logo-dot";
            dot.setAttribute("aria-hidden", "true");
            slide.appendChild(dot);

            wrapper.appendChild(slide);
        });
    }
}

// Initialize slides immediately (before Swiper) since they're needed right after
initializeNewsSlides();

// news icons swiper
new Swiper(".logoSwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    speed: 2000,
    allowTouchMove: false,
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: {
        enabled: false,
    },
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
});
