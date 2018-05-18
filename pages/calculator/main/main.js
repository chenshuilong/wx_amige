Page({

  /**
   * 页面的初始数据
   */
  data: {
    idBack: "back",
    idClear: "clear",
    idPercent: "%",
    idPon: "+-",
    idPlus: "+",
    idMinus: "-",
    idMult: "×",
    idDiv: "÷",
    id9: "9",
    id8: "8",
    id7: "7",
    id6: "6",
    id5: "5",
    id4: "4",
    id3: "3",
    id2: "2",
    id1: "1",
    id0: "0",
    idPoint: ".",
    idIs: "=",
    screenData: "0",
    lastIsOperator: false,
    arr: [],
    logs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '计算器',
      path: '/pages/calculator/main/main'
    }
  },

  // 百分百
  tapPercent (e) {
    var data = this.data.screenData;
    if (data === "0" || data.indexOf(this.data.idPlus) > -1 
      || data.indexOf(this.data.idMinus) > -1 || data.indexOf(this.data.idMult) > -1
      || data.indexOf(this.data.idDiv) > -1 || data.indexOf(this.data.idPoint) > -1) {
      return;
    } else {
      this.setData({ screenData: data + '%' });
    }
  },

  history () {
    wx.navigateTo({ url: "/pages/calculator/history/history" });
  },

  clientButton (event) {
    var id = event.target.id;
    var data = this.data.screenData;
    switch (id) {
      case this.data.idBack: //退格
        if (data == "0")
          return;
        else {
          data = data.substring(0, data.length - 1);
          if (data == "" || data == "-") {
            data = "0";
          }
        }
        this.data.arr.pop();
        this.setData({ screenData: data });
        break;
      case this.data.idClear: //清屏
        this.setData({ screenData: "0" });
        this.data.arr.length = 0;
        break;
      case this.data.idPon: //正负号
        if (data.substring(0, 1) == "-") {
          data = data.substring(1, data.length);
          this.data.arr.shift();
        }
        else {
          data = "-" + data;
          this.data.arr.unshift("-");
        }
        this.setData({ screenData: data });
        break;
      case this.data.idIs: //=运算
        if (data == "0") {
          return;
        }
        //最后是操作符不合法返回
        var lastWord = data.substring(data.length - 1, data.length);
        if (isNaN(lastWord)) {
          return;
        }
        var num = ""; //存解析后的数字
        var optArr = [];
        var arr = this.data.arr;
        for (var i in arr) { //把字符进行拆分成数字和运算符存到数组里
          if (isNaN(arr[i]) == false || arr[i] == this.data.idPon || arr[i] == this.data.idPoint) {
            num += arr[i];
          }
          else {
            optArr.push(Number(num));
            optArr.push(arr[i]);
            num = "";
          }
        }
        optArr.push(Number(num));
        var result = Number(optArr[0]) * 1.0; //转换为带小数的结果
        for (var i = 1; i < optArr.length; i++) {
          if (isNaN(optArr[i])) { //非数字
            if (optArr[i] == this.data.idPlus) {
              result += Number(optArr[i + 1]);
            }
            else if (optArr[i] == this.data.idMinus) {
              result -= Number(optArr[i + 1]);
            }
            else if (optArr[i] == this.data.idMult) {
              result *= Number(optArr[i + 1]);
            }
            else if (optArr[i] == this.data.idDiv) {
              result /= Number(optArr[i + 1]);
            }
          }
        }
        var log = data + "=" + result;
        this.data.logs.push(log)
        wx.setStorageSync('callLogs', this.data.logs);
        this.data.arr.length = 0;
        this.data.arr.push(result);
        this.setData({ screenData: result });
        break;
      default: //数字及运算符
        if (data == "0") {
          if (id == this.data.idPlus ||
            id == this.data.idMinus ||
            id == this.data.idMult ||
            id == this.data.idDiv) {
            return;
          }
          this.setData({ screenData: event.target.id });
          this.data.arr.push(id);
        }
        else {
          if (id == this.data.idPlus || id == this.data.idMinus ||
            id == this.data.idMult || id == this.data.idDiv ||
            id == this.data.idPoint) { //阻止连续输入多个运算符
            if (this.data.lastIsOperator == true) {
              return;
            }
          }
          this.setData({ screenData: data + event.target.id });
          this.data.arr.push(id);
          if (id == this.data.idPlus || id == this.data.idMinus ||
            id == this.data.idMult || id == this.data.idDiv) {
            this.setData({ lastIsOperator: true });
          }
          else {
            this.setData({ lastIsOperator: false });
          }
        }
        break;
    }
  }
})