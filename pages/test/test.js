//获取应用实例
var app = getApp();
Page({
    data: { //页面数据
        name: "test页面",
        time: "2017/1/14",
        username: ''
    },
    onLoad: function(options) { //监听页面加载（所有资源加载成功）
        console.log('onload');
        // console.log(app.globalData.time);
        this.setData({
            time: app.globalData.time, //"2016/1/1"
            username: app.getUserName()
        });
        var that = this;
        wx.request({
            url: 'http://news-at.zhihu.com/api/4/news/latest',
            data: {

            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
            	console.log(res);
            	that.setData({
            		list : res.data.stories
            	})
            },
            fail: function(res) {

            },
            complete: function(res) {

            }
        })
    },
    onReady: function() { //页面加载成功（只有节点加载成功）
        console.log('onReady');
    },
    onShow: function() { //页面显示

    },
    onHide: function() { //页面隐藏

    },
    onUnload: function() { //页面卸载

    },
    onPullDownRefresh: function() { //监听页面下拉动作

    },
    onReachBottom: function() { //页面上拉触底

    }
})