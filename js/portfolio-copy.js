const portfolioCopy = {
  en: {
    title: "Anton Koshel — Engineering Team Lead",
    description: "Anton Koshel leads software engineering at Sherpa RPA and builds tools for AI platforms and workflow automation.",
    name: "Anton Koshel",
    primaryNav: "Primary navigation",
    openNav: "Open navigation",
    switchLanguage: "Switch to Russian",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    nav: { about: "About", skills: "Skills", work: "Work", path: "Experience", contact: "Contact" },
    location: "Belarus · available worldwide",
    greeting: "Hi, I’m",
    firstName: "Anton.",
    role: "Engineering Team Lead · AI & Automation",
    typingRoles: ["Engineering Team Lead", "Full-Stack Developer", "DevOps & Release Engineering", "AI & Workflow Automation", "Software Architecture"],
    lead: "I build AI and automation platforms, from product interfaces to backend services and release pipelines.",
    viewWork: "View my work",
    resume: "Résumé PDF",
    current: "Currently",
    employer: "Engineering at Sherpa RPA",
    aboutTitle: "What I do",
    aboutIntro: "I lead development at Sherpa RPA and build software for teams that rely on AI and automation in their daily work.",
    aboutFacts: [["6+ years", "software engineering"], ["Full stack", "product and infrastructure"], ["AI engineering", "agents and model serving"], ["Manga", "reading and collecting"]],
    aboutWork: "My work spans backend services, product interfaces and release engineering. I verify changes in the environments where they run, from deployed services to multi-monitor Windows setups.",
    aboutPersonal: "Outside work, I build Workspace for my own engineering workflows and contribute to desktop tools and game addons.",
    skills: [
      ["AI engineering", "LLMs · MCP · RAG · agents · self-hosted models · model evaluation"],
      ["Frontend", "Vue · Angular · TypeScript · JavaScript · HTML/CSS"],
      ["Backend", "Python · PHP · Node.js · C++ · Lua"],
      ["Infrastructure", "Linux · Docker · Kubernetes · Nginx · Bash · GitHub Actions"],
      ["Data", "PostgreSQL · MySQL · MariaDB · Redis · Memcached"],
      ["Engineering workflow", "Git · CI/CD · test automation · observability"]
    ],
    evidenceTitle: "AI and infrastructure",
    workTitle: "Selected work",
    workIntro: "Enterprise AI and RPA at Sherpa, a personal automation platform, and open-source contributions.",
    workFiltersLabel: "Filter projects",
    workFilters: { all: "All projects", sherpa: "Sherpa RPA", personal: "Personal", contributions: "Open-source contributions" },
    workspace: {
      type: "Personal project · Workflow automation",
      summary: "I built a self-hosted platform for the automation I use in my engineering work. Its visual editor connects GitHub, Telegram, email, calendar and scheduled events to actions, conditions and Codex sessions running in WSL.",
      runs: "Published workflows are versioned. Each run tracks its steps and links to its Codex chat. Runs can wait for approval or resume from a saved step.",
      example: "Workflow examples",
      scenarios: {
        review: {
          label: "PR review",
          steps: [
            ["Review requested", "GitHub starts a run for the pull request and records its head commit."],
            ["Code review", "Codex checks that commit and saves its findings and chat in the run history."],
            ["Approval", "A reviewer can read the draft and decide whether it is ready to post."],
            ["Publish and verify", "Workspace checks the commit again and confirms the review appears in GitHub."]
          ]
        },
        production: {
          label: "Production errors",
          steps: [
            ["Read production logs", "On a schedule, Workspace reads new errors through the service API."],
            ["Group recurring events", "Similar errors are grouped and checked against existing GitHub issues."],
            ["Investigate", "Codex examines the log context and code to identify distinct problems worth tracking."],
            ["Create a ticket", "Workspace opens an issue for a new confirmed problem and verifies its ticket status in GitHub Projects."]
          ]
        },
        delivery: {
          label: "Ticket to release",
          steps: [
            ["Triage the ticket", "Workspace gathers context and related issues so the developer can plan a fix."],
            ["Implement and review", "The developer opens a PR. Workspace reviews the exact commit and records the findings."],
            ["Verify on dev", "After review and CI, the team deploys the change to dev and verifies it there."],
            ["Reconcile the release", "A scheduled workflow matches merged changes to release tags and updates ticket statuses and roadmaps."]
          ]
        }
      },
      recovery: "In one issue-triage run, recovery preserved six completed steps after a publication failure. The run resumed without a second Codex call and created exactly one issue."
    },
    projects: {
      glossa: { type: "AI · Knowledge systems", title: "Glossa", description: "Offline, file-first knowledge base with a reasoning graph and an MCP server for AI agents.", tags: ["MCP","AI agents","Offline-first","Knowledge graph"] },
      evaluation: { type: "AI · Model evaluation", title: "Local and server LLMs", description: "Compared self-hosted models on the same coding and tool-call tasks with pinned datasets, prompts and settings. Checked format compliance, correctness and reasoning modes.", tags: ["LLM evaluation","EvalPlus","Tool calling"] },
      scraper: { type: "AI · Structured extraction", title: "LLM Scraper", description: "Extract structured data from web pages through an LLM pipeline.", tags: ["LLM","Scraping","Structured data"] },
      llmDocker: { type: "AI tooling · Docker", title: "LLM Docker for VS Code", description: "Reproducible Docker environment for local LLM development in VS Code.", tags: ["Docker","VS Code","Local LLMs"] },
      aiChat: { type: "AI integration · Editor", title: "VS Code AI Chat", description: "AI chat extension with HTTP and SOCKS proxy support for VS Code.", tags: ["TypeScript","VS Code","Proxy"] },
      mailserver: { type: "Infrastructure · Containers", title: "Docker Mail Server", description: "Containerized mail service for self-hosted deployments.", tags: ["Docker","Linux","Email"] },
      actions: { type: "Automation · CI/CD", title: "GitHub Actions Template", description: "Reusable workflows for CI/CD and repository automation.", tags: ["GitHub Actions","CI/CD"] },
      aiServer: { type: "Sherpa RPA · AI", title: "Sherpa AI Server", description: "Improved how agents handle duplicate search calls and recurring timeouts. Verified model configuration migrations on the deployed development environment.", tags: ["LLMs","Agent reliability","Data migrations"] },
      orchestrator: { type: "Sherpa RPA · Automation", title: "Sherpa Orchestrator", description: "Designed separate container roles for the API, scheduler and system logger using one image. The pull request was tested end to end against MariaDB and PostgreSQL.", tags: ["Docker","MariaDB","PostgreSQL"] },
      pdServer: { type: "Sherpa RPA · Release engineering", title: "Sherpa Process Discovery", description: "Set up a parallel GitHub Actions build for eight container images, with image scanning and artifact verification.", tags: ["GitHub Actions","Docker","CI/CD"] },
      seelen: { type: "Open-source contribution", title: "Seelen UI", description: "Refined multi-monitor window switching and dock behavior in fullscreen. Verified the installed Windows build on two monitors.", tags: ["Rust","Windows","Multi-monitor"] },
      sirus: { type: "Open-source contribution", title: "Sirus Addon Contributions", description: "Adapted Lua addons for the DF UI and submitted upstream pull requests. Wrote technical release notes in English and player-facing notes in Russian.", tags: ["Lua","WoW addons","DF UI"] },
      furycube: { type: "Personal project · Windows HID", title: "FURYCUBE G9 Pro Hub", description: "Windows utility for device profiles and OLED layouts. Verified profile preservation and USB input on a physical mouse after a firmware update.", tags: ["C#","Vue","Windows","HID"] },
      launcher: { type: "Desktop · TypeScript", title: "Awesome Sirus Launcher", description: "Community addon updater and desktop launcher for Sirus.", tags: ["TypeScript","Desktop","Automation"] },
      theme: { type: "Editor · SCSS", title: "VS Code FXPW Theme", description: "Custom theme for Visual Studio Code.", tags: ["SCSS","VS Code"] },
      ftp: { type: "Automation · JavaScript", title: "ftp_action", description: "JavaScript action for FTP-based workflows.", tags: ["JavaScript","GitHub Actions"] }
    },
    experienceTitle: "Experience",
    jobs: [
      ["Nov 2025", "Present", "Sherpa RPA · Engineering Team Lead", "Lead development across AI Server, Orchestrator and Process Discovery, with responsibility for technical decisions, code review and release delivery.", "See selected work"],
      ["Feb 2024", "Sep 2025", "Creative Paradise · Tech Lead / Team Lead", "Took over a Laravel and Vue marketplace from contractors. Moved the application to Docker Compose, set up CI/CD and introduced two-stage release checks. Imported more than one million products and mentored developers."],
      ["Sep 2023", "Feb 2024", "Creative Paradise · Backend Developer", "Built Python and JavaScript bots and integrations for sales, courses, donations and subscriptions."],
      ["Jan 2020", "Aug 2023", "Freelance · Software Engineer", "Delivered web, automation and infrastructure projects for small and medium businesses."]
    ],
    contactTitle: "Let’s work together.",
    backToTop: "Back to top",
    statsHistory: "GitHub Metrics history",
    statsSources: "Data and original reports",
    stats: {
      totalRepos: "total repositories", totalStars: "stars", forks: "forks", releases: "releases",
      watchers: "watchers", followers: "followers", following: "following", commits: "commits",
      pullRequestsOpened: "pull requests opened", pullRequestsReviewed: "pull requests reviewed",
      issues: "issues opened", issueComments: "issue comments",
      currentStreak: "current streak (days)", longestStreak: "best streak (days)",
      highestCommitsPerDay: "most commits in a day", averageCommitsPerDay: "average commits per day"
    }
  },
  ru: {
    title: "Антон Кошель — руководитель группы разработки",
    description: "Антон Кошель руководит разработкой в Sherpa RPA и создаёт инструменты для ИИ-платформ и автоматизации рабочих процессов.",
    name: "Антон Кошель",
    primaryNav: "Основная навигация",
    openNav: "Открыть меню",
    switchLanguage: "Переключить на английский",
    lightTheme: "Включить светлую тему",
    darkTheme: "Включить тёмную тему",
    nav: { about: "Обо мне", skills: "Навыки", work: "Проекты", path: "Опыт", contact: "Контакты" },
    location: "Беларусь · работаю с командами по всему миру",
    greeting: "Привет, я",
    firstName: "Антон.",
    role: "Руководитель разработки · ИИ и автоматизация",
    typingRoles: ["Руководитель разработки", "Full-stack разработчик", "DevOps и выпуск релизов", "ИИ и автоматизация", "Архитектура ПО"],
    lead: "Создаю ИИ-платформы и системы автоматизации: от интерфейсов и бэкенда до сборок и релизов.",
    viewWork: "Смотреть проекты",
    resume: "Резюме PDF",
    current: "Сейчас",
    employer: "Разработка в Sherpa RPA",
    aboutTitle: "Чем я занимаюсь",
    aboutIntro: "Руковожу разработкой в Sherpa RPA и создаю программы для команд, которые используют ИИ и автоматизацию в повседневной работе.",
    aboutFacts: [["6+ лет", "в разработке ПО"], ["Full stack", "продукт и инфраструктура"], ["ИИ", "агенты и запуск моделей"], ["Манга", "читаю и коллекционирую"]],
    aboutWork: "Работаю с серверными сервисами, интерфейсами и процессами выпуска. Проверяю изменения там, где они используются: от сервисов после выкладки до интерфейса Windows на двух мониторах.",
    aboutPersonal: "Вне работы развиваю Workspace для собственных инженерных задач и участвую в разработке настольных инструментов и игровых аддонов.",
    skills: [
      ["ИИ и модели", "LLM · MCP · RAG · агенты · локальные модели · оценка моделей"],
      ["Фронтенд", "Vue · Angular · TypeScript · JavaScript · HTML/CSS"],
      ["Бэкенд", "Python · PHP · Node.js · C++ · Lua"],
      ["Инфраструктура", "Linux · Docker · Kubernetes · Nginx · Bash · GitHub Actions"],
      ["Данные", "PostgreSQL · MySQL · MariaDB · Redis · Memcached"],
      ["Процессы разработки", "Git · CI/CD · автотесты · мониторинг"]
    ],
    evidenceTitle: "ИИ и инфраструктура",
    workTitle: "Избранные проекты",
    workIntro: "Корпоративные продукты Sherpa, личная платформа автоматизации и вклад в проекты с открытым кодом.",
    workFiltersLabel: "Фильтр проектов",
    workFilters: { all: "Все проекты", sherpa: "Sherpa RPA", personal: "Личные", contributions: "Вклад в open source" },
    workspace: {
      type: "Личный проект · Автоматизация",
      summary: "Создал платформу для автоматизации собственных инженерных задач. В визуальном редакторе связываю события GitHub, Telegram, почты, календаря и расписания с действиями, условиями и запусками Codex в WSL.",
      runs: "Сценарии публикуются версиями. У каждого запуска есть журнал шагов и ссылка на чат Codex. Запуск может ждать согласования или продолжиться с сохранённого шага.",
      example: "Примеры сценариев",
      scenarios: {
        review: {
          label: "Ревью PR",
          steps: [
            ["Запрос ревью", "Событие из GitHub запускает сценарий и фиксирует PR и его текущий коммит."],
            ["Проверка кода", "Codex проверяет этот коммит. Замечания и ссылка на чат попадают в журнал запуска."],
            ["Согласование", "Ревьюер читает черновик и решает, готов ли он к публикации."],
            ["Публикация", "Workspace повторно сверяет коммит и проверяет, что ревью появилось в GitHub."]
          ]
        },
        production: {
          label: "Ошибки на проде",
          steps: [
            ["Сбор ошибок", "По расписанию Workspace читает новые записи журнала прода через API сервиса."],
            ["Группировка повторов", "Похожие ошибки объединяются и сверяются с существующими задачами в GitHub."],
            ["Разбор проблемы", "Codex изучает журнал и код, чтобы выделить отдельные проблемы, которые требуют задачи."],
            ["Создание тикета", "Для новой подтверждённой проблемы Workspace создаёт issue и проверяет статус в GitHub Projects."]
          ]
        },
        delivery: {
          label: "Тикет → релиз",
          steps: [
            ["Разбор тикета", "Workspace собирает контекст и связанные задачи, чтобы разработчик мог подготовить правку."],
            ["Разработка и ревью", "Разработчик открывает PR. Workspace проверяет конкретный коммит и сохраняет замечания."],
            ["Проверка на dev", "После ревью и CI команда выкладывает изменение на dev и проверяет его на стенде."],
            ["Сверка с релизом", "По расписанию сценарий сверяет изменения с тегами релизов и обновляет статусы тикетов и роадмапы."]
          ]
        }
      },
      recovery: "При разборе одной ошибки после сбоя публикации сохранились шесть завершённых шагов. Сценарий продолжился без повторного вызова Codex и создал ровно один issue."
    },
    projects: {
      glossa: { type: "ИИ · Системы знаний", title: "Glossa", description: "Автономная база знаний на файлах с графом рассуждений и MCP-сервером для ИИ-агентов.", tags: ["MCP","ИИ-агенты","Офлайн","Граф знаний"] },
      evaluation: { type: "ИИ · Оценка моделей", title: "Локальные и серверные LLM", description: "Сравнивал модели на одинаковых задачах по коду и вызову инструментов с фиксированными датасетами, промптами и настройками. Проверял корректность, формат и режимы рассуждения.", tags: ["Оценка LLM","EvalPlus","Вызов инструментов"] },
      scraper: { type: "ИИ · Извлечение данных", title: "LLM Scraper", description: "Извлечение структурированных данных с веб-страниц с помощью LLM.", tags: ["LLM","Парсинг","Структурированные данные"] },
      llmDocker: { type: "ИИ-инструменты · Docker", title: "LLM Docker for VS Code", description: "Воспроизводимая среда Docker для разработки с локальными LLM в VS Code.", tags: ["Docker","VS Code","Локальные LLM"] },
      aiChat: { type: "ИИ · Редактор кода", title: "VS Code AI Chat", description: "Расширение для чата с ИИ в VS Code с поддержкой HTTP- и SOCKS-прокси.", tags: ["TypeScript","VS Code","Прокси"] },
      mailserver: { type: "Инфраструктура · Контейнеры", title: "Docker Mail Server", description: "Почтовый сервис в контейнере для самостоятельного развёртывания.", tags: ["Docker","Linux","Почта"] },
      actions: { type: "Автоматизация · CI/CD", title: "GitHub Actions Template", description: "Переиспользуемые сценарии CI/CD и автоматизации репозиториев.", tags: ["GitHub Actions","CI/CD"] },
      aiServer: { type: "Sherpa RPA · ИИ", title: "Sherpa AI Server", description: "Улучшил обработку повторных вызовов поиска и таймаутов в агентских сценариях. Проверил миграции конфигураций моделей после выкладки на dev-стенд.", tags: ["LLM","Надёжность агентов","Миграции данных"] },
      orchestrator: { type: "Sherpa RPA · Автоматизация", title: "Sherpa Orchestrator", description: "Спроектировал отдельные контейнеры для API, планировщика и системного логирования из одного образа. Решение в PR проверено сквозными тестами на MariaDB и PostgreSQL.", tags: ["Docker","MariaDB","PostgreSQL"] },
      pdServer: { type: "Sherpa RPA · Выпуск релизов", title: "Sherpa Process Discovery", description: "Настроил параллельную сборку восьми контейнерных образов в GitHub Actions со сканированием образов и проверкой артефактов.", tags: ["GitHub Actions","Docker","CI/CD"] },
      seelen: { type: "Вклад в открытый код", title: "Seelen UI", description: "Доработал переключение окон на нескольких мониторах и поведение дока в полноэкранном режиме. Проверил установленную сборку Windows на двух мониторах.", tags: ["Rust","Windows","Несколько мониторов"] },
      sirus: { type: "Вклад в открытый код", title: "Аддоны Sirus", description: "Адаптировал Lua-аддоны под DF UI и подготовил pull request в исходные репозитории. Написал технические списки изменений на английском и заметки для игроков на русском.", tags: ["Lua","Аддоны WoW","DF UI"] },
      furycube: { type: "Личный проект · Windows HID", title: "FURYCUBE G9 Pro Hub", description: "Утилита Windows для профилей мыши и оформления OLED. Проверил сохранение профилей и работу ввода по USB на физическом устройстве после обновления прошивки.", tags: ["C#","Vue","Windows","HID"] },
      launcher: { type: "Настольное приложение · TypeScript", title: "Awesome Sirus Launcher", description: "Лаунчер и средство обновления аддонов для сообщества Sirus.", tags: ["TypeScript","Настольное приложение","Автоматизация"] },
      theme: { type: "Редактор кода · SCSS", title: "VS Code FXPW Theme", description: "Тема оформления для Visual Studio Code.", tags: ["SCSS","VS Code"] },
      ftp: { type: "Автоматизация · JavaScript", title: "ftp_action", description: "Действие на JavaScript для сценариев, использующих FTP.", tags: ["JavaScript","GitHub Actions"] }
    },
    experienceTitle: "Опыт работы",
    jobs: [
      ["Ноя. 2025", "по н. в.", "Sherpa RPA · Руководитель группы разработки", "Руковожу разработкой AI Server, Orchestrator и Process Discovery. Отвечаю за технические решения, ревью кода и выпуск изменений.", "Смотреть проекты"],
      ["Фев. 2024", "Сен. 2025", "Creative Paradise · Tech Lead / Team Lead", "Принял маркетплейс на Laravel и Vue у подрядчиков. Перевёл приложение на Docker Compose, настроил CI/CD и ввёл двухступенчатую проверку релизов. Импортировал более миллиона товаров и помогал разработчикам расти в команде."],
      ["Сен. 2023", "Фев. 2024", "Creative Paradise · Бэкенд-разработчик", "Разрабатывал ботов и интеграции для продаж, курсов, донатов и подписок на Python и JavaScript."],
      ["Янв. 2020", "Авг. 2023", "Фриланс · Разработчик ПО", "Разрабатывал веб-сервисы, автоматизации и инфраструктурные решения для малого и среднего бизнеса."]
    ],
    contactTitle: "Давайте работать вместе.",
    backToTop: "Наверх",
    statsHistory: "История GitHub Metrics",
    statsSources: "Данные и исходные отчёты",
    stats: {
      totalRepos: "репозиториев", totalStars: "звёзд", forks: "форков", releases: "релизов",
      watchers: "наблюдателей", followers: "подписчиков", following: "подписок", commits: "коммитов",
      pullRequestsOpened: "открытых pull request", pullRequestsReviewed: "проверенных pull request",
      issues: "открытых issue", issueComments: "комментариев к issue",
      currentStreak: "текущая серия, дни", longestStreak: "лучшая серия, дни",
      highestCommitsPerDay: "максимум за день", averageCommitsPerDay: "коммитов в день в среднем"
    }
  }
};

const projectLinks = {
  glossa: "https://github.com/fxpw/glossa",
  scraper: "https://github.com/fxpw/llm-scraper",
  llmDocker: "https://github.com/fxpw/llm_docker_vscode",
  aiChat: "https://github.com/fxpw/vscode-fxpw-ai-chat",
  mailserver: "https://github.com/fxpw/docker-mailserver",
  actions: "https://github.com/fxpw/github_action_template_repo",
  aiServer: "https://sherparpa.ru/sherpa-ai-server-test/",
  orchestrator: "https://sherparpa.ru/sherpa-orchestrator/",
  pdServer: "https://sherparpa.ru/sherpa-pd/",
  seelen: "https://github.com/fxpw/Seelen-UI/commit/5bca286b",
  sirus: "https://github.com/sirus-addons/Auctionator/pull/5",
  furycube: "https://github.com/fxpw/FURYCUBE-G9-PRO-HUB",
  launcher: "https://github.com/fxpw/awesome-sirus-launcher",
  theme: "https://github.com/fxpw/vscode-fxpw-theme",
  ftp: "https://github.com/fxpw/ftp_action"
};

const projectGroups = {
  evidence: ["glossa", "evaluation", "scraper", "llmDocker", "aiChat", "mailserver", "actions"],
  work: {
    aiServer: "sherpa",
    orchestrator: "sherpa",
    pdServer: "sherpa",
    seelen: "contributions",
    sirus: "contributions",
    furycube: "personal",
    launcher: "personal",
    theme: "personal",
    ftp: "personal"
  }
};

const jobDates = [
  ["2025-11"],
  ["2024-02", "2025-09"],
  ["2023-09", "2024-02"],
  ["2020-01", "2023-08"]
];
