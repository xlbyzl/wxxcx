// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus:[
      {key:'tuijian',name:'推荐'},
      { key: 'shipin', name: '视频' },
      { key: 'redian', name: '热点' },
      { key: 'bendi', name: '本地' },
      { key: 'shehui', name: '社会' },
      { key: 'yule', name: '娱乐' },
      { key: 'keji', name: '科技' },
      { key: 'qiche', name: '汽车' },
      { key: 'tiyu', name: '体育' },
      { key: 'caijing', name: '财经' },
      { key: 'junshi', name: '军事' },
      { key: 'guoji', name: '国际' },
      { key: 'shishang', name: '时尚' },
      { key: 'youxi', name: '游戏' },
      { key: 'meiwen', name: '美文' },
    ],
    height:'',
    page:1,
    news:[],
    current:'tuijian'
  },
  switcher: function(e){
    // 获取当前对应的key
    var k = e.target.dataset.key
    this.setData({current:k})
  },
  change: function(e){
    // console.log(e)
    this.setData({current:e.detail.currentItemId})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    //获取页面显示的初始化数据
    var start = (this.data.page - 1) * 10;
    var end = start + 10;
    //拼接url地址
    var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';

    //发送请求获取数据
    wx.request({
      url: url,
      success: function (res) {
        // console.log(res.data);
        that.setData({ news: res.data.T1348647853363 })
        //page参数自增
        that.setData({ page: that.data.page + 1 })
      }
    }),
    wx.getSystemInfo({
      success: function(res) {
        var h = res.windowHeight - 45 -1;
        that.setData({height:h})
      },
    })

  },
  onReachBottom: function () {
    var that = this;
    //获取页面显示的初始化数据
    var start = (this.data.page - 1) * 10;
    var end = start + 10;
    //拼接url地址
    var url = 'http://c.m.163.com/nc/article/headline/T1348647853363/' + start + '-' + end + '.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstor';

    wx.request({
      url: url,
      success: function (res) {
        console.log(res.data);
        //获取当前的新闻列表数据
        var news = that.data.news;
        //组合
        var rs = news.concat(res.data.T1348647853363);
        //设置news的值
        that.setData({ news: rs });

        //page参数自增
        that.setData({ page: that.data.page + 1 })
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})