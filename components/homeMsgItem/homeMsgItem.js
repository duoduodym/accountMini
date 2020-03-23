// components/homeMsgItem/homeMsgItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: String,
    type: {
      type: String,
      observer(val) {
        if (val == 'buyer') {
          this.setData({
            itemSrc: this.data.buySrc,
            msgType: '申报消息'
          })
        } else if (val == 'ys') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '营收消息'
          })
        } else if (val == 'cnDk') {
          this.setData({
            itemSrc: this.data.buySrc,
            msgType: '待打款消息'
          })
        } else if (val == 'cnSk') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '待收款消息'
          })
        } else if (val == 'lb') {
          this.setData({
            itemSrc: this.data.auditSrc,
            msgType: '待审批消息'
          })
        } else if (val == 'KjZc') {
          this.setData({
            itemSrc: this.data.buySrc,
            msgType: '支出消息'
          })
        } else if (val == 'KjSr') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '收入消息'
          })
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    itemSrc: '',
    buySrc: '/images/zc.png',
    ysSrc: '/images/sr.png',
    arrowSrc: '/images/arrow.png',
    cnDkSrc: '/images/zc.png',
    auditSrc: '/images/audit2.png',
    msgType: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goList() {
      this.triggerEvent('goList', {
        type: this.properties.type
      })
    }
  }
})
