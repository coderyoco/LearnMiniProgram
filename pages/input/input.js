// pages/input/input.js
Page({
  data: {

  },
  handleInput(event) {
    console.log('文本框输入文字', event)
  },
  handleFocus(event) {
    console.log('文本框获取焦点', event);
  },
  handleBlur(event) {
    console.log('文本框失去焦点', event);
  },

})