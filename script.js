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
            'nav-gallery': 'Galeri',
            'nav-process': 'Süreç',
            'nav-contact': 'İletişim',
            'hero-title': 'Yapay Zeka Destekli Tasarım ve Web Stüdyosu',
            'hero-desc': 'Fotoğraf, video ve animasyon tasarımlarından web sitesi ve dijital otomasyon çözümlerine kadar markanızı büyütecek her projeyi tek yerden sunuyoruz.',
            'sphere-ai': 'AI<br>Tasarımlar',
            'sphere-social': 'Sosyal Medya<br>Yönetimi',
            'sphere-ads': 'Meta & Google<br>Reklam Yönetimi',
            'sphere-gallery': 'Galeri',
            'sphere-invoice': 'Yapay Zeka Destekli<br>Fatura & Ürün Girişi',
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
            'about-p1': '<strong>distylta</strong>, yapay zeka teknolojileri ile yaratıcı tasarımı birleştiren bir ajanstır. Markaların görsel kimliğini AI ile güçlendiriyor, sosyal medyada etkili varlık göstermelerini sağlıyoruz.',
            'about-p2': 'AI görsel tasarımından sosyal medya yönetimine, Meta & Google reklam kampanyalarından marka kimliği oluşturmaya kadar geniş bir yelpazede çözümler üretiyoruz.',
            'section-services': 'Hizmetlerimiz',
            'service-ai-title': 'AI Fotoğraf/Video Tasarımı',
            'service-brand-title': 'Animasyon Tasarım',
            'service-web-title': 'Web Sitesi',
            'service-social-title': 'Sosyal Medya Yönetimi',
            'service-meta-title': 'Meta & Google Reklam Yönetimi',
            'service-invoice-title': 'Yapay Zeka Destekli Fatura & Ürün Girişi Hizmeti',
            'tag-invoice-scan': 'Fatura Tarama',
            'tag-auto-entry': 'Otomatik Veri Girişi',
            'tag-stock-update': 'Stok Güncelleme',
            'tag-time-saving': 'Zamandan Tasarruf',
            'tag-web-page': 'Web Sayfası',
            'tag-modern-design': 'Modern Tasarım',
            'tag-responsive': 'Mobil Uyumlu',
            'tag-fast-site': 'Hızlı Site',
            'tag-motion': 'Motion Graphics',
            'tag-stylized-animation': 'Stilize Animasyon',
            'tag-reels': 'Reels/Video',
            'gallery-title': 'Galeri',
            'section-process': 'Nasıl Çalışıyoruz?',
            'step-1-title': 'Keşif & Analiz',
            'step-1-desc': 'Markanızı, hedef kitlenizi ve rakiplerinizi analiz ediyoruz. İhtiyaçlarınıza özel strateji oluşturuyoruz.',
            'step-2-title': 'AI Tasarım & İçerik',
            'step-2-desc': 'Yapay zeka araçlarıyla markanıza özel görseller, sosyal medya içerikleri ve reklam materyalleri tasarlıyoruz.',
            'step-3-title': 'Kampanya & Yayınlama',
            'step-3-desc': 'Meta reklam kampanyalarını kurguluyor, sosyal medya içeriklerinizi planlıyor ve yayınlıyoruz.',
            'step-4-title': 'Fatura Yükleme & Otomatik Giriş',
            'step-4-desc': 'Faturalarınızı bize iletirsiniz, yapay zekamız ürün ve stok bilgilerini otomatik olarak sisteminize işler.',
            'section-contact': 'İletişim',
            'contact-desc': 'Markanız için AI tasarım, sosyal medya, Meta Ads veya Google Ads desteği mi istiyorsunuz? Hemen ulaşın.',
            'contact-email-label': 'E-posta',
            'contact-ig-ai-label': 'Instagram (AI Hesabı)',
            'contact-ig-anim-label': 'Instagram (Animasyon)',
            'btn-send': 'Gönder',
            'footer': '&copy; 2026 distylta. Tüm hakları saklıdır.',
            'ph-name': 'Adınız',
            'ph-email': 'E-posta adresiniz',
            'ph-message': 'Mesajınız',
            'page-title': 'distylta | Yapay Zeka Destekli Tasarım/Web Stüdyosu'
        },
        en: {
            'nav-about': 'About Us',
            'nav-services': 'Services',
            'nav-gallery': 'Gallery',
            'nav-process': 'Process',
            'nav-contact': 'Contact',
            'hero-title': 'AI-Powered Design/Web Studio',
            'hero-desc': 'From photo, video and animation design to websites and digital automation — every project your brand needs to grow, in one place.',
            'sphere-ai': 'AI<br>Designs',
            'sphere-social': 'Social Media<br>Management',
            'sphere-ads': 'Meta & Google<br>Ad Management',
            'sphere-gallery': 'Gallery',
            'sphere-invoice': 'AI-Powered<br>Invoice & Product Entry',
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
            'section-services': 'Our Services',
            'service-ai-title': 'AI Photo/Video Design',
            'service-brand-title': 'Animation Design',
            'service-web-title': 'Website',
            'service-social-title': 'Social Media Management',
            'service-meta-title': 'Meta & Google Ads Management',
            'service-invoice-title': 'AI-Powered Invoice & Product Entry Service',
            'tag-invoice-scan': 'Invoice Scanning',
            'tag-auto-entry': 'Automatic Data Entry',
            'tag-stock-update': 'Stock Update',
            'tag-time-saving': 'Time Saving',
            'tag-web-page': 'Web Page',
            'tag-modern-design': 'Modern Design',
            'tag-responsive': 'Mobile-Friendly',
            'tag-fast-site': 'Fast Site',
            'tag-motion': 'Motion Graphics',
            'tag-stylized-animation': 'Stylized Animation',
            'tag-reels': 'Reels/Video',
            'gallery-title': 'Gallery',
            'section-process': 'How We Work?',
            'step-1-title': 'Discovery & Analysis',
            'step-1-desc': 'We analyze your brand, target audience and competitors. We create a strategy tailored to your needs.',
            'step-2-title': 'AI Design & Content',
            'step-2-desc': 'We design custom visuals, social media content and ad materials for your brand using AI tools.',
            'step-3-title': 'Campaign & Publishing',
            'step-3-desc': 'We set up Meta ad campaigns, plan your social media content and publish them.',
            'step-4-title': 'Invoice Upload & Automatic Entry',
            'step-4-desc': 'You send us your invoices, and our AI automatically enters the product and stock information into your system.',
            'section-contact': 'Contact',
            'contact-desc': 'Looking for AI design, social media, Meta or Google ad support for your brand? Get in touch now.',
            'contact-email-label': 'Email',
            'contact-ig-ai-label': 'Instagram (AI Account)',
            'contact-ig-anim-label': 'Instagram (Animation)',
            'btn-send': 'Send',
            'footer': '&copy; 2026 distylta. All rights reserved.',
            'ph-name': 'Your Name',
            'ph-email': 'Your Email',
            'ph-message': 'Your Message',
            'page-title': 'distylta | AI-Powered Design/Web Studio'
        },
        ar: {
            'nav-about': 'نبذة عنا',
            'nav-services': 'الخدمات',
            'nav-gallery': 'المعرض',
            'nav-process': 'آلية العمل',
            'nav-contact': 'تواصل معنا',
            'hero-title': 'استوديو التصميم/الويب المدعوم بالذكاء الاصطناعي',
            'hero-desc': 'من تصميم الصور والفيديو والرسوم المتحركة إلى مواقع الويب وحلول الأتمتة الرقمية — كل ما تحتاجه علامتكم التجارية للنمو، في مكان واحد.',
            'sphere-ai': 'تصاميم<br>الذكاء الاصطناعي',
            'sphere-social': 'إدارة<br>وسائل التواصل',
            'sphere-ads': 'إدارة إعلانات<br>ميتا وجوجل',
            'sphere-gallery': 'المعرض',
            'sphere-invoice': 'إدخال الفواتير والمنتجات<br>بالذكاء الاصطناعي',
            'tag-ai-visual': 'تصميم بالذكاء الاصطناعي',
            'tag-prompt': 'هندسة الأوامر',
            'tag-product-visual': 'صورة منتج',
            'tag-creative': 'تصميم إبداعي',
            'tag-content-plan': 'خطة محتوى',
            'tag-community': 'إدارة المجتمع',
            'tag-audience': 'الجمهور المستهدف',
            'tag-search-ads': 'إعلانات البحث',
            'tag-pmax': 'Performance Max',
            'section-about': 'نبذة عنا',
            'about-p1': '<strong>distylta</strong> وكالة تجمع بين تقنيات الذكاء الاصطناعي والتصميم الإبداعي. نعزز الهوية البصرية للعلامات التجارية بالذكاء الاصطناعي، ونضمن حضورها الفعّال على وسائل التواصل الاجتماعي.',
            'about-p2': 'نقدّم حلولاً متكاملة تمتد من التصميم البصري بالذكاء الاصطناعي إلى إدارة وسائل التواصل الاجتماعي، ومن حملات إعلانات ميتا وجوجل إلى بناء الهوية التجارية.',
            'section-services': 'خدماتنا',
            'service-ai-title': 'تصميم صور/فيديو بالذكاء الاصطناعي',
            'service-brand-title': 'تصميم الرسوم المتحركة',
            'service-web-title': 'تصميم مواقع الويب',
            'service-social-title': 'إدارة وسائل التواصل الاجتماعي',
            'service-meta-title': 'إدارة إعلانات ميتا وجوجل',
            'service-invoice-title': 'خدمة إدخال الفواتير والمنتجات بالذكاء الاصطناعي',
            'tag-invoice-scan': 'مسح الفواتير',
            'tag-auto-entry': 'إدخال بيانات تلقائي',
            'tag-stock-update': 'تحديث المخزون',
            'tag-time-saving': 'توفير الوقت',
            'tag-web-page': 'صفحة ويب',
            'tag-modern-design': 'تصميم عصري',
            'tag-responsive': 'متوافق مع الجوال',
            'tag-fast-site': 'موقع سريع',
            'tag-motion': 'موشن جرافيك',
            'tag-stylized-animation': 'رسوم متحركة مميزة',
            'tag-reels': 'ريلز/فيديو',
            'gallery-title': 'المعرض',
            'section-process': 'كيف نعمل؟',
            'step-1-title': 'الاكتشاف والتحليل',
            'step-1-desc': 'نحلّل علامتكم التجارية وجمهوركم المستهدف ومنافسيكم، ونضع استراتيجية مصممة خصيصاً لاحتياجاتكم.',
            'step-2-title': 'التصميم والمحتوى بالذكاء الاصطناعي',
            'step-2-desc': 'نصمم تصاميم مخصصة ومحتوى للسوشيال ميديا ومواد إعلانية لعلامتكم التجارية باستخدام أدوات الذكاء الاصطناعي.',
            'step-3-title': 'الحملات والنشر',
            'step-3-desc': 'نُعدّ حملات إعلانات ميتا، ونخطط لمحتوى السوشيال ميديا الخاص بكم وننشره.',
            'step-4-title': 'رفع الفواتير والإدخال التلقائي',
            'step-4-desc': 'ترسلون لنا فواتيركم، ويقوم الذكاء الاصطناعي بإدخال بيانات المنتجات والمخزون في نظامكم تلقائياً.',
            'section-contact': 'تواصل معنا',
            'contact-desc': 'هل تبحثون عن دعم في التصميم بالذكاء الاصطناعي أو إدارة السوشيال ميديا أو إعلانات ميتا وجوجل لعلامتكم التجارية؟ تواصلوا معنا الآن.',
            'contact-email-label': 'البريد الإلكتروني',
            'contact-ig-ai-label': 'إنستغرام (حساب الذكاء الاصطناعي)',
            'contact-ig-anim-label': 'إنستغرام (الرسوم المتحركة)',
            'btn-send': 'إرسال',
            'footer': '&copy; 2026 distylta. جميع الحقوق محفوظة.',
            'ph-name': 'الاسم',
            'ph-email': 'البريد الإلكتروني',
            'ph-message': 'رسالتك',
            'page-title': 'distylta | استوديو التصميم/الويب المدعوم بالذكاء الاصطناعي'
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
