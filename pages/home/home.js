var app = getApp()

Page({
  data: {
    userInfo: {},
    latitude: 0,
    longitude: 0,
    width: 0,
    height: 0,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onShareAppMessage(e) {
    return {
      title: '阿米哥',
      path: '/pages/home/home'
    }
  },
  onLoad(e) {
    this.setData({
      width: app.globalData.windowWidth,
      height: app.globalData.windowHeight
    })
  },
  onReady() {
    this.getLocation();
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this)
    })
  },
  handleGetLocationSucc(res) {
    this.setData({
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
