const mock = require('../../../utils/mock');

Page({
  data: {
    service: null,
    reviews: [],
    loading: true,
    starList: [],
    activePricingTab: 'single',
    packageOptions: [],
    selectedPackageIndex: 0,
    selectedPackage: {}
  },

  onLoad(options) {
    const { id } = options;
    const service = mock.getServiceDetail(id);
    const reviews = mock.getServiceReviews(id);

    // 计算实心星星数量
    const starList = [false, false, false, false, false];
    if (service) {
      const fullStars = Math.floor(service.rating);
      for (let i = 0; i < fullStars; i++) {
        starList[i] = true;
      }
    }

    // 为每条评价计算星星
    const reviewsWithStars = reviews.map(r => {
      const stars = [false, false, false, false, false];
      const full = Math.floor(r.rating);
      for (let i = 0; i < full; i++) {
        stars[i] = true;
      }
      return { ...r, stars };
    });

    // 计算套餐选项（基于单次价格）
    const basePrice = service ? service.price : 0;
    const packageOptions = this._computePackageOptions(basePrice);
    const selectedPackage = packageOptions[0] || {};

    this.setData({
      service,
      reviews: reviewsWithStars,
      loading: false,
      starList,
      packageOptions,
      selectedPackageIndex: 0,
      selectedPackage
    });

    // 设置导航标题
    if (service) {
      wx.setNavigationBarTitle({ title: service.name });
    }
  },

  /** 根据单次价格计算多档套餐价格 */
  _computePackageOptions(basePrice) {
    const packages = [
      { name: '3次套餐', count: 3, discount: 0.88 },
      { name: '5次套餐', count: 5, discount: 0.82 },
      { name: '10次套餐', count: 10, discount: 0.75 }
    ];
    return packages.map(p => {
      const total = Math.round(basePrice * p.count * p.discount);
      const avg = Math.round(total / p.count);
      const save = basePrice * p.count - total;
      return {
        name: p.name,
        desc: `共${p.count}次，有效期${p.count * 3}个月`,
        total,
        avg,
        save,
        price: total
      };
    });
  },

  handlePricingTabChange(e) {
    const { tab } = e.currentTarget.dataset;
    if (tab === this.data.activePricingTab) return;
    const { packageOptions, selectedPackageIndex } = this.data;
    const selectedPackage = tab === 'package'
      ? (packageOptions[selectedPackageIndex] || packageOptions[0] || {})
      : {};
    this.setData({
      activePricingTab: tab,
      selectedPackage
    });
  },

  handlePackageSelect(e) {
    const { index } = e.currentTarget.dataset;
    const { packageOptions } = this.data;
    this.setData({
      selectedPackageIndex: index,
      selectedPackage: packageOptions[index]
    });
  },

  handleBookTap() {
    const app = getApp();
    app.globalData.selectedServiceId = this.data.service.id;
    wx.switchTab({
      url: '/pages/order/create'
    });
  },

  handleBack() {
    wx.navigateBack();
  }
});
