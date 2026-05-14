const mock = require('../../../utils/mock');

Page({
  data: {
    coupons: [],
    currentTab: 'available',
    availableCount: 0,
    tabLabel: '可用'
  },

  onLoad() {
    this.loadCoupons('available');
  },

  loadCoupons(status) {
    const allCoupons = mock.getAllCoupons();
    const filtered = allCoupons.filter(c => c.status === status);
    const availableCount = allCoupons.filter(c => c.status === 'available').length;
    const labels = { available: '可用', used: '已用', expired: '已过期' };
    this.setData({
      coupons: filtered,
      availableCount,
      tabLabel: labels[status] || ''
    });
  },

  onTabChange(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === this.data.currentTab) return;
    this.setData({ currentTab: tab });
    this.loadCoupons(tab);
  },

  goHome() {
    wx.switchTab({ url: '/pages/home/index' });
  }
});
