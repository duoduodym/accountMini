// pages/boss/yearCw/yearCw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrowSrc:'/images/arrow.png',
    yearCwList:[
      {
        id:1,
        name:'2020年度财务'
      },
      {
        id: 2,
        name: '2021年度财务'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goYearDetail(){
    wx.navigateTo({
      url: '/pages/boss/yearCwDetail/yearCwDetail',
    })
  }

})