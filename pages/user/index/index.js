const mock = require('../../../utils/mock');

Page({
  data: {
    userInfo: {}
  },

  onShow() {
    const userInfo = mock.getUserInfo();
    this.setData({ userInfo });
  },

  goOrders() {
    wx.navigateTo({ url: '/pages/user/orders' });
  },

  goMember() {
    wx.navigateTo({ url: '/pages/user/member' });
  },

  goPets() {
    wx.navigateTo({ url: '/pages/pet/list' });
  },

  goReports() {
    wx.navigateTo({ url: '/pages/user/orders?report=1' });
  },

  goCoupons() {
    wx.navigateTo({ url: '/pages/user/coupons' });
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
