const TOKEN = 'token'

App({
  //用户再次登陆时会被销毁
  globalData: {
    token: ''
  },
  onLaunch: function() {
    //先从缓存storage中取出token
    const token = wx.getStorageSync(TOKEN)

    //判断token是否有值
    if(token && token.length !== 0) { //已经有token检验token是否过期
      this.check_token(token)
    } else { //没有token进行登录操作
      this.login()
    }
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        if(!res.data.errorCode) {
          //token有效
          this.globalData.token = token
        } else {
          this.login()
        }
      },
      fail: function(err) {
        console.log(err);
      }
    })
  },
  login() {
    //登录操作
    wx.login({
      // code只有5分钟的有效期
      success: (res) => {
        //1.获取code
        const code = res.code;
        //2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            //1.取出token
            const token = res.data.token;

            //2.将token保存在globalData中
            this.globalData.token = token;

            //3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })   
  }
})