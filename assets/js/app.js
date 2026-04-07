const projects = Array.isArray(window.AZAT_CASES) ? window.AZAT_CASES : [];

const root = document.documentElement;
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const langButtons = Array.from(document.querySelectorAll('.lang-btn'));
const projectsGrid = document.getElementById('projectsGrid');
const year = document.getElementById('year');
const dialog = document.getElementById('projectDialog');
const closeDialog = document.getElementById('closeDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogText = document.getElementById('dialogText');
const dialogTags = document.getElementById('dialogTags');
const dialogLink = document.getElementById('dialogLink');
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

const I18N = {
  ru: {
    htmlLang: 'ru',
    title: 'Azat Massaurov — Портфолио',
    metaDescription: 'Личное портфолио Azat Massaurov: опыт, проекты и контакты.',
    ogDescription: 'Реальные проекты и прикладной опыт в автоматизации и интеграциях.',
    navAbout: 'обо_мне.md',
    navExperience: 'опыт.js',
    navBestCases: 'сборка.py',
    navProjects: 'кейсы.json',
    navFocus: 'фокус.tsx',
    navContact: 'контакты.env',
    heroEyebrow: 'Личное портфолио',
    heroLead:
      'Разрабатываю web-приложения, автоматизацию и интеграции для бизнеса: от MVP до рабочих систем, которые экономят время команды и улучшают операционные процессы.',
    heroBtnCases: 'Смотреть кейсы',
    heroBtnResume: 'Резюме PDF',
    heroBtnContact: 'Связаться',
    heroSignal1: 'РАЗРАБОТКА',
    heroSignal2: 'ИНТЕГРАЦИЯ',
    heroSignal3: 'АВТОМАТИЗАЦИЯ',
    heroPill1: 'Web Apps',
    heroPill2: 'Automation',
    heroPill3: 'Integration',
    heroCardTitle: 'Ключевой профиль',
    heroCardItem1: '13+ лет в IT, системной интеграции и автоматизации',
    heroCardItem2: 'Сильная база: 1С, SQL, CRM/API-интеграции, проектное управление',
    heroCardItem3: 'Практика: Telegram-боты, аналитика, маркетплейсы, бизнес-сервисы',
    heroCardNote: 'Фокус: рабочие решения с измеримой пользой для бизнеса.',
    aboutEyebrow: '// Обо мне',
    aboutTitle: 'Бэкграунд и лучшие работы',
    aboutText1:
      '13+ лет в IT, системной интеграции и автоматизации. AZEC — моя собственная IT-компания (ранее бренд AZEC PRO). Фокус компании: разработка web-продуктов, MVP, интеграции и автоматизация бизнес-процессов, включая 1С, API/CRM и операционную эффективность.',
    aboutItem1: 'Роли: руководитель проектов, администратор 1С, ведущий сервис-инженер 1С.',
    aboutItem2: 'Сильные зоны: 1С (8.1/8.2/8.3), SQL, CRM-интеграции, автоматизация бизнес-процессов.',
    aboutItem3: 'Практика последних лет: Telegram-боты, веб-приложения, парсинг, AI-интеграции и MVP.',
    aboutText2:
      'Отобранные кейсы: Soft Tender Poisk, Kaspi AutoDumping, TG Parser, FSF, Arbitrage Automation, 1C:ОСМС интеграция.',
    expEyebrow: '// Экспертиза',
    expTitle: 'Ключевые навыки и экспертиза',
    expNote: '13+ лет практики: разработка, интеграции, автоматизация, проектное управление.',
    expPeriod1: '2012 — настоящее время',
    expRole1: '13+ лет: 1С-платформа, интеграции, web-разработка и автоматизация бизнеса',
    expText1:
      'Прошёл путь от сервис-инженера и администратора 1С (26 ИБ, 50+ рабочих мест, обмены/РИБ) до основателя IT-компании AZEC. Сегодня — полный цикл: разработка расширений и обработок 1С, проектирование интеграций (API, CRM, маркетплейсы, госсистемы), внедрение и сопровождение учётных систем, а также web-приложения, Telegram-боты и автоматизация бизнес-процессов.',
    bestEyebrow: '// Топ-кейсы',
    bestTitle: '6 ключевых работ с результатами',
    bestNote: 'Отбор: прикладная ценность + подтверждаемость по проектам и резюме.',
    projectsEyebrow: '// Кейсы',
    projectsTitle: 'Портфолио проектов',
    projectsNote: 'Подборка реальных рабочих проектов.',
    focusTitle1: 'Сейчас в фокусе',
    focusText1: 'Разработка прикладных web-систем и автоматизаций для бизнеса: MVP, Telegram-боты, API-интеграции и аналитика.',
    focusTitle2: 'Профессиональный профиль',
    focusText2: 'Сочетание проектного управления и hands-on разработки: техническая глубина + продуктовый результат.',
    contactEyebrow: '// Контакты',
    contactTitle: 'Связаться',
    contactText: 'Выберите удобный канал связи.',
    labelName: 'Имя',
    labelService: 'Услуга',
    labelMessage: 'Сообщение',
    inputName: 'Ваше имя',
    servicePlaceholder: 'Выберите услугу',
    service1: 'Разработка 1С',
    service2: 'Разработка web-приложения',
    service3: 'Автоматизация бизнес-процесса',
    service4: 'API / CRM интеграция',
    service5: 'Telegram-бот',
    service6: 'Консультация и аудит',
    inputMessage: 'Коротко о задаче',
    submitBtn: 'Связаться',
    backTop: 'Наверх ↑',
    projectDetails: 'Подробнее',
    openLocal: 'Открыть проект',
    openOnline: 'Открыть онлайн',
    emptyTitle: 'Кейсы пока не добавлены',
    emptyText: 'Откройте файл assets/js/cases.js и добавьте ваши реальные проекты с ссылками.',
    formNote: 'Открывается WhatsApp...',
    closeMenuLabel: 'Открыть меню',
    switchThemeLabel: 'Сменить тему'
  },
  en: {
    htmlLang: 'en',
    title: 'Azat Massaurov — Portfolio',
    metaDescription: 'Azat Massaurov personal portfolio: experience, projects, and contacts.',
    ogDescription: 'Real projects and practical experience in automation and integrations.',
    navAbout: 'about.md',
    navExperience: 'experience.js',
    navBestCases: 'build.py',
    navProjects: 'cases.json',
    navFocus: 'focus.tsx',
    navContact: 'contact.env',
    heroEyebrow: 'Personal Portfolio',
    heroLead:
      'I build web applications, automation, and integrations for business: from MVPs to production systems that save time and improve operations.',
    heroBtnCases: 'View Cases',
    heroBtnResume: 'Resume PDF',
    heroBtnContact: 'Contact',
    heroSignal1: 'BUILD',
    heroSignal2: 'INTEGRATE',
    heroSignal3: 'AUTOMATE',
    heroPill1: 'Web Apps',
    heroPill2: 'Automation',
    heroPill3: 'Integration',
    heroCardTitle: 'Core Profile',
    heroCardItem1: '13+ years in IT, systems integration, and automation',
    heroCardItem2: 'Strong base: 1C, SQL, CRM/API integrations, project delivery',
    heroCardItem3: 'Hands-on practice: Telegram bots, analytics, marketplaces, business tools',
    heroCardNote: 'Focus: practical solutions with measurable business value.',
    aboutEyebrow: '// About',
    aboutTitle: 'Background and Selected Work',
    aboutText1:
      '13+ years in IT, systems integration, and automation. AZEC is my own IT company (formerly branded as AZEC PRO). Company focus: web products, MVP delivery, integrations, and business process automation, including 1C, API/CRM, and operational efficiency.',
    aboutItem1: 'Roles: Project Manager, 1C Administrator, Senior 1C Service Engineer.',
    aboutItem2: 'Key strengths: 1C (8.1/8.2/8.3), SQL, CRM integrations, business process automation.',
    aboutItem3: 'Recent practice: Telegram bots, web apps, parsing, AI integrations, MVP delivery.',
    aboutText2: 'Selected cases: Soft Tender Poisk, Kaspi AutoDumping, TG Parser, FSF, Arbitrage Automation, 1C:OSMS integration.',
    expEyebrow: '// Expertise',
    expTitle: 'Core Skills and Expertise',
    expNote: '13+ years of practice: development, integrations, automation, project delivery.',
    expPeriod1: '2012 — Present',
    expRole1: '13+ years: 1C platform, integrations, web development & business automation',
    expText1:
      'Grew from 1C service engineer and administrator (26 DBs, 50+ workstations, data exchange/RIB) to founding IT company AZEC. Today — full cycle: 1C extensions and external processors, integration design (API, CRM, marketplaces, government systems), implementation and maintenance of accounting systems, plus web apps, Telegram bots & business process automation.',
    bestEyebrow: '// Top Cases',
    bestTitle: '6 Key Projects with Outcomes',
    bestNote: 'Selection criteria: practical impact + evidence from projects and resume.',
    projectsEyebrow: '// Projects',
    projectsTitle: 'Project Portfolio',
    projectsNote: 'Curated list of real production and business projects.',
    focusTitle1: 'Current Focus',
    focusText1: 'Building practical web systems and business automation: MVPs, Telegram bots, API integrations, analytics.',
    focusTitle2: 'Professional Profile',
    focusText2: 'Combination of project leadership and hands-on engineering: technical depth + product outcomes.',
    contactEyebrow: '// Contact',
    contactTitle: 'Get in Touch',
    contactText: 'Choose any convenient communication channel.',
    labelName: 'Name',
    labelService: 'Service',
    labelMessage: 'Message',
    inputName: 'Your name',
    servicePlaceholder: 'Choose a service',
    service1: '1C development',
    service2: 'Web app development',
    service3: 'Business process automation',
    service4: 'API / CRM integration',
    service5: 'Telegram bot',
    service6: 'Consulting and audit',
    inputMessage: 'Short project brief',
    submitBtn: 'Contact',
    backTop: 'Back to top ↑',
    projectDetails: 'Details',
    openLocal: 'Open Project',
    openOnline: 'Open Online',
    emptyTitle: 'No cases yet',
    emptyText: 'Open assets/js/cases.js and add your real projects with links.',
    formNote: 'Opening WhatsApp...',
    closeMenuLabel: 'Open menu',
    switchThemeLabel: 'Switch theme'
  },
  kz: {
    htmlLang: 'kk',
    title: 'Azat Massaurov — Портфолио',
    metaDescription: 'Azat Massaurov портфолиосы: тәжірибе, жобалар және байланыс.',
    ogDescription: 'Автоматтандыру және интеграция бойынша нақты жобалар мен тәжірибе.',
    navAbout: 'өзім_туралы.md',
    navExperience: 'тәжірибе.js',
    navBestCases: 'құрастыру.py',
    navProjects: 'кейстер.json',
    navFocus: 'фокус.tsx',
    navContact: 'контактілер.env',
    heroEyebrow: 'Жеке портфолио',
    heroLead:
      'Бизнеске арналған web-қосымшалар, автоматтандыру және интеграциялар жасаймын: MVP-ден өнімдік жүйелерге дейін.',
    heroBtnCases: 'Кейстерді көру',
    heroBtnResume: 'Түйіндеме PDF',
    heroBtnContact: 'Байланысу',
    heroSignal1: 'ӘЗІРЛЕУ',
    heroSignal2: 'ИНТЕГРАЦИЯ',
    heroSignal3: 'АВТОМАТТАНДЫРУ',
    heroPill1: 'Web Apps',
    heroPill2: 'Automation',
    heroPill3: 'Integration',
    heroCardTitle: 'Негізгі профиль',
    heroCardItem1: 'IT, жүйелік интеграция және автоматтандыруда 13+ жыл',
    heroCardItem2: 'Күшті база: 1C, SQL, CRM/API интеграциялары, жобаларды басқару',
    heroCardItem3: 'Тәжірибе: Telegram-боттар, аналитика, маркетплейстер, бизнес-сервистер',
    heroCardNote: 'Фокус: бизнеске нақты пайда беретін шешімдер.',
    aboutEyebrow: '// Мен туралы',
    aboutTitle: 'Бэкграунд және үздік жұмыстар',
    aboutText1:
      'IT, жүйелік интеграция және автоматтандыруда 13+ жыл тәжірибе. AZEC — менің өз IT-компаниям (бұрынғы бренді AZEC PRO). Компания фокусы: web-өнімдер, MVP, интеграциялар және бизнес-процестерді автоматтандыру, соның ішінде 1C, API/CRM және операциялық тиімділік.',
    aboutItem1: 'Рөлдер: жоба жетекшісі, 1C әкімшісі, аға 1C сервис-инженері.',
    aboutItem2: 'Күшті жақтар: 1C (8.1/8.2/8.3), SQL, CRM интеграциялары, бизнес-процестерді автоматтандыру.',
    aboutItem3: 'Соңғы тәжірибе: Telegram-боттар, web-қосымшалар, парсинг, AI интеграциялар, MVP.',
    aboutText2: 'Таңдалған кейстер: Soft Tender Poisk, Kaspi AutoDumping, TG Parser, FSF, Arbitrage Automation, 1C:OSMS интеграциясы.',
    expEyebrow: '// Сараптама',
    expTitle: 'Негізгі дағдылар мен сараптама',
    expNote: '13+ жыл тәжірибе: әзірлеу, интеграция, автоматтандыру, жобаларды жеткізу.',
    expPeriod1: '2012 — қазірге дейін',
    expRole1: '13+ жыл: 1C платформасы, интеграциялар, web-әзірлеу және бизнесті автоматтандыру',
    expText1:
      '1C сервис-инженері мен әкімшіден (26 ИБ, 50+ жұмыс орны, алмасу/РИБ) бастап, өз IT-компаниям AZEC-ті құруға дейін жеттім. Бүгін — толық цикл: 1C кеңейтімдері мен өңдеулерін әзірлеу, интеграцияларды жобалау (API, CRM, маркетплейстер, мемлекеттік жүйелер), есеп жүйелерін енгізу мен сүйемелдеу, сондай-ақ web-қосымшалар, Telegram-боттар және бизнес-процестерді автоматтандыру.',
    bestEyebrow: '// Үздік кейстер',
    bestTitle: 'Нәтижесі бар 6 негізгі жоба',
    bestNote: 'Іріктеу: практикалық құндылық + жобалар мен түйіндеме бойынша дәлел.',
    projectsEyebrow: '// Жобалар',
    projectsTitle: 'Жобалар портфолиосы',
    projectsNote: 'Нақты жұмыс жобаларының іріктелген тізімі.',
    focusTitle1: 'Қазіргі фокус',
    focusText1: 'Бизнеске арналған web-жүйелер мен автоматтандыру: MVP, Telegram-боттар, API интеграция, аналитика.',
    focusTitle2: 'Кәсіби профиль',
    focusText2: 'Жобалық басқару мен hands-on әзірлеудің үйлесімі: техникалық тереңдік + өнімдік нәтиже.',
    contactEyebrow: '// Байланыс',
    contactTitle: 'Хабарласу',
    contactText: 'Өзіңізге ыңғайлы байланыс арнасын таңдаңыз.',
    labelName: 'Аты',
    labelService: 'Қызмет',
    labelMessage: 'Хабарлама',
    inputName: 'Атыңыз',
    servicePlaceholder: 'Қызметті таңдаңыз',
    service1: '1C әзірлеу',
    service2: 'Web-қосымша әзірлеу',
    service3: 'Бизнес-процесті автоматтандыру',
    service4: 'API / CRM интеграциясы',
    service5: 'Telegram-бот',
    service6: 'Консультация және аудит',
    inputMessage: 'Міндетті қысқаша сипаттаңыз',
    submitBtn: 'Жіберу',
    backTop: 'Жоғары ↑',
    projectDetails: 'Толығырақ',
    openLocal: 'Жобаны ашу',
    openOnline: 'Онлайн ашу',
    emptyTitle: 'Кейстер әлі қосылмаған',
    emptyText: 'assets/js/cases.js файлын ашып, нақты жобаларыңызды қосыңыз.',
    formNote: 'WhatsApp ашылуда...',
    closeMenuLabel: 'Мәзірді ашу',
    switchThemeLabel: 'Тақырыпты ауыстыру'
  }
};

const BEST_CASES = {
  ru: [
    {
      type: 'GovTech / Python',
      title: 'Soft Tender Poisk',
      desc: 'Система поиска тендеров РК по нескольким площадкам в одном интерфейсе.',
      r1: 'Результат: ускорен отбор релевантных закупок и ручной мониторинг сведён к минимуму.',
      r2: 'Стек: Python, Streamlit, aiohttp, BeautifulSoup, pandas.'
    },
    {
      type: 'Marketplace / Automation',
      title: 'Kaspi AutoDumping',
      desc: 'Мониторинг цен и автоматизация ценовой реакции для marketplace-сценариев.',
      r1: 'Результат: сокращено время ручной ценовой корректировки.',
      r2: 'Стек: Node.js, API-интеграции, MySQL.'
    },
    {
      type: 'Telegram / Data',
      title: 'TG Parser',
      desc: 'Сбор и выгрузка данных из Telegram-каналов для аналитики.',
      r1: 'Результат: автоматизирован регулярный сбор контента и метаданных.',
      r2: 'Стек: Python, Telethon, экспорт JSON/CSV.'
    },
    {
      type: 'Media Tech / MVP',
      title: 'FSF — Faceless Shorts Factory',
      desc: 'MVP-платформа для генерации short-видео с управлением через web-интерфейс.',
      r1: 'Результат: собран рабочий пайплайн «идея → интерфейс → рендер».',
      r2: 'Стек: Next.js, Remotion, Supabase.'
    },
    {
      type: 'E-commerce / Arbitrage',
      title: 'Arbitrage Automation',
      desc: 'Система кросс-маркетплейс анализа и арбитражных сценариев.',
      r1: 'Результат: единая рабочая среда для проверки товарных гипотез.',
      r2: 'Стек: Next.js, Python, API-интеграции.'
    },
    {
      type: '1C / Enterprise Integration',
      title: '1C:ОСМС и корпоративные интеграции',
      desc: 'Внедрение и сопровождение интеграционных сценариев 1С в операционных процессах.',
      r1: 'Результат: устойчивые обмены и предсказуемая эксплуатация учётных систем.',
      r2: 'Факты бэкграунда: 26 ИБ, обмены/РИБ, поддержка распределённых команд.'
    }
  ],
  en: [
    {
      type: 'GovTech / Python',
      title: 'Soft Tender Poisk',
      desc: 'Tender search platform for Kazakhstan marketplaces in one interface.',
      r1: 'Outcome: faster qualification of relevant tenders and less manual monitoring.',
      r2: 'Stack: Python, Streamlit, aiohttp, BeautifulSoup, pandas.'
    },
    {
      type: 'Marketplace / Automation',
      title: 'Kaspi AutoDumping',
      desc: 'Price monitoring and automated reaction for marketplace scenarios.',
      r1: 'Outcome: reduced manual time spent on pricing updates.',
      r2: 'Stack: Node.js, API integrations, MySQL.'
    },
    {
      type: 'Telegram / Data',
      title: 'TG Parser',
      desc: 'Telegram data collection and export for analytics workflows.',
      r1: 'Outcome: automated recurring collection of content and metadata.',
      r2: 'Stack: Python, Telethon, JSON/CSV export.'
    },
    {
      type: 'Media Tech / MVP',
      title: 'FSF — Faceless Shorts Factory',
      desc: 'MVP platform for short-form video generation with web control panel.',
      r1: 'Outcome: completed pipeline from idea to render.',
      r2: 'Stack: Next.js, Remotion, Supabase.'
    },
    {
      type: 'E-commerce / Arbitrage',
      title: 'Arbitrage Automation',
      desc: 'Cross-marketplace analysis and arbitrage workflow platform.',
      r1: 'Outcome: unified workspace for validating product opportunities.',
      r2: 'Stack: Next.js, Python, API integrations.'
    },
    {
      type: '1C / Enterprise Integration',
      title: '1C:OSMS and enterprise integrations',
      desc: 'Implementation and support of 1C integration scenarios in operations.',
      r1: 'Outcome: stable data exchanges and predictable accounting operations.',
      r2: 'Background facts: 26 DBs, distributed exchanges, remote team support.'
    }
  ],
  kz: [
    {
      type: 'GovTech / Python',
      title: 'Soft Tender Poisk',
      desc: 'Қазақстан маркетплейстері бойынша тендер іздеу платформасы.',
      r1: 'Нәтиже: релевантты тендерлерді іріктеу жылдамдап, қолмен мониторинг азайды.',
      r2: 'Стек: Python, Streamlit, aiohttp, BeautifulSoup, pandas.'
    },
    {
      type: 'Marketplace / Automation',
      title: 'Kaspi AutoDumping',
      desc: 'Маркетплейс сценарийлеріне арналған баға мониторингі және автоматты реакция.',
      r1: 'Нәтиже: бағаны қолмен жаңартуға кететін уақыт қысқарды.',
      r2: 'Стек: Node.js, API интеграциялар, MySQL.'
    },
    {
      type: 'Telegram / Data',
      title: 'TG Parser',
      desc: 'Аналитика үшін Telegram деректерін жинау және экспорттау.',
      r1: 'Нәтиже: контент пен метадеректерді тұрақты жинау автоматтандырылды.',
      r2: 'Стек: Python, Telethon, JSON/CSV экспорт.'
    },
    {
      type: 'Media Tech / MVP',
      title: 'FSF — Faceless Shorts Factory',
      desc: 'Қысқа видеолар генерациясына арналған MVP платформа.',
      r1: 'Нәтиже: идеядан рендерге дейінгі толық пайплайн жасалды.',
      r2: 'Стек: Next.js, Remotion, Supabase.'
    },
    {
      type: 'E-commerce / Arbitrage',
      title: 'Arbitrage Automation',
      desc: 'Кросс-маркетплейс талдау және арбитраж платформасы.',
      r1: 'Нәтиже: тауар гипотезаларын тексеруге бірыңғай орта құрылды.',
      r2: 'Стек: Next.js, Python, API интеграциялар.'
    },
    {
      type: '1C / Enterprise Integration',
      title: '1C:OSMS және корпоративтік интеграциялар',
      desc: 'Операциялық процестерде 1C интеграцияларын енгізу және сүйемелдеу.',
      r1: 'Нәтиже: тұрақты алмасулар және есеп жүйесінің сенімді жұмысы.',
      r2: 'Фактілер: 26 ИБ, алмасулар/РИБ, үлестірілген командаларды қолдау.'
    }
  ]
};

let currentLang = localStorage.getItem('lang') || 'ru';
if (currentLang === 'kk') currentLang = 'kz';
if (!I18N[currentLang]) currentLang = 'ru';

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === 'string') el.textContent = value;
}

function setPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el && typeof value === 'string') el.setAttribute('placeholder', value);
}

function renderServiceOptions(lang) {
  const t = I18N[lang] || I18N.ru;
  const select = document.getElementById('inputService');
  if (!(select instanceof HTMLSelectElement)) return;

  const options = [t.service1, t.service2, t.service3, t.service4, t.service5, t.service6].filter(Boolean);
  const current = select.value;

  select.innerHTML = '';

  const placeholder = document.createElement('option');
  placeholder.value = '';
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = t.servicePlaceholder;
  select.appendChild(placeholder);

  options.forEach((label) => {
    const opt = document.createElement('option');
    opt.value = label;
    opt.textContent = label;
    select.appendChild(opt);
  });

  if (current && options.includes(current)) {
    select.value = current;
  }
}

function renderBestCases(lang) {
  const items = BEST_CASES[lang] || BEST_CASES.ru;
  const cards = document.querySelectorAll('.best-card');
  cards.forEach((card, i) => {
    const data = items[i];
    if (!data) return;

    const type = card.querySelector('.best-type');
    const title = card.querySelector('h3');
    const desc = card.querySelector('p:not(.best-type)');
    const lis = card.querySelectorAll('li');

    if (type) type.textContent = data.type;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.desc;
    if (lis[0]) lis[0].textContent = data.r1;
    if (lis[1]) lis[1].textContent = data.r2;
  });
}

function applyLanguage(lang) {
  const t = I18N[lang] || I18N.ru;
  currentLang = lang;

  document.documentElement.lang = t.htmlLang;
  document.title = t.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDescription);
  if (ogDesc) ogDesc.setAttribute('content', t.ogDescription);

  [
    'navAbout',
    'navExperience',
    'navBestCases',
    'navProjects',
    'navFocus',
    'navContact',
    'heroEyebrow',
    'heroLead',
    'heroBtnCases',
    'heroBtnResume',
    'heroBtnContact',
    'heroSignal1',
    'heroSignal2',
    'heroSignal3',
    'heroPill1',
    'heroPill2',
    'heroPill3',
    'heroCardTitle',
    'heroCardItem1',
    'heroCardItem2',
    'heroCardItem3',
    'heroCardNote',
    'aboutEyebrow',
    'aboutTitle',
    'aboutText1',
    'aboutItem1',
    'aboutItem2',
    'aboutItem3',
    'aboutText2',
    'expEyebrow',
    'expTitle',
    'expNote',
    'expPeriod1',
    'expRole1',
    'expText1',
    'bestEyebrow',
    'bestTitle',
    'bestNote',
    'projectsEyebrow',
    'projectsTitle',
    'projectsNote',
    'focusTitle1',
    'focusText1',
    'focusTitle2',
    'focusText2',
    'contactEyebrow',
    'contactTitle',
    'contactText',
    'labelName',
    'labelService',
    'labelMessage',
    'submitBtn',
    'backTop'
  ].forEach((key) => setText(key, t[key]));

  setPlaceholder('inputName', t.inputName);
  setPlaceholder('inputMessage', t.inputMessage);
  renderServiceOptions(lang);

  if (themeSwitch) themeSwitch.setAttribute('aria-label', t.switchThemeLabel);
  if (navToggle) navToggle.setAttribute('aria-label', t.closeMenuLabel);

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderBestCases(lang);
  renderProjects();
  localStorage.setItem('lang', lang);
}

function openProjectDialog(item) {
  if (!dialog) return;
  const t = I18N[currentLang] || I18N.ru;

  dialogTitle.textContent = item.title;
  dialogText.textContent = item.detail || item.desc;
  dialogTags.innerHTML = (item.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join('');

  // Show source path as text, hide link for file:// protocols
  const isLocal = !item.link || item.link.startsWith('file:');
  if (isLocal) {
    dialogLink.style.display = 'none';
  } else {
    dialogLink.style.display = '';
    dialogLink.href = item.link;
    dialogLink.textContent = t.openOnline || 'Open';
  }

  // Show source path
  let sourceLine = dialog.querySelector('.dialog-source');
  if (!sourceLine) {
    sourceLine = document.createElement('p');
    sourceLine.className = 'dialog-source';
    dialogTags.insertAdjacentElement('afterend', sourceLine);
  }
  if (item.source) {
    sourceLine.textContent = item.source;
    sourceLine.style.display = '';
  } else {
    sourceLine.style.display = 'none';
  }

  dialog.showModal();
}

function renderProjects() {
  if (!projectsGrid) return;
  const t = I18N[currentLang] || I18N.ru;

  if (!projects.length) {
    projectsGrid.innerHTML = `
      <article class="project-card">
        <h3>${t.emptyTitle}</h3>
        <p>${t.emptyText}</p>
      </article>
    `;
    return;
  }

  projectsGrid.innerHTML = '';

  projects.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'project-card reveal in';
    card.innerHTML = `
      <p class="eyebrow">${item.type}</p>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="tags">${(item.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
    `;

    projectsGrid.appendChild(card);
  });
}

closeDialog?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!isInDialog) dialog.close();
});

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach((anchor) => {
  anchor.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const t = I18N[currentLang] || I18N.ru;
  const name = String(data.get('name') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();

  const body = encodeURIComponent(
    `${t.labelName}: ${name}\n${t.labelService}: ${service}\n${t.labelMessage}: ${message}`
  );
  window.location.href = `https://wa.me/77762071122?text=${body}`;

  form.reset();
  renderServiceOptions(currentLang);
  formNote.textContent = t.formNote;
});


langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const nextLang = btn.dataset.lang;
    if (!nextLang || !I18N[nextLang]) return;
    applyLanguage(nextLang);
  });
});

year.textContent = new Date().getFullYear();

applyLanguage(currentLang);
