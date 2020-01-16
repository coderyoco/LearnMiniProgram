// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log(event);
    this.setData({
      count: this.data.count + 1
    })
  },
  handleItemClick(event) {
    console.log(event);
  },
  handleIncrementCpn() {
    //1.获取组件对象
    const my_sel = this.selectComponent('.sel-class');
    console.log(my_sel);

    //2.直接通过setData修改组件中的数值(不合理)
    // my_sel.setData({
    //   counter: my_sel.data.counter + 10
    // })

    //3.通过方法对数据进行修改
    my_sel.increment(20);
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})