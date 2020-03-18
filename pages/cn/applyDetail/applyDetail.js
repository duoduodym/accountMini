const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: '',
    categoryList: [],
    isDisabled: false,
    state: '',
    ddSrc: '/images/dd.png',
    opertionSrc: '/images/opertion.png',
    infoObj: {
      imgList: []
    },
    itemSrc: '/images/apply-img.png',
    addSrc: '/images/add.png',
    delSrc: '/images/del.png',
    auditSrc: '/images/audit.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      categoryList: datas.categoryList
    })
    this.setState(options.state)
    if (options.state) {
      this.setData({
        state: options.state
      })
    }
  },
  setState(state) {
    if (state == '2') {
      this.setData({
        isDisabled: true,
      })
    }
  },
  addImg() {
    const _this = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        let arr = _this.data.infoObj.imgList
        arr.push(...tempFilePaths)
        if (arr.length > 9) {
          wx.showToast({
            title: '图片不能超过9张',
            icon: 'none'
          })
        }
        arr = arr.slice(0, 9)
        _this.setData({
          'infoObj.imgList': arr
        })
      }
    })

  },
  ondel(e) {
    const idx = e.target.dataset.idx
    let arr = this.data.infoObj.imgList
    arr = arr.filter((v, index) => index != idx)
    this.setData({
      'infoObj.imgList': arr
    })
  },
  onPrevies(e) {
    const idx = e.target.dataset.idx
    wx.previewImage({
      current: idx, // 当前显示图片的http链接
      urls: this.data.infoObj.imgList // 需要预览的图片http链接列表
    })
  }
})