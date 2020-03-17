const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearching: false,
    payList: [],
    payList2: [],
    x: 0,
    currentX: 0,
    tabList: [{
      value: 1,
      label: '全部'
    },
    {
      value: 2,
      label: '待打款'
    },
    {
      value: 3,
      label: '已打款'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      payList: datas.payList,
      payList2: datas.payList
    })
    console.log(this.data.payList)
  },
  changeTab(val) {
    console.log(val)
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
    wx.navigateTo({
      url: `/pages/buyer/applyDetail/applyDetail?state=${e.detail.state}`
    })
  }


})