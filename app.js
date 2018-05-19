/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/qcloud-weapp-client-sdk/index');
var config = require('./config');

App({
  //生命周期函数--监听小程序初始化
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
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

    /**
   * 初始化客户端的登录地址，以支持所有的会话操作
   */
    qcloud.setLoginUrl(config.service.loginUrl);
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    windowWidth: 0,
    windowHeight: 0
  },
  title: [],
  author: [],
  date: [],
  url: [],
  detailUrls: [],
  requestUrl: "top",
  cssActive: 0,
  page: 0
})
