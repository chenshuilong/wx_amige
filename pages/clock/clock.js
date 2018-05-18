var app = getApp()

Page({
  data: {
    interval: 5000
  },
  onShareAppMessage(e) {
    return {
      title: '精美时钟',
      path: '/pages/clock/clock'
    }
  },
  onReady() {
    //调用canvasApp函数
    this.canvasClock();
    //对canvasAPP函数循环调用
    this.interval = setInterval(this.canvasClock, 1000);
  },
  canvasClock() {
    var context = wx.createContext()//创建并返回绘图上下文（获取画笔）
    //设置宽高
    var width = app.globalData.windowWidth;
    var height = app.globalData.windowHeight;
    var R = width / 2 - 55;//设置文字距离时钟中心点距离
    //重置画布函数
    function reSet() {
      context.height = context.height;//每次清除画布，然后变化后的时间补上
      context.translate(width / 2, height / 2);//设置坐标轴原点
      context.save();//保存中点坐标1
    }
    //绘制中心圆和外面大圆
    function circle() {
      //外面大圆
      context.setLineWidth(2);
      context.beginPath();
      context.arc(0, 0, width / 2 - 30, 0, 2 * Math.PI, true);
      context.closePath();
      context.stroke();
      //中心圆
      context.beginPath();
      context.arc(0, 0, 8, 0, 2 * Math.PI, true);
      context.closePath();
      context.stroke();
    }
    //绘制字体
    function num() {
      // var R = width/2-60;//设置文字距离时钟中心点距离
      context.setFontSize(20)//设置字体样式
      context.textBaseline = "middle";//字体上下居中，绘制时间
      for (var i = 1; i < 13; i++) {
        //利用三角函数计算字体坐标表达式
        var x = R * Math.cos(i * Math.PI / 6 - Math.PI / 2);
        var y = R * Math.sin(i * Math.PI / 6 - Math.PI / 2);
        if (i == 11 || i == 12) {//调整数字11和12的位置
          context.fillText(i, x - 12, y);
        } else {
          context.fillText(i, x - 6, y);
        }
      }
    }
    //绘制小格
    function smallGrid() {
      context.setLineWidth(1);
      context.rotate(-Math.PI / 2);//时间从3点开始，倒转90度
      for (var i = 0; i < 60; i++) {
        context.beginPath();
        context.rotate(Math.PI / 30);
        context.moveTo(width / 2 - 30, 0);
        context.lineTo(width / 2 - 40, 0);
        context.stroke();
      }
    }
    //绘制大格
    function bigGrid() {
      context.setLineWidth(5);
      for (var i = 0; i < 12; i++) {
        context.beginPath();
        context.rotate(Math.PI / 6);
        context.moveTo(width / 2 - 30, 0);
        context.lineTo(width / 2 - 45, 0);
        context.stroke();
      }
    }
    //指针运动函数
    function move() {
      var t = new Date();//获取当前时间
      var h = t.getHours();//获取小时
      h = h > 12 ? (h - 12) : h;//将24小时制转化为12小时制
      var m = t.getMinutes();//获取分针
      var s = t.getSeconds();//获取秒针
      context.save();//再次保存2
      context.setLineWidth(7);
      //旋转角度=30度*（h+m/60+s/3600）
      //分针旋转角度=6度*（m+s/60）
      //秒针旋转角度=6度*s
      context.beginPath();
      //绘制时针
      context.rotate((Math.PI / 6) * (h + m / 60 + s / 3600));
      context.moveTo(-20, 0);
      context.lineTo(width / 4.5 - 20, 0);
      context.stroke();
      context.restore();//恢复到2,（最初未旋转状态）避免旋转叠加
      context.save();//3
      //画分针
      context.setLineWidth(5);
      context.beginPath();
      context.rotate((Math.PI / 30) * (m + s / 60));
      context.moveTo(-20, 0);
      context.lineTo(width / 3.5 - 20, 0);
      context.stroke();
      context.restore();//恢复到3，（最初未旋转状态）避免旋转叠加
      context.save();
      //绘制秒针
      context.setLineWidth(2);
      context.beginPath();
      context.rotate((Math.PI / 30) * s);
      context.moveTo(-20, 0);
      context.lineTo(width / 3 - 20, 0);
      context.stroke();
    }
    function drawClock() {
      reSet();
      circle();
      num();
      smallGrid();
      bigGrid();
      move();
    }
    drawClock()//调用运动函数
    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'clock',
      actions: context.getActions()
    })
  },
  //页面卸载，清除画布绘制计时器
  onUnload() {
    clearInterval(this.interval)
  }
})
