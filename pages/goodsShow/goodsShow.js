// pages/goodsShow/goodsShow.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showView: true,
        shopCarShowView: true,
        buyShowView: true,
        chooseGoodsShowView: true,
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
            {
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
            {
                url: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=250&h=250',
                title: '米家空调',
                text: '出众静音，快速制冷热',
                price: '1699'
            },
        ],
        currentTab: 0,
        num: 1, //初始数量
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        showView: (options.showView == "true" ? true : false)
        shopCarShowView: (options.shopCarShowView == "true" ? true : false)
        buyShowView: (options.buyShowView == "true" ? true : false)
        chooeseShowView: (options.chooeseShowView == "true" ? true : false)
    },

   
    //滑动切换
    swiperTab: function (e) {
        console.log(e);
        this.setData({
            currentTab: e.detail.current
        });
    },
    //点击切换
    clickTab: function(e) {
        var _this = this;
        if (_this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            _this.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    addshopCar: function (e) {
        // wx.switchTab({
        //     url: "/pages/shopCar/shopCar"
        // })
        console.log(e)
        var goodsid = e.currentTarget.dataset.goodsid
        var goodsname = e.currentTarget.dataset.goodsname
        console.log(goodsid)

        wx.setStorageSync("goodsid", goodsid)
        wx.setStorageSync("goodsname", goodsname)
    },
    add:function(e){
        wx.switchTab({
            url: '/pages/shopCar/shopCar',
        })
    },
    buy: function (e) {
        wx.navigateTo({
            url: '/pages/buyed/buyed',
        })
    },
    address:function(e){
        wx.navigateTo({
            url: '/pages/select-address/index',
        })
    },


    // 弹窗
    onChangeCuponShowState: function () {
        var that = this;
        that.setData({
            showView: (!that.data.showView)
        })
        
    },
    onChangeShopCarShowState: function () {
        var that = this;
        that.setData({
            shopCarShowView: (!that.data.shopCarShowView)
        })

    },
    onChangeBuyShowState: function () {
        var that = this;
        that.setData({
            buyShowView: (!that.data.buyShowView)
        })

    },
    onChangeChooseGoodsShowState: function () {
        var that = this;
        that.setData({
            chooseGoodsShowView: (!that.data.chooseGoodsShowView)
        })
    },
    /* 点击减号 */
    bindMinus: function () {
        var num = this.data.num;
        // 如果大于1时，才可以减  
        if (num > 1) {
            num--;
        }
        // 只有大于一件的时候，才能normal状态，否则disable状态  
        var minusStatus = num <= 1 ? 'disabled' : 'normal';
        // 将数值与状态写回  
        this.setData({
            num: num,
            minusStatus: minusStatus
        });
    },
    /* 点击加号 */
    bindPlus: function () {
        var num = this.data.num;
        // 不作过多考虑自增1  
        num++;
        // 只有大于一件的时候，才能normal状态，否则disable状态  
        var minusStatus = num < 1 ? 'disabled' : 'normal';
        // 将数值与状态写回  
        this.setData({
            num: num,
            minusStatus: minusStatus
        });
    },

})