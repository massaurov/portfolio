window.AZAT_CASES = [
  {
    id: 1,
    type: 'Python / Streamlit',
    title: 'Soft Tender Poisk',
    desc: {
      ru: 'Десктоп-приложение для поиска и мониторинга тендеров 15 государственных площадок.',
      en: 'Desktop app for searching and monitoring tenders across 15 government platforms.',
      kz: '15 мемлекеттік алаңда тендерлерді іздеу және бақылауға арналған десктоп қосымша.'
    },
    detail: {
      ru: 'Streamlit + aiohttp + BeautifulSoup + pandas + pywebview. Параллельный поиск со встроенной БД и фильтрацией.',
      en: 'Streamlit + aiohttp + BeautifulSoup + pandas + pywebview. Parallel search with built-in DB and filtering.',
      kz: 'Streamlit + aiohttp + BeautifulSoup + pandas + pywebview. Кірістірілген ДБ және сүзгімен параллель іздеу.'
    },
    tags: ['Python', 'Streamlit', 'Parsing', 'Async', 'Desktop']
  },
  {
    id: 2,
    type: 'TypeScript',
    title: 'Tender Search System',
    desc: {
      ru: 'Типизированная система поиска тендеров с полным test-coverage.',
      en: 'Typed tender search system with full test coverage.',
      kz: 'Толық тест-coverage бар типтелген тендер іздеу жүйесі.'
    },
    detail: {
      ru: 'TypeScript + Vitest, ESLint, типизация.',
      en: 'TypeScript + Vitest, ESLint, strict typing.',
      kz: 'TypeScript + Vitest, ESLint, типтеу.'
    },
    tags: ['TypeScript', 'Testing', 'Tender']
  },
  {
    id: 3,
    type: 'Python / Telegram',
    title: 'Telegram Parser',
    desc: {
      ru: 'Полнофункциональный парсер Telegram с экспортом в JSON/CSV.',
      en: 'Full-featured Telegram parser with JSON/CSV export.',
      kz: 'JSON/CSV экспортымен толық функционалды Telegram парсері.'
    },
    detail: {
      ru: 'Telethon + python-dotenv. Сбор сообщений, участников, медии, реакций.',
      en: 'Telethon + python-dotenv. Collects messages, members, media, reactions.',
      kz: 'Telethon + python-dotenv. Хабарламалар, қатысушылар, медиа, реакциялар жинау.'
    },
    tags: ['Python', 'Telethon', 'Telegram', 'Export']
  },
  {
    id: 4,
    type: 'Python / E-commerce',
    title: 'Parser v1 — Mechta.kz',
    desc: {
      ru: 'Устойчивый парсер e-commerce каталога с Selenium и BeautifulSoup.',
      en: 'Robust e-commerce catalog scraper with Selenium and BeautifulSoup.',
      kz: 'Selenium және BeautifulSoup көмегімен e-commerce каталог парсері.'
    },
    detail: {
      ru: 'undetected-chromedriver, lxml, pandas. Автоматизация сбора товарных данных.',
      en: 'undetected-chromedriver, lxml, pandas. Automated product data collection.',
      kz: 'undetected-chromedriver, lxml, pandas. Тауар деректерін жинауды автоматтандыру.'
    },
    tags: ['Python', 'Selenium', 'Scraping']
  },
  {
    id: 5,
    type: 'Node.js Service',
    title: 'Kaspi AutoDumping',
    desc: {
      ru: 'Автоматический мониторинг цен конкурентов и демпинг на Kaspi.kz.',
      en: 'Automated competitor price monitoring and dumping on Kaspi.kz.',
      kz: 'Kaspi.kz-дағы бәсекелестер бағасын автоматты бақылау және демпинг.'
    },
    detail: {
      ru: 'Node.js + API интеграции + MySQL миграции.',
      en: 'Node.js + API integrations + MySQL migrations.',
      kz: 'Node.js + API интеграциялар + MySQL миграциялар.'
    },
    tags: ['Node.js', 'Marketplace', 'Automation']
  },
  {
    id: 6,
    type: 'Next.js + Worker',
    title: 'FSF — Faceless Shorts Factory',
    desc: {
      ru: 'MVP для генерации faceless short-form видеоконтента.',
      en: 'MVP for faceless short-form video content generation.',
      kz: 'Faceless қысқа бейне контент генерациясына арналған MVP.'
    },
    detail: {
      ru: 'Next.js + Remotion + Supabase. Пайплайн: UI → данные → рендер видео.',
      en: 'Next.js + Remotion + Supabase. Pipeline: UI → data → video render.',
      kz: 'Next.js + Remotion + Supabase. Пайплайн: UI → деректер → бейне рендер.'
    },
    tags: ['Next.js', 'Remotion', 'Supabase', 'Video']
  },
  {
    id: 7,
    type: 'Next.js Dashboard',
    title: 'D2 Dashboard — Analytics UI',
    desc: {
      ru: 'Интерфейс аналитики с интерактивными графиками и анимациями.',
      en: 'Analytics interface with interactive charts and animations.',
      kz: 'Интерактивті графиктер мен анимациялары бар аналитика интерфейсі.'
    },
    detail: {
      ru: 'Next.js + Recharts + Framer Motion + Lucide. Production-ready компоненты.',
      en: 'Next.js + Recharts + Framer Motion + Lucide. Production-ready components.',
      kz: 'Next.js + Recharts + Framer Motion + Lucide. Production-ready компоненттер.'
    },
    tags: ['Next.js', 'Analytics', 'UI', 'Charts']
  },
  {
    id: 8,
    type: 'React / Vite',
    title: 'Base44 App — Rich UI Platform',
    desc: {
      ru: 'Полнофункциональное приложение с Radix UI, drag-and-drop, формами.',
      en: 'Full-featured app with Radix UI, drag-and-drop, and forms.',
      kz: 'Radix UI, drag-and-drop, формалары бар толық функционалды қосымша.'
    },
    detail: {
      ru: 'React + Vite + Radix UI. Production-like архитектура с SDK интеграцией.',
      en: 'React + Vite + Radix UI. Production-like architecture with SDK integration.',
      kz: 'React + Vite + Radix UI. SDK интеграциясы бар production-like архитектура.'
    },
    tags: ['React', 'Vite', 'UI Components']
  },
  {
    id: 9,
    type: 'Python / Backend',
    title: 'Instagram Bot — Content Planner',
    desc: {
      ru: 'Автоматизация планирования контента для Instagram-аккаунтов.',
      en: 'Content planning automation for Instagram accounts.',
      kz: 'Instagram аккаунттары үшін контент жоспарлауды автоматтандыру.'
    },
    detail: {
      ru: 'Python backend для управления постами и аналитикой.',
      en: 'Python backend for managing posts and analytics.',
      kz: 'Посттар мен аналитиканы басқаруға арналған Python backend.'
    },
    tags: ['Python', 'Instagram API', 'Automation']
  },
  {
    id: 10,
    type: 'Python / Telegram Bot',
    title: 'Tender Monitor — Telegram Alerts',
    desc: {
      ru: 'Telegram-бот мониторинга госзакупок с уведомлениями.',
      en: 'Telegram bot for government procurement monitoring with alerts.',
      kz: 'Хабарландырулары бар мемлекеттік сатып алуды бақылау Telegram-боты.'
    },
    detail: {
      ru: 'Рассылка релевантных тендеров по фильтрам в реальном времени.',
      en: 'Real-time delivery of relevant tenders based on filters.',
      kz: 'Сүзгілер бойынша релевантты тендерлерді нақты уақытта жеткізу.'
    },
    tags: ['Python', 'Telegram Bot', 'Tender']
  },
  {
    id: 11,
    type: 'Python / Finance',
    title: 'Yahoo Finance to Excel',
    desc: {
      ru: 'Синхронизация финансовых данных Yahoo Finance в Excel.',
      en: 'Yahoo Finance data synchronization to Excel.',
      kz: 'Yahoo Finance қаржылық деректерін Excel-ге синхрондау.'
    },
    detail: {
      ru: 'Автоматизация импорта котировок и биржевых данных.',
      en: 'Automated import of quotes and stock exchange data.',
      kz: 'Котировкалар мен биржалық деректерді импорттауды автоматтандыру.'
    },
    tags: ['Python', 'Finance', 'Excel Integration']
  },
  {
    id: 12,
    type: 'Next.js',
    title: 'Mods Manager — Minecraft Modpacks',
    desc: {
      ru: 'Десктоп-приложение для сборки Minecraft модпаков с локальным AI.',
      en: 'Desktop app for building Minecraft modpacks with local AI.',
      kz: 'Жергілікті AI көмегімен Minecraft модпактарын құруға арналған десктоп қосымша.'
    },
    detail: {
      ru: 'Next.js + AI интеграция. MVP для управления модами.',
      en: 'Next.js + AI integration. MVP for managing mods.',
      kz: 'Next.js + AI интеграция. Модтарды басқаруға арналған MVP.'
    },
    tags: ['Next.js', 'Desktop', 'Minecraft', 'AI']
  },
  {
    id: 13,
    type: 'Next.js + API',
    title: 'TG Shop Full — Telegram Mini App',
    desc: {
      ru: 'Полнофункциональный онлайн-магазин как Telegram Mini App.',
      en: 'Full-featured online store as a Telegram Mini App.',
      kz: 'Telegram Mini App ретіндегі толық функционалды онлайн-дүкен.'
    },
    detail: {
      ru: 'Next.js backend + Telegram Bot API.',
      en: 'Next.js backend + Telegram Bot API.',
      kz: 'Next.js backend + Telegram Bot API.'
    },
    tags: ['Next.js', 'Telegram', 'E-commerce', 'Mini App']
  },
  {
    id: 14,
    type: 'Next.js',
    title: 'Art Gallery — Bogema Backend',
    desc: {
      ru: 'Сервер для художественной галереи с каталогом произведений.',
      en: 'Backend for an art gallery with artwork catalog.',
      kz: 'Өнер туындылары каталогы бар көркем галерея сервері.'
    },
    detail: {
      ru: 'Next.js API для управления коллекциями и заказами.',
      en: 'Next.js API for managing collections and orders.',
      kz: 'Коллекциялар мен тапсырыстарды басқаруға арналған Next.js API.'
    },
    tags: ['Next.js', 'API', 'Gallery', 'Marketplace']
  },
  {
    id: 15,
    type: 'Next.js + Python',
    title: 'Arbitrage Automation',
    desc: {
      ru: 'Кросс-маркетплейс арбитраж (Kaspi ↔ Wildberries/Ozon).',
      en: 'Cross-marketplace arbitrage (Kaspi ↔ Wildberries/Ozon).',
      kz: 'Кросс-маркетплейс арбитраж (Kaspi ↔ Wildberries/Ozon).'
    },
    detail: {
      ru: 'Next.js фронтенд + Python backend. Автоматизация прибыльных сделок.',
      en: 'Next.js frontend + Python backend. Profitable deal automation.',
      kz: 'Next.js фронтенд + Python backend. Табысты мәмілелерді автоматтандыру.'
    },
    tags: ['Next.js', 'Python', 'E-commerce', 'Arbitrage']
  },
  {
    id: 16,
    type: 'Next.js API',
    title: 'API Server',
    desc: {
      ru: 'REST API для системы кросс-маркетплейс арбитража.',
      en: 'REST API for the cross-marketplace arbitrage system.',
      kz: 'Кросс-маркетплейс арбитраж жүйесіне арналған REST API.'
    },
    detail: {
      ru: 'Next.js + интеграция с маркетплейсами.',
      en: 'Next.js + marketplace integrations.',
      kz: 'Next.js + маркетплейстермен интеграция.'
    },
    tags: ['Next.js', 'API', 'Integration']
  },
  {
    id: 17,
    type: 'Next.js Frontend',
    title: 'Web Dashboard',
    desc: {
      ru: 'Веб-интерфейс управления арбитражными сделками.',
      en: 'Web interface for managing arbitrage deals.',
      kz: 'Арбитраж мәмілелерін басқаруға арналған веб-интерфейс.'
    },
    detail: {
      ru: 'Next.js фронтенд приложение.',
      en: 'Next.js frontend application.',
      kz: 'Next.js фронтенд қосымшасы.'
    },
    tags: ['Next.js', 'React', 'Dashboard']
  },
  {
    id: 18,
    type: 'Next.js Backend',
    title: 'Kaspi Demping Backend',
    desc: {
      ru: 'Версия Kaspi AutoDumping-сервиса от Antygravity.',
      en: 'Antygravity fork of the Kaspi AutoDumping service.',
      kz: 'Antygravity-дан Kaspi AutoDumping сервисінің нұсқасы.'
    },
    detail: {
      ru: 'Next.js API с собственной логикой демпинга.',
      en: 'Next.js API with custom dumping logic.',
      kz: 'Өзіндік демпинг логикасы бар Next.js API.'
    },
    tags: ['Next.js', 'Kaspi', 'Automation']
  },
  {
    id: 20,
    type: 'Python / AI Bot',
    title: 'AI Sbornik — Telegram Bot',
    desc: {
      ru: 'Telegram-бот с AI интеграцией для агрегации контента.',
      en: 'Telegram bot with AI integration for content aggregation.',
      kz: 'Контентті агрегаттауға арналған AI интеграциясы бар Telegram-бот.'
    },
    detail: {
      ru: 'MVP бота для сборки новостей и информации.',
      en: 'MVP bot for news and information aggregation.',
      kz: 'Жаңалықтар мен ақпарат жинауға арналған MVP бот.'
    },
    tags: ['Python', 'Telegram', 'AI', 'Bot']
  },
  {
    id: 21,
    type: 'Python / Telegram',
    title: 'Goszakup Bot',
    desc: {
      ru: 'Telegram-бот для отслеживания госзакупок Казахстана.',
      en: 'Telegram bot for tracking government procurement in Kazakhstan.',
      kz: 'Қазақстан мемлекеттік сатып алуларын бақылауға арналған Telegram-бот.'
    },
    detail: {
      ru: 'Автоматические уведомления о новых тендерах.',
      en: 'Automatic notifications about new tenders.',
      kz: 'Жаңа тендерлер туралы автоматты хабарландырулар.'
    },
    tags: ['Python', 'Telegram Bot', 'Parsing']
  },
  {
    id: 22,
    type: 'Python / Scraping',
    title: 'OLX Parser',
    desc: {
      ru: 'Парсер объявлений с OLX с фильтрацией и экспортом.',
      en: 'OLX listings scraper with filtering and export.',
      kz: 'Сүзгілеу және экспорт мүмкіндігі бар OLX хабарландырулар парсері.'
    },
    detail: {
      ru: 'BeautifulSoup + requests для автоматизации.',
      en: 'BeautifulSoup + requests for automation.',
      kz: 'Автоматтандыруға арналған BeautifulSoup + requests.'
    },
    tags: ['Python', 'Scraping', 'Parsing']
  },
  {
    id: 23,
    type: 'Python / Bot',
    title: 'Random God Bot',
    desc: {
      ru: 'Интерактивный Telegram-бот с рандомизацией.',
      en: 'Interactive Telegram bot with randomization features.',
      kz: 'Рандомизация мүмкіндіктері бар интерактивті Telegram-бот.'
    },
    detail: {
      ru: 'Игровой функционал на базе Telegram Bot API.',
      en: 'Game functionality based on Telegram Bot API.',
      kz: 'Telegram Bot API негізіндегі ойын функционалы.'
    },
    tags: ['Python', 'Telegram', 'Bot']
  },
  {
    id: 24,
    type: 'Python / Parsing',
    title: 'Tender Tech Spec Generator',
    desc: {
      ru: 'Генератор технических спецификаций для тендеров.',
      en: 'Technical specification generator for tenders.',
      kz: 'Тендерлерге арналған техникалық сипаттамалар генераторы.'
    },
    detail: {
      ru: 'Автоматизация подготовки техдокументации.',
      en: 'Automated preparation of technical documentation.',
      kz: 'Техникалық құжаттаманы дайындауды автоматтандыру.'
    },
    tags: ['Python', 'Parsing', 'Tender']
  },
  {
    id: 25,
    type: 'Next.js / Vite',
    title: 'Tour Bot Frontend',
    desc: {
      ru: 'Фронтенд туристического бота или маршрутизатора.',
      en: 'Frontend for a tourism bot or route planner.',
      kz: 'Туристік бот немесе маршрут жоспарлаушының фронтенді.'
    },
    detail: {
      ru: 'Next.js/Vite приложение.',
      en: 'Next.js/Vite application.',
      kz: 'Next.js/Vite қосымшасы.'
    },
    tags: ['Next.js', 'Vite', 'Bot']
  },
  {
    id: 26,
    type: 'Android',
    title: 'Mask AR App — Face Recognition',
    desc: {
      ru: 'Android приложение для AR маскирования лица.',
      en: 'Android app for AR face masking.',
      kz: 'AR бет маскалауына арналған Android қосымша.'
    },
    detail: {
      ru: 'Использует AR SDK для маскирования лиц в реальном времени.',
      en: 'Uses AR SDK for real-time face masking.',
      kz: 'Нақты уақытта бет маскалау үшін AR SDK пайдаланады.'
    },
    tags: ['Android', 'AR', 'Computer Vision']
  },
  {
    id: 28,
    type: 'Python / 1C',
    title: '1C Generator',
    desc: {
      ru: 'Автоматический генератор кода для 1C платформы с AI.',
      en: 'AI-powered automatic code generator for 1C platform.',
      kz: 'AI көмегімен 1C платформасына арналған автоматты код генераторы.'
    },
    detail: {
      ru: 'Ускорение разработки 1C приложений.',
      en: 'Accelerating 1C application development.',
      kz: '1C қосымшаларын әзірлеуді жеделдету.'
    },
    tags: ['Python', '1C', 'Code Generation', 'AI']
  },
  {
    id: 29,
    type: 'Python / AI',
    title: 'New-AI — Secure Model Project',
    desc: {
      ru: 'Проект работы с защищёнными ML моделями.',
      en: 'Project for working with secure ML models.',
      kz: 'Қорғалған ML модельдерімен жұмыс жобасы.'
    },
    detail: {
      ru: 'Интеграция AI моделей с приватностью и безопасностью.',
      en: 'AI model integration with privacy and security.',
      kz: 'Құпиялылық пен қауіпсіздік бар AI модельдерінің интеграциясы.'
    },
    tags: ['Python', 'AI', 'Security']
  },
  {
    id: 30,
    type: 'Python / Parsing',
    title: 'Marketplaces Monitor',
    desc: {
      ru: 'Мониторинг данных с множественных маркетплейсов.',
      en: 'Multi-marketplace data monitoring.',
      kz: 'Көптеген маркетплейстерден деректерді бақылау.'
    },
    detail: {
      ru: 'Python парсеры для сбора данных с маркетплейсов.',
      en: 'Python scrapers for marketplace data collection.',
      kz: 'Маркетплейстерден деректер жинауға арналған Python парсерлері.'
    },
    tags: ['Python', 'Parsing', 'Marketplace']
  },
  {
    id: 31,
    type: 'React + TypeScript',
    title: 'TS Stom — Dental Clinic Web',
    desc: {
      ru: 'Веб-сайт/приложение для стоматологической клиники.',
      en: 'Website/app for a dental clinic.',
      kz: 'Стоматологиялық клиникаға арналған веб-сайт/қосымша.'
    },
    detail: {
      ru: 'React + TypeScript + Vite.',
      en: 'React + TypeScript + Vite.',
      kz: 'React + TypeScript + Vite.'
    },
    tags: ['React', 'TypeScript', 'Vite']
  },
  {
    id: 32,
    type: { ru: '1C Расширение', en: '1C Extension', kz: '1C Кеңейтім' },
    title: 'QR Payment Codes',
    desc: {
      ru: 'Расширение 1C для генерации QR-кодов платёжных счетов.',
      en: '1C extension for generating QR codes for payment invoices.',
      kz: 'Төлем шоттарына QR-кодтар жасауға арналған 1C кеңейтімі.'
    },
    detail: {
      ru: 'Интеграция в 1C:Бухгалтерия. Автоматизация создания платёжных документов.',
      en: 'Integration into 1C:Accounting. Automated payment document generation.',
      kz: '1C:Бухгалтерияға интеграция. Төлем құжаттарын құруды автоматтандыру.'
    },
    tags: ['1C', 'QR Code', 'Integration']
  },
  {
    id: 33,
    type: { ru: '1C Расширение', en: '1C Extension', kz: '1C Кеңейтім' },
    title: {
      ru: 'Загрузка инвентаризации из облака',
      en: 'Cloud Inventory Sync',
      kz: 'Бұлттан инвентаризация жүктеу'
    },
    desc: {
      ru: 'Расширение 1C для синхронизации данных инвентаризации из облака.',
      en: '1C extension for syncing inventory data from the cloud.',
      kz: 'Бұлттан инвентаризация деректерін синхрондауға арналған 1C кеңейтімі.'
    },
    detail: {
      ru: 'Автоматизация загрузки результатов проверок в 1C.',
      en: 'Automated loading of audit results into 1C.',
      kz: 'Тексеру нәтижелерін 1C-ге жүктеуді автоматтандыру.'
    },
    tags: ['1C', 'Cloud Sync', 'Integration']
  },
  {
    id: 34,
    type: { ru: '1C Расширение', en: '1C Extension', kz: '1C Кеңейтім' },
    title: {
      ru: '1C:Бухгалтерия — Источники происхождения',
      en: '1C:Accounting — Origin Sources',
      kz: '1C:Бухгалтерия — Шығу тегі көздері'
    },
    desc: {
      ru: 'Расширение для 1C:Бухгалтерия (Казахстан) — заполнение источников.',
      en: '1C:Accounting (Kazakhstan) extension — origin source filling.',
      kz: '1C:Бухгалтерия (Қазақстан) кеңейтімі — көздерді толтыру.'
    },
    detail: {
      ru: 'Специфика казахстанского учёта.',
      en: 'Kazakhstan-specific accounting requirements.',
      kz: 'Қазақстандық есеп ерекшеліктері.'
    },
    tags: ['1C', 'Accounting', 'Kazakhstan']
  },
  {
    id: 35,
    type: { ru: '1C Интеграция', en: '1C Integration', kz: '1C Интеграция' },
    title: {
      ru: '1C:ОСМС — ФСМС Интеграция',
      en: '1C:OSMS — FSMS Integration',
      kz: '1C:МӘМС — МӘМҚ Интеграциясы'
    },
    desc: {
      ru: 'Расширение 1C для интеграции с системой ФСМС (Казахстан).',
      en: '1C extension for integration with the FSMS system (Kazakhstan).',
      kz: 'МӘМҚ жүйесімен интеграцияға арналған 1C кеңейтімі (Қазақстан).'
    },
    detail: {
      ru: 'Синхронизация данных учёта в государственную систему.',
      en: 'Synchronization of accounting data with the government system.',
      kz: 'Есеп деректерін мемлекеттік жүйемен синхрондау.'
    },
    tags: ['1C', 'Integration', 'Kazakhstan']
  },
  {
    id: 37,
    type: '1C Testing',
    title: '1C Test API',
    desc: {
      ru: 'Набор тестов для проверки внешней обработки 1C API.',
      en: 'Test suite for verifying 1C API external processing.',
      kz: '1C API сыртқы өңдеуін тексеруге арналған тест жинағы.'
    },
    detail: {
      ru: 'Тестирование вызовов и интеграций 1C систем.',
      en: 'Testing calls and integrations of 1C systems.',
      kz: '1C жүйелерінің шақыруларын және интеграцияларын тестілеу.'
    },
    tags: ['1C', 'Testing', 'API']
  },
  {
    id: 38,
    type: 'Knowledge Base',
    title: 'Awesome Startup — Curated List',
    desc: {
      ru: 'Курируемый список ресурсов, книг и видео для создания стартапов.',
      en: 'Curated list of resources, books, and videos for building startups.',
      kz: 'Стартаптар құруға арналған ресурстар, кітаптар мен бейнелердің таңдалған тізімі.'
    },
    detail: {
      ru: 'Репозиторий лучших практик и материалов.',
      en: 'Repository of best practices and materials.',
      kz: 'Үздік тәжірибелер мен материалдар репозиторийі.'
    },
    tags: ['Awesome', 'Startup', 'Resources']
  },
  {
    id: 39,
    type: 'Web Service',
    title: 'Konkurent Analiz',
    desc: {
      ru: 'Веб-сервис анализа конкурентов с API и фронтендом.',
      en: 'Competitor analysis web service with API and frontend.',
      kz: 'API және фронтенді бар бәсекелестерді талдау веб-сервисі.'
    },
    detail: {
      ru: 'Единый продукт: backend (Next.js API) + frontend (React UI).',
      en: 'Unified product: backend (Next.js API) + frontend (React UI).',
      kz: 'Біртұтас өнім: backend (Next.js API) + frontend (React UI).'
    },
    tags: ['Next.js', 'React', 'Analytics']
  }
];
