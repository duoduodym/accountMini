// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applySrc:'/images/bx.png',
    walletSrc: '/images/wallet.png',
    bbSrc: '/images/bb.png',
    roles:'buyer,cn,cw,ys,kj,lb',
    showApplyCn:false,
    showApplyBuyer:false,
    showApplylb: false,
    showYsYs:false,
    showYsCn:false,
    showYsLb:false,
    showCwLb:false,
    showCwCn:false,
    showYskj:false,
    showCwkj:false,
    showApplykj:false,
    showCwCn:false,
    showCwLb:false,
    showBbKj:false,
    cwSrc: '/images/account.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    if (this.data.roles.includes('buyer')){
      this.setData({
        showApplyBuyer:true
      })
    }
    if (this.data.roles.includes('ys')) {
   
      this.setData({
        showYsYs: true
      })
    }
    if (this.data.roles.includes('cn')) {
     
      this.setData({
        showApplyCn: true,
        showYsCn: true,
        showCwCn:true,
        showCwCn:true
      })
    }
    if (this.data.roles.includes('lb')) {
      this.setData({
        showApplyLb: true,
        showYsLb: true,
        showCwLb: true,
        showCwLb:true
      })
    }
    if (this.data.roles.includes('kj')) {
      this.setData({
        showBbKj:true,
        showApplyKj: true,
        showYsKj: true,
        showCwKj: true
      })
    }
  },
  goApplyList(){
    wx.navigateTo({
      url: '/pages/buyer/applyList/applylist'
    })
  },
  goysList(){
    wx.navigateTo({
      url: '/pages/yser/ysList/ysList'
    })
  },
  goApplyListBoss(){
    wx.navigateTo({
      url: '/pages/boss/applyList/applyList',
    })
  },
  goCwLb(){
    wx.navigateTo({
      url: '/pages/boss/cwDetail/cwDetai',
    })
  }


})