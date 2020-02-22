const index = require("../utils/indexData.js");
// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        indexata: [{
                id: "1",
                name: "新品",
                url: '/pages/img/index/套餐服务.png'
            },
            {
                id: "2",
                name: "最新活动",
                url: '/pages/img/index/活动详情.png'
            },
            // {
            //     id: "3",
            //     name: "秒杀",
            //     url: '/pages/img/index/漏斗.png'
            // },
            {
                id: "4",
                name: "积分兑换",
                url: '/pages/img/index/积分兑换.png'
            },
            {
                id: "5",
                name: "会员优惠",
                url: '/pages/img/index/钱包.png'
            },
        ],
        advImage: [{
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c352beae76d56e4a98c48c8782a497b2.jpg?thumb=1&w=720&h=360'
            },
            {
                url: 'https://i8.mifile.cn/v1/a1/86392590-70ca-90e4-a9ff-f1fc9f128e4c.webp'
            },
            {
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e59d9327adeed09306f0882ea865765b.jpg?w=2452&h=920'
            },
            {
                url: 'https://i1.mifile.cn/a4/xmad_15632717871994_bYqIF.jpg'
            }
        ],
        currentSwiper: 0,
        //人气推荐商品
        hots: [{
            url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37d52be5170e1b25d30ff44db4b0791c.jpg?w=632&h=340',
            title: '小米9',
            text: '骁龙 855 旗舰处理器/MIUI 10//首次支持 Game Turbo',
            price: '3299',
            priceAfter: '2999'
        }],
        // 商品数据
        goodsMessage: [{
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: 'Redmi Note8',
                text: '千元4800万四摄',
                price: '999'
            },
            {
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: '小米CC9',
                text: '3200万自拍，4800万三摄',
                price: '1699起'
            },
            {
                url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=250&h=250&f=webp&q=90',
                title: '小米9 Pro 5G',
                text: '5G双卡全网通，骁龙855plus',
                price: '3699起'
            },
            {
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
                advimg: this.data.advImage,
                
            }),
            this.setData({
                goods: this.data.goodsMessage,
            }),
            this.setData({
                Hotgood: this.data.hots,
            }),
            this.setData({
                indexdata: this.data.indexata,
            })

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    /**
     * 轮播图调用数据
     */
    swiperChange: function(e) {
        this.setData({
            currentSwiper: e.detail.current
        })
    },
})