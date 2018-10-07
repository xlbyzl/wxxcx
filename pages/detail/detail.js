// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    title:'',
    body:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({id:options.id})

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    // 拼接地址
    var url = 'http://c.m.163.com/nc/article/'+this.data.id+'/full.html';
    // 发送请求
    wx.request({
      url: url,
      success: function(res){
        var rs= res.data[that.data.id];
        var title=rs.title;
        var body = rs.body;
        // 替换
        for(var i=0;i<rs.img.length;i++){
          body= body.replace(rs.img[i].ref,'<img src="'+rs.img[i].src+'"/>');
        }
        WxParse.wxParse('body', 'html', body, that, 5);
        that.setData({title:title})
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})