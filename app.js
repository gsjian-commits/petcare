App({
  globalData: {
    userInfo: null,
    isLogin: false,
    baseUrl: 'https://api.chongguanjia.com'
  },

  onLaunch() {
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    this.globalData.statusBarHeight = systemInfo.statusBarHeight;
    this.globalData.navBarHeight = systemInfo.platform === 'android' ? 48 : 44;
  },

  onShow() {},

  onHide() {},

  onError(msg) {
    console.error('[App Error]', msg);
  }
});
