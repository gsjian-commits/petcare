App({
  globalData: {
    userInfo: null,
    isLogin: true,
    baseUrl: 'https://api.chongguanjia.com'
  },

  onLaunch() {
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    this.globalData.statusBarHeight = systemInfo.statusBarHeight;
    this.globalData.navBarHeight = systemInfo.platform === 'android' ? 48 : 44;

    // 检查更新
    const updateManager = wx.getUpdateManager();
    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已就绪，是否重启应用？',
        success: (res) => {
          if (res.confirm) updateManager.applyUpdate();
        }
      });
    });
  },

  onShow() {},

  onHide() {},

  onError(msg) {
    console.error('[App Error]', msg);
  }
});
