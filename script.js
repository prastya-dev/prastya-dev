// Prevents the reveal styles from hiding content if this file fails to load
window.uiReady = true;

document.addEventListener('DOMContentLoaded', () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

    // Tech Categories Data
    const techCategories = {
        infra: [
            { name: 'Google Cloud', url: 'https://cloud.google.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
            { name: 'AWS', url: 'https://aws.amazon.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Fedora', url: 'https://fedoraproject.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg' },
            { name: 'Docker', url: 'https://www.docker.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Vercel', url: 'https://vercel.com/', icon: 'https://cdn.simpleicons.org/vercel/000000' },
            { name: 'Cloudflare', url: 'https://www.cloudflare.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
            { name: 'Nginx', url: 'https://nginx.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
            { name: 'PM2', url: 'https://pm2.keymetrics.io/', icon: 'https://cdn.simpleicons.org/pm2/2B037A' },
            { name: 'Hostinger', url: 'https://www.hostinger.com/', icon: 'https://cdn.simpleicons.org/hostinger/673DE6' },
            { name: 'Git', url: 'https://git-scm.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', url: 'https://github.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        ],
        frontend: [
            { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', url: 'https://react.dev/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', url: 'https://nextjs.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Vue.js', url: 'https://vuejs.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'Tailwind', url: 'https://tailwindcss.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Flutter', url: 'https://flutter.dev/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        ],
        backend: [
            { name: 'Node.js', url: 'https://nodejs.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express', url: 'https://expressjs.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'Laravel', url: 'https://laravel.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
            { name: 'Python', url: 'https://www.python.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'MySQL', url: 'https://www.mysql.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'Supabase', url: 'https://supabase.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
            { name: 'Prisma', url: 'https://www.prisma.io/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
        ],
        hardware: [
            { name: 'Arduino', url: 'https://www.arduino.cc/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
            { name: 'Mikrotik', url: 'https://mikrotik.com/', icon: 'https://cdn.simpleicons.org/mikrotik/CC0000' },
            { name: 'Raspberry Pi', url: 'https://www.raspberrypi.org/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg' },
        ],
        tools: [
            { name: 'VSCode', url: 'https://code.visualstudio.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Figma', url: 'https://www.figma.com/', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'ChatGPT', url: 'https://chat.openai.com/', icon: 'https://cdn.simpleicons.org/openai/412991' },
            { name: 'Claude', url: 'https://claude.ai/', icon: 'https://cdn.simpleicons.org/anthropic/D4A96A' },
            { name: 'Gemini', url: 'https://gemini.google.com/', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
            { name: 'AfterEffects', url: 'https://www.adobe.com/products/aftereffects.html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
            { name: 'Photoshop', url: 'https://www.adobe.com/products/photoshop.html', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
        ],
    };

    // Render Tech Stack dynamically as unified chips
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer) {
        Object.values(techCategories).flat().forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'tech-chip';

            const img = document.createElement('img');
            img.src = item.icon;
            img.alt = '';
            img.width = 20;
            img.height = 20;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.onerror = () => img.remove();

            const text = document.createElement('span');
            text.textContent = item.name;

            link.append(img, text);
            skillsContainer.appendChild(link);
        });
    }

    // Mobile navigation
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');

    const setMenu = (open) => {
        if (!nav || !navToggle) return;
        nav.classList.toggle('open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
        if (open) nav.classList.remove('hidden');
    };

    navToggle?.addEventListener('click', () => {
        setMenu(!nav?.classList.contains('open'));
    });

    // Close the menu after choosing any link (including the logo)
    nav?.addEventListener('click', (e) => {
        if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', (e) => {
        if (nav?.classList.contains('open') && !nav.contains(e.target)) setMenu(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav?.classList.contains('open')) {
            setMenu(false);
            navToggle?.focus();
        }
    });

    window.matchMedia('(min-width: 769px)').addEventListener?.('change', (e) => {
        if (e.matches) setMenu(false);
    });

    // Custom Cursor (only for devices with a real mouse)
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');

    if (!isTouchDevice && cursorDot && cursorOutline && !reducedMotion) {
        document.documentElement.classList.add('cursor-custom');

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let outlineX = mouseX;
        let outlineY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        }, { passive: true });

        const animateCursor = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        document.addEventListener('mouseover', (e) => {
            if (e.target instanceof Element && e.target.closest('a, button, .project-item')) {
                cursorOutline.classList.add('hover');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target instanceof Element && e.target.closest('a, button, .project-item')) {
                cursorOutline.classList.remove('hover');
            }
        });
    }

    // Hero intro animation
    const heroTexts = document.querySelectorAll('.reveal-text');
    heroTexts.forEach((el, index) => {
        setTimeout(() => el.classList.add('active'), 400 + index * 150);
    });

    const chars = document.querySelectorAll('.char');
    chars.forEach((char, index) => {
        setTimeout(() => char.classList.add('active'), 150 + index * 90);
    });

    // Count-up animation for the stats
    const animateCount = (el) => {
        if (el.dataset.animated) return;
        el.dataset.animated = 'true';

        const target = parseInt(el.dataset.count, 10) || 0;
        if (reducedMotion) {
            el.textContent = target;
            return;
        }

        const duration = 1200;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    // Scroll animations
    const revealElements = document.querySelectorAll('.reveal-up');

    if ('IntersectionObserver' in window) {
        const revealOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                entry.target.querySelectorAll('.stat-number').forEach(animateCount);
                observer.unobserve(entry.target);
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        revealElements.forEach((el) => revealOnScroll.observe(el));
    } else {
        revealElements.forEach((el) => el.classList.add('active'));
        document.querySelectorAll('.stat-number').forEach(animateCount);
    }

    // Single throttled scroll handler: hide nav, parallax, active link
    const bgText = document.querySelector('.hero-bg-text');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const topLinks = Array.from(document.querySelectorAll('.nav-link'));
    let lastScrollY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
        const y = window.scrollY;

        if (nav) {
            if (!nav.classList.contains('open') && y > lastScrollY && y > 120) {
                nav.classList.add('hidden');
            } else {
                nav.classList.remove('hidden');
            }
        }
        lastScrollY = y;

        if (bgText && !reducedMotion && window.innerWidth > 768 && y < window.innerHeight) {
            bgText.style.transform = `translate(-50%, calc(-50% + ${y * 0.5}px))`;
        }

        let current = '';
        sections.forEach((section) => {
            if (y + 160 >= section.offsetTop) current = section.id;
        });
        // The last section can never reach the top of the viewport
        if (y + window.innerHeight >= document.documentElement.scrollHeight - 2 && sections.length) {
            current = sections[sections.length - 1].id;
        }
        topLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });

        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
});
