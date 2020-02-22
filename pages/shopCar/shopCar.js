// pages/shopCar/shopCar.js
const app = getApp()

Page({
    /**   * 页面的初始数据   */
    data: {
        allselected: false,
        allnum: 0,
        allprices: 0,
        cartsdata: [{
            storename: '测试商家1',
            selected: false,
            goodsinfo: [{
                goodsname: '小米9',
                color: '深空灰',
                space: '8+256G',
                specification: '规格',
                price: '2999',
                priceDiscount:'100',
                num: '1',
                selected: false,
                url: 'https://i1.mifile.cn/a1/pms_1565339457.36822589!80x80.jpg'
            },
            {
                goodsname: '小米电视4S 60寸',
                specification: '规格',
                price: '2999',
                priceDiscount: '100',
                num: '1',
                selected: false,
                url: 'https://i1.mifile.cn/a1/pms_1561540297.6364248.jpg?width=60&height=60'
            }
            ]
        },
        {
            storename: '测试商家2',
            selected: false,
            goodsinfo: [{
                goodsname: '小爱小音箱',
                specification: '规格',
                price: '99',
                priceDiscount: '10',
                num: '1',
                selected: false,
                url: 'https://i1.mifile.cn/a1/pms_1560230039.28979252.jpg?width=60&height=60'
            },
            {
                goodsname: '米家家用螺丝批',
                specification: '规格',
                price: '29',
                priceDiscount: '5',
                num: '2',
                selected: false,
                url: 'https://i1.mifile.cn/a1/pms_1563520321.19956339.jpg?width=60&height=60'
            }
            ]
        }
        ]
    },
    /**   * 生命周期函数--监听页面加载   */
    onLoad: function (options) {
        //获取购物车信息 
    },

    /**   * 生命周期函数--监听页面初次渲染完成   */

    onReady: function () {

    },

    /**   * 生命周期函数--监听页面显示   */

    onShow: function () {

    },

    /**   * 生命周期函数--监听页面隐藏   */

    onHide: function () {

    },

    /**   * 生命周期函数--监听页面卸载   */

    onUnload: function () {

    },

    /**   * 页面相关事件处理函数--监听用户下拉动作   */

    onPullDownRefresh: function () {

    },

    /**   * 页面上拉触底事件的处理函数   */

    onReachBottom: function () {

    },

    /**   * 用户点击右上角分享   */

    onShareAppMessage: function () {

    },

    //计算总价格  所有选中商品的 （价格*数量）相加  
    getallprices: function () {
        var cartsdata = this.data.cartsdata
        //购物车数据    
        var allprices = 0
        let allnum = 0
        for (var i = 0; i < cartsdata.length; i++) {
            // console.log()      
            var goodsinfo = cartsdata[i].goodsinfo
            for (var a = 0; a < goodsinfo.length; a++) {
                if (goodsinfo[a].selected) {      //当前商品价格*数量 +          
                    let price = Number(goodsinfo[a].price)
                    let num = parseInt(goodsinfo[a].num) //防止num为字符 *1或parseInt Number          
                    allprices += price * num
                    allnum += num
                }
            }
        }
        //跟新已选数量    
        this.setData({
            allnum: allnum,
            allprices: allprices.toFixed(2)
        })
    },

    //全选条件 条件->商铺全选择全选 反之  all
    allprices: function () {
        let cartsdata = this.data.cartsdata
        let storenum = cartsdata.length;
        let allselected = this.data.allselected
        let allselectednum = 0;
        for (var i = 0; i < cartsdata.length; i++) {
            if (cartsdata[i].selected == true) {
                allselectednum++
            }
        }
        if (storenum == allselectednum) {
            allselected = true
        } else {
            allselected = false
        }
        this.setData({ allselected: allselected })
        this.getallprices();
    },
    //全选按钮点击 
    tapallallprices: function () {
        let allselected = this.data.allselected
        var cartsdata = this.data.cartsdata //购物车数据   
        if (allselected) {
            allselected = false
        } else {
            allselected = true
        }
        //选择  

        for (var i = 0; i < cartsdata.length; i++) {
            cartsdata[i].selected = allselected
            var goodsinfo = cartsdata[i].goodsinfo
            for (var a = 0; a < goodsinfo.length; a++) {
                goodsinfo[a].selected = allselected
            }
        }
        this.setData({
            cartsdata: cartsdata, //店铺下商品的数量     
            allselected: allselected
        })
        this.getallprices();
    },

    // 店铺的选中 
    storeselected: function (e) {
        var cartsdata = this.data.cartsdata //购物车数据  
        let index = e.currentTarget.dataset.index //当前店铺下标
        var thisstoredata = cartsdata[index].goodsinfo //当前店铺商品数据    
        //改变当前店铺状态    
        if (cartsdata[index].selected) {
            cartsdata[index].selected = false    //改变当前店铺所有商品状态      
            for (var i in thisstoredata) { cartsdata[index].goodsinfo[i].selected = false }
        } else {
            cartsdata[index].selected = true
            //改变当前店铺所有商品状态      
            for (var i in thisstoredata) {
                cartsdata[index].goodsinfo[i].selected = true
            }
        }
        this.setData({
            cartsdata: cartsdata //店铺下商品的数量   
        })
        this.getallprices();
        this.allallprices();
    },

    // 商品的选中  
    goodsselected: function (e) {
        var cartsdata = this.data.cartsdata //购物车数据   
        let index = e.currentTarget.dataset.index //当前商品所在店铺中的下标    
        let idx = e.currentTarget.dataset.selectIndex //当前店铺下标    
        let cai = cartsdata[idx].goodsinfo; //当前商品的店铺data.goodsinfo    
        let curt = cai[index]; //当前商品数组    
        if (curt.selected) {
            cartsdata[idx].goodsinfo[index].selected = false //点击后当前店铺下当前商品的状态     
            cartsdata[idx].selected = false
        } else {
            cartsdata[idx].goodsinfo[index].selected = true //点击后当前店铺下当前商品的状态     

            //当店铺选中商品数量与店铺总数量相等时 改变店铺状态    

            var storegoodsleg = cartsdata[idx].goodsinfo.length
            var goodsinfo = cartsdata[idx].goodsinfo
            var selectedleg = 0
            for (var i in goodsinfo) {
                if (goodsinfo[i].selected == true) {
                    selectedleg++
                }
            }
            if (storegoodsleg == selectedleg) {
                cartsdata[idx].selected = true
            }
        }   // 更新   
        this.setData({
            cartsdata: cartsdata //店铺下商品的数量   
        })
        this.getallprices();
        this.allallprices();
    },
    // 点击+号，num加1，点击-号，如果num > 1，则减1  
    addCount: function (e) {
        var cartsdata = this.data.cartsdata //购物车数据   
        let index = e.currentTarget.dataset.index //当前商品所在店铺中的下标   
        let idx = e.currentTarget.dataset.selectIndex //当前店铺下标    
        let cai = cartsdata[idx].goodsinfo; //当前商品的店铺data.goodsinfo   
        let curt = cai[index]; //当前商品数组    
        var num = curt.num; //当前商品的数量    
        num++;
        cartsdata[idx].goodsinfo[index].num = num //点击后当前店铺下当前商品的数量   
        this.setData({
            cartsdata: cartsdata //店铺下商品的数量  
        })

        //计算总价格    
        this.getallprices();
    },

    minusCount: function (e) {
        var cartsdata = this.data.cartsdata //购物车数据   
        let index = e.currentTarget.dataset.index //当前商品所在店铺中的下标 
        let idx = e.currentTarget.dataset.selectIndex //当前店铺下标   
        let cai = cartsdata[idx].goodsinfo; //当前商品的店铺data.goodsinfo   
        let curt = cai[index]; //当前商品数组    
        var num = curt.num; //当前商品的数量    
        if (num <= 1) {
            return false;
        }
        num--;
        cartsdata[idx].goodsinfo[index].num = num //点击后当前店铺下当前商品的数量   
        this.setData({
            cartsdata: cartsdata //店铺下商品的数量   
        })
        this.getallprices();
    },
    buy: function (e) {
        wx.navigateTo({
            url: '/pages/buyed/buyed',
        })
    },
    goodsShow:function(e){
        wx.navigateTo({
            url: '/pages/goodsShow/goodsShow',
        })
    }
})