// pages/image/image.js
Page({
  data: {
    imagePath: ''
  },
  handleChooseAlbum() {
    //系统API,让用户从相册中选择图片或拍照
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        //取出路径
        const path = res.tempFilePaths[0]
        //设置imagePath
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad() {
    console.log('图片加载完成');
  }
})