// components/realSearch/realSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    applyList: Array,
  },
  /**
   * 组件的初始数据
   */
  data: {
    glassSrc: "/images/glass.png",
    chaSrc: "/images/cha.png",
    searchKey:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindKeyInput(e){
      this.setData({
        searchKey:e.detail.value
      })
    },
    clearKey(){
      this.setData({
        searchKey: ''
      }),
      this.triggerEvent('clearSearch')
    },
    closeResult(){
      this.setData({
        searchKey: ''
      }),
      this.triggerEvent('closeResult')
    }
  }
})
