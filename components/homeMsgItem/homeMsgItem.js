// components/homeMsgItem/homeMsgItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemSrc: '/images/apply.png',
    arrowSrc: '/images/arrow.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goMsgList(){
      wx.navigateTo({
        url: '/pages/msgList/msgList'
      })
    }
  }
})
