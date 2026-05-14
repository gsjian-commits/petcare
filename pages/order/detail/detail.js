const mock = require('../../../utils/mock');

Page({
  data: {
    order: null,
    loading: true
  },

  onLoad(options) {
    const { id } = options;
    const order = mock.getOrderDetail(id);

    if (!order) {
      wx.showToast({ title: '订单不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    this.setData({ order, loading: false });
    wx.setNavigationBarTitle({ title: '订单详情' });
  },

  handlePay() {
    wx.showToast({ title: '支付功能开发中', icon: 'none' });
  },

  handleCancel() {
    wx.showModal({
      title: '取消订单',
      content: '确定要取消该订单吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '订单已取消', icon: 'success' });
          setTimeout(() => wx.navigateBack(), 1500);
        }
      }
    });
  },

  contactStaff() {
    wx.makePhoneCall({ phoneNumber: '4008888888' });
  },

  handleReschedule() {
    wx.showToast({ title: '改期功能开发中', icon: 'none' });
  },

  handleRebook() {
    wx.switchTab({ url: '/pages/order/create' });
  },

  handleViewReport() {
    const order = this.data.order;
    if (order && order.reportId) {
      wx.navigateTo({ url: `/pages/report/detail?id=${order.reportId}` });
    }
  },

  handleReview() {
    wx.showToast({ title: '评价功能开发中', icon: 'none' });
  }
});
