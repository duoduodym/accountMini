// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarSrc: "/images/avatar.png",
    loginParams: {},
    showCodeWrap: false,
    isLogin: false,
    userInfo: {
      nickName: '',
    },
    boySrc: '/images/boy.png',
    sexSrc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindGetUserInfo(e) {
    console.log(e.detail);
    if (e.detail.userInfo) {
      this.showCodeWrap = true
      this.setData({
        showCodeWrap: true,
        userInfo: e.detail.userInfo
      })
      console.log(this.data.userInfo)
    }
  },
  bindingSuccess(val) {
    const code = val.detail
    this.setData({
      ' loginParams.code': code,
      isLogin: true,
      avatarSrc: this.data.userInfo.avatarUrl,
      sexSrc: this.data.userInfo.gender == 1 ? this.data.boySrc : this.data.girlSrc,
      showCodeWrap: false
    })
    console.log(this.data.sexSrc)
  }
})