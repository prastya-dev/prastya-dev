document.addEventListener('DOMContentLoaded', () => {
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
            link.className = 'tech-chip glass-hover';

            const img = document.createElement('img');
            img.src = item.icon;
            img.alt = item.name;
            img.onerror = () => {
                img.style.display = 'none';
            };

            const text = document.createElement('span');
            text.innerText = item.name;

            link.appendChild(img);
            link.appendChild(text);
            skillsContainer.appendChild(link);
        });
    }

    // Custom Cursor
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');
    
    // Check if device supports hover
    const isTouchDevice = () => {
        return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    };

    if (!isTouchDevice()) {
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Smooth outline follow
        const animateCursor = () => {
            let distX = mouseX - outlineX;
            let distY = mouseY - outlineY;
            
            outlineX = outlineX + (distX * 0.15);
            outlineY = outlineY + (distY * 0.15);
            
            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Cursor hover states
        const interactiveElements = document.querySelectorAll('a, button, .project-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hover');
            });
        });
    }

    // Hero Animations
    setTimeout(() => {
        // Animate hero text stagger
        const revealTexts = document.querySelectorAll('.reveal-text');
        revealTexts.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 200 + 500); // Wait for name to animate first
        });

        // Animate name characters
        const chars = document.querySelectorAll('.char');
        chars.forEach((char, index) => {
            setTimeout(() => {
                char.style.transform = 'translateY(0)';
                char.style.transition = 'transform 0.8s cubic-bezier(0.87, 0, 0.13, 1)';
            }, index * 100);
        });
    }, 100);

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate numbers if it's a stats section
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    if (!stat.dataset.animated) {
                        const target = parseInt(stat.getAttribute('data-count'));
                        let current = 0;
                        const increment = target / 50; // frames
                        
                        const updateCount = () => {
                            if (current < target) {
                                current += increment;
                                stat.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCount);
                            } else {
                                stat.innerText = target;
                            }
                        };
                        updateCount();
                        stat.dataset.animated = 'true';
                    }
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
        revealOnScroll.observe(el);
    });

    // Parallax effect on hero background text
    const bgText = document.querySelector('.hero-bg-text');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            bgText.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.5}px))`;
        }
    });

    // Hide/Show Nav on scroll
    let lastScrollY = window.scrollY;
    const nav = document.getElementById('nav');

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY && window.scrollY > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });
});
