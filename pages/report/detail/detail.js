const mock = require('../../../utils/mock');

Page({
  data: {
    report: null,
    loading: true
  },

  onLoad(options) {
    const { id } = options;

    let report = null;
    if (id) {
      report = mock.getReportById(id);
    }

    if (!report) {
      wx.showToast({ title: '报告不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    this.setData({ report, loading: false });

    wx.setNavigationBarTitle({ title: report.serviceName + '·服务报告' });
  },

  handleRebook() {
    wx.switchTab({ url: '/pages/order/create/create' });
  }
});
