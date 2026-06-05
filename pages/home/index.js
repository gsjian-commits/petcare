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
    this.setData({ statusBarHeight: app.globalData.statusBarHeight || 0 });
    this.loadMockData();
  },

  onShow() {
    // 重新展示时恢复通知轮播
    if (this.data.showNotice && this.data.notices.length > 1 && !this._noticeTimer) {
      this.startNoticeScroll();
    }
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },

  loadMockData() {
    // 清理旧定时器再创建，避免竞态
    if (this._noticeTimer) {
      clearInterval(this._noticeTimer);
      this._noticeTimer = null;
    }
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
    if (this._noticeTimer) return; // 已有定时器不重复创建
    this._noticeTimer = setInterval(() => {
      const { currentNoticeIndex, notices } = this.data;
      const next = (currentNoticeIndex + 1) % notices.length;
      this.setData({ currentNoticeIndex: next });
    }, 3000);
  },

  _clearNoticeTimer() {
    if (this._noticeTimer) {
      clearInterval(this._noticeTimer);
      this._noticeTimer = null;
    }
  },

  onUnload() {
    this._clearNoticeTimer();
  },

  onHide() {
    this._clearNoticeTimer();
  },

  handleCloseNotice() {
    this._clearNoticeTimer();
    this.setData({ showNotice: false });
  },

  onBannerCTA(e) {
    wx.switchTab({ url: '/pages/order/create/create' });
  },

  onServiceSelect(e) {
    const { id } = e.detail;
    wx.navigateTo({ url: '/pages/service/detail/detail?id=' + id });
  },

  onPackageSelect(e) {
    const { id } = e.detail;
    wx.navigateTo({ url: '/pages/package/detail/detail?id=' + id });
  },

  onCaseSelect(e) {
    const { id } = e.detail;
    wx.navigateTo({ url: '/pages/case/detail/detail?id=' + id });
  },

  /** 补充缺失事件处理 */
  onTapMorePackages() {
    wx.switchTab({ url: '/pages/service/list/list' });
  },

  onTapMoreCases() {
    wx.switchTab({ url: '/pages/service/list/list' });
  },

  onTapLocation() {
    wx.showToast({ title: '天津市', icon: 'none' });
  },

  onPageScroll(e) {
    this.setData({ scrollTop: e.scrollTop });
  }
});
