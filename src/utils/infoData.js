/* eslint-disable max-len */
/***************************** Главная страница *****************************/
export const labelTexts = [
    'Обучаем',
    'практике'
];

export const sloganText = 'Вы учитесь тому, что актуально и ВАЖНО сейчас для работы психолога- практиком.';

export const urlsLinks = [
    {
        path: '/education#long_courses',
        children: 'Долгосрочные программы'
    },
    {
        path: '/education#short_courses',
        children: 'Краткосрочные курсы'
    },
    {
        path: '/tacos',
        children: 'Лекции и вебинары '
    },
];

export const cardsData = [
    {
        title: 'Ориентация на практику',
        text: 'Постоянная практика и накапливаемый опыт способствует отточить мастерство и психологическое зрение',
    },
    {
        title: 'Постоянное развитие',
        text: 'Практический опыт, который получают наши студенты, актуален и верифицирован согласно с последними мировыми исследования в психологии ',
    },
    {
        title: 'Привлечение экспертов',
        text: 'Наши программы постоянно обновляются с учетом новых реалий нашего мира и изменяющихся запросов',
    },
];

export const accordionData = [
    {
        heading: 'Гештальт-терапия',
        content: [
            'Универсальный метод работы с любыми запросами клиентов, эффективен как для индивидуальных, так и для групповых форматов работы.',
            'Курс 1-ой ступени включает теорию и методы гештальт-терапии, навыки гештальт-диагностики, принципы работы в обучающих и терапевтических группах. ',
            'Курс 2-ой ступени дает практический опыт и формирует терапевтический стиль.'
        ],
        steps: [
            {
                text: '1-я ступень',
            },
            {
                text: '2-я ступень',
            },
            {
                text: 'супервизия',
            }
        ]
    },
    {
        heading: 'Экзистенциальный анализ',
        content: [
            'Экзистенциальный анализ и логотерапия — направление современной психотерапии, популярной в европейских странах, в Великобритании, а также на американском континенте. ',
            'Методы ЭА активно применяют в современной психологии, психотерапии, менеджменте, теории переговоров и медиации конфликтов. ',
            'Обучение проводится в партнерстве с GLE-international — международным обществом экзистенциального анализа и логотерапии.'
        ],
        steps: [
            {
                text: 'базовый курс',
            },
            {
                text: 'клинический курс',
            },
            {
                text: 'супервизия (эа)',
            },
            {
                text: 'интервизия (эа)',
            }
        ]
    },
    {
        heading: 'Психологическое консультирование',
        content: [
            'Практический курс. Программа сфокусирована на формировании системных и фундаментальных практических знаний о профессии психолога-консультанта',
            'Подробно разбирается каждый этап психологической работы. Значительное время уделено развитию практических навыков специалиста.',
            'По окончании курса можно сразу начинать практику'
        ],
        steps: [
            {
                text: 'базовый курс',
            },
            {
                text: 'супервизия',
            },
        ]
    }
];

/** ---------------------------------------------------------------------- **/

/***************************** Страница О нас *****************************/
export const cardsTeamData = [
    {
        name: 'Ирина Исаева',
        avatar: 'irina_isaeva.jpg',
        about: [
            'Гештальт-терапевт, обучающий тренер по гештальт-терапии 1-ой и 2-ой ступени, супервизор',
            'Практикующий психолог с 23-летним стажем. Тренер образовательных программ по гештальт-терапии 1-ой и 2-ой ступени с 2007 года.',
            '11-летний стаж управленческой деятельности.',
            '20-летний опыт работы в сфере образования. Психолог-консультант Совета при Президенте РФ. Выпустила более 100 групп гештальт-терапии 1-ой и 2-ой ступени'
        ]
    },
    {
        name: 'Татьяна Руданец',
        avatar: 'tat_rud.jpg',
        about: [
            'Психолог-практик с 11-летним стажем, мультипрофильный психотерапевт. ',
            ' Экзистенциальный аналитик (GLE International, Австрия), гештальт-терапевт, системный семейный терапевт. Ведущая терапевтических групп и групп самопознания. Член ассоциации экзистенциально-аналитических психологов и психотерапевтов',
            'Эксперт с вопросами межличностных отношений, травмой и кризисами, самореализацией и самооценкой'
        ]
    },
    {
        name: 'Елена Станковская',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-консультант ',
            '(GLE International, Австрия), транзактный аналитик. Кандидат психологических наук, кандидат на соискание звания транзактного аналитика в области психотерапии, доцент и преподаватель НИУ ВШЭ на факультете Психологии.',
            'Более 12 лет ведет индивидуальную и групповую работу с клиентами, более 10 лет преподает психологическое консультирование.',
            'Автор книги «Транзактный анализ. 7 лекций для проекта Магистерия» и ряда научных и научно-практических публикаций.'
        ]
    },
    {
        name: 'Мардоян Светлана ',
        avatar: 'mar_sv.jpeg',
        about: [
            'Тренер образовательных программ GLE-International.',
            'Окончила Ереванский Медицинский Институт, ординатуру по психотерапии в РМАПО. Психотерапевт, экзистенциальный аналитик (диплом психотерапевта GLE-International). ',
            'Член совета тренеров Ассоциации экзистенциально-аналитических психологов и психотерапевтов, тренер, супервизор долгосрочной образовательной программы по экзистенциальному анализу и логотерапии GLE-International.'
        ]
    },
    {
        name: 'Холмогорова Вита ',
        avatar: 'hal_vita.jpg',
        about: [
            'Тренер образовательных программ GLE-International.',
            'Окончила МГППУ, факультет Психологическое консультирование и психотерапия, РГМУ, факультет клинической психологии, кандидат психологических наук.',
            'Экзистенциальный аналитик (диплом психотерапевта GLE-international), психофизиолог, коуч. Опыт психологического консультирования с 1996 года.'
        ]
    },
    {
        name: 'Евгения Кольцова',
        avatar: 'kol_ev.jpg',
        about: [
            'Сертифицированный экзистенциальный психотерапевт (GLE International, Австрия).',
            'Психолог-практик с 11-летним стажем. Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, ко-тренер образовательных программ GLE-International, ведущая групп самопознания, автор практических лекционных курсов, психологических программ для подростков и взрослых.'
        ]
    },
    /*{
        name: 'Анастасия Туркина',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог.',
            'Окончила МГУ, кафедру нейро- и патопсихологии; Состоит в Ассоциации экзистенциально-аналитических психологов и психотерапевтов, ежегодный участник международных конгрессов в Германии и Австрии. ',
            'Переводчик, редактор книг и статей.'
        ]
    }, */
    /*{
        name: 'Элона Лавренова',
        avatar: 'elena_stats.jpg',
        about: [
            'Психолог-практик, экзистенциальный аналитик (GLE International, Австрия), клинический психолог',
        ]
    }, */
    {
        name: 'Татьяна Старшинова',
        avatar: 'tat_star.jpg',
        about: [
        ]
    },
    /* {
        name: 'Татьяна Шохман ',
        avatar: 'elena_stats.jpg',
        about: [
        ]
    }, */
];

/** ---------------------------------------------------------------------- **/

/***************************** Страница Образование *****************************/

export const shortCourses = [
    {
        id: '0',
        title: 'Зависимость и созависимость',
    },
    {
        id: '1',
        title: 'Психосоматика',
    },
    {
        id: '2',
        title: 'Феноменология',
    },
    {
        id: '3',
        title: 'Хорошие контракты',
    }
];


export const newsCards = [
    {
        id: 0,
        type: 'Краткосрочный курс',
        title: 'Хорошие контракты',
        start: '03.04.2021',
        duration: '6 часов',
        author: 'Елена Станковская',
        document: 'Диплом',
        cost: '5 000',
        path: '/short_course/3'
    },
    {
        id: 1,
        type: 'Краткосрочный курс',
        title: 'Феноменология: искусство интересоваться клиентами',
        start: '10.04.2021',
        duration: '6 часов',
        author: 'Елена Станковская',
        document: 'Диплом',
        cost: '5 000',
        path: '/short_course/2'
    },
]
