'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ═══════════════════════════════════════════
     0. Enable JS-driven animations
        (without this class, elements stay visible
         for no-JS / headless / accessibility cases)
     ═══════════════════════════════════════════ */
  document.documentElement.classList.add('js-ready');

  // The language gate is shown on every visit; the choice applies to the full page.
  const translations = {
    en: {nav_work:'Work',nav_about:'About',nav_skills:'Skills',nav_contact:'Contact',hero_avail:'Available for new projects',hero_h1:'Building digital',hero_h2:'experiences',hero_h3:'that make ideas',hero_h4:'work.',hero_sub:"I'm Abderrahim Rachidi — a self-taught frontend developer from Morocco. I craft purposeful websites that help businesses connect with real people.",hero_cta1:'Explore My Work',hero_cta2:"Let's Talk",hero_badge1:'Frontend Dev',hero_badge2:'Morocco 🇲🇦',scroll_hint:'Scroll',sec_01_name:'About',about_heading:'I build things<br>people <em>actually</em><br>enjoy using.',about_lead:"I'm Abderrahim — a self-taught frontend developer and digital experience creator based in Morocco.",about_p1:"I got into web development because I was fascinated by the gap between what an idea looks like in someone's head and what actually ends up on screen. That gap is where I work.",about_p2:'I learned by doing: building pages, fixing problems, and slowly developing a sense for what makes a digital product feel <em>right</em> — not just functional, but intentional. Every project I take on is a chance to combine clean code with thoughtful design.',about_p3:"I care about performance, accessibility, and the kind of details most people don't consciously notice — but definitely feel.",val1_label:'Philosophy',val1_text:'Build with intention. Ship with clarity.',val2_label:'Approach',val2_text:'Design-first, code-informed, user-centered.',sec_02_name:'Selected Work',work_desc:'A selection of projects built with care and purpose.',live_site:'Live Site ↗',view_live:'View project',sec_03_name:'Skills',skills_heading:'Tools I use to<br>make ideas <em>real.</em>',skill_group1:'Development',skill_group2:'Design & Workflow',sec_04_name:'Process',process_heading:'From first thought<br>to <em>finished product.</em>',step1_title:'Discover',step1_desc:'We discuss your goals, audience, and what success looks like.',step2_title:'Design',step2_desc:'I shape a clear visual direction around your brand and users.',step3_title:'Build',step3_desc:'I turn the design into a fast, responsive website.',step4_title:'Launch',step4_desc:'We polish the details and put your site in front of the world.',sec_05_name:'Contact',contact_headline:"Have a project in mind? <em>Let's make it happen.</em>",form_intro:'Tell me a little about your project and I’ll get back to you.',f_name:'Your name',f_phone:'Phone / WhatsApp',f_email:'Email address',f_email_opt:'Optional',f_service:'What do you need?',f_msg:'Tell me about your project',f_submit:'Send message',ch_email:'Email',ch_github:'GitHub',ch_linkedin:'LinkedIn',ch_linkedin_val:'Connect with me',ch_whatsapp:'WhatsApp',footer_copy:'Designed & built by Abderrahim Rachidi'},
    fr: {nav_work:'Projets',nav_about:'À propos',nav_skills:'Compétences',nav_contact:'Contact',hero_avail:'Disponible pour de nouveaux projets',hero_h1:'Je crée des',hero_h2:'expériences numériques',hero_h3:'qui donnent vie',hero_h4:'aux idées.',hero_sub:'Je suis Abderrahim Rachidi, développeur frontend autodidacte au Maroc. Je crée des sites utiles qui rapprochent les entreprises de leurs clients.',hero_cta1:'Voir mes projets',hero_cta2:'Parlons-en',hero_badge1:'Développeur frontend',hero_badge2:'Maroc 🇲🇦',scroll_hint:'Défiler',sec_01_name:'À propos',about_heading:'Je crée des sites<br>que les gens <em>aiment</em><br>vraiment utiliser.',about_lead:'Je suis Abderrahim, développeur frontend autodidacte et créateur d’expériences numériques au Maroc.',about_p1:'Le développement web m’a attiré par l’écart entre une idée imaginée et ce qui apparaît réellement à l’écran. C’est dans cet espace que je travaille.',about_p2:'J’ai appris en pratiquant : créer des pages, résoudre des problèmes et comprendre ce qui rend un produit numérique <em>juste</em> — fonctionnel et réfléchi. Chaque projet associe code soigné et design attentif.',about_p3:'Je veille aux performances, à l’accessibilité et aux détails que l’on ne remarque pas toujours, mais que l’on ressent.',val1_label:'Philosophie',val1_text:'Créer avec intention. Livrer avec clarté.',val2_label:'Approche',val2_text:'Design d’abord, code réfléchi, utilisateurs au centre.',sec_02_name:'Projets choisis',work_desc:'Une sélection de projets conçus avec soin et intention.',live_site:'Voir le site ↗',view_live:'Voir le projet',sec_03_name:'Compétences',skills_heading:'Les outils pour<br>rendre les idées <em>réelles.</em>',skill_group1:'Développement',skill_group2:'Design et méthodes',sec_04_name:'Méthode',process_heading:'De la première idée<br>au <em>produit fini.</em>',step1_title:'Découverte',step1_desc:'Nous définissons vos objectifs, votre public et les critères de réussite.',step2_title:'Design',step2_desc:'Je crée une direction visuelle adaptée à votre marque et vos utilisateurs.',step3_title:'Création',step3_desc:'Je transforme le design en un site rapide et adaptable.',step4_title:'Lancement',step4_desc:'Nous peaufinons les détails et mettons votre site en ligne.',sec_05_name:'Contact',contact_headline:'Un projet en tête ? <em>Réalisons-le ensemble.</em>',form_intro:'Parlez-moi de votre projet et je vous répondrai rapidement.',f_name:'Votre nom',f_phone:'Téléphone / WhatsApp',f_email:'Adresse e-mail',f_email_opt:'Facultatif',f_service:'Quel est votre besoin ?',f_msg:'Parlez-moi de votre projet',f_submit:'Envoyer le message',ch_email:'E-mail',ch_github:'GitHub',ch_linkedin:'LinkedIn',ch_linkedin_val:'Me contacter',ch_whatsapp:'WhatsApp',footer_copy:'Conçu et développé par Abderrahim Rachidi'},
    ar: {nav_work:'الأعمال',nav_about:'من أنا',nav_skills:'المهارات',nav_contact:'تواصل',hero_avail:'متاح لمشاريع جديدة',hero_h1:'أصنع تجارب',hero_h2:'رقمية مميزة',hero_h3:'تحول الأفكار',hero_h4:'إلى واقع.',hero_sub:'أنا عبد الرحيم رشيدي، مطور واجهات أمامية عصامي من المغرب. أصمم مواقع هادفة تساعد الشركات على التواصل مع الناس.',hero_cta1:'اكتشف أعمالي',hero_cta2:'لنتحدث',hero_badge1:'مطور واجهات',hero_badge2:'المغرب 🇲🇦',scroll_hint:'مرر',sec_01_name:'من أنا',about_heading:'أبني تجارب<br>يستمتع الناس <em>حقاً</em><br>باستخدامها.',about_lead:'أنا عبد الرحيم، مطور واجهات أمامية عصامي ومبدع تجارب رقمية من المغرب.',about_p1:'بدأ اهتمامي بتطوير الويب بسبب الفرق بين الفكرة في أذهاننا وما يظهر فعلياً على الشاشة. هذا المجال هو ما أعمل فيه.',about_p2:'تعلمت بالممارسة: بناء الصفحات وحل المشكلات واكتشاف ما يجعل المنتج الرقمي <em>متقناً</em> وهادفاً، لا مجرد أداة تعمل. في كل مشروع أجمع بين الشيفرة النظيفة والتصميم المدروس.',about_p3:'أهتم بالأداء وسهولة الوصول والتفاصيل التي قد لا نلاحظها، لكننا نشعر بها.',val1_label:'فلسفتي',val1_text:'أبني بهدف وأسلم بوضوح.',val2_label:'نهجي',val2_text:'التصميم أولاً، والكود يخدم المستخدم.',sec_02_name:'أعمال مختارة',work_desc:'مجموعة من المشاريع المنفذة بعناية وهدف.',live_site:'زيارة الموقع ↗',view_live:'عرض المشروع',sec_03_name:'المهارات',skills_heading:'أدوات أحول بها<br>الأفكار إلى <em>واقع.</em>',skill_group1:'التطوير',skill_group2:'التصميم وسير العمل',sec_04_name:'منهجيتي',process_heading:'من الفكرة الأولى<br>إلى <em>المنتج النهائي.</em>',step1_title:'الاكتشاف',step1_desc:'نحدد أهدافك وجمهورك ومعايير النجاح.',step2_title:'التصميم',step2_desc:'أرسم توجهاً بصرياً يناسب علامتك ومستخدميك.',step3_title:'التطوير',step3_desc:'أحول التصميم إلى موقع سريع ومتجاوب.',step4_title:'الإطلاق',step4_desc:'نراجع التفاصيل ونطلق موقعك للعالم.',sec_05_name:'تواصل معي',contact_headline:'لديك مشروع؟ <em>لننجزه معاً.</em>',form_intro:'أخبرني قليلاً عن مشروعك وسأعاود التواصل معك.',f_name:'الاسم',f_phone:'الهاتف / واتساب',f_email:'البريد الإلكتروني',f_email_opt:'اختياري',f_service:'ما الخدمة التي تحتاجها؟',f_msg:'أخبرني عن مشروعك',f_submit:'إرسال الرسالة',ch_email:'البريد الإلكتروني',ch_github:'جيت هب',ch_linkedin:'لينكدإن',ch_linkedin_val:'تواصل معي',ch_whatsapp:'واتساب',footer_copy:'تصميم وتطوير عبد الرحيم رشيدي'}
  };
  translations.en.skill_group1 = 'Languages & Frameworks';
  translations.fr.skill_group1 = 'Langages et frameworks';
  translations.ar.skill_group1 = 'لغات البرمجة وأطر العمل';
  Object.assign(translations.en, {
    hero_h1: 'Websites made', hero_h2: 'with care.', hero_h3: '', hero_h4: '',
    hero_sub: "I'm Abderrahim, a self-taught frontend developer from Morocco. I build websites for businesses.",
    work_desc: 'A few websites I have worked on.',
    about_heading: 'I design and build<br>websites for <em>people</em><br>and businesses.',
    step1_desc: 'First, I learn about your business, your customers, and what the site needs to do.',
    step2_desc: 'I plan the pages and agree on the visual direction before development starts.',
    step3_desc: 'I build the site to work across screen sizes, with attention to speed and accessibility.',
    step4_desc: 'We review the finished site, make any final adjustments, and prepare it to go live.',
    form_intro: 'Prefer email? You can also reach me through the form below.',
    proj_desc_01: 'A website for a cleaning company in Kénitra, with clear service information and direct contact options.',
    proj_desc_02: 'A restaurant website with its menu and details for visitors planning a meal in Merzouga.',
    proj_desc_03: 'A boutique hotel website featuring its rooms, gallery, and booking information.',
    proj_desc_04: 'A website for Centre Nour, presenting the center and its services.',
    proj_desc_05: 'A website for an accounting firm, with information for prospective clients.',
    proj_desc_06: 'An online storefront for AHR Collections.'
  });
  Object.assign(translations.fr, {
    hero_h1: 'Des sites web', hero_h2: 'bien conçus.', hero_h3: '', hero_h4: '',
    hero_sub: 'Je suis Abderrahim, développeur frontend autodidacte au Maroc. Je crée des sites web pour les entreprises.',
    work_desc: 'Quelques sites sur lesquels j’ai travaillé.',
    about_heading: 'Je conçois et crée<br>des sites pour les <em>gens</em><br>et les entreprises.',
    step1_desc: 'Je commence par comprendre votre activité, vos clients et les besoins du site.',
    step2_desc: 'Je définis les pages et la direction visuelle avant de commencer le développement.',
    step3_desc: 'Je crée un site adapté aux écrans, en tenant compte de la vitesse et de l’accessibilité.',
    step4_desc: 'Nous relisons le site, faisons les derniers ajustements et préparons sa mise en ligne.',
    form_intro: 'Vous pouvez aussi me contacter avec le formulaire ci-dessous.',
    proj_desc_01: 'Un site pour une entreprise de nettoyage à Kénitra, avec des services clairement présentés et un contact direct.',
    proj_desc_02: 'Un site de restaurant avec son menu et les informations utiles pour préparer une visite à Merzouga.',
    proj_desc_03: 'Un site d’hôtel boutique présentant ses chambres, sa galerie et les informations de réservation.',
    proj_desc_04: 'Un site pour Centre Nour, qui présente le centre et ses services.',
    proj_desc_05: 'Un site pour un cabinet comptable, avec les informations utiles aux futurs clients.',
    proj_desc_06: 'Une boutique en ligne pour AHR Collections.'
  });
  Object.assign(translations.ar, {
    hero_h1: 'مواقع إلكترونية', hero_h2: 'بكل عناية.', hero_h3: '', hero_h4: '',
    hero_sub: 'أنا عبد الرحيم، مطور واجهات أمامية عصامي من المغرب. أطور مواقع إلكترونية للشركات.',
    work_desc: 'مجموعة من المواقع التي عملت عليها.',
    about_heading: 'أصمم وأطور<br>مواقع تخدم <em>الناس</em><br>والأعمال.',
    step1_desc: 'أبدأ بالتعرف على نشاطك وعملائك وما يحتاج الموقع إلى تقديمه.',
    step2_desc: 'أحدد الصفحات والاتجاه البصري قبل بدء التطوير.',
    step3_desc: 'أطور موقعاً يعمل على مختلف الشاشات مع مراعاة السرعة وسهولة الوصول.',
    step4_desc: 'نراجع الموقع وننفذ التعديلات الأخيرة ثم نجهزه للإطلاق.',
    form_intro: 'يمكنك أيضاً مراسلتي عبر النموذج أدناه.',
    proj_desc_01: 'موقع لشركة تنظيف في القنيطرة، يعرض الخدمات بوضوح ويوفر وسائل مباشرة للتواصل.',
    proj_desc_02: 'موقع لمطعم يضم قائمة الطعام ومعلومات تساعد الزوار على التخطيط لزيارتهم في مرزوكة.',
    proj_desc_03: 'موقع لفندق بوتيك يعرض الغرف والصور ومعلومات الحجز.',
    proj_desc_04: 'موقع لمركز نور للتعريف بالمركز وخدماته.',
    proj_desc_05: 'موقع لمكتب محاسبة يقدم معلومات للعملاء المحتملين.',
    proj_desc_06: 'متجر إلكتروني لمجموعة AHR Collections.'
  });
  const langSplash = document.getElementById('lang-splash');
  const setLanguage = lang => {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.language = lang;
    document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(el => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        el[el.hasAttribute('data-i18n-html') ? 'innerHTML' : 'textContent'] = dictionary[key];
      }
    });
    document.querySelectorAll('.lang-sw-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    if (langSplash) { langSplash.classList.add('is-dismissed'); langSplash.setAttribute('aria-hidden', 'true'); }
  };
  document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));

  /* ═══════════════════════════════════════════
     1. Dynamic footer year
     ═══════════════════════════════════════════ */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ═══════════════════════════════════════════
     2. Scroll-aware nav (adds .scrolled class)
     ═══════════════════════════════════════════ */
  const header = document.getElementById('site-header');

  const onScroll = () => {
    if (window.scrollY > 48) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ═══════════════════════════════════════════
     3. Active nav link on scroll
     ═══════════════════════════════════════════ */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 120) current = section.id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });


  /* ═══════════════════════════════════════════
     4. Mobile menu toggle
     ═══════════════════════════════════════════ */
  const menuBtn  = document.querySelector('.nav-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const closeMenu = () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    menuBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });

    // close when a link is clicked
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    // close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
  }


  /* ═══════════════════════════════════════════
     5. Smooth scroll for anchor links
     ═══════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ═══════════════════════════════════════════
     6. Scroll reveal — hero (immediate on load)
        Uses IntersectionObserver for sections
     ═══════════════════════════════════════════ */

  // Hero elements: reveal on load after a short delay
  const heroRevealEls = document.querySelectorAll('.hero .reveal-up, .hero .reveal-scale');

  // Small rAF delay so CSS transition catches
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      heroRevealEls.forEach(el => el.classList.add('in-view'));
    });
  });

  // All other .reveal-up / .reveal-scale / .js-reveal outside hero
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  document.querySelectorAll(
    '.section .reveal-up, .section .reveal-scale, .js-reveal'
  ).forEach(el => revealObserver.observe(el));


  /* ═══════════════════════════════════════════
     7. WhatsApp contact form
     ═══════════════════════════════════════════ */
  const form = document.getElementById('whatsapp-contact-form');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const data = new FormData(form);
      const name    = (data.get('name') || '').trim();
      const phone   = (data.get('phone') || '').trim();
      const email   = (data.get('email') || '').trim() || 'Not provided';
      const service = (data.get('service') || '').trim();
      const message = (data.get('message') || '').trim();

      if (!name || !phone || !service || !message) return;

      const text = [
        '👋 Hello Abderrahim, I found you through your portfolio.',
        '',
        `Name: ${name}`,
        `Phone / WhatsApp: ${phone}`,
        `Email: ${email}`,
        `Project type: ${service}`,
        '',
        'Project details:',
        message,
      ].join('\n');

      const url = `https://wa.me/212702446125?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

});
