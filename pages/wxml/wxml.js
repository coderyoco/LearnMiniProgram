// pages/wxml/wxml.js
Page({
  data: {
    message: '你好啊',
    firstname: 'kobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: true,
    isShow: true,
    score: 45,
    isDisabled: false,
    movies: ['星际穿越', 'AI', '大话西游'],
    nums: [
      [1, 2, 3],
      [10, 20, 30],
      [100, 200, 300]
    ]
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 10
    })
    if(this.data.score > 100) {
      this.setData({
        isDisabled: true
      })
    }
  }
})