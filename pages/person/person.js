Page({
  data: {
    isHiddenToast: true,
    messages: [
      {
        groupName: "精美时钟",
        icon: "/res/img/menu/clock.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "机器人聊天",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "2048",
        icon: "/res/img/menu/2048.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "日历",
        icon: "/res/img/menu/calendar.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "相册",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      }
    ]
  },
  isShowToast: function () {
    this.setData({
      isHiddenToast: false
    })
  },
  toastChange: function () {
    this.setData({
      isHiddenToast: true
    })
  },
  bindtap0: function () {
    wx.navigateTo({
      url: "/pages/clock/clock"
    })
  },
  bindtap1: function () {
    wx.navigateTo({
      url: "/pages/robot/robot"
    })
  },

  bindtap2: function () {
    wx.navigateTo({
      url: "/pages/2048/2048"
    })
  },
  bindtap3: function () {
    wx.navigateTo({
      url: "/pages/calendar/calendar"
    })
  },
  bindtap4: function () {
    wx.navigateTo({
      url: "/pages/photogallery/new/new"
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindtap: function (event) {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
})