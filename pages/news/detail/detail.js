Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",
    title: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    this.setData({
      url: options.url,
      title: options.title
    })
    wx.setNavigationBarTitle({
      title: options.title,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.title,
      path: '/pages/news/detail/detail?url=' + this.data.url
    }
  }
})