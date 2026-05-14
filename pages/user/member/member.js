const mock = require('../../../utils/mock');

Page({
  data: {
    memberInfo: {},
    memberLevels: [],
    purchaseHistory: [],
    memberPackages: []
  },

  onLoad() {
    this.setData({
      memberInfo: mock.getMemberInfo(),
      memberLevels: mock.getMemberLevels(),
      purchaseHistory: mock.getMemberPurchaseHistory(),
      memberPackages: mock.getMemberPackages()
    });
  },

  onPackageTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/package/detail?id=${id}` });
  }
});
