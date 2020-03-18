const applyItemBev = Behavior({
  data: {
    arrowSrc: '/images/arrow.png',
    x: 0
  },
  methods: {
    del() {
      this.setData({
        x: 0
      })
    },
    clickitem(e) {
      const item = e.currentTarget.dataset.item
      console.log(item)
      this.triggerEvent('clickitem', item)
    }
  }
})
export {
  applyItemBev
}