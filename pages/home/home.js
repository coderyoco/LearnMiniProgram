// pages/home/home.js
Page({
  data: {
    title: '哈哈哈'
  },
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=why&age=18&height=1.88',
    })
  }
})