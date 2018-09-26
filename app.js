/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/wafer2-client-sdk/index.js');
var config = require('./config.js');

App({
  //生命周期函数--监听小程序初始化
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function() {
    var that = this;
    try {
      var sysInfo = wx.getStorageSync('sysInfo');
      if (!sysInfo) {
        sysInfo = wx.getSystemInfoSync();
        wx.setStorageSync('sysInfo', sysInfo);
      }
      that.globalData.windowWidth = sysInfo.windowWidth;
      that.globalData.windowHeight = sysInfo.windowHeight;
    } catch (e) {
      wx.showModal({
        title: '警告',
        showCancel: false,
        content: '获取设备信息失败，原因：' + e.message
      })
    }

    //  获取商城名称
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'mallName'
      },
      success: function(res) {
        if (res.data.code == 0) {
          wx.setStorageSync('mallName', res.data.data.value);
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/score/send/rule',
      data: {
        code: 'goodReputation'
      },
      success: function(res) {
        if (res.data.code == 0) {
          that.globalData.order_reputation_score = res.data.data[0].score;
        }
      }
    })
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/config/get-value',
      data: {
        key: 'recharge_amount_min'
      },
      success: function(res) {
        if (res.data.code == 0) {
          that.globalData.recharge_amount_min = res.data.data.value;
        }
      }
    })
    // 获取砍价设置
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/shop/goods/kanjia/list',
      data: {},
      success: function(res) {
        if (res.data.code == 0) {
          that.globalData.kanjiaList = res.data.data.result;
        }
      }
    })
    // 判断是否登录
    let token = wx.getStorageSync('token');
    if (!token) {
      that.goLoginPageTimeOut()
      return
    }
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
      data: {
        token: token
      },
      success: function(res) {
        if (res.data.code != 0) {
          wx.removeStorageSync('token')
          that.goLoginPageTimeOut()
        }
      }
    })

    /**
     * 初始化客户端的登录地址，以支持所有的会话操作
     */
    qcloud.setLoginUrl(config.service.loginUrl);
  },
  sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'order',
        business_id: orderId,
        trigger: trigger,
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {
        //console.log('*********************');
        //console.log(res.data);
        //console.log('*********************');
      }
    })
  },
  sendTempleMsgImmediately: function (template_id, form_id, page, postJsonString) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + that.globalData.subDomain + '/template-msg/put',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        token: wx.getStorageSync('token'),
        type: 0,
        module: 'immediately',
        template_id: template_id,
        form_id: form_id,
        url: page,
        postJsonString: postJsonString
      },
      success: (res) => {
        console.log(res.data);
      }
    })
  },
  goLoginPageTimeOut: function () {
    setTimeout(function () {
      wx.navigateTo({
        url: "/pages/mall/authorize/index"
      })
    }, 1000)
  },
  globalData: {
    userInfo: null,
    subDomain: "tz",
    version: "2.0",
    shareProfile: '百款精品商品，总有一款适合您',
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