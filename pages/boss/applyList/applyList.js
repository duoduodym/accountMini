const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearching: false,
    applyList: [],
    payList2: [],
    tabList: [{
      value: 1,
      label: '全部'
    },
    {
      value: 2,
      label: '待审批'
    },
    {
      value: 3,
      label: '已拒绝'
      }, {
        value: 4,
        label: '已通过'
      }]
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
    console.log(e)
    wx.navigateTo({
      url: `/pages/boss/applyDetail/applyDetail?state=${e.detail.state}`
    })
  }
})