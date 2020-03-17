
Component({
  properties: {
    payApplyItem: Object
  },
  data: {
    arrowSrc: '/images/arrow.png',
    x: 0,
    currentX: 0
  },
  methods: {
    del() {
      this.setData({
        x: 0
      })
    },
    clickitem(e) {
      const item = e.currentTarget.dataset.item
      this.triggerEvent('clickItem', item)
    }
  }
})
