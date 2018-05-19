var app = getApp();

Page({
  data: {
    title: [],
    imgUrls: [],
    author: [],
    date: [],
    requestUrl: "top",
    cssActive: 0,
    dataId: 0,
    windowHeight: "",
    windowWidth: "",
    page: 0,
    detailUrls: []
  },
  onShow: function (e) {
    this.setData({
      windowHeight: app.globalData.windowHeight,
      windowWidth: app.globalData.windowWidth
    })
  },
  pullDownRefresh: function (e) {
    this.onLoad();
  },
  pullUpLoad: function (e) {
    app.page += 5;
    this.setData({
      page: app.page
    })
    this.loading();
    this.getTypeData(app.page);
  },
  check: function (e) {
    app.cssActive = e.target.dataset.id
    app.requestUrl = e.target.id;
    this.resetData();
    this.setData({
      dataId: app.cssActive,
      title: app.title,
      imgUrls: app.imgUrls,
      author: app.author,
      date: app.date,
      requestUrl: app.requestUrl,
      page: app.page
    }),
      this.loading();
    this.getTypeData(app.page);
  },
  onLoad: function () {
    this.resetData();
    this.loading();
    this.getTypeData(app.page);
  },
  getTypeData: function (page) {
    wx.request({
      url: 'http://v.juhe.cn/toutiao/index?type=' + app.requestUrl + '&key=1c84600b999ae65c986571e77b403fab',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        if (res.data.result) {
          var data = res.data.result.data;
          for (var i = page; i < page + 5; i++) {
            app.title.push(data[i].title);
            app.imgUrls.push(data[i].thumbnail_pic_s);
            app.author.push(data[i].author_name);
            app.date.push(data[i].date);
            app.url.push(data[i].url);
          }
          this.setData({
            title: app.title,
            imgUrls: app.imgUrls,
            author: app.author,
            date: app.date,
            page: app.page,
            detailUrls: app.url
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.reason,
            icon: 'loading',
            showCancel: false
          })
        }
      },
      fail: function (e) {
        console.log(e.message)
      },
      complete: function () {
        wx.hideToast();
      }
    })
  },
  resetData: function () {
    app.title = [];
    app.imgUrls = [];
    app.author = [];
    app.title = [];
    app.date = [];
    app.page = 0;
    app.url = [];
  },
  loading: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  },
})