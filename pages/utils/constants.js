

// 搜索页数据
const constants = [
    {
        "id": "id1",
        "name": "热门推荐",
        "category": [{
                "category_id": 1,
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: 'Redmi Note8',
                text: '千元4800万四摄',
                price: '999'
            },
            {
                "category_id": 2,
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: '小米CC9',
                text: '3200万自拍，4800万三摄',
                price: '1699起'
            },
            {
                "category_id": 3,
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: '小米9 Pro 5G',
                text: '5G双卡全网通，骁龙855plus',
                price: '3699起'
            }
        ],
    },
    {
        "id": "id2",
        "name": "GGS周边",
        "category": [{
                "category_id": 4,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 5,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 6,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 7,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 8,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            }, {
                "category_id": 9,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 10,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 11,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            }

        ]
    },
    {
        "id": "id3",
        "name": "公交卡",
        "category": [{
                "category_id": 17,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 18,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 19,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            }
        ],
    },
    {
        "id": "id4",
        "name": "文具",
        "category": [{
                "category_id": 20,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 21,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 22,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 23,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 24,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 25,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 26,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 27,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 28,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 29,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 30,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 31,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 32,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            }
        ],
    },
    {
        "id": "id5",
        "name": "徽章",
        "category": [{
                "category_id": 33,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 34,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 35,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                "category_id": 35,
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            }
        ],
    },
    {
        "id": "id6",
        "name": "鞋类",
        "category": [{
                "category_id": 36,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 37,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 38,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 39,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            }
        ],
    },
    {
        "id": "id7",
        "name": "衣服",
        "category": [{
                "category_id": 40,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 41,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 42,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            },
            {
                "category_id": 42,
                "url": 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                "title": '米家空调',
                "text": '出众静音，快速制冷热',
                "price": '1699'
            }
        ],
    }
]

module.exports = constants