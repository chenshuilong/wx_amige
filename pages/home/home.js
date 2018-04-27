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
    url: "../../pages/content/content"
  },
  onLoad: function (options) {
    //options参数接收传递过来的参数
    console.log(options);
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
  }
})
