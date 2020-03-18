const datas = require('../../../libs/testDates.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSearching:false,
    applyList:[],
    applyList2:[],
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
      label: '未通过'
    }, {
      value: 5,
      label: '已成功'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      applyList:datas.applyList,
      applyList2: datas.applyList
    })
    console.log(this.data.applyList)
  },
  changeTab(val){
    console.log(val)
  },
  createApply(){
    wx.navigateTo({
      url: '/pages/buyer/applyDetail/applyDetail',
    })
  },
  closeResult(){
    this.setData({
      isSearching:false
    })
  },
  onSearch(){
    this.setData({
      isSearching:true
    })
  },
  clearSearch(){
    this.setData({
      applyList2:[]
    })
  },
  closeResult(){
    this.setData({
      isSearching: false,
      applyList2: []
    })
  },
  clickItem(e){
    wx.navigateTo({
      url: `/pages/buyer/applyDetail/applyDetail?state=${e.detail.state}`
    })
  }

  
})