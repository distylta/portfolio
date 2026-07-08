document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
        updateActiveLink();
    });

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                link.classList.toggle('active', scrollPos >= top && scrollPos < top + height);
            }
        });
    }

    const spheres = document.querySelectorAll('.service-card[data-service]');
    const details = document.querySelectorAll('.service-detail-content');

    function activateService(service) {
        document.querySelectorAll('.service-card').forEach(s => s.classList.toggle('active', s.dataset.service === service));
        details.forEach(d => {
            d.classList.remove('active');
            if (d.dataset.service === service) {
                d.classList.add('active');
            }
        });
    }

    spheres.forEach(sphere => {
        sphere.addEventListener('click', () => {
            activateService(sphere.dataset.service);
        });
    });

    activateService('ai');

    const fadeEls = document.querySelectorAll(
        '.skill-category, .project-card, .step-card, .about-grid, .contact-grid, .gallery-card, .service-card'
    );
    fadeEls.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    fadeEls.forEach(el => observer.observe(el));

    const contactForm = document.getElementById('contactForm');
    const formNext = document.getElementById('formNext');
    if (formNext) formNext.value = window.location.href;
    contactForm.addEventListener('submit', function() {
        const btn = contactForm.querySelector('button');
        btn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : 'Sending...';
        btn.disabled = true;
    });

    updateActiveLink();

    const translations = {
        tr: {
            'nav-about': 'Hakkımızda',
            'nav-services': 'Hizmetler',
            'nav-projects': 'Çalışmalar',
            'nav-gallery': 'Galeri',
            'nav-process': 'Süreç',
            'nav-contact': 'İletişim',
            'hero-title': 'AI Tasarımlar / Sosyal Medya / Meta Ads / Google Ads',
            'hero-desc': 'AI destekli yaratıcı tasarımlar, sosyal medya yönetimi, Meta ve Google Ads kampanyalarıyla markanızı bir adım öne taşıyoruz.',
            'hero-btn': 'Teklif Al',
            'stat-clients': 'Mutlu Müşteri',
            'stat-designs': 'AI Tasarım',
            'stat-campaigns': 'Reklam Kampanyası',
            'sphere-ai': 'AI<br>Tasarımlar',
            'sphere-social': 'Sosyal Medya<br>Yönetimi',
            'sphere-ads': 'Meta & Google<br>Reklam Yönetimi',
            'sphere-gallery': 'Galeri',
            'detail-ai-title': 'Yapay Zeka Tasarımı',
            'detail-ai-desc': 'Uzman yapay zeka araçları ile markanıza özel AI görseller, ürün fotoğrafları ve yaratıcı tasarımlar üretiyoruz.',
            'detail-social-title': 'Sosyal Medya Yönetimi',
            'detail-social-desc': 'Instagram ve Facebook hesaplarınızı profesyonelce yönetiyor, içerik takvimi oluşturuyor ve topluluk yönetimi yapıyoruz.',
            'detail-ads-title': 'Meta Ads & Google Ads Yönetimi',
            'detail-ads-desc': 'Facebook, Instagram ve Google reklam kampanyalarınızı optimize ediyor, hedef kitle analizi ile ROAS\'ınızı ve trafiğinizi artırıyoruz.',
            'tag-ai-visual': 'AI Görsel',
            'tag-prompt': 'Prompt Engineering',
            'tag-product-visual': 'Ürün Görseli',
            'tag-creative': 'Yaratıcı Tasarım',
            'tag-content-plan': 'İçerik Planı',
            'tag-community': 'Topluluk Yönetimi',
            'tag-audience': 'Hedef Kitle',
            'tag-search-ads': 'Arama Reklamı',
            'tag-pmax': 'Performance Max',
            'section-about': 'Hakkımızda',
            'about-p1': '<strong>distylta</strong>, yapay zeka teknolojileri ile yaratıcı tasarımı birleştiren bir ajandır. Markaların görsel kimliğini AI ile güçlendiriyor, sosyal medyada etkili varlık göstermelerini sağlıyoruz.',
            'about-p2': 'AI görsel tasarımından sosyal medya yönetimine, Meta & Google reklam kampanyalarından marka kimliği oluşturmaya kadar geniş bir yelpazede çözümler üretiyoruz.',
            'label-location': 'Konum',
            'value-location': 'Türkiye',
            'label-expertise': 'Uzmanlık',
            'value-expertise': 'AI Tasarım, Meta Ads, Google Ads',
            'value-platforms': 'Instagram, Facebook, Google',
            'label-platforms': 'Platformlar',
            'section-services': 'Hizmetlerimiz',
            'service-ai-title': 'AI Görsel Tasarım',
            'service-brand-title': 'Marka Kimliği & Tasarım',
            'service-social-title': 'Sosyal Medya Yönetimi',
            'service-meta-title': 'Meta Ads Yönetimi',
            'service-google-title': 'Google Ads Yönetimi',
            'tag-logo': 'Logo Tasarım',
            'tag-corporate': 'Kurumsal Kimlik',
            'tag-social-visual': 'Sosyal Medya Görseli',
            'tag-web-page': 'Web Sayfası',
            'section-projects': 'Çalışmalarımız',
            'project-1-title': 'AI Ürün Görselleri - E-Ticaret Markası',
            'project-1-desc': 'Yapay zeka ile profesyonel ürün fotoğrafları oluşturuldu. Stüdyo maliyeti olmadan yüksek kaliteli katalog görselleri üretildi.',
            'project-2-title': 'Sosyal Medya Yönetimi - Restoran Zinciri',
            'project-2-desc': '3 aylık sosyal medya stratejisi ile takipçi sayısı %180 artırıldı. Haftalık içerik takvimi, AI destekli görseller ve etkileşim yönetimi.',
            'project-3-title': 'Meta Reklam Kampanyası - Güzellik Markası',
            'project-3-desc': 'Facebook ve Instagram reklam kampanyaları ile ROAS %340 artışı sağlandı. Hedef kitle optimizasyonu ile maliyet düşürüldü.',
            'project-4-title': 'Komple Marka Kimliği - Tech Startup',
            'project-4-desc': 'AI ile logo, kurumsal kimlik, sosyal medya şablonları ve reklam görselleri oluşturuldu. Lansmanla birlikte dijital kampanya yönetimi yapıldı.',
            'project-5-title': 'Google Ads Kampanyası - Hizmet Sektörü',
            'project-5-desc': 'Google Arama ve Performance Max kampanyaları ile web sitesi trafiği %220 artırıldı. Tıklama başı maliyet optimizasyonu ile bütçe verimliliği maksimize edildi.',
            'tag-product-photo': 'Ürün Fotoğrafçılığı',
            'tag-content-strategy': 'İçerik Stratejisi',
            'tag-ai-design': 'AI Tasarım',
            'tag-brand-identity': 'Marka Kimliği',
            'tag-launch': 'Lansman',
            'gallery-title': 'Galeri',
            'folder-photos': 'Fotoğraflar',
            'folder-videos': 'Videolar',
            'folder-animations': 'Animasyonlar',
            'section-process': 'Nasıl Çalışıyoruz?',
            'step-1-title': 'Keşif & Analiz',
            'step-1-desc': 'Markanızı, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. İhtiyaçlarınıza özel strateji oluşturuyoruz.',
            'step-2-title': 'AI Tasarım & İçerik',
            'step-2-desc': 'Yapay zeka araçlarıyla markanıza özel görseller, sosyal medya içerikleri ve reklam materyalleri tasarlıyoruz.',
            'step-3-title': 'Kampanya & Yayınlama',
            'step-3-desc': 'Meta reklam kampanyalarını kurguluyor, sosyal medya içeriklerinizi planlıyor ve yayınlıyoruz.',
            'section-contact': 'İletişim',
            'contact-desc': 'Markanız için AI tasarım, sosyal medya, Meta Ads veya Google Ads desteği mi istiyorsunuz? Hemen ulaşın.',
            'contact-email-label': 'E-posta',
            'btn-send': 'Gönder',
            'footer': '&copy; 2026 distylta. Tüm hakları saklıdır.',
            'ph-name': 'Adınız',
            'ph-email': 'E-posta adresiniz',
            'ph-message': 'Mesajınız',
            'page-title': 'distylta | Yapay Zeka Tasarımları / Sosyal Medya & Meta & Google Reklam Yönetimi'
        },
        en: {
            'nav-about': 'About Us',
            'nav-services': 'Services',
            'nav-projects': 'Projects',
            'nav-gallery': 'Gallery',
            'nav-process': 'Process',
            'nav-contact': 'Contact',
            'hero-title': 'AI Designs / Social Media / Meta Ads / Google Ad Management',
            'hero-desc': 'We take your brand one step ahead with AI-powered creative designs, social media management, Meta and Google Ads campaigns.',
            'hero-btn': 'Get Quote',
            'stat-clients': 'Happy Clients',
            'stat-designs': 'AI Designs',
            'stat-campaigns': 'Ad Campaigns',
            'sphere-ai': 'AI<br>Designs',
            'sphere-social': 'Social Media<br>Management',
            'sphere-ads': 'Meta & Google<br>Reklam Yönetimi',
            'sphere-gallery': 'Gallery',
            'detail-ai-title': 'AI Design',
            'detail-ai-desc': 'We create custom AI visuals, product photos and creative designs for your brand using expert AI tools.',
            'detail-social-title': 'Social Media Management',
            'detail-social-desc': 'We professionally manage your Instagram and Facebook accounts, create content calendars and handle community management.',
            'detail-ads-title': 'Meta Ads & Google Ads Management',
            'detail-ads-desc': 'We optimize your Facebook, Instagram and Google ad campaigns, increasing your ROAS and traffic with target audience analysis.',
            'tag-ai-visual': 'AI Visual',
            'tag-prompt': 'Prompt Engineering',
            'tag-product-visual': 'Product Visual',
            'tag-creative': 'Creative Design',
            'tag-content-plan': 'Content Plan',
            'tag-community': 'Community Management',
            'tag-audience': 'Target Audience',
            'tag-search-ads': 'Search Ads',
            'tag-pmax': 'Performance Max',
            'section-about': 'About Us',
            'about-p1': '<strong>distylta</strong> is an agency that combines AI technologies with creative design. We strengthen brands\' visual identity with AI and ensure their effective presence on social media.',
            'about-p2': 'We provide solutions across a wide range from AI visual design to social media management, from Meta & Google ad campaigns to brand identity creation.',
            'label-location': 'Location',
            'value-location': 'Turkey',
            'label-expertise': 'Expertise',
            'value-expertise': 'AI Design, Meta Ads, Google Ads',
            'value-platforms': 'Instagram, Facebook, Google',
            'label-platforms': 'Platforms',
            'section-services': 'Our Services',
            'service-ai-title': 'AI Visual Design',
            'service-brand-title': 'Brand Identity & Design',
            'service-social-title': 'Social Media Management',
            'service-meta-title': 'Meta Ad Management',
            'service-google-title': 'Google Ad Management',
            'tag-logo': 'Logo Design',
            'tag-corporate': 'Corporate Identity',
            'tag-social-visual': 'Social Media Visual',
            'tag-web-page': 'Web Page',
            'section-projects': 'Our Projects',
            'project-1-title': 'AI Product Visuals - E-Commerce Brand',
            'project-1-desc': 'Professional product photos were created with AI. High-quality catalog visuals were produced without studio costs.',
            'project-2-title': 'Social Media Management - Restaurant Chain',
            'project-2-desc': 'Follower count increased by 180% with a 3-month social media strategy. Weekly content calendar, AI-powered visuals and engagement management.',
            'project-3-title': 'Meta Ad Campaign - Beauty Brand',
            'project-3-desc': 'ROAS increased by 340% with Facebook and Instagram ad campaigns. Costs reduced through target audience optimization.',
            'project-4-title': 'Complete Brand Identity - Tech Startup',
            'project-4-desc': 'Logo, corporate identity, social media templates and ad visuals were created with AI. Digital campaign management was handled alongside the launch.',
            'project-5-title': 'Google Ads Campaign - Service Industry',
            'project-5-desc': 'Website traffic increased by 220% with Google Search and Performance Max campaigns. Budget efficiency was maximized through cost-per-click optimization.',
            'tag-product-photo': 'Product Photography',
            'tag-content-strategy': 'Content Strategy',
            'tag-ai-design': 'AI Design',
            'tag-brand-identity': 'Brand Identity',
            'tag-launch': 'Launch',
            'gallery-title': 'Gallery',
            'folder-photos': 'Photos',
            'folder-videos': 'Videos',
            'folder-animations': 'Animations',
            'section-process': 'How We Work?',
            'step-1-title': 'Discovery & Analysis',
            'step-1-desc': 'We analyze your brand, target audience and competitors. We create a strategy tailored to your needs.',
            'step-2-title': 'AI Design & Content',
            'step-2-desc': 'We design custom visuals, social media content and ad materials for your brand using AI tools.',
            'step-3-title': 'Campaign & Publishing',
            'step-3-desc': 'We set up Meta ad campaigns, plan your social media content and publish them.',
            'section-contact': 'Contact',
            'contact-desc': 'Looking for AI design, social media, Meta or Google ad support for your brand? Get in touch now.',
            'contact-email-label': 'Email',
            'btn-send': 'Send',
            'footer': '&copy; 2026 distylta. All rights reserved.',
            'ph-name': 'Your Name',
            'ph-email': 'Your Email',
            'ph-message': 'Your Message',
            'page-title': 'distylta | AI Designs / Social Media & Meta & Google Ad Management'
        }
    };

    let currentLang = localStorage.getItem('distylta-lang') || 'tr';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('distylta-lang', lang);
        document.documentElement.lang = lang;
        document.title = translations[lang]['page-title'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    if (currentLang !== 'tr') {
        setLanguage(currentLang);
    }
});
