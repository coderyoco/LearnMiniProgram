//getApp() 获取App()产生的实例对象
// const app = getApp();
// const name = app.globalData.name;
// const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期函数
Page({
  //------------2.初始化数据------------
  data: {
    message: '哈哈哈',
    list: []
  },
  //------------1.监听页面的生命周期函数------------
  //页面被加载出来
  onLoad() {
    const _this = this;
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res) {
        console.log(res);
        const data = res.data
        _this.setData({
          list: data
        })
      }
    })
  },
  //当页面显示出来时
  onShow() {

  },
  //当页面初次完成渲染时
  onReady() {

  },
  //当页面被隐藏时
  onHide() {

  },
  //当页面被销毁
  onUnload() {

  },
  //------------3.监听wxml中相关的一些事件------------
  handleGetUserInfo(event) {
    console.log(event);
  },
  handleViewClick() {
    console.log('哈哈哈被点击了');
  },
  //------------4.监听其他事件------------
  //监听页面滚动
  onPageScroll(obj) {
    console.log(obj);
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  onPullDownRefresh() {
    console.log('下拉刷新事件');
  }
})