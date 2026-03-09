/**
 * BLT-CVE Common JavaScript
 * Shared Tailwind configuration and Theme (Dark Mode) logic.
 */

// 1. Tailwind Configuration
if (window.tailwind) {
    tailwind.config = {
        darkMode: 'class',
        theme: {
            extend: {
                colors: {
                    primary: '#E10101',
                    'primary-hover': '#B91C1C',
                    'neutral-border': '#E5E5E5',
                    'dark-base': '#111827',
                    'dark-surface': '#1F2937',
                    'active-bg': '#feeae9'
                },
                fontFamily: {
                    sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
                }
            }
        }
    };
}

// 2. Theme Management (Immediate Execution)
(function () {
    try {
        const saved = localStorage.getItem('blt-theme');
        if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    } catch (e) { }
})();

// 3. Components (Header and Footer)
const COMPONENTS = {
    header: `
        <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="./index.html" class="flex items-center gap-3">
                <img src="./logo.png" alt="BLT logo" class="h-8 w-8 rounded-md" />
                <div>
                    <p class="text-sm font-extrabold leading-none dark:text-gray-100 uppercase tracking-tighter">BLT-CVE</p>
                    <p class="text-[10px] font-bold text-gray-500 dark:text-gray-400">Decentralized Registry</p>
                </div>
            </a>

            <nav class="hidden items-center gap-6 md:flex" id="nav-links">
                <a href="./registry.html" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Registry</a>
                <a href="./index.html#endpoints" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Endpoints</a>
                <a href="./index.html#schema" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Schema</a>
                <a href="./submit.html" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Submit</a>
                <a href="./coming-soon.html" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Federation</a>
                <a href="https://github.com/OWASP-BLT/BLT-CVE/tree/main/docs" class="nav-link text-sm font-semibold dark:text-gray-200 hover:text-primary transition-colors">Docs</a>
            </nav>

            <div class="flex items-center gap-3">
                <button id="dark-toggle" class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-border text-gray-700 dark:border-gray-600 dark:text-gray-300">
                    <svg class="fa-icon dark:hidden" viewBox="0 0 512 512"><path d="M223.5 32C100 32 0 132 0 255.5S100 479 223.5 479c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-7.8c-11.2 3.1-23.1 4.7-35.4 4.7-88.8 0-160.8-72-160.8-160.8 0-61.6 34.5-115.1 85-142.3 6.1-3.3 8.3-10.8 5-16.9s-10.3-9.5-17.2-7.6c-13.6 3.7-28 5.7-43 5.7z" /></svg>
                    <svg class="fa-icon hidden dark:inline-block" viewBox="0 0 512 512"><path d="M256 128a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 224a96 96 0 1 1 96-96 96 96 0 0 1-96 96zm0-240a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v48a16 16 0 0 1-16 16zm0 304a16 16 0 0 1-16 16v48a16 16 0 0 1 32 0v-48a16 16 0 0 1-16-16zm232-152h48a16 16 0 0 1 0 32h-48a16 16 0 0 1 0-32zM48 240h48a16 16 0 0 1 0 32H48a16 16 0 0 1 0-32zm301.9-106.3a16 16 0 0 1 0-22.6l33.9-33.9a16 16 0 1 1 22.6 22.6l-33.9 33.9a16 16 0 0 1-22.6 0zM107.5 359a16 16 0 1 1 22.6 22.6L96.2 415.5a16 16 0 0 1-22.6-22.6zM350 359a16 16 0 0 1 22.6 0l33.9 33.9a16 16 0 1 1-22.6 22.6l-33.9-33.9a16 16 0 0 1 0-22.6zM107.5 153a16 16 0 0 1 0-22.6l33.9-33.9a16 16 0 0 1 22.6 22.6l-33.9 33.9a16 16 0 0 1-22.6 0z" /></svg>
                </button>
            </div>
        </div>
    `,
    footer: `
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div class="flex justify-center mb-6">
                <img src="./logo.png" alt="BLT logo" class="h-10 w-10" />
            </div>
            <p class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest">OWASP BLT</p>
            <p class="mt-4 text-sm text-gray-500">© 2026 — Distributed Registry Protocol</p>
            <div class="mt-6 flex justify-center gap-6">
                <a href="https://github.com/OWASP-BLT" class="text-gray-400 hover:text-primary transition"><svg class="fa-icon w-6 h-6" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-62-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239c0-138.7-112.5-244-251.2-244z" /></svg></a>
            </div>
        </div>
    `
};

// 4. Toggle Logic (Wait for DOM)
document.addEventListener('DOMContentLoaded', () => {
    // Inject Components
    const headerEl = document.getElementById('main-header');
    const footerEl = document.getElementById('main-footer');
    if (headerEl) headerEl.innerHTML = COMPONENTS.header;
    if (footerEl) footerEl.innerHTML = COMPONENTS.footer;

    // Highlight active link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('text-primary');
            link.classList.add('font-bold');
        }
    });

    const darkToggle = document.getElementById('dark-toggle');
    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            const html = document.documentElement;
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('blt-theme', isDark ? 'dark' : 'light');
        });
    }

    // Sync with system preferences
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('blt-theme')) {
            if (e.matches) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        }
    });
});
