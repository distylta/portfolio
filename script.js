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
        btn.textContent = currentLang === 'tr' ? 'Gönderiliyor...' : (currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Sending...');
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
            'hero-title': 'Yapay Zeka Destekli Tasarım Stüdyosu',
            'hero-desc': 'Fotoğraf, video ve animasyon tasarımlarından web sitesi ve dijital otomasyon çözümlerine kadar markanızı büyütecek her projeyi tek yerden sunuyoruz.',
            'hero-btn-whatsapp': 'Bilgi Al',
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
            'about-p1': '<strong>distylta</strong>, yapay zeka teknolojileri ile yaratıcı tasarımı birleştiren bir ajanstır. Markaların görsel kimliğini AI ile güçlendiriyor, sosyal medyada etkili varlık göstermelerini sağlıyoruz.',
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
            'service-chatbot-title': 'AI Chatbot Kurulumu',
            'tag-instagram-dm': 'Instagram DM',
            'tag-auto-reply': 'Otomatik Yanıt',
            'tag-support-24-7': '7/24 Destek',
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
            'page-title': 'distylta | Yapay Zeka Tasarımları'
        },
        en: {
            'nav-about': 'About Us',
            'nav-services': 'Services',
            'nav-projects': 'Projects',
            'nav-gallery': 'Gallery',
            'nav-process': 'Process',
            'nav-contact': 'Contact',
            'hero-title': 'AI-Powered Creative Studio',
            'hero-desc': 'From photo, video and animation design to websites and digital automation — every project your brand needs to grow, in one place.',
            'hero-btn-whatsapp': 'Get Info',
            'stat-clients': 'Happy Clients',
            'stat-designs': 'AI Designs',
            'stat-campaigns': 'Ad Campaigns',
            'sphere-ai': 'AI<br>Designs',
            'sphere-social': 'Social Media<br>Management',
            'sphere-ads': 'Meta & Google<br>Ad Management',
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
            'service-chatbot-title': 'AI Chatbot Setup',
            'tag-instagram-dm': 'Instagram DM',
            'tag-auto-reply': 'Auto-Reply',
            'tag-support-24-7': '24/7 Support',
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
            'page-title': 'distylta | AI Designs'
        },
        ar: {
            'nav-about': 'نبذة عنا',
            'nav-services': 'الخدمات',
            'nav-projects': 'أعمالنا',
            'nav-gallery': 'المعرض',
            'nav-process': 'آلية العمل',
            'nav-contact': 'تواصل معنا',
            'hero-title': 'استوديو إبداعي مدعوم بالذكاء الاصطناعي',
            'hero-desc': 'من تصميم الصور والفيديو والرسوم المتحركة إلى مواقع الويب وحلول الأتمتة الرقمية — كل ما تحتاجه علامتكم التجارية للنمو، في مكان واحد.',
            'hero-btn-whatsapp': 'اطلب معلومات',
            'stat-clients': 'عميل سعيد',
            'stat-designs': 'تصميم بالذكاء الاصطناعي',
            'stat-campaigns': 'حملة إعلانية',
            'sphere-ai': 'تصاميم<br>الذكاء الاصطناعي',
            'sphere-social': 'إدارة<br>وسائل التواصل',
            'sphere-ads': 'إدارة إعلانات<br>ميتا وجوجل',
            'sphere-gallery': 'المعرض',
            'detail-ai-title': 'تصميم بالذكاء الاصطناعي',
            'detail-ai-desc': 'نبتكر تصاميم بصرية وصور منتجات وتصاميم إبداعية مخصصة لعلامتكم التجارية باستخدام أدوات الذكاء الاصطناعي المتخصصة.',
            'detail-social-title': 'إدارة وسائل التواصل الاجتماعي',
            'detail-social-desc': 'ندير حسابات إنستغرام وفيسبوك الخاصة بكم باحترافية، ونضع خطط محتوى دورية، ونتولى إدارة التفاعل مع المتابعين.',
            'detail-ads-title': 'إدارة إعلانات ميتا وجوجل',
            'detail-ads-desc': 'نعمل على تحسين حملاتكم الإعلانية على فيسبوك وإنستغرام وجوجل، ونرفع عائد الإنفاق الإعلاني وحركة الزيارات من خلال تحليل الجمهور المستهدف.',
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
            'label-location': 'الموقع',
            'value-location': 'تركيا',
            'label-expertise': 'الخبرة',
            'value-expertise': 'تصميم بالذكاء الاصطناعي، إعلانات ميتا، إعلانات جوجل',
            'value-platforms': 'إنستغرام، فيسبوك، جوجل',
            'label-platforms': 'المنصات',
            'section-services': 'خدماتنا',
            'service-ai-title': 'تصميم بصري بالذكاء الاصطناعي',
            'service-brand-title': 'الهوية التجارية والتصميم',
            'service-social-title': 'إدارة وسائل التواصل الاجتماعي',
            'service-meta-title': 'إدارة إعلانات ميتا',
            'service-google-title': 'إدارة إعلانات جوجل',
            'service-chatbot-title': 'إعداد شات بوت بالذكاء الاصطناعي',
            'tag-instagram-dm': 'رسائل إنستغرام المباشرة',
            'tag-auto-reply': 'رد تلقائي',
            'tag-support-24-7': 'دعم على مدار الساعة',
            'tag-logo': 'تصميم شعار',
            'tag-corporate': 'الهوية المؤسسية',
            'tag-social-visual': 'تصميم لوسائل التواصل',
            'tag-web-page': 'صفحة ويب',
            'section-projects': 'أعمالنا',
            'project-1-title': 'صور منتجات بالذكاء الاصطناعي - علامة تجارة إلكترونية',
            'project-1-desc': 'تم إنتاج صور منتجات احترافية باستخدام الذكاء الاصطناعي، وصور كتالوج عالية الجودة دون تكاليف استوديو التصوير.',
            'project-2-title': 'إدارة وسائل التواصل الاجتماعي - سلسلة مطاعم',
            'project-2-desc': 'ارتفع عدد المتابعين بنسبة 180% خلال استراتيجية سوشيال ميديا استمرت 3 أشهر، شملت خطة محتوى أسبوعية وتصاميم بالذكاء الاصطناعي وإدارة للتفاعل.',
            'project-3-title': 'حملة إعلانية عبر ميتا - علامة تجميل',
            'project-3-desc': 'ارتفع عائد الإنفاق الإعلاني بنسبة 340% من خلال حملات فيسبوك وإنستغرام، مع خفض التكاليف بفضل تحسين استهداف الجمهور.',
            'project-4-title': 'هوية تجارية متكاملة - شركة تقنية ناشئة',
            'project-4-desc': 'تم إنشاء الشعار والهوية المؤسسية وقوالب السوشيال ميديا والتصاميم الإعلانية بالذكاء الاصطناعي، مع إدارة الحملة الرقمية بالتوازي مع الإطلاق.',
            'project-5-title': 'حملة إعلانات جوجل - قطاع الخدمات',
            'project-5-desc': 'ارتفعت زيارات الموقع بنسبة 220% من خلال حملات بحث جوجل وPerformance Max، مع تعظيم كفاءة الميزانية عبر تحسين تكلفة النقرة.',
            'tag-product-photo': 'تصوير المنتجات',
            'tag-content-strategy': 'استراتيجية المحتوى',
            'tag-ai-design': 'تصميم بالذكاء الاصطناعي',
            'tag-brand-identity': 'الهوية التجارية',
            'tag-launch': 'الإطلاق',
            'gallery-title': 'المعرض',
            'folder-photos': 'صور',
            'folder-videos': 'فيديوهات',
            'folder-animations': 'رسوم متحركة',
            'section-process': 'كيف نعمل؟',
            'step-1-title': 'الاكتشاف والتحليل',
            'step-1-desc': 'نحلّل علامتكم التجارية وجمهوركم المستهدف ومنافسيكم، ونضع استراتيجية مصممة خصيصاً لاحتياجاتكم.',
            'step-2-title': 'التصميم والمحتوى بالذكاء الاصطناعي',
            'step-2-desc': 'نصمم تصاميم مخصصة ومحتوى للسوشيال ميديا ومواد إعلانية لعلامتكم التجارية باستخدام أدوات الذكاء الاصطناعي.',
            'step-3-title': 'الحملات والنشر',
            'step-3-desc': 'نُعدّ حملات إعلانات ميتا، ونخطط لمحتوى السوشيال ميديا الخاص بكم وننشره.',
            'section-contact': 'تواصل معنا',
            'contact-desc': 'هل تبحثون عن دعم في التصميم بالذكاء الاصطناعي أو إدارة السوشيال ميديا أو إعلانات ميتا وجوجل لعلامتكم التجارية؟ تواصلوا معنا الآن.',
            'contact-email-label': 'البريد الإلكتروني',
            'btn-send': 'إرسال',
            'footer': '&copy; 2026 distylta. جميع الحقوق محفوظة.',
            'ph-name': 'الاسم',
            'ph-email': 'البريد الإلكتروني',
            'ph-message': 'رسالتك',
            'page-title': 'distylta | تصاميم بالذكاء الاصطناعي'
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
