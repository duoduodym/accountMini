//app.js
App({
  onLaunch: function () {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;//导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        console.log(this.globalData.navHeight)
        console.log(this.globalData.navTop)
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null
  }
})