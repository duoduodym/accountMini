// components/applyItem/applyItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    applyItem:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    arrowSrc:'/images/arrow.png',
    x: 0,
    currentX: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    del(){
    
      this.setData({
        x:0
      })
    },
    handleTouchend: function (e) {
      this.isMove = true;
      if (this.data.currentX > -46) {
        // this.data.x = -300;
        this.setData({
          x: -300
        });
      } else {
        this.data.x = 0;
        this.setData({
          x: this.data.x
        });
      }
    },
    handleMovableChange: function (e) {
      // this.data.currentX = e.detail.x;
      this.data.currentX = e.detail.x;
    },

    handleTouchend: function (e) {
      this.isMove = true;
      if (this.data.currentX < -46) {
        this.data.x = -92;
        this.setData({
          x: this.data.x
        });
      } else {
        this.data.x = 0;
        this.setData({
          x: this.data.x
        });
      }
    },
    clickitem(e){
      const item = e.currentTarget.dataset.item
      this.triggerEvent('clickItem',item)
    }
  }
})
