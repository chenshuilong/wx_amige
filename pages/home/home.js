var app = getApp()

var isLoading = false
Page({
  data: {
    arr_res: [],
    windowHeight: "500px",
    loadingHidden: true,
    input_value: null,
    nullHidden: true,
    lodingInfo: "正在搜索",
    url: "../../pages/content/content",
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    markers: [{
      iconPath: "/res/img/menu/person_selected.png",
      id: 0,
      latitude: 22.5433410000,
      longitude: 114.0316650000,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 114.0316650000,
        latitude: 22.5433410000
      }, {
          longitude: 114.0316650000,
          latitude: 22.5433410000
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/res/img/menu/person_selected.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onReady: function (e) {

  },
  // 赋值
  bindSearchInput: function (e) {
    this.setData({
      input_value: e.detail.value
    })
  },
  // 开始搜索
  tapSearch: function (event) {
    if (this.data.input_value == null || this.data.input_value.length == 0) {
      return;
    }
    var that = this;
    this.setData({
      loadingHidden: false,
      nullHidden: true,
      lodingInfo: "正在搜索"
    });
    setTimeout(function(){
      if (that.data.input_value != "阿米哥") {
        that.setData({
          loadingHidden: true,
          nullHidden: false,
          lodingInfo: "搜索完成"
        })
      } else {
        that.setData({
          loadingHidden: true,
          nullHidden: true,
          lodingInfo: "搜索完成"
        })
      }
    }, 3000);
  },
  //滑到底部监听事件
  lower: function (e) {
    console.log(e);
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
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
