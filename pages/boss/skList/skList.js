const datas = require('../../../libs/testDates.js')
Page({
  data: {
    skList:[],
    fromType:''
  },

  onLoad: function (options) {
    if (options.fromType){
      this.setData({
        fromType: options.fromType
      })
    }
    
    console.log(options)
    this.setData({
      skList: datas.skList
    })
  },
})