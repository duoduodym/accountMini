// components/bindingCode/bindingCode.js
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
    code:'',
    mSrc:'/images/m-code.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindingCode(e) {
      this.setData({
        code: e.detail.value
      })
    },
    validateCode(){
      const reg = /^[a-z | 0-9 | A-Z]+$/
      const code = this.data.code
      if (!code) {
        wx.showToast({
          title: '员工码不能为空',
          icon: 'none'
        })
        return false
      }
      if (!reg.test(code)) {
        wx.showToast({
          title: '员工码格式输入有误',
          icon: 'none'
        })
        return false
      }
      return true
    },
    onBinding() {
      if (this.validateCode()){
        console.log('进来了')
        this.triggerEvent('bindingSuccess',this.data.code)
      }
    }
  }
  
})
