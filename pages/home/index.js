const mock = require('../../utils/mock');

Page({
  data: {
    banners: [],
    services: [],
    packages: [],
    trustItems: [],
    cases: [],
    notices: [],
    currentNoticeIndex: 0,
    showNotice: true,
    scrollTop: 0,
    statusBarHeight: 0
  },

  onLoad() {
    const app = getApp();
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 0
    });
    this.loadMockData();
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },

  loadMockData() {
    this.setData({
      banners: mock.banners,
      services: mock.services,
      packages: mock.packages,
      trustItems: mock.trustItems,
      cases: mock.cases,
      notices: mock.notices
    });

    this.startNoticeScroll();
  },

  startNoticeScroll() {
    if (this.data.notices.length <= 1) return;

    this._noticeTimer = setInterval(() => {
      const { currentNoticeIndex, notices } = this.data;
      const next = (currentNoticeIndex + 1) % notices.length;
      this.setData({ currentNoticeIndex: next });
    }, 3000);
  },

  onUnload() {
    if (this._noticeTimer) {
      clearInterval(this._noticeTimer);
      this._noticeTimer = null;
    }
  },

  onHide() {
    if (this._noticeTimer) {
      clearInterval(this._noticeTimer);
      this._noticeTimer = null;
    }
  },

  handleCloseNotice() {
    if (this._noticeTimer) {
      clearInterval(this._noticeTimer);
      this._noticeTimer = null;
    }
    this.setData({ showNotice: false });
  },

  onBannerCTA(e) {
    wx.switchTab({ url: '/pages/order/create/create' });
  },

  onServiceSelect(e) {
    const { id, name } = e.detail;
    wx.navigateTo({
      url: `/pages/service/detail/detail?id=${id}&name=${name}`
    });
  },

  onPackageSelect(e) {
    const { id } = e.detail;
    wx.navigateTo({
      url: `/pages/package/detail/detail?id=${id}`
    });
  },

  onCaseSelect(e) {
    const { id } = e.detail;
    wx.navigateTo({
      url: `/pages/case/detail/detail?id=${id}`
    });
  },

  onPageScroll(e) {
    this.setData({ scrollTop: e.scrollTop });
  }
});
