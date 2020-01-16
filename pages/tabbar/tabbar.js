// pages/tabbar/tabbar.js
Page({
  data: {
  },
  handleItemClick(event) {
    const detail = event.detail;
    const index = detail.index;
    const item = detail.item;
    console.log(item, "下标是："+index);
  }

})