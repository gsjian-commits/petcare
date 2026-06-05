const mock = require('../../../utils/mock');

Page({
  data: {
    categories: [],
    activeCategoryId: '',
    serviceList: [],
    cartCount: 0
  },

  onLoad(options) {
    const categories = mock.services;
    const activeCategoryId = options.categoryId || (categories[0] && categories[0].id) || '';

    this.setData({ categories, activeCategoryId });
    this.loadServiceList();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
  },

  loadServiceList() {
    const list = mock.getServicesByCategory(this.data.activeCategoryId);
    this.setData({ serviceList: list });
  },

  handleTabChange(e) {
    const { id } = e.currentTarget.dataset;
    if (id === this.data.activeCategoryId) return;
    this.setData({ activeCategoryId: id });
    this.loadServiceList();
  },

  handleServiceTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/service/detail/detail?id=' + id });
  },

  /** 修复：改用 globalData + switchTab，与 service/detail 保持一致 */
  handleBookTap(e) {
    const { id } = e.currentTarget.dataset;
    const app = getApp();
    app.globalData.selectedServiceId = id;
    wx.switchTab({ url: '/pages/order/create/create' });
  }
});
