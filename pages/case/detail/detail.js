const mock = require('../../utils/mock');

Page({
  data: {
    caseInfo: null,
    process: [],
    details: [],
    highlights: [],
    review: null,
    relatedServices: []
  },

  onLoad(options) {
    const { id } = options;
    const caseData = mock.cases.find(c => c.id === Number(id));

    if (!caseData) {
      wx.showToast({ title: '案例不存在', icon: 'none' });
      wx.navigateBack();
      return;
    }

    // 根据案例数据生成详情
    const detailData = this._generateDetailData(caseData);

    this.setData({
      caseInfo: caseData,
      ...detailData
    });

    wx.setNavigationBarTitle({ title: caseData.title });
  },

  _generateDetailData(caseData) {
    // 服务流程（4步）
    const process = [
      { step: 1, title: '预约确认', desc: '主人下单后，管家确认服务时间和需求' },
      { step: 2, title: '上门服务', desc: '管家按约定时间上门，开始服务' },
      { step: 3, title: '过程反馈', desc: '服务过程中实时拍照反馈给主人' },
      { step: 4, title: '完成确认', desc: '服务完成后主人确认，评价反馈' }
    ];

    // 详情段落
    const details = [
      '本次服务由灵宠无忧专业管家执行，全程按照标准服务流程操作。管家具备丰富的宠物护理经验，持有相关资质证书。',
      '服务过程中，管家通过微信实时向主人反馈现场情况，包括照片和视频，让主人即使不在家也能了解宠物状态。',
      '服务完成后，管家对现场进行清洁整理，确保环境恢复原状。主人可通过小程序查看服务报告和评价。'
    ];

    // 亮点
    const highlights = [
      '🔍 管家提前15分钟到达，做好准备工作',
      '📸 全程拍照反馈，主人随时在线查看',
      '⭐ 主人对服务非常满意，给予五星好评'
    ];

    // 评价
    const review = {
      userName: '铲屎官小李',
      avatar: '👩',
      rating: 5,
      content: '非常满意！管家很专业也很细心，服务过程拍照很清楚，下次还会再约。推荐给所有养宠物的朋友！'
    };

    // 相关服务
    const relatedServices = mock.services.slice(0, 2).map(s => ({
      id: s.id,
      name: s.name,
      icon: s.icon,
      color: s.color
    }));

    return { process, details, highlights, review, relatedServices };
  },

  handleGoService(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/service/detail/detail?id=${id}`
    });
  },

  handleBack() {
    wx.navigateBack();
  }
});
