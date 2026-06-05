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

  /** 修复：使用按日期校验的优惠券数据 */
  loadCoupons(status) {
    const filtered = mock.getDynamicCouponsByStatus(status);
    const availableCount = mock.getDynamicCouponsByStatus('available').length;
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
