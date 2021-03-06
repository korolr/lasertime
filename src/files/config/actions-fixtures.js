const actions = [
    {
        id: 1,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'голени + глубокое бикини + подмышки',
        image: 'laser-epilation-legs-bikini.jpg',
        price_old: 18000,
        price_new: 10000,
        group: 2,
    },
    {
        id: 2,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'лицо + шея',
        image: 'laser-epilation-face.jpg',
        price_old: 7000,
        price_new: 3000,
        group: 1,
    },
    {
        id: 3,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'руки полностью + подмышки',
        image: 'laser-epilation-armpits.jpg',
        price_old: 12000,
        price_new: 6000,
        group: 6,
    },
    {
        id: 4,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'глубокое бикини + подмышки',
        image: 'laser-epilation-bikini.jpg',
        price_old: 10000,
        price_new: 6000,
        group: 1,
    },
    {
        id: 5,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'руки до локтя',
        image: 'laser-epilation-hands.jpg',
        price_old: 5000,
        price_new: 4000,
        group: 5,
    },
    {
        id: 6,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'ноги полностью + классическое бикини',
        image: 'laser-epilation-legs.jpg',
        price_old: 20000,
        price_new: 10000,
        group: 9,
    },
    {
        id: 7,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'голени',
        image: 'laser-epilation-shins.jpg',
        price_old: 8000,
        price_new: 5000,
        group: 2,
    },
    {
        id: 8,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'бёдра',
        image: 'laser-epilation-thighs.jpg',
        price_old: 9000,
        price_new: 5000,
        group: 6,
    },
    {
        id: 9,
        category: 0,
        title: 'Лазерная эпиляция',
        description: 'грудь полностью',
        image: 'laser-epilation-breasts.jpg',
        price_old: 8000,
        price_new: 3000,
        group: 3,
    },
    {
        id: 10,
        category: 0,
        title: 'Лазерная эпиляция',
        description: ['тело полностью', 'кроме лица и спины'],
        image: 'laser-epilation-body.jpg',
        price_old: 39000,
        price_new: 20000,
        group: 4,
    },
    {
        id: 11,
        category: 1,
        title: 'Увеличение губ',
        description: 'препаратом Princess® Volume 1мл',
        image: 'lips-augmentation.jpg',
        price_old: 15000,
        price_new: 10000,
        group: 1,
    },
    // {
    //     id: 12,
    //     category: 1,
    //     title: 'Биоревитализация лица',
    //     description: 'препаратом Princess® Rich 1мл',
    //     image: 'biorevitalization.jpg',
    //     price_old: 13000,
    //     price_new: 10000,
    //     group: 9,
    // },
    {
        id: 13,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом YVOIRE® Hydro 1мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 5,
    },
    {
        id: 14,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Aquashine® 2мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 8,
    },
    {
        id: 15,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Meso-Wharton® P 199 1,5мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 8,
    },
    {
        id: 16,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Meso-Xanthin F 199 1,5мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 5,
    },
    {
        id: 17,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Mesoeye C 71 1мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 2,
    },
    {
        id: 18,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Mesoscult C 71 1,5мл',
        image: 'biorevitalization.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 5,
    },
    {
        id: 19,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Laennec Inj',
        image: 'biorevitalization.jpg',
        price_old: 4000,
        price_new: 3000,
        group: 5,
    },
    {
        id: 20,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Melsmon',
        image: 'biorevitalization.jpg',
        price_old: 5000,
        price_new: 3000,
        group: 6,
    },
    {
        id: 21,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Curacen',
        image: 'biorevitalization.jpg',
        price_old: 6000,
        price_new: 3500,
        group: 6,
    },
    {
        id: 22,
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Hyaron® с обезболиванием',
        image: 'biorevitalization.jpg',
        price_old: 7000,
        price_new: 5500,
        group: 9,
    },
    {
        id: 23,
        category: 1,
        title: 'Увеличение скул',
        description: ['препаратом Perfecta® Subskin', '3 шприца'],
        image: 'cheekbones-augmentation.jpg',
        price_old: 35000,
        price_new: 30000,
        group: 8,
    },
    {
        id: 24,
        category: 3,
        title: 'Dysport®',
        description: 'цена за 1 единицу',
        image: 'dysport.jpg',
        price_old: 120,
        price_new: 85,
        group: 1,
    },
    {
        id: 25,
        category: 3,
        title: 'Botox®',
        description: 'цена за 1 единицу',
        image: 'botox.jpg',
        price_old: 300,
        price_new: 250,
        group: 1,
    },
    {
        id: 26,
        category: 3,
        title: 'Лечение гипергидроза',
        description: 'стоимость за 1 флакон',
        image: 'hyperhydrosis.jpg',
        price_old: 25500,
        price_new: 20000,
        group: 2,
    },
    {
        id: 27,
        category: 1,
        title: 'Плазмолифтинг лица',
        description: '2 пробирки',
        image: 'plazmolifting.jpg',
        price_old: 6000,
        price_new: 3000,
        group: 2,
    },
    {
        id: 28,
        category: 1,
        title: 'Плазмолифинг лица',
        description: ['2 пробирки', 'с добавлением гиалур. кислоты'],
        image: 'plazmolifting.jpg',
        price_old: 8000,
        price_new: 6000,
        group: 8,
    },
    {
        id: 29,
        category: 2,
        title: 'Фотоомоложение',
        description: ['лицо', 'кол-во вспышек не ограничено'],
        image: 'ipl-rejuvenation.jpg',
        price_old: 9000,
        price_new: 5000,
        group: 2,
    },
    {
        id: 30,
        category: 2,
        title: 'Фотоомоложение',
        description: ['лицо + шея', 'кол-во вспышек не ограничено'],
        image: 'ipl-rejuvenation.jpg',
        price_old: 11000,
        price_new: 9000,
        group: 5,
    },
    {
        id: 31,
        category: 2,
        title: 'Фотоомоложение',
        description: ['лицо + шея + декольте', 'кол-во вспышек не ограничено'],
        image: 'ipl-rejuvenation.jpg',
        price_old: 15000,
        price_new: 12000,
        group: 6,
    },
    {
        id: 32,
        category: 4,
        title: 'Чистка лица',
        description: 'атравматическая',
        image: 'facial-cleansing.jpg',
        price_old: 5000,
        price_new: 3000,
        group: 1,
    },
    {
        id: 33,
        category: 2,
        title: 'Ультразвуковая чистка лица',
        description: 'пилинг + увлажнение',
        image: 'facial-cleansing.jpg',
        price_old: 5000,
        price_new: 3000,
        group: 6,
    },
    {
        id: 34,
        category: 4,
        title: 'Пилинг',
        description: 'ретиноевый',
        image: 'peel.jpg',
        price_old: 4500,
        price_new: 2000,
        group: 6,
    },
    {
        id: 35,
        category: 2,
        title: 'Омоложение infini',
        description: ['лицо + 1/3 шеи', 'насадка не вкл. в стоимость'],
        image: 'infini.jpg',
        price_old: 20000,
        price_new: 10000,
        group: 9,
    },
    {
        id: 36,
        category: 2,
        title: 'Омоложение infini',
        description: ['лицо + шея + декольте', 'насадка не вкл. в стоимость'],
        image: 'infini.jpg',
        price_old: 25000,
        price_new: 15000,
        group: 4,
    },
    {
        id: 37,
        category: 2,
        title: 'DOT-омоложение',
        description: ['фракционный нанопилинг', 'с обезболиванием'],
        image: 'dot-rejuvenation.jpg',
        price_old: 11000,
        price_new: 6000,
        group: 9,
    },
    {
        id: 38,
        category: 1,
        title: 'Контурная пластика',
        description: ['Stylage® XL', '2 шприца'],
        image: 'contour-correction.jpg',
        price_old: 40000,
        price_new: 30000,
        group: 3,
    },
    {
        id: 39,
        category: 1,
        title: 'Контурная пластика',
        description: ['Stylage® L', '2 шприца'],
        image: 'contour-correction.jpg',
        price_old: 34000,
        price_new: 30000,
        group: 3,
    },
    {
        id: 40,
        category: 1,
        title: 'Контурная пластика',
        description: ['Princess® Volume', '2 шприца'],
        image: 'contour-correction.jpg',
        price_old: 30000,
        price_new: 24000,
        group: 8,
    },
    {
        id: 41,
        category: 1,
        title: 'Мезотерапия',
        description: ['Lipolab® 10мл', 'жиросжигатель'],
        image: 'fat-burner.jpg',
        price_old: 5000,
        price_new: 3500,
        group: 5,
    },
    {
        id: 42,
        category: 1,
        title: 'Мезотерапия',
        description: ['Dermaheal® 5мл', 'любого назначения'],
        image: 'mesotherapy.jpg',
        price_old: 7000,
        price_new: 3500,
        group: 5,
    },
]

const categories = [
    'Эпиляция',
    'Инъекции',
    'Аппаратная косметология',
    'Ботулотоксины',
    'Чистки и пилинги',
]

const groups = {
    // Often
    1: [
        [1, 2, 3],
        [6, 7],
        [10, 11, 12],
        [15, 16],
        [19, 20, 21],
        [24, 25],
        [28, 29, 30],
    ],
    2: [[4, 5], [8, 9], [13, 14], [17, 18], [22, 23], [26, 27], [31]],

    // Seldom
    3: [[5, 6, 7, 8], [16, 17, 18, 19], [27, 28, 29, 30]],
    4: [[1, 2, 3], [14, 15, 16], [25, 26]],

    // Very seldom
    5: [[3, 4, 5], [18, 19, 20], [28, 29, 30]],
    6: [[6, 7], [22, 23], [30, 31]],

    7: 'weekdays',
    8: 'weekend',

    // Tue, Thu, Fri, Sat
    9: 'alla',
}

export default { actions, categories, groups }
