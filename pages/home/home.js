// pages/home/home.js
Page({
  handleShowToast() {
    wx.showToast({
      title: '正在加载',
      duration: 3000,
      icon: 'loading',
      //image: '/assets/icon/icon.png',
      mask: true,
      success: function() {
        console.log('展示弹窗成功');
      },
      fail: function() {
        console.log('接口调用失败');
      },
      complete: function() {
        console.log('接口调用成功的回调函数');
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      //showCancel: false,
      cancelText: '重置',
      cancelColor: '#ff5777',
      success: function(res) {
        console.log(res);
        if(res.confirm) {
          console.log('用户点击了确定');
        }
        if(res.cancel) {
          console.log('用户点击了取消');
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })

    setTimeout(() => {
      //必须手动hideLoading才能让loading消失
      wx.hideLoading()
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: '#ff5888',
      success: function(res) {
        console.log(res);
        switch (res.tapIndex) {
          case 0:
            break;
          case 1:
            console.log('当前点击了相册');
            break;
        }
      }
    })
  },
  //分享
  onShareAppMessage: function(options) {
    return {
      title: '猪猪大作战',
      path: 'pages/index/index',
      imageUrl: 'http://b-ssl.duitang.com/uploads/item/201705/13/20170513174753_Pv42r.jpeg'
    }
  }
})