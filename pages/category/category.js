//获取应用实例
var app = getApp()
var arr_name = ["个性化", "找人", "我的OKR", "项目汇总", "项目规格查询",
  "项目进度汇总", "安全公示", "产品汇总", "发布", "产品信息", "代码仓", "产品分支申请",
  "产品建仓申请", "项目分支申请", "权限配置", "编译机状态", "版本管理", "定期版本管理", 
  "Path管理", "应用签名", "需求管理"]

Page({
  data: {
    list: [
      {
        id: 'my',
        name: '',
        open: false,
        pages: ['csl']
      }, {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
