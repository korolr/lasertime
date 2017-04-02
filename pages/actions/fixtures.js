const actions = [
    {
        category: 1,
        title: 'Лазерная эпиляция',
        description: 'голени + бикини + подмышки',
        image: 'face-cleansing.jpg',
        price_old: 12000,
        price_new: 12000,
        group: 2,
        delay: 0
    },
    {
        category: 1,
        title: 'Лазерная эпиляция',
        description: 'лицо + 1/3 шеи',
        image: 'face-cleansing.jpg',
        price_old: 3000,
        price_new: 3000,
        group: 2,
        delay: 0
    },
    {
        category: 1,
        title: 'Лазерная эпиляция',
        description: 'руки полностью + подмышки',
        image: 'face-cleansing.jpg',
        price_old: 7000,
        price_new: 7000,
        group: 2,
        delay: 0
    },
    {
        category: 1,
        title: 'Лазерная эпиляция',
        description: 'бикини + подмышки',
        image: 'face-cleansing.jpg',
        price_old: 6000,
        price_new: 6000,
        group: 2,
        delay: 0
    },
    {
        category: 1,
        title: 'Увеличение губ',
        description: 'препаратом Princess Volume®',
        image: 'face-cleansing.jpg',
        price_old: 10000,
        price_new: 10000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Aquashine® 2,5мл',
        image: 'face-cleansing.jpg',
        price_old: 12000,
        price_new: 12000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Биоревитализация лица',
        description: 'препаратом Hyaron® с обезболиванием',
        image: 'face-cleansing.jpg',
        price_old: 6000,
        price_new: 6000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Увеличение скул',
        description: 'препаратом Perfecta Subskin®',
        image: 'face-cleansing.jpg',
        price_old: 25000,
        price_new: 25000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Dysport (Диспорт)',
        description: 'цена за 1 единицу',
        image: 'face-cleansing.jpg',
        price_old: 100,
        price_new: 100,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Лечение гипергидроза',
        description: 'цена за 1 флакон',
        image: 'face-cleansing.jpg',
        price_old: 20000,
        price_new: 20000,
        group: 1,
        delay: 0
    },
    {
        category: 1,
        title: 'Плазмолифинг',
        description: 'с гиалуроновой кислотой',
        image: 'face-cleansing.jpg',
        price_old: 6000,
        price_new: 6000,
        group: 1,
        delay: 0
    },
    {
        category: 3,
        title: 'Фотоомоложение лица',
        description: '',
        image: 'face-cleansing.jpg',
        price_old: 7000,
        price_new: 7000,
        group: 1,
        delay: 0
    },
    {
        category: 3,
        title: 'Чистка лица',
        description: '',
        image: 'face-cleansing.jpg',
        price_old: 3000,
        price_new: 3000,
        group: 1,
        delay: 0
    },
    {
        category: 3,
        title: 'Омоложение infini',
        description: 'RF-омоложение (насадка не вкл. в стоимость)',
        image: 'face-cleansing.jpg',
        price_old: 10000,
        price_new: 10000,
        group: 1,
        delay: 0
    },
    {
        category: 3,
        title: 'DOT-омоложение',
        description: 'фракционный нанопилинг + обезболивание',
        image: 'face-cleansing.jpg',
        price_old: 6000,
        price_new: 6000,
        group: 1,
        delay: 0
    },
]

const categories = {
    1: 'Лазерная эпиляция',
    2: 'Инъекции',
    3: 'Аппаратная косметология'
}

const groups = {
    1: [[1, 5], [10, 12]],
    2: [[14, 16]]
}

export default { actions, categories, groups }
