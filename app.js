App({
    //生命周期函数--监听小程序初始化
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function() {
      const sysInfo = wx.getSystemInfoSync();
      this.globalData.windowWidth = sysInfo.windowWidth;
      this.globalData.windowHeight = sysInfo.windowHeight;
    },
    globalData: {
      windowWidth: 0,
      windowHeight: 0
    }
})
