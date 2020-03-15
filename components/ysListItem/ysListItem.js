// components/applyItem/applyItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ysListItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowSrc: '/images/arrow.png',
    x: 0,
    currentX: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    del() {
      console.log(123)
      this.setData({
        x: 0
      })
    },
    bindlongtap() {
      console.log(123123)
    },
    cancelDel(){
      this.setData({
        x: 0
      })
    }
  }
 
})
