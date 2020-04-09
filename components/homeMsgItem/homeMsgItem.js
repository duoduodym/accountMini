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
            msgType: '申报消息',
            role:'采购员'
          })
        } else if (val == 'ys') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '营收消息',
            role: '营收员'
          })
        } else if (val == 'cnDk') {
          this.setData({
            itemSrc: this.data.buySrc,
            msgType: '待打款消息',
            role: '出纳'
          })
        } else if (val == 'cnSk') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '待收款消息',
            role: '出纳'
          })
        } else if (val == 'lb') {
          this.setData({
            itemSrc: this.data.auditSrc,
            msgType: '待审批消息',
            role: '老板'
          })
        } else if (val == 'KjZc') {
          this.setData({
            itemSrc: this.data.buySrc,
            msgType: '支出消息',
            role: '会计'
          })
        } else if (val == 'KjSr') {
          this.setData({
            itemSrc: this.data.ysSrc,
            msgType: '收入消息',
            role: '会计'
          })
        }
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    role:'',
    itemSrc: '',
    buySrc: '/images/zc.png',
    ysSrc: '/images/sr.png',
    arrowSrc: '/images/arrow.png',
    cnDkSrc: '/images/zc.png',
    auditSrc: '/images/audit3.png',
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
