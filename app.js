//app.js:App() 必须在 app.js 中注册，且不能注册多个。
//不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
//不要在 onLaunch 的时候调用 getCurrentPage()，此时 page 还没有生成。
//通过 getApp() 获取实例之后，不要私自调用生命周期函数。
App({
    onLaunch: function() {   //Do something initial when launch.
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserName:function(){
        return "——这是棒棒的测试页面";
    },
    getUserInfo: function(cb) { //获取用户信息
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {
        userInfo: null,
        time : "2016/1/1",
        name : "棒棒帅呆呆"
    }
})