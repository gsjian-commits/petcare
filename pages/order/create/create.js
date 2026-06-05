const mock = require('../../../utils/mock');
const app = getApp();

Page({
  data: {
    loading: true,
    service: {},
    pets: [],
    dates: [],
    addresses: [],
    coupons: [],
    selectedPetId: '',
    selectedDate: '',
    selectedTimeSlot: '',
    selectedAddressId: '',
    selectedCoupon: null,
    couponDiscount: 0,
    remark: '',
    finalPrice: 0,
    canSubmit: false
  },

  /** 捕获 URL 参数（来自服务列表页 navigateTo） */
  onLoad(options) {
    this._pendingQuery = options || {};
  },

  onShow() {
    const app = getApp();

    // 同时支持 globalData（服务详情页 switchTab）和 URL 参数（服务列表页 navigateTo）
    let serviceId = app.globalData.selectedServiceId || (this._pendingQuery && this._pendingQuery.serviceId) || null;

    if (!serviceId) {
      wx.showToast({ title: '请从服务详情页预约', icon: 'none' });
      return;
    }

    const service = mock.getServiceDetail(serviceId);
    if (!service) {
      wx.showToast({ title: '服务不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
      return;
    }

    // 使用后清除，避免 Tab 切换后仍显示旧服务
    app.globalData.selectedServiceId = null;
    this._pendingQuery = null;

    const pets = mock.getPetProfiles();
    const dates = mock.getAvailableDates();
    const addresses = mock.getAddresses();

    const defaultDate = dates.find(d => d.available) || dates[0];
    const defaultAddress = addresses.find(a => a.isDefault) || addresses[0];

    this.setData({
      service,
      pets,
      dates,
      addresses,
      selectedPetId: pets.length > 0 ? pets[0].id : '',
      selectedDate: defaultDate ? defaultDate.date : '',
      selectedTimeSlot: '',
      selectedAddressId: defaultAddress ? defaultAddress.id : '',
      finalPrice: service.price,
      loading: false
    });
    this._checkCanSubmit();
  },

  handlePetSelect(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ selectedPetId: id });
    this._checkCanSubmit();
  },

  handleAddPet() {
    wx.navigateTo({ url: '/pages/pet/edit/edit' });
  },

  handleDateSelect(e) {
    const { date } = e.currentTarget.dataset;
    const dates = this.data.dates;
    const target = dates.find(d => d.date === date);
    if (!target || !target.available) return;
    this.setData({ selectedDate: date });
    this._checkCanSubmit();
  },

  handleTimeSelect(e) {
    const { slot } = e.currentTarget.dataset;
    this.setData({ selectedTimeSlot: slot });
    this._checkCanSubmit();
  },

  handleAddressSelect(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ selectedAddressId: id });
  },

  handleAddAddress() {
    wx.showToast({ title: '地址管理功能开发中', icon: 'none' });
  },

  handleCouponSelect() {
    const coupons = mock.getCoupons();
    if (coupons.length === 0) {
      wx.showToast({ title: '暂无可用优惠券', icon: 'none' });
      return;
    }

    const items = ['不使用优惠券'];
    coupons.forEach(c => {
      if (c.type === 'amount') {
        items.push(c.title + '（减¥' + c.value + '）');
      } else {
        items.push(c.title + '（减' + c.value + '%）');
      }
    });

    wx.showActionSheet({
      itemList: items,
      success: (res) => {
        if (res.tapIndex === 0) {
          this.setData({ selectedCoupon: null, couponDiscount: 0 });
        } else {
          const coupon = coupons[res.tapIndex - 1];
          let discount = 0;
          if (coupon.type === 'amount') {
            discount = coupon.value;
          } else if (coupon.type === 'percent') {
            discount = Math.round(this.data.service.price * coupon.value / 100);
          }
          this.setData({ selectedCoupon: coupon, couponDiscount: discount });
        }
        this._calcFinalPrice();
      }
    });
  },

  handleRemarkInput(e) {
    this.setData({ remark: e.detail.value });
  },

  _calcFinalPrice() {
    const base = this.data.service.price;
    const discount = this.data.couponDiscount;
    const final = Math.max(0, base - discount);
    this.setData({ finalPrice: final });
  },

  _checkCanSubmit() {
    const { selectedPetId, selectedDate, selectedTimeSlot } = this.data;
    const canSubmit = !!(selectedPetId && selectedDate && selectedTimeSlot);
    this.setData({ canSubmit });
  },

  handleSubmit() {
    if (this.data.pets.length === 0) {
      wx.showToast({ title: '请先添加宠物档案', icon: 'none' });
      return;
    }

    if (!this.data.canSubmit) {
      wx.showToast({ title: '请完善预约信息', icon: 'none' });
      return;
    }

    const service = this.data.service;
    const pet = this.data.pets.find(p => p.id === this.data.selectedPetId);
    const address = this.data.addresses.find(a => a.id === this.data.selectedAddressId);

    wx.showLoading({ title: '提交中...' });
    setTimeout(() => {
      wx.hideLoading();
      wx.showModal({
        title: '预约成功',
        content: '已预约' + service.name + '服务\n宠物：' + (pet ? pet.name : '') + '\n时间：' + this.data.selectedDate + ' ' + (this.data.selectedTimeSlot === 'morning' ? '上午' : '下午') + '\n地址：' + (address ? address.district : ''),
        confirmText: '查看订单',
        cancelText: '返回首页',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({ url: '/pages/user/orders/orders' });
          } else {
            wx.switchTab({ url: '/pages/home/index' });
          }
        }
      });
    }, 1500);
  }
});
