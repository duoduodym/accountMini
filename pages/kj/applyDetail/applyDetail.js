
Page({
  data: {
    state: '',
    ddSrc: '/images/dd.png',
    arrowSrc: '/images/arrow.png',
    itemSrc: '/images/apply-img.png',
    addSrc: '/images/add.png',
    delSrc: '/images/del.png',
    auditSrc: '/images/audit.png',
    opertionSrc: '/images/opertion.png',
    infoObj: {
      imgList: []
    },
  },
  onLoad: function (options) {
    if (options.state) {
      this.setData({
        state: options.state
      })
    }
  },
  onPrevies(e) {
    const idx = e.target.dataset.idx
    wx.previewImage({
      current: idx, // 当前显示图片的http链接
      urls: this.data.infoObj.imgList // 需要预览的图片http链接列表
    })
  }
})