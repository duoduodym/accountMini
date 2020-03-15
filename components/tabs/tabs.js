// components/tabs/tabs.js
Component({

  /**
   * 页面的初始数据
   */
  properties: {
    tabList:Array
  },
  data: {
    width:'',
    left:'',
    currentIndex:0,
  },
  methods:{
    changeTab(e){
      const idx = e.currentTarget.dataset.idx
      const val = this.properties.tabList[idx].value
      this.setData({
        currentIndex: idx
      })
      this.changeline()
      this.triggerEvent('changeTab', val)
    },
    changeline: function () {
      var _this = this
      const query = wx.createSelectorQuery().in(_this)
      var _this = this
      query.select('.active').boundingClientRect()
      query.exec(function (res) {
        _this.setData({
          left: res[0].left,
          width: res[0].width
        })
        //console.log(res[0].left)
      })
    },
  },
  /**
 * 生命周期函数--监听页面加载
 */
  created(){
    console.log(this.properties.tabList)
  },
  ready: function (options) {
    this.changeline()
  },

})