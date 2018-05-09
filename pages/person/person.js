Page({
  data: {
    // text:"这是一个页面"
    isHiddenToast: true,
    messages: [
      {
        groupName: "选项1",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项2",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项3",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项4",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项5",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项6",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项7",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项8",
        icon: "/res/img/menu/person-option.png",
        rightImage: "/res/person/tip.png"
      },
      {
        groupName: "选项9",
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
      url: "/pages/index/index"
    })
  },
  bindtap1: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },

  bindtap2: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap3: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap4: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap5: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap6: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap7: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    })
  },
  bindtap8: function () {
    wx.navigateTo({
      url: "/pages/index/index"
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