// components/fakeSearch/fakeSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnText:String,
    showBtn:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    glassSrc:"/images/glass.png"
  },
  externalClasses: ['external-class'],
  /**
   * 组件的方法列表
   */
  methods: {
    clickBtn(){
      this.triggerEvent('clickBtn',{})
    },
    onSearch(){
      this.triggerEvent('onSearch', {})
    }
  }
})
