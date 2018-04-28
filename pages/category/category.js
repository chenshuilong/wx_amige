//获取应用实例
var app = getApp()

Page({
  data: {
    list: [
      {
        id: 'my',
        name: '我的地盘',
        open: false,
        pages: [
          { name: '首页', path: 'homepage' },
          { name: '个性化', path: 'page' },
          { name: '我的通知', path: 'notification' },
          { name: '我的账号', path: 'account' },
          { name: '找人', path: 'staff' },
          { name: '我的OKR', path: 'okr' },
          { name: '我的任务', path: 'task' }
        ]
      }, {
        id: 'project',
        name: '项目',
        open: false,
        pages: [
          { name: '汇总', path: 'project' },
          { name: '项目规格查询', path: 'spec' },
          { name: '项目进度汇总', path: 'project_progress' },
          { name: '安全公示', path: 'version_publish' }
        ]
      }, {
        id: 'issue',
        name: '缺陷管理',
        open: false,
        pages: [
          { name: '问题', path: 'issue' },
          { name: '报表', path: 'report' }
        ]
      }, {
        id: 'production',
        name: '产品中心',
        open: false,
        pages: [
          { name: '汇总', path: 'production' },
          { name: '发布', path: 'version_release' },
          { name: '产品信息', path: 'apk_base' }
        ]
      }, {
        id: 'repo',
        name: '代码仓',
        open: false,
        pages: [
          { name: '代码仓', path: 'repo' },
          { name: '编译机状态', path: 'compile_machine_status' },
          { name: '定期版本', path: 'periodic_version' },
          { name: '版本管理', path: 'version' },
          { name: 'Patch管理', path: 'patch' },
          { name: '应用签名', path: 'signature' }
        ]
      }, {
        id: 'demand',
        name: '库',
        open: false,
        pages: [
          { name: '需求管理', path: 'demand' }
        ]
      }, {
        id: 'shard',
        name: '分享',
        pages: [
          { name: '工具聚合', path: 'tool' }
        ]
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
