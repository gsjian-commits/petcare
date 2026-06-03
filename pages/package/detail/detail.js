const mock = require('../../utils/mock');

Page({
  data: {
    pkg: null,
    features: [],
    purchaseNotes: [],
    faq: [],
    faqOpenIndex: -1
  },

  onLoad(options) {
    const { id } = options;
    const pkgData = mock.packages.find(p => p.id === Number(id));

    if (!pkgData) {
      wx.showToast({ title: '套餐不存在', icon: 'none' });
      wx.navigateBack();
      return;
    }

    const detailData = this._generateDetailData(pkgData);

    this.setData({
      pkg: pkgData,
      ...detailData
    });

    wx.setNavigationBarTitle({ title: pkgData.name });
  },

  _generateDetailData(pkgData) {
    // 4格特性
    const features = [
      { icon: '⏰', label: '灵活预约' },
      { icon: '👤', label: '专属管家' },
      { icon: '📸', label: '实时反馈' },
      { icon: '🛡️', label: '保险保障' }
    ];

    // 购买须知
    const purchaseNotes = [
      '购买后可在有效期内预约使用',
      '每次服务需提前24小时预约',
      '如需取消，请提前2小时告知管家',
      '套餐仅限同一只宠物使用',
      '超出服务范围需额外付费'
    ];

    // FAQ
    const faq = [
      {
        question: '套餐可以退款吗？',
        answer: '未使用的套餐支持全额退款。已使用部分按单次原价折算后，退还剩余金额。'
      },
      {
        question: '可以更换管家吗？',
        answer: '可以的。如对当前管家不满意，可联系客服申请更换管家，不收取额外费用。'
      },
      {
        question: '节假日可以使用吗？',
        answer: '套餐在节假日均可用，但需提前预约。部分热门时段建议提前3天预约。'
      }
    ];

    return { features, purchaseNotes, faq };
  },

  handleBuy() {
    wx.navigateTo({
      url: `/pages/order/create/create?packageId=${this.data.pkg.id}`
    });
  },

  toggleFaq(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      faqOpenIndex: this.data.faqOpenIndex === index ? -1 : index
    });
  },

  handleBack() {
    wx.navigateBack();
  }
});
