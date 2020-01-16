// pages/home/home.js

import request from '../../service/network.js'

Page({
  data: {

  },
  onLoad: function (options) {
    //1.原生的方式发送网络请求
    this.get_data_origin()
    
    //2.使用封装的request发送网络请求(链式编程)
    //Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  get_data_origin() {
    //发送网络请求
    //1.1.发送简单的get请求
    // wx.request({
    //   url: 'https://123.207.32.32:8000/recommend',
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })
    //1.2.get请求，并且携带参数
    // wx.request({
    //   url: 'https://123.207.32.32:8000/home/data',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }
    // })
    //1.3.post请求，并且携带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(err) {
    //     console.log(err);
    //   }
    // })

  }
})