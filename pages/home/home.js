// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子', '袜子']
  },
  handleBtnClick() {
    console.log('按钮点击');
  },
  //手指开始点击屏幕时
  handleTouchStart() {
    console.log('handleTouchStart');
  },
  //手指在屏幕上移动时
  handleTouchMove() {
    console.log('handleTouchMove');
  },
  //手指离开屏幕时
  handleTouchEnd() {
    console.log('handleTouchEnd');
  },
  handleTap() {
    console.log('handleTap');
  },
  //手指长按超过350毫秒时
  handleLongPress() {
    console.log('handleLongPress');
  },
  //touch和changetouch的区别
  //touch是记录当前有几根手指在屏幕上触摸，而changeTouch是记录当前屏幕上的手指变化有几根
  handleEventClick(event) {
    console.log("-----", event);
  },
  handleEventEnd(event) {
    console.log("+++++", event);
  },
  //target和currentTarget的区别
  //currentTarget记录的是触发事件的view,target记录的是产生事件的view
  handleInner(event) {
    console.log(event);
  },
  handleOuter(event) {
    console.log(event);
  },
  handleItemClick(event) {
    console.log(event);
    const dataset = event.currentTarget.dataset;
    const item = dataset.item;
    const index = dataset.index;
    console.log(item, index);
  },
  //---------------事件冒泡和事件捕获
  handleCaptureView1() {
    console.log('handleCaptureView1');
  },
  handleCaptureView2() {
    console.log('handleCaptureView2');
  },
  handleCaptureView3() {
    console.log('handleCaptureView3');
  },
  handleBindView1() {
    console.log('handleBindView1');
  },
  handleBindView2() {
    console.log('handleBindView2');
  },
  handleBindView3() {
    console.log('handleBindView3');
  },
})