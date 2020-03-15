const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ysList:[],
    tabList:[{
      value:1,
      label:'全部'
    },
      {
        value: 2,
        label: '未提交'
      },
      {
        value: 3,
        label: '已提交'
      }, {
        value: 4,
        label: '被拒收'
      }, {
        value: 5,
        label: '被收款'
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
  onCreate(){
    wx.navigateTo({
      url: '/pages/yser/createYs/createYs',
    })
  },
  onSearch(){
    console.log(33333)
  }
})