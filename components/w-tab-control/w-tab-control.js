// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      //1.取出index
      const dataset = event.currentTarget.dataset;
      const index = dataset.index;

      //2.修改currentIndex
      this.setData({
        currentIndex: index
      })

      //3.通知页面内部点击事件:拿到标题和下标
      //1.方法1
      // const item = dataset.item;
      // this.triggerEvent('handleItem', {index: index, item: item}, {})
      //2.方法2
      this.triggerEvent('handleItem', { index, title: this.properties.titles[index]}, {})
    }
  }
})
