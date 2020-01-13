App({
  //初始化的生命周期函数
  //小程序初始化完成时，只执行一次
  onLaunch: function () {
    //异步调用
    // wx.getUserInfo({
    //   //数据拿到之后，再回调的
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })
  },
  //小程序显示出来时，执行多次
  onShow: function (options) {
    //1.判断小程序进入的场景值
    console.log(options);
    switch(options.scene) {
      case '1001':
        break;
      case '1005':
        break;
    }
  },
  //小程序被隐藏时
  onHide: function () {
  },
  //小程序发生一些错误时
  onError: function (msg) {
  },
  globalData: {   //共享数据
    name: 'coderwhy',
    age: 18
  }
})

