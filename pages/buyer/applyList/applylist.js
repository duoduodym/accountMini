const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyList:[]  ,
    x: 0,
    currentX: 0,
     tabList: [{
      value: 1,
      label: '全部'
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
      applyList:datas.applyList
    })
    console.log(this.data.applyList)
  },
  changeTab(val){
    console.log(val)
  },
  createApply(){
    wx.navigateTo({
      url: '/pages/buyer/createApply/createApply?fromtype=new',
    })
  }

  


})