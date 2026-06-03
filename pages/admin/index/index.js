const mock = require('../../../utils/mock');

Page({
  data: {
    currentTab: 'all',
    tabs: [
      { key: 'all', label: '全部' },
      { key: 'pending', label: '待确认' },
      { key: 'in_progress', label: '进行中' },
      { key: 'completed', label: '已完成' }
    ],
    orders: [],
    stats: {
      todayOrders: 0,
      pendingCount: 0,
      todayIncome: 0
    }
  },

  onShow() {
    this.loadData();
  },

  loadData() {
    const allOrders = mock.getOrders();
    const stats = this.calcStats(allOrders);
    const orders = this.filterOrders(allOrders, this.data.currentTab);
    this.setData({ stats, orders });
  },

  calcStats(allOrders) {
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const todayOrders = allOrders.filter(o =>
      o.createdAt && o.createdAt.startsWith(todayStr)
    ).length;

    const pendingCount = allOrders.filter(o =>
      o.status === 'pending_service'
    ).length;

    const todayIncome = allOrders
      .filter(o => o.status === 'completed' && o.createdAt && o.createdAt.startsWith(todayStr))
      .reduce((sum, o) => sum + o.amount, 0);

    return { todayOrders, pendingCount, todayIncome };
  },

  filterOrders(orders, tab) {
    if (tab === 'all') return orders;
    if (tab === 'pending') return orders.filter(o => o.status === 'pending_service');
    if (tab === 'in_progress') return orders.filter(o => o.status === 'in_progress');
    if (tab === 'completed') return orders.filter(o => o.status === 'completed');
    return orders;
  },

  switchTab(e) {
    const key = e.currentTarget.dataset.key;
    this.setData({ currentTab: key });
    const allOrders = mock.getOrders();
    const orders = this.filterOrders(allOrders, key);
    this.setData({ orders });
  },

  confirmOrder(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '确认接单',
      content: '确认接受该服务订单？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已接单', icon: 'success' });
          this.loadData();
        }
      }
    });
  },

  completeOrder(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: '完成服务',
      content: '确认该服务已完成？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已标记完成', icon: 'success' });
          this.loadData();
        }
      }
    });
  },

  goBack() {
    wx.navigateBack();
  }
});
