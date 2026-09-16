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
        btn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : (currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...');
        btn.disabled = true;
    });

    updateActiveLink();

    const translations = {
        tr: {
            'nav-about': 'Hakkımızda',
            'nav-services': 'Hizmetler',
            'nav-process': 'Süreç',
            'nav-contact': 'İletişim',
            'hero-title': 'Sosyal Medya, Meta & Google Reklam Yönetimi',
            'hero-desc': 'Sosyal medya yönetiminden Meta & Google reklam kampanyalarına, web sitenizden dijital varlığınıza kadar markanızı büyütecek her adımı tek yerden yönetiyoruz.',
            'cta-button': 'Ücretsiz Analiz Al',
            'sphere-web': 'Web Sitesi<br>Yapımı',
            'sphere-social': 'Sosyal Medya<br>Yönetimi',
            'sphere-ads': 'Meta & Google<br>Reklam Yönetimi',
            'tag-content-plan': 'İçerik Planı',
            'tag-community': 'Topluluk Yönetimi',
            'tag-audience': 'Hedef Kitle',
            'tag-campaign-setup': 'Kampanya Kurulumu',
            'tag-budget-opt': 'Bütçe Optimizasyonu',
            'tag-reporting': 'Raporlama',
            'section-about': 'Hakkımızda',
            'about-p1': '<strong>7K Dijital Pazarlama</strong>, Hatice Urgaç tarafından yürütülen bağımsız (freelance) bir dijital pazarlama hizmetidir; markaların sosyal medyada etkili bir varlık göstermesini ve Meta & Google reklam kampanyalarıyla büyümesini sağlar.',
            'about-p2': 'Sosyal medya yönetiminden Meta & Google reklam kampanyalarına, web sitenizden marka kimliği oluşturmaya kadar geniş bir yelpazede çözümler üretiyoruz.',
            'section-services': 'Hizmetlerimiz',
            'service-web-title': 'Web Sitesi',
            'service-social-title': 'Sosyal Medya Yönetimi',
            'service-meta-title': 'Meta & Google Reklam Yönetimi',
            'tag-web-page': 'Web Sayfası',
            'tag-modern-design': 'Modern Tasarım',
            'tag-responsive': 'Mobil Uyumlu',
            'tag-fast-site': 'Hızlı Site',
            'section-process': 'Nasıl Çalışıyoruz?',
            'step-1-title': 'Keşif & Analiz',
            'step-1-desc': 'Markanızı, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. İhtiyaçlarınıza özel strateji oluşturuyoruz.',
            'step-2-title': 'Tasarım & İçerik',
            'step-2-desc': 'Markanıza özel görseller, sosyal medya içerikleri ve reklam materyalleri tasarlıyoruz.',
            'step-3-title': 'Kampanya & Yayınlama',
            'step-3-desc': 'Meta reklam kampanyalarını kurguluyor, sosyal medya içeriklerinizi planlıyor ve yayınlıyoruz.',
            'section-contact': 'İletişim',
            'contact-desc': 'Markanız için sosyal medya, Meta Ads, Google Ads veya web sitesi desteği mi istiyorsunuz? Hemen ulaşın.',
            'contact-whatsapp-label': 'WhatsApp',
            'contact-email-label': 'E-posta',
            'contact-ig-anim-label': 'Instagram (Animasyon)',
            'btn-send': 'Gönder',
            'footer': '&copy; 2026 7K Dijital Pazarlama. Tüm hakları saklıdır.',
            'ph-name': 'Adınız',
            'ph-email': 'E-posta adresiniz',
            'ph-message': 'Mesajınız',
            'page-title': '7K Dijital Pazarlama | Sosyal Medya, Meta & Google Reklam Yönetimi'
        },
        en: {
            'nav-about': 'About Us',
            'nav-services': 'Services',
            'nav-process': 'Process',
            'nav-contact': 'Contact',
            'hero-title': 'Social Media, Meta & Google Ads Management',
            'hero-desc': 'From social media management to Meta & Google ad campaigns, from your website to your digital presence — we manage every step your brand needs to grow, in one place.',
            'cta-button': 'Get a Free Analysis',
            'sphere-web': 'Website<br>Development',
            'sphere-social': 'Social Media<br>Management',
            'sphere-ads': 'Meta & Google<br>Ad Management',
            'tag-content-plan': 'Content Plan',
            'tag-community': 'Community Management',
            'tag-audience': 'Target Audience',
            'tag-campaign-setup': 'Campaign Setup',
            'tag-budget-opt': 'Budget Optimization',
            'tag-reporting': 'Reporting',
            'section-about': 'About Us',
            'about-p1': '<strong>7K Dijital Pazarlama</strong> is an independent, freelance digital marketing service led by Hatice Urgaç, helping brands build an effective social media presence and grow through Meta & Google ad campaigns.',
            'about-p2': 'We provide solutions across a wide range from social media management to Meta & Google ad campaigns, from your website to brand identity creation.',
            'section-services': 'Our Services',
            'service-web-title': 'Website',
            'service-social-title': 'Social Media Management',
            'service-meta-title': 'Meta & Google Ads Management',
            'tag-web-page': 'Web Page',
            'tag-modern-design': 'Modern Design',
            'tag-responsive': 'Mobile-Friendly',
            'tag-fast-site': 'Fast Site',
            'section-process': 'How We Work?',
            'step-1-title': 'Discovery & Analysis',
            'step-1-desc': 'We analyze your brand, target audience and competitors. We create a strategy tailored to your needs.',
            'step-2-title': 'Design & Content',
            'step-2-desc': 'We design custom visuals, social media content and ad materials for your brand.',
            'step-3-title': 'Campaign & Publishing',
            'step-3-desc': 'We set up Meta ad campaigns, plan your social media content and publish them.',
            'section-contact': 'Contact',
            'contact-desc': 'Looking for social media, Meta Ads, Google Ads or website support for your brand? Get in touch now.',
            'contact-whatsapp-label': 'WhatsApp',
            'contact-email-label': 'Email',
            'contact-ig-anim-label': 'Instagram (Animation)',
            'btn-send': 'Send',
            'footer': '&copy; 2026 7K Dijital Pazarlama. All rights reserved.',
            'ph-name': 'Your Name',
            'ph-email': 'Your Email',
            'ph-message': 'Your Message',
            'page-title': '7K Dijital Pazarlama | Social Media, Meta & Google Ads Management'
        },
        ar: {
            'nav-about': 'نبذة عنا',
            'nav-services': 'الخدمات',
            'nav-process': 'آلية العمل',
            'nav-contact': 'تواصل معنا',
            'hero-title': 'إدارة السوشيال ميديا وإعلانات ميتا وجوجل',
            'hero-desc': 'من إدارة السوشيال ميديا إلى حملات إعلانات ميتا وجوجل، ومن موقعكم الإلكتروني إلى حضوركم الرقمي — ندير كل خطوة تحتاجها علامتكم التجارية للنمو، في مكان واحد.',
            'cta-button': 'احصل على تحليل مجاني',
            'sphere-web': 'تصميم<br>مواقع الويب',
            'sphere-social': 'إدارة<br>وسائل التواصل',
            'sphere-ads': 'إدارة إعلانات<br>ميتا وجوجل',
            'tag-content-plan': 'خطة محتوى',
            'tag-community': 'إدارة المجتمع',
            'tag-audience': 'الجمهور المستهدف',
            'tag-campaign-setup': 'إعداد الحملات',
            'tag-budget-opt': 'تحسين الميزانية',
            'tag-reporting': 'تقارير الأداء',
            'section-about': 'نبذة عنا',
            'about-p1': '<strong>7K Dijital Pazarlama</strong> خدمة تسويق رقمي مستقلة (فريلانس) بقيادة Hatice Urgaç، تساعد العلامات التجارية على بناء حضور فعّال في وسائل التواصل الاجتماعي والنمو من خلال حملات إعلانات ميتا وجوجل.',
            'about-p2': 'نقدّم حلولاً متكاملة تمتد من إدارة وسائل التواصل الاجتماعي إلى حملات إعلانات ميتا وجوجل، ومن موقعكم الإلكتروني إلى بناء الهوية التجارية.',
            'section-services': 'خدماتنا',
            'service-web-title': 'تصميم مواقع الويب',
            'service-social-title': 'إدارة وسائل التواصل الاجتماعي',
            'service-meta-title': 'إدارة إعلانات ميتا وجوجل',
            'tag-web-page': 'صفحة ويب',
            'tag-modern-design': 'تصميم عصري',
            'tag-responsive': 'متوافق مع الجوال',
            'tag-fast-site': 'موقع سريع',
            'section-process': 'كيف نعمل؟',
            'step-1-title': 'الاكتشاف والتحليل',
            'step-1-desc': 'نحلّل علامتكم التجارية وجمهوركم المستهدف ومنافسيكم، ونضع استراتيجية مصممة خصيصاً لاحتياجاتكم.',
            'step-2-title': 'التصميم والمحتوى',
            'step-2-desc': 'نصمم تصاميم مخصصة ومحتوى للسوشيال ميديا ومواد إعلانية لعلامتكم التجارية.',
            'step-3-title': 'الحملات والنشر',
            'step-3-desc': 'نُعدّ حملات إعلانات ميتا، ونخطط لمحتوى السوشيال ميديا الخاص بكم وننشره.',
            'section-contact': 'تواصل معنا',
            'contact-desc': 'هل تبحثون عن دعم في السوشيال ميديا أو إعلانات ميتا وجوجل أو الموقع الإلكتروني لعلامتكم التجارية؟ تواصلوا معنا الآن.',
            'contact-whatsapp-label': 'واتساب',
            'contact-email-label': 'البريد الإلكتروني',
            'contact-ig-anim-label': 'إنستغرام (الرسوم المتحركة)',
            'btn-send': 'إرسال',
            'footer': '&copy; 2026 7K Dijital Pazarlama. جميع الحقوق محفوظة.',
            'ph-name': 'الاسم',
            'ph-email': 'البريد الإلكتروني',
            'ph-message': 'رسالتك',
            'page-title': '7K Dijital Pazarlama | إدارة السوشيال ميديا وإعلانات ميتا وجوجل'
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
