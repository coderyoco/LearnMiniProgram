//2.第二种封装(简便)
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}

//1.第一种封装
// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.data || {},
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }