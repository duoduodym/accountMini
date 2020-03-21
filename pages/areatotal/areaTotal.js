const datas = require('../../libs/testDates.js')
Page({

  data: {
    currentYear: '',
    startTime: '',
    endTime: '',
    delSrc: '/images/delete.png',
    monthList: [],
    monthStart: 0,
    selMonth: '',
    isRun: false,
    arrowSrc: '/images/arrow.png'
  },
  onLoad: function (options) {
    this.setData({
      monthList: datas.monthList
    })
    this.getYear()
    this.isRunYear()
  },
  getYear() {
    const year = new Date().getFullYear()
    this.setData({
      currentYear: year
    })
  },
  isRunYear() {
    const year = new Date().getFullYear()
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      this.isRun = true
    } else {
      this.isRun = false
    }
  },
  changeStartTime(e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  clearStartTime() {
    this.setData({
      startTime: ''
    })
  },
  clearEndTime() {
    this.setData({
      endTime: ''
    })
  },
  changeEndTime(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  changeMonth(e) {
    let er = ''
    const val = e.detail.value
    const month = this.data.monthList[val]
    this.setData({
      selMonth: month
    })
    if (month == '一月') {
      this.setData({
        startTime: `${this.data.currentYear}-01-01`,
        endTime: `${this.data.currentYear}-01-31`
      })
    } else if (month == '二月') {
      this.setData({
        startTime: `${this.data.currentYear}-01-01`,
      })
      if (this.isRun) {
        er = `${this.data.currentYear}-02-28`
      } else {
        er = `${this.data.currentYear}-02-29`
      }
      this.setData({
        endTime: er
      })
    } else if (month == '三月') {
      this.setData({
        startTime: `${this.data.currentYear}-03-01`,
        endTime: `${this.data.currentYear}-03-31`
      })

    }
  },
  clearMonth() {
    this.setData({
      startTime: '',
      endTime: '',
      selMonth: ''
    })
  },
  goSkList() {
    wx.navigateTo({
      url: '/pages/boss/skList/skList?fromType=ys',
    })
  },
  goZcList() {
    wx.navigateTo({
      url: '/pages/boss/skList/skList?fromType=zc',
    })
  }
})