const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearching: false,
    applyList: [],
    payList2: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      applyList: datas.applyList,
      payList2: datas.payList
    })
    console.log(this.data.payList)
  },
  closeResult() {
    this.setData({
      isSearching: false
    })
  },
  onSearch() {
    this.setData({
      isSearching: true
    })
  },
  clearSearch() {
    this.setData({
      applyList2: []
    })
  },
  closeResult() {
    this.setData({
      isSearching: false,
      applyList2: []
    })
  },
  clickItem(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/kj/applyDetail/applyDetail`
    })
  }
})