const mock = require('../../../utils/mock');

Page({
  data: {
    userInfo: {},
    adminTapCount: 0
  },

  onShow() {
    const userInfo = mock.getUserInfo();
    this.setData({ userInfo });
  },

  /** 修复：使用单一定时器避免竞态 */
  onVersionTap() {
    const count = this.data.adminTapCount + 1;
    this.setData({ adminTapCount: count });
    if (count >= 5) {
      this.setData({ adminTapCount: 0 });
      if (this._adminTimer) {
        clearTimeout(this._adminTimer);
        this._adminTimer = null;
      }
      wx.navigateTo({ url: '/pages/admin/index/index' });
      return;
    }
    // 清除旧定时器，重新计时（实现"最后一次点击后3秒重置"的效果）
    if (this._adminTimer) {
      clearTimeout(this._adminTimer);
    }
    this._adminTimer = setTimeout(() => {
      this.setData({ adminTapCount: 0 });
      this._adminTimer = null;
    }, 3000);
  },

  goOrders() {
    wx.navigateTo({ url: '/pages/user/orders/orders' });
  },

  goMember() {
    wx.navigateTo({ url: '/pages/user/member/member' });
  },

  goPets() {
    wx.navigateTo({ url: '/pages/pet/list/list' });
  },

  goReports() {
    wx.navigateTo({ url: '/pages/user/orders/orders?report=1' });
  },

  goCoupons() {
    wx.navigateTo({ url: '/pages/user/coupons/coupons' });
  },

  goAddresses() {
    wx.showToast({ title: '地址管理开发中', icon: 'none' });
  },

  contactService() {
    wx.showModal({
      title: '联系客服',
      content: '客服电话：400-888-8888\n在线时间：9:00-21:00',
      confirmText: '呼叫',
      success(res) {
        if (res.confirm) {
          wx.makePhoneCall({ phoneNumber: '4008888888' });
        }
      }
    });
  },

  goSettings() {
    wx.showToast({ title: '设置功能开发中', icon: 'none' });
  }
});
