// pages/boss/cwDetail/cwDetai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    qbSrc:'/images/qb.png',
    qb2Src:'/images/qb2.png',
    lrNum:100000.00,
    xjNum:20000.00,
    arrowSrc: '/images/arrow.png',
    areaSrc: '/images/areaCw.png',
    yearSrc: '/images/yearCw.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goArea(){
    wx.navigateTo({
      url: '/pages/boss/areaTotal/areaTotal',
    })
  },
  goYear(){
    wx.navigateTo({
      url: '/pages/boss/yearCw/yearCw',
    })
  }
})