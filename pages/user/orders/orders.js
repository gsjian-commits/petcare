const mock = require('../../../utils/mock');

Page({
  data: {
    orders: [],
    currentTab: 'all',
    loading: true
  },

  onLoad(options) {
    const tab = options.tab || 'all';
    this.setData({ currentTab: tab });
    this.loadOrders(tab);
  },

  onShow() {
    const { currentTab } = this.data;
    this.loadOrders(currentTab);
  },

  loadOrders(status) {
    const orders = mock.getOrdersByStatus(status);
    this.setData({ orders, loading: false });
  },

  onTabChange(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === this.data.currentTab) return;
    this.setData({ currentTab: tab, loading: true });
    this.loadOrders(tab);
  },

  onOrderTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/order/detail/detail?id=${id}` });
  },

  onActionTap(e) {
    const { action } = e.currentTarget.dataset;
    const { id } = e.currentTarget.dataset;
    const order = this.data.orders.find(o => o.id === id);

    switch (action) {
      case 'pay':
        wx.showToast({ title: '支付功能开发中', icon: 'none' });
        break;
      case 'cancel':
        wx.showModal({
          title: '取消订单',
          content: '确定要取消该订单吗？',
          success: (res) => {
            if (res.confirm) {
              wx.showToast({ title: '订单已取消', icon: 'success' });
              this.loadOrders(this.data.currentTab);
            }
          }
        });
        break;
      case 'contact':
        wx.makePhoneCall({ phoneNumber: '4008888888' });
        break;
      case 'review':
        if (order && order.hasReport) {
          wx.navigateTo({ url: `/pages/report/detail/detail?id=${order.reportId}` });
        } else {
          wx.showToast({ title: '评价功能开发中', icon: 'none' });
        }
        break;
      case 'rebook':
        wx.switchTab({ url: '/pages/order/create/create' });
        break;
    }
  },

  goHome() {
    wx.switchTab({ url: '/pages/home/index' });
  }
});
