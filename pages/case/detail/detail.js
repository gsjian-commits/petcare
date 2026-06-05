const mock = require('../../../utils/mock');

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
    // 统一使用字符串比较（mock 中 cases 的 id 为数字，导航时为字符串）
    const caseData = mock.cases.find(c => String(c.id) === String(id));

    if (!caseData) {
      wx.showToast({ title: '案例不存在', icon: 'none' });
      wx.navigateBack();
      return;
    }

    const detailData = this._generateDetailData(caseData);
    this.setData({ caseInfo: caseData, ...detailData });
    wx.setNavigationBarTitle({ title: caseData.title });
  },

  /** 修复：根据案例标签动态生成详情，而非全硬编码 */
  _generateDetailData(caseData) {
    const tags = caseData.tags || [];
    const isCat = tags.includes('猫咪');
    const isDog = tags.includes('狗狗');
    const petType = isCat ? '猫咪' : isDog ? '狗狗' : '宠物';

    // 服务流程
    const processTpl = {
      '上门洗澡': [
        { step: 1, title: '环境准备', desc: '铺设防滑垫、准备好洗护用品' },
        { step: 2, title: '梳理毛发', desc: '洗前梳理、检查皮肤状况' },
        { step: 3, title: '温水洗护', desc: '使用专用洗护产品分步清洗' },
        { step: 4, title: '吹干护理', desc: '吹干、梳顺、修剪指甲' },
        { step: 5, title: '完成反馈', desc: '拍照记录、主人确认' }
      ],
      '宠物寄养': [
        { step: 1, title: '上门入户', desc: '管家到达后确认宠物状态' },
        { step: 2, title: '定时照护', desc: '按约定时间喂食换水' },
        { step: 3, title: '互动陪伴', desc: '与宠物互动玩耍' },
        { step: 4, title: '环境清洁', desc: '清理排泄物、整理区域' },
        { step: 5, title: '每日反馈', desc: '发送照片视频给主人' }
      ],
      '上门喂养': [
        { step: 1, title: '到达确认', desc: '管家到达后拍照确认入户' },
        { step: 2, title: '定量喂食', desc: '按主人要求准备和喂食' },
        { step: 3, title: '清洁整理', desc: '清理猫砂/排泄物' },
        { step: 4, title: '互动陪伴', desc: '陪玩互动10-15分钟' },
        { step: 5, title: '安全离场', desc: '拍照发送报告、确认离场' }
      ],
      '上门美容': [
        { step: 1, title: '沟通方案', desc: '与主人确认造型需求' },
        { step: 2, title: '洗护清洁', desc: '深层清洁、护毛护理' },
        { step: 3, title: '拉毛吹干', desc: '吹风机拉毛蓬松' },
        { step: 4, title: '精细修剪', desc: '逐部位精修造型' },
        { step: 5, title: '拍照确认', desc: '展示效果、主人确认' }
      ]
    };

    const serviceType = tags[0] || '上门喂养';
    const process = processTpl[serviceType] || processTpl['上门喂养'];

    // 详情段落
    const details = [
      '本次服务由灵宠无忧专业管家执行，全程按照标准服务流程操作。管家具备丰富的' + petType + '护理经验，持有相关资质证书。',
      caseData.title + '——' + caseData.desc + '。服务过程中管家通过微信实时反馈现场情况，让主人即使不在家也能了解宠物状态。',
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
      content: '非常满意！管家很专业也很细心，服务过程拍照很清楚，下次还会再约。推荐给所有养' + petType + '的朋友！'
    };

    // 相关服务
    const relatedServices = mock.services.slice(0, 2).map(s => ({
      id: s.id, name: s.name, icon: s.icon, color: s.color
    }));

    return { process, details, highlights, review, relatedServices };
  },

  handleGoService(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/service/detail/detail?id=' + id });
  },

  handleBack() {
    wx.navigateBack();
  }
});
