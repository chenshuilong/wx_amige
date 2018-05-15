var app = getApp();
Page({
  data: {
    scrollHeight: 569,
    imageWidth: 250,
    imageHeight: 250,
    photoList: []
  },
  addAndSavePhoto: function () {
    var that = this;
    var showFileList = that.data.photoList;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // 后台慢慢保存文件到本地      
        res.tempFilePaths.forEach(function (tempFilePath) {
          // 调用保存到本地的API
          wx.saveFile({
            tempFilePath: tempFilePath,
            success: function (res) {
              showFileList.push(res.savedFilePath);
              // 更新页面显示
              that.setData({
                photoList: showFileList
              });
            }
          })
        });
      }
    });
  },
  previewPhoto: function (el) {
    var curTarget = el.target.dataset.src

    wx.previewImage({
      current: curTarget, // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: this.data.photoList,
      success: function (res) {
        // success
        console.log(res);
      }
    })
  },
  twoColomn: function () {
    var that = this;
    var length = 750 / 2;
    that.setData({
      imageWidth: length,
      imageHeight: length
    });
  },
  threeColomn: function () {
    var that = this;
    var length = 750 / 3;
    that.setData({
      imageWidth: length,
      imageHeight: length
    });
  },
  fourColomn: function () {
    var that = this;
    var length = 750 / 4;
    that.setData({
      imageWidth: length,
      imageHeight: length
    });
  },
  onLoad: function () {
    var that = this;
    // 获取当前窗口高度，以便设置scrollView的高度
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
  },
  onShow: function () {
    // 获取本地保存的图片
    var that = this;
    wx.getSavedFileList({
      success: function (res) {
        var filePathList = [];
        res.fileList.forEach(function (item) {
          filePathList.push(item.filePath);
          // 删除本地文件
          /*
          wx.removeSavedFile({
            filePath: item.filePath,
            complete: function (res) {
              // success
              console.log(res);
            }
          })
          */
        });
        that.setData({
          photoList: filePathList
        });
      },
      fail: function () {
        // 失败 wx.showToast
        wx.showToast({
          title: "获取本地图片失败！",
          duration: 2000
        });
      }
    })
  }
})