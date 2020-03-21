// pages/boss/yearCwDetail/yearCwDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrowSrc: '/images/arrow.png',
    monthList: [{
      value: 1,
      name: '1月份财务明细'
    }, {
      value: 2,
      name: '2月份财务明细'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title:'2020财务'
      })
  },
  goMonthDetail(){
    wx.navigateTo({
      url: '/pages/boss/monthDetail/monthDetail',
    })
  }
})