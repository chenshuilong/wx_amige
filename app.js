App({
    //生命周期函数--监听小程序初始化
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    onLaunch: function() {
      try {
        var sysInfo = wx.getStorageSync('sysInfo');
        if (!sysInfo) {
          sysInfo = wx.getSystemInfoSync();
          wx.setStorageSync('sysInfo', sysInfo);
        }
        this.globalData.windowWidth = sysInfo.windowWidth;
        this.globalData.windowHeight = sysInfo.windowHeight;
      } catch (e) {
        wx.showModal({
          title: '警告',
          showCancel: false,
          content: '获取设备信息失败，原因：' + e.message
        })
      }
    },
    globalData: {
      windowWidth: 0,
      windowHeight: 0
    }
})
