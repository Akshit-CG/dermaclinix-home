const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Change prefetch to preload for hero image
html = html.replace(/<link rel="prefetch" href="\.\/assets\/images\/hero-1\.webp" as="image">/g, '<link rel="preload" href="/assets/images/hero-1.webp" as="image">');

// 2. Add defer to scripts
html = html.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/swiper@11\/swiper-bundle\.min\.js"><\/script>/g, '<script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>');
html = html.replace(/<script src="js\/main\.js"><\/script>/g, '<script defer src="js/main.js"></script>');

// 3. Add loading="lazy" to all img tags EXCEPT hero-1.webp and dcx_logo.png
html = html.replace(/<img([^>]*)>/g, (match, p1) => {
    if (match.includes('hero-1.webp') || match.includes('dcx_logo.png') || match.includes('loading="lazy"')) {
        return match;
    }
    return `<img loading="lazy"${p1}>`;
});

// 4. Add width and height to hero-1.webp to fix unsized image
html = html.replace(/<img src="\/assets\/images\/hero-1\.webp" alt="Hero 1" class="w-full" preload="metadata"([^>]*)>/g, '<img src="/assets/images/hero-1.webp" alt="Hero 1" class="w-full" width="1920" height="1080" fetchpriority="high">');
html = html.replace(/<img src="\/assets\/images\/hero-1\.webp" alt="Hero 2" class="w-full" preload="metadata"([^>]*)>/g, '<img src="/assets/images/hero-1.webp" alt="Hero 2" class="w-full" width="1920" height="1080" loading="lazy">');

// 5. Unsized images for logo
html = html.replace(/<img src="\/assets\/images\/dcx_logo\.png" alt="DermaClinix" style="width: 261.28px; height: 69.49px;"/g, '<img src="/assets/images/dcx_logo.png" alt="DermaClinix" width="261" height="69" style="width: 261.28px; height: 69.49px;"');

fs.writeFileSync('index.html', html);
console.log('Done optimizing.');
