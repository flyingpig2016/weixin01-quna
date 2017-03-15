var app = getApp();
//Page() 函数用来注册一个页面。
//接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({
    data: {
        msg: "今天天气很好",
        time: "2017.3.2",
        name: app.globalData.name,
        text: '我是棒棒',
        condition: 81,
        length:6,
        flag:true,
        item:{
            name:'tc01',
            address:'北京'
        },
        list: [{
            name: 'bangbang',
            address: '北京',
            age: 18
        }, {
            name: 'qiqi',
            address: '上海', 
            age: 17
        }, {
            name: 'linlin',
            address: '深圳',
            age: 16
        }, ],
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        array1 : ['array1中第一个元素',2,3,'bangbang','qiqi'],
        object1 : {        
        	text : 'init data'
        },
    },
    changeText : function(){
    	this.setData({
    		text : '改变了'
    	})
    },
    changeItemInArray : function(){
    	this.setData({
    		'array1[0]' : '改变array1第1个元素'
    	})
    },
    changeItemInObject : function(){
    	this.setData({
    		'object1.text' : 'changed data'
    	})
    },
    addNewField : function(){
    	this.setData({
    		'newField.text' : 'new data' 
    	})
    },
    onLoad: function(options) { //生命周期函数--监听页面加载
       
    },
    onReady: function() { //生命周期函数--监听页面初次渲染完成

    },
    onShow: function() { //生命周期函数--监听页面显示

    },
    onHide: function() { //生命周期函数--监听页面隐藏

    },       
    onUnload: function() { //生命周期函数--监听页面卸载

    },
    onPullDownRefresh: function() { //页面相关事件处理函数--监听用户下拉动作
    	console.log('onPullDownRefresh')
    },
    onReachBottom: function() { //页面上拉触底事件的处理函数			
    	console.log('onReachBottom')
    },
    onShareAppMessage: function() {            
    	return{							
    		title: '我的名字叫棒棒',
    		desc: '棒棒分享描述',
    		path: 'https://www.baidu.com/baidu?wd=棒棒&tn=cnopera&ie=utf-8'
    	}
    },
    viewTap: function() {//Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数。
    	console.log('viewTap');
        this.setData({
            text: 'Set some data for updating view.'
        })
    },
    customData: {
        hi: 'MINA'
    }
})