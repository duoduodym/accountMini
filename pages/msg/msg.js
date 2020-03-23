// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemSrc:'/images/apply.png',
    arrowSrc:'/images/arrow.png',
    showBuyer:false,
    showYs:false,
    showCnDk:false,
    showCnSk:false,
    showLb:false,
    showKjZc:false,
    showKjSr:false,
    roles:'buyer,ys,cn,lb,kj'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.roles.includes('buyer')){
      this.setData({
        showBuyer:true
      })
    }
    if (this.data.roles.includes('ys')) {
      this.setData({
        showYs: true
      })
    }
    if (this.data.roles.includes('cn')) {
      this.setData({
        showCnDk: true,
        showCnSk:true
      })
    }
    if (this.data.roles.includes('lb')) {
      this.setData({
        showLb: true
      })
    }
    if (this.data.roles.includes('kj')) {
      this.setData({
        showKjZc: true,
        showKjSr:true
      })
    }
  },
  goList(e){
    wx.navigateTo({
      url: '/pages/msgList/msgList',
    })
  }
})