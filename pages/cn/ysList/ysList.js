const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearching: false,
    ysList: [],
    tabList: [{
      value: 1,
      label: '全部'
    },
    {
      value: 2,
      label: '待收款'
    },
    {
      value: 3,
      label: '已收款'
    }, {
      value: 4,
      label: '已拒收'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ysList: datas.ysList
    })
  },
  onReachBottom: function () {
    console.log('我出发了')
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
  createApply() {
    wx.navigateTo({
      url: '/pages/yser/ysDetail/ysDetail',
    })
  },
  clickitem(e) {
    console.log(111111111111)
    const state = e.detail.state
    wx.navigateTo({
      url: `/pages/yser/ysDetail/ysDetail?state=${state}`,
    })
  }
})