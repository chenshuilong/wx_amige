//获取应用实例
var app = getApp()
var arr_name = ["个性化", "内网聚合", "我的通知", "找人", "我的OKR", "我的任务", "项目汇总", "项目规格查询",
  "项目进度汇总", "安全公示", "产品汇总", "发布", "产品信息", "代码仓", "产品分支申请",
  "产品建仓申请", "项目分支申请", "权限配置", "编译机状态", "版本管理", "定期版本管理"]
var arr_link = [1, 10, 15, 52, 62, 68, 75, 82, 98, 112, 147, 161, 218, 166, 182,
  188, 192, 197, 202, 205, 212, 227, 132]
var file = "../../pages/list/list"
Page({
  data: {
    items: [{
      id: "1",
      src: "../../res/img/gionee.jpg",
      text: arr_name[0]
    }, {
      id: "10",
      src: "../../res/img/gionee.jpg",
      text: arr_name[1]
    }, {
      id: "15",
      src: "../../res/img/gionee.jpg",
      text: arr_name[2]
    }, {
      id: "52",
      src: "../../res/img/gionee.jpg",
      text: arr_name[3]
    }, {
      id: "62",
      src: "../../res/img/gionee.jpg",
      text: arr_name[4]
    }, {
      id: "68",
      src: "../../res/img/gionee.jpg",
      text: arr_name[5]
    }, {
      id: "75",
      src: "../../res/img/gionee.jpg",
      text: arr_name[6]
    }, {
      id: "82",
      src: "../../res/img/gionee.jpg",
      text: arr_name[7]
    }, {
      id: "98",
      src: "../../res/img/gionee.jpg",
      text: arr_name[8]
    }, {
      id: "112",
      src: "../../res/img/gionee.jpg",
      text: arr_name[9]
    }, {
      id: "147",
      src: "../../res/img/gionee.jpg",
      text: arr_name[10]
    }, {
      id: "161",
      src: "../../res/img/gionee.jpg",
      text: arr_name[11]
    }, {
      id: "218",
      src: "../../res/img/gionee.jpg",
      text: arr_name[12]
    }, {
      id: "166",
      src: "../../res/img/gionee.jpg",
      text: arr_name[13]
    }, {
      id: "182",
      src: "../../res/img/gionee.jpg",
      text: arr_name[14]
    }, {
      id: "188",
      src: "../../res/img/gionee.jpg",
      text: arr_name[15]
    }, {
      id: "192",
      src: "../../res/img/gionee.jpg",
      text: arr_name[16]
    }, {
      id: "197",
      src: "../../res/img/gionee.jpg",
      text: arr_name[17]
    }, {
      id: "202",
      src: "../../res/img/gionee.jpg",
      text: arr_name[18]
    }, {
      id: "205",
      src: "../../res/img/gionee.jpg",
      text: arr_name[19]
    }, {
      id: "212",
      src: "../../res/img/gionee.jpg",
      text: arr_name[20]
    }],
    url: file,
  },
})
