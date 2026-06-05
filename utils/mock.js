/**
 * Mock 数据
 */

// Hero Banner 轮播数据
const banners = [
  {
    id: 1,
    image: '',
    bgColor: '#FF6B35',
    title: '宠物家庭管家',
    subtitle: '专业的上门宠物服务',
    tag: '新用户首单8折'
  },
  {
    id: 2,
    image: '',
    bgColor: '#4ECDC4',
    title: '持证上岗·全程录像',
    subtitle: '让您安心托付每一刻',
    tag: '保险兜底保障'
  },
  {
    id: 3,
    image: '',
    bgColor: '#6C5CE7',
    title: '不满意全额退款',
    subtitle: '品质服务承诺',
    tag: '限时优惠中'
  }
];

// 活动通知
const notices = [
  { id: 1, text: '新用户注册即送50元优惠券，首次下单享8折优惠！' },
  { id: 2, text: '五一宠物安心计划开启，洗护满199减30！' },
  { id: 3, text: '寄养服务全新升级，每只宠物独立空间24小时监控！' }
];

// 服务分类 (8格宫格)
const services = [
  { id: 'category_1', name: '上门喂养', icon: '🍼', color: '#FF6B35', bgColor: '#FFF4EF' },
  { id: 'category_2', name: '上门洗澡', icon: '🛁', color: '#4ECDC4', bgColor: '#EDFAF9' },
  { id: 'category_3', name: '上门美容', icon: '✂️', color: '#E056A0', bgColor: '#FDF0F7' },
  { id: 'category_4', name: '宠物寄养', icon: '🏠', color: '#6C5CE7', bgColor: '#F0EEFC' },
  { id: 'category_5', name: '宠物摄影', icon: '📷', color: '#3498DB', bgColor: '#EBF5FB' },
  { id: 'category_6', name: '行为训练', icon: '🎾', color: '#F39C12', bgColor: '#FEF5E7' },
  { id: 'category_7', name: '宠物殡葬', icon: '🕊️', color: '#95A5A6', bgColor: '#F4F6F6' },
  { id: 'category_8', name: '跑腿代购', icon: '🛒', color: '#E74C3C', bgColor: '#FDEDEC' }
];

// 服务项目详情（按分类）
const serviceItems = {
  category_1: [
    {
      id: 's101',
      categoryId: 'category_1',
      name: '猫咪上门喂养',
      price: 49,
      originalPrice: 69,
      duration: '30分钟',
      rating: 4.9,
      reviewCount: 286,
      desc: '专业猫咪喂养师上门，喂食换水、清理猫砂、陪伴玩耍',
      image: '',
      imageBg: '#FFF4EF',
      imageIcon: '🐱',
      features: ['定量喂食', '更换饮水', '清理猫砂', '梳毛互动', '照片反馈'],
      process: [
        { step: 1, title: '到达确认', desc: '管家到达后拍照确认入户' },
        { step: 2, title: '喂食换水', desc: '按主人要求定量喂食、更换新鲜水' },
        { step: 3, title: '清理猫砂', desc: '铲除猫砂、补充干净猫砂' },
        { step: 4, title: '互动陪伴', desc: '梳毛、逗猫棒互动10-15分钟' },
        { step: 5, title: '安全离场', desc: '拍照发送报告、确认门窗关闭离场' }
      ],
      notice: '请提前准备猫粮、猫砂等必需品'
    },
    {
      id: 's102',
      categoryId: 'category_1',
      name: '狗狗上门喂养',
      price: 59,
      originalPrice: 79,
      duration: '40分钟',
      rating: 4.8,
      reviewCount: 198,
      desc: '上门喂食换水，带狗狗短时遛弯，每日反馈照片视频',
      image: '',
      imageBg: '#FEF5E7',
      imageIcon: '🐶',
      features: ['定量喂食', '更换饮水', '短时遛弯', '清理排泄物', '视频反馈'],
      process: [
        { step: 1, title: '到达确认', desc: '管家到达后拍照确认入户' },
        { step: 2, title: '喂食换水', desc: '按主人要求定量喂食、更换新鲜水' },
        { step: 3, title: '外出遛弯', desc: '15-20分钟小区内遛弯' },
        { step: 4, title: '清洁整理', desc: '清理排泄物、整理活动区域' },
        { step: 5, title: '安全离场', desc: '视频发送报告、确认门窗关闭离场' }
      ],
      notice: '请提前准备牵引绳和拾便袋'
    },
    {
      id: 's103',
      categoryId: 'category_1',
      name: '多宠家庭喂养',
      price: 89,
      originalPrice: 119,
      duration: '60分钟',
      rating: 4.9,
      reviewCount: 142,
      desc: '适合多只宠物家庭，一次性照顾所有毛孩子，性价比之选',
      image: '',
      imageBg: '#F0EEFC',
      imageIcon: '🐕',
      features: ['全部宠物喂食', '更换全部饮水', '多猫砂盆清理', '分批互动', '详细报告'],
      process: [
        { step: 1, title: '到达确认', desc: '管家到达后逐一核对宠物状况' },
        { step: 2, title: '分批喂食', desc: '按需分别喂食不同宠物的口粮' },
        { step: 3, title: '全面清洁', desc: '清理全部猫砂盆和排泄物' },
        { step: 4, title: '分别互动', desc: '与每只宠物单独互动玩耍' },
        { step: 5, title: '安全离场', desc: '逐一拍照反馈、确认离场安全' }
      ],
      notice: '请标注每只宠物的口粮和食量要求'
    }
  ],
  category_2: [
    {
      id: 's201',
      categoryId: 'category_2',
      name: '猫咪基础洗护',
      price: 128,
      originalPrice: 168,
      duration: '60分钟',
      rating: 4.8,
      reviewCount: 315,
      desc: '专业猫咪洗护，使用猫咪专用无刺激洗护产品，全程低应激操作',
      image: '',
      imageBg: '#EDFAF9',
      imageIcon: '🐱',
      features: ['专用洗护液', '耳部清洁', '指甲修剪', '肛门腺清理', '毛发梳理'],
      process: [
        { step: 1, title: '环境准备', desc: '铺设防滑垫、调节水温至38度' },
        { step: 2, title: '梳理解结', desc: '洗前梳理毛发、处理毛结' },
        { step: 3, title: '温水洗护', desc: '分步清洗头部、身体、尾部' },
        { step: 4, title: '吹干梳理', desc: '低噪音吹风机吹干、梳顺毛发' },
        { step: 5, title: '收尾整理', desc: '修剪指甲、清洁耳部、拍照留念' }
      ],
      notice: '建议提前安抚猫咪情绪；有皮肤病请提前告知'
    },
    {
      id: 's202',
      categoryId: 'category_2',
      name: '狗狗精致洗护',
      price: 158,
      originalPrice: 208,
      duration: '90分钟',
      rating: 4.7,
      reviewCount: 267,
      desc: '全方位狗狗洗护服务，包含深层清洁、护毛护理、基础造型',
      image: '',
      imageBg: '#EBF5FB',
      imageIcon: '🐶',
      features: ['深层清洁', '护毛素护理', '脚底毛修剪', '肛周清洁', '香氛喷雾'],
      process: [
        { step: 1, title: '预检评估', desc: '检查皮肤状况、毛发打结程度' },
        { step: 2, title: '梳理开结', desc: '针梳+排梳全面梳理去除废毛' },
        { step: 3, title: '深层清洁', desc: '两遍清洗：去污+深层清洁' },
        { step: 4, title: '护毛护理', desc: '涂抹护毛素、停留5分钟吸收' },
        { step: 5, title: '吹干造型', desc: '拉毛吹干、修剪杂毛、香氛收尾' }
      ],
      notice: '中大型犬每次加收30元'
    },
    {
      id: 's203',
      categoryId: 'category_2',
      name: '幼宠首次洗护',
      price: 99,
      originalPrice: 139,
      duration: '50分钟',
      rating: 4.9,
      reviewCount: 89,
      desc: '专为幼犬幼猫设计的温和洗护，让宝贝从小习惯洗护流程',
      image: '',
      imageBg: '#FDF0F7',
      imageIcon: '🐾',
      features: ['幼宠专用液', '温和手法', '安抚零食', '剪指甲', '成长记录'],
      process: [
        { step: 1, title: '安抚适应', desc: '游戏互动5分钟让幼宠放松' },
        { step: 2, title: '温和洗护', desc: '使用幼宠专用低敏洗护液' },
        { step: 3, title: '轻柔吹干', desc: '最小风力、保持距离徐徐吹干' },
        { step: 4, title: '基础护理', desc: '轻柔修剪指甲、清洁耳部' },
        { step: 5, title: '奖励收尾', desc: '零食奖励、建立正向洗护记忆' }
      ],
      notice: '仅限6个月以下幼宠；疫苗齐全方可预约'
    }
  ],
  category_3: [
    {
      id: 's301',
      categoryId: 'category_3',
      name: '贵宾/比熊造型',
      price: 238,
      originalPrice: 298,
      duration: '120分钟',
      rating: 4.9,
      reviewCount: 176,
      desc: '专业宠物美容师上门，根据品种和主人喜好定制造型方案',
      image: '',
      imageBg: '#FDF0F7',
      imageIcon: '✂️',
      features: ['品种造型', '全身修剪', '圆头修型', '脚圆修剪', '耳部护理'],
      process: [
        { step: 1, title: '沟通方案', desc: '与主人确认造型要求和风格偏好' },
        { step: 2, title: '洗护清洁', desc: '深层清洁、护毛素护理' },
        { step: 3, title: '拉毛吹干', desc: '吹风机拉毛蓬松、为修剪做准备' },
        { step: 4, title: '精细修剪', desc: '按品种标准或定制方案逐部位修剪' },
        { step: 5, title: '整理拍照', desc: '细节调整、拍照展示、主人确认' }
      ],
      notice: '毛结严重的宠物需加收开结费'
    },
    {
      id: 's302',
      categoryId: 'category_3',
      name: '猫咪赛级洗护',
      price: 328,
      originalPrice: 398,
      duration: '150分钟',
      rating: 4.8,
      reviewCount: 64,
      desc: '赛级洗护标准，专业手法+顶级洗护产品，适合长毛猫和赛级猫',
      image: '',
      imageBg: '#F4F6F6',
      imageIcon: '👑',
      features: ['赛级洗护液', '去油深层清洁', '蓬松护理', '局部修剪', '赛级呈现'],
      process: [
        { step: 1, title: '毛发评估', desc: '评估毛发状态、去油需求等级' },
        { step: 2, title: '去油处理', desc: '使用专业去油膏深度清洁毛发根部' },
        { step: 3, title: '双重洗护', desc: '两遍洗护：深层清洁+柔顺护理' },
        { step: 4, title: '精细吹干', desc: '分区吹干、边吹边梳理保证蓬松度' },
        { step: 5, title: '造型呈现', desc: '局部修剪、全身梳理、赛级效果展示' }
      ],
      notice: '仅限性格温顺的猫咪；需提前3天预约'
    }
  ],
  category_4: [
    {
      id: 's401',
      categoryId: 'category_4',
      name: '猫咪家庭寄养',
      price: 69,
      originalPrice: 89,
      duration: '天',
      rating: 4.8,
      reviewCount: 312,
      desc: '管家上门照顾猫咪，保持原有生活环境，降低应激反应',
      image: '',
      imageBg: '#F0EEFC',
      imageIcon: '🏠',
      features: ['早晚各一次', '喂食换水', '清理猫砂', '互动陪伴', '每日反馈'],
      process: [
        { step: 1, title: '寄养前评估', desc: '上门了解猫咪习性、饮食习惯' },
        { step: 2, title: '每日上门', desc: '早9-10点、晚7-8点两次上门' },
        { step: 3, title: '全套照护', desc: '喂食、换水、铲猫砂、互动' },
        { step: 4, title: '每日反馈', desc: '发送猫咪当日照片和状态简报' },
        { step: 5, title: '归还交接', desc: '主人归来后当面交接、确认猫咪状态' }
      ],
      notice: '超出天津城区加收交通费'
    },
    {
      id: 's402',
      categoryId: 'category_4',
      name: '狗狗家庭寄养',
      price: 99,
      originalPrice: 129,
      duration: '天',
      rating: 4.7,
      reviewCount: 245,
      desc: '上门照看狗狗，包含喂食、遛弯、清洁、陪伴全套服务',
      image: '',
      imageBg: '#FEF5E7',
      imageIcon: '🐕',
      features: ['一日三次', '喂食换水', '户外遛弯', '清洁排泄', '视频反馈'],
      process: [
        { step: 1, title: '寄养前评估', desc: '了解狗狗作息、遛弯路线和习惯' },
        { step: 2, title: '每日三次', desc: '早、中、晚三次准时上门照护' },
        { step: 3, title: '遛弯运动', desc: '每次不少于20分钟户外活动' },
        { step: 4, title: '每日反馈', desc: '发送遛弯视频和狗狗状态简报' },
        { step: 5, title: '归还交接', desc: '主人归来后当面交接、确认狗狗状态' }
      ],
      notice: '中大型犬每日加收20元'
    }
  ],
  category_5: [
    {
      id: 's501',
      categoryId: 'category_5',
      name: '宠物户外写真',
      price: 399,
      originalPrice: 499,
      duration: '90分钟',
      rating: 4.9,
      reviewCount: 128,
      desc: '专业摄影师+引导师双人团队，外景拍摄宠物自然瞬间',
      image: '',
      imageBg: '#EBF5FB',
      imageIcon: '📸',
      features: ['双人团队', '50张底片', '15张精修', '定制相册', '外景拍摄'],
      process: [
        { step: 1, title: '前期沟通', desc: '确定拍摄风格、地点和服装搭配' },
        { step: 2, title: '拍摄准备', desc: '引导师与宠物互动熟悉、建立信任' },
        { step: 3, title: '外景拍摄', desc: '1小时外景拍摄，捕捉宠物动感瞬间' },
        { step: 4, title: '选片精修', desc: '3个工作日内出片供主人选片' },
        { step: 5, title: '交付成品', desc: '精修完成后发送电子版、寄送相册' }
      ],
      notice: '天气原因可免费改期一次'
    },
    {
      id: 's502',
      categoryId: 'category_5',
      name: '宠物证件照',
      price: 99,
      originalPrice: 139,
      duration: '30分钟',
      rating: 4.8,
      reviewCount: 93,
      desc: '专业棚拍宠物证件照，适合办理宠物护照、参赛报名等',
      image: '',
      imageBg: '#FFFFFF',
      imageIcon: '📷',
      features: ['上门棚拍', '多色背景', '5张精修', '电子版交付', '加急可选'],
      process: [
        { step: 1, title: '布景搭建', desc: '快速搭建便携摄影棚和灯光' },
        { step: 2, title: '引导拍摄', desc: '引导师配合摄影师抓拍正面照' },
        { step: 3, title: '当场选片', desc: '拍摄完成后当场选片确认' },
        { step: 4, title: '精修出片', desc: '24小时内精修完成并发送' }
      ],
      notice: '如需加急2小时出片，加收30元'
    }
  ],
  category_6: [
    {
      id: 's601',
      categoryId: 'category_6',
      name: '基础服从训练',
      price: 299,
      originalPrice: 399,
      duration: '60分钟/次',
      rating: 4.8,
      reviewCount: 156,
      desc: '专业训犬师上门，纠正基础行为问题，建立良好习惯',
      image: '',
      imageBg: '#FEF5E7',
      imageIcon: '🎾',
      features: ['坐卧立基础', '随行训练', '召回训练', '拒食训练', '社会化引导'],
      process: [
        { step: 1, title: '行为评估', desc: '评估狗狗当前行为和主人诉求' },
        { step: 2, title: '方案制定', desc: '针对性地制定训练计划和目标' },
        { step: 3, title: '实操训练', desc: '训犬师亲自示范+主人学习' },
        { step: 4, title: '家庭作业', desc: '布置一周练习任务和注意事项' },
        { step: 5, title: '效果追踪', desc: '下节课检查作业、调整方案' }
      ],
      notice: '建议购买4次课程包效果更佳'
    },
    {
      id: 's602',
      categoryId: 'category_6',
      name: '行为问题矫正',
      price: 399,
      originalPrice: 529,
      duration: '90分钟/次',
      rating: 4.7,
      reviewCount: 87,
      desc: '针对乱叫、爆冲、护食、分离焦虑等问题行为的一对一矫正',
      image: '',
      imageBg: '#FDEDEC',
      imageIcon: '🦮',
      features: ['问题诊断', '行为矫正', '情绪管理', '环境调整', '长期方案'],
      process: [
        { step: 1, title: '深度访谈', desc: '了解问题行为的起因、频率和场景' },
        { step: 2, title: '现场观察', desc: '实地观察狗狗在问题场景下的反应' },
        { step: 3, title: '矫正干预', desc: '运用正向强化法进行行为矫正' },
        { step: 4, title: '方案交付', desc: '出具详细的矫正方案和家庭管理建议' },
        { step: 5, title: '定期回访', desc: '每周电话回访、每月上门复检' }
      ],
      notice: '严重攻击性行为需评估后确定方案'
    }
  ],
  category_7: [
    {
      id: 's701',
      categoryId: 'category_7',
      name: '宠物善终服务',
      price: 1999,
      originalPrice: 2599,
      duration: '全天',
      rating: 5.0,
      reviewCount: 42,
      desc: '尊重生命、体面告别。提供遗体接送、告别仪式、火化、骨灰返还一站式服务',
      image: '',
      imageBg: '#F4F6F6',
      imageIcon: '🕊️',
      features: ['24小时响应', '专车接送', '告别仪式', '单独火化', '骨灰罐'],
      process: [
        { step: 1, title: '响应接听', desc: '24小时服务热线，随时响应需求' },
        { step: 2, title: '专车接送', desc: '专业遗体接送车，全程冷链运输' },
        { step: 3, title: '告别仪式', desc: '布置告别空间，主人可与宠物最后道别' },
        { step: 4, title: '单独火化', desc: '一对一单独火化，全程可观看' },
        { step: 5, title: '骨灰返还', desc: '精美骨灰罐装殓，仪式感返还' }
      ],
      notice: '提供终身骨灰寄存服务（额外收费）'
    }
  ],
  category_8: [
    {
      id: 's801',
      categoryId: 'category_8',
      name: '宠物用品代购',
      price: 29,
      originalPrice: 39,
      duration: '按次',
      rating: 4.9,
      reviewCount: 278,
      desc: '帮您代购猫粮狗粮、猫砂、零食、玩具等宠物用品并送货上门',
      image: '',
      imageBg: '#FDEDEC',
      imageIcon: '🛒',
      features: ['指定品牌', '比价采购', '送货上门', '小票拍照', '支持到付'],
      process: [
        { step: 1, title: '下单确认', desc: '主人指定品牌、规格、数量' },
        { step: 2, title: '门店采购', desc: '到指定门店或就近宠物店采购' },
        { step: 3, title: '拍照确认', desc: '采购完成后拍照小票和商品确认' },
        { step: 4, title: '送货上门', desc: '30分钟内送达至主人指定地址' }
      ],
      notice: '商品费用由主人承担，可凭小票实报实销'
    },
    {
      id: 's802',
      categoryId: 'category_8',
      name: '宠物医院陪诊',
      price: 149,
      originalPrice: 199,
      duration: '2小时',
      rating: 4.8,
      reviewCount: 134,
      desc: '陪您和宠物去医院就诊，协助挂号、沟通病情、记录医嘱',
      image: '',
      imageBg: '#EBF5FB',
      imageIcon: '🏥',
      features: ['专车接送', '协助挂号', '病情翻译', '医嘱记录', '后续跟进'],
      process: [
        { step: 1, title: '上门接宠', desc: '按约定时间上门接宠和主人' },
        { step: 2, title: '医院陪诊', desc: '协助排队挂号、向医生陈述症状' },
        { step: 3, title: '检查陪同', desc: '全程陪同检查、安抚宠物情绪' },
        { step: 4, title: '医嘱整理', desc: '详细记录医嘱、用药方法和注意事项' },
        { step: 5, title: '返程送归', desc: '送主人和宠物安全返家' }
      ],
      notice: '不含医疗费用；超出2小时每小时加收50元'
    }
  ]
};

// 套餐推荐
const packages = [
  {
    id: 1,
    name: '上班族无忧卡',
    price: 299,
    originalPrice: 399,
    period: '月',
    desc: '工作日上门喂养+遛狗',
    features: ['每日一次上门', '喂食换水', '短时遛弯', '每日反馈照片'],
    tag: '热销',
    tagColor: '#FF6B35'
  },
  {
    id: 2,
    name: '新手护航包',
    price: 199,
    originalPrice: 299,
    period: '次',
    desc: '新手养宠一站式指导',
    features: ['上门环境评估', '喂养方案定制', '基础护理教学', '24h在线答疑'],
    tag: '推荐',
    tagColor: '#4ECDC4'
  },
  {
    id: 3,
    name: '多宠豪华卡',
    price: 499,
    originalPrice: 699,
    period: '月',
    desc: '多只宠物同时服务',
    features: ['每日两次上门', '全部宠物照看', '基础洗护包含', '紧急情况处理'],
    tag: '超值',
    tagColor: '#6C5CE7'
  },
  {
    id: 4,
    name: '年度管家',
    price: 2999,
    originalPrice: 3999,
    period: '年',
    desc: '全年宠物管家服务',
    features: ['全年不限次上门', '优先预约通道', '专属管家一对一', '免费年度体检'],
    tag: '尊享',
    tagColor: '#E056A0'
  }
];

// 信任要素
const trustItems = [
  { id: 1, icon: '📹', title: '全程录像', desc: '服务过程全程记录' },
  { id: 2, icon: '🛡️', title: '保险兜底', desc: '平安保险承保' },
  { id: 3, icon: '💯', title: '不满意退款', desc: '品质不满意全额退' },
  { id: 4, icon: '🎓', title: '持证上岗', desc: '专业资质认证' }
];

// 案例展示
const cases = [
  {
    id: 1,
    image: '',
    bgColor: '#FFF4EF',
    title: '布偶猫毛毛的日常洗护',
    desc: '每周一次上门洗澡，主人出差也放心',
    tags: ['上门洗澡', '猫咪'],
    avatar: '🐱'
  },
  {
    id: 2,
    image: '',
    bgColor: '#EDFAF9',
    title: '柯基大壮的寄养日记',
    desc: '国庆假期寄养7天，每天遛弯视频',
    tags: ['宠物寄养', '狗狗'],
    avatar: '🐶'
  },
  {
    id: 3,
    image: '',
    bgColor: '#F0EEFC',
    title: '三只猫咪的喂养服务',
    desc: '出差两周，管家每天上门喂食换水',
    tags: ['上门喂养', '多宠'],
    avatar: '🐱'
  },
  {
    id: 4,
    image: '',
    bgColor: '#FDF0F7',
    title: '贵宾犬小美的美容变身',
    desc: '上门美容让宝贝在家也能美美的',
    tags: ['上门美容', '狗狗'],
    avatar: '🐶'
  },
  {
    id: 5,
    image: '',
    bgColor: '#EBF5FB',
    title: '金毛多多的训练日记',
    desc: '专业训犬师上门，一个月改正爆冲',
    tags: ['行为训练', '狗狗'],
    avatar: '🐶'
  },
  {
    id: 6,
    image: '',
    bgColor: '#FEF5E7',
    title: '英短奶猫的新手护航',
    desc: '从喂食到疫苗，管家全程指导',
    tags: ['新手护航', '猫咪'],
    avatar: '🐱'
  }
];

// 服务评价
const reviews = [
  {
    id: 1,
    serviceId: 's101',
    userName: '铲屎官小李',
    avatar: '🐱',
    rating: 5,
    date: '2026-05-10',
    content: '出差三天找了灵宠无忧上门喂养，管家每天准时到，喂食铲猫砂还陪玩，每天发照片反馈，真的太安心了！猫咪状态也很好，强烈推荐！',
    images: [],
    tags: ['准时', '细心', '猫咪友好']
  },
  {
    id: 2,
    serviceId: 's101',
    userName: '布偶控',
    avatar: '😺',
    rating: 5,
    date: '2026-05-08',
    content: '已经是第三次用灵宠无忧了，管家小姐姐特别温柔，我家布偶胆子小也愿意跟她互动。每次都把猫砂盆洗得干干净净，比我自己弄的还仔细。',
    images: [],
    tags: ['服务细致', '专业', '值得信赖']
  },
  {
    id: 3,
    serviceId: 's101',
    userName: '天津猫爸',
    avatar: '👨',
    rating: 4,
    date: '2026-05-05',
    content: '整体不错，管家很守时。唯一的建议是能增加陪玩时间就更好了，感觉互动时间有点短。',
    images: [],
    tags: ['守时', '期待更多互动']
  },
  {
    id: 4,
    serviceId: 's201',
    userName: '毛球妈妈',
    avatar: '👩',
    rating: 5,
    date: '2026-05-12',
    content: '上门洗澡真的太方便了！不用把猫咪塞进航空箱带出门，猫咪在家里洗澡明显没那么紧张。管家手法专业，全程低应激，洗完香喷喷的～',
    images: [],
    tags: ['方便', '猫咪不紧张', '洗得干净']
  },
  {
    id: 5,
    serviceId: 's201',
    userName: '橘座大人',
    avatar: '🐈',
    rating: 5,
    date: '2026-05-09',
    content: '洗护用品都是宠物专用的，不会刺激皮肤。洗完还帮猫咪剪了指甲清理了耳朵，服务很全面。下次还约！',
    images: [],
    tags: ['产品安全', '服务全面']
  },
  {
    id: 6,
    serviceId: 's301',
    userName: '贵妇犬小美',
    avatar: '🐩',
    rating: 5,
    date: '2026-05-11',
    content: '美容师手艺绝了！我家比熊做出来跟宠物店380的效果一样，但不用出门，在家就能搞定。修剪得非常精致，美容师还教了我日常打理技巧。',
    images: [],
    tags: ['手艺好', '性价比高', '贴心教学']
  },
  {
    id: 7,
    serviceId: 's301',
    userName: 'Lucky爸',
    avatar: '🧔',
    rating: 4,
    date: '2026-05-07',
    content: '美容效果很不错，就是这个价位稍微有点贵。不过考虑到上门服务确实方便，也算物有所值吧。',
    images: [],
    tags: ['效果不错', '价格适中']
  },
  {
    id: 8,
    serviceId: 's401',
    userName: '旅行达人',
    avatar: '✈️',
    rating: 5,
    date: '2026-05-06',
    content: '出去旅游了五天，猫咪寄养选了灵宠无忧。每天早晚两次上门，管家发来的照片里猫咪状态都很好。回来发现猫咪比我在家时还粘人了哈哈。',
    images: [],
    tags: ['放心', '猫咪状态好', '反馈及时']
  }
];

// 获取某分类下的所有服务项
function getServicesByCategory(categoryId) {
  return serviceItems[categoryId] || [];
}

// 获取服务详情
function getServiceDetail(serviceId) {
  for (const categoryId in serviceItems) {
    const found = serviceItems[categoryId].find(s => s.id === serviceId);
    if (found) return found;
  }
  return null;
}

// 获取服务评价
function getServiceReviews(serviceId) {
  return reviews.filter(r => r.serviceId === serviceId);
}

// ------ 宠物档案 Mock ------
const petProfiles = [
  {
    id: 'p1',
    name: '小橘',
    type: 'cat',
    breed: '橘猫',
    gender: 'male',
    age: 2.5,
    weight: 5.2,
    avatar: '🐱',
    avatarBg: '#FFF4EF',
    vaccinated: true,
    allergies: ['海鲜'],
    personality: ['温顺', '粘人', '胆小'],
    notes: '怕吹风机，洗澡需注意',
    createdAt: '2025-12-01'
  },
  {
    id: 'p2',
    name: '布丁',
    type: 'dog',
    breed: '柯基',
    gender: 'female',
    age: 1.5,
    weight: 12.0,
    avatar: '🐶',
    avatarBg: '#FEF5E7',
    vaccinated: true,
    allergies: [],
    personality: ['活泼', '好动', '亲人'],
    notes: '出门喜欢爆冲，请牵好牵引绳',
    createdAt: '2026-01-15'
  },
  {
    id: 'p3',
    name: '团子',
    type: 'cat',
    breed: '布偶猫',
    gender: 'male',
    age: 3,
    weight: 6.8,
    avatar: '😺',
    avatarBg: '#F0EEFC',
    vaccinated: true,
    allergies: ['鸡肉'],
    personality: ['温柔', '安静', '高冷'],
    notes: '每周梳毛2-3次，防止毛球',
    createdAt: '2025-08-20'
  }
];

// ------ 地址 Mock ------
const addresses = [
  {
    id: 'a1',
    name: '张先生',
    phone: '138****8888',
    province: '天津市',
    city: '天津市',
    district: '南开区',
    detail: '鞍山西道338号百脑汇科技大厦1506室',
    isDefault: true
  },
  {
    id: 'a2',
    name: '李女士',
    phone: '139****6666',
    province: '天津市',
    city: '天津市',
    district: '河东区',
    detail: '六纬路238号嘉里汇B1层',
    isDefault: false
  }
];

// ------ 优惠券 Mock ------
const coupons = [
  {
    id: 'c1',
    title: '新用户首单8折',
    condition: '满100元可用',
    type: 'percent',
    value: 20,
    expireDate: '2026-06-30',
    isAvailable: true
  },
  {
    id: 'c2',
    title: '满199减30',
    condition: '满199元可用',
    type: 'amount',
    value: 30,
    expireDate: '2026-05-31',
    isAvailable: true
  },
  {
    id: 'c3',
    title: '上门喂养专享券',
    condition: '仅限上门喂养服务',
    type: 'amount',
    value: 15,
    expireDate: '2026-06-15',
    isAvailable: true
  }
];

// ------ 可预约日期（未来30天）------
function getAvailableDates() {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dayOfWeek = date.getDay();
    const dateStr = formatDateStr(date);
    dates.push({
      date: dateStr,
      dayOfWeek: ['日', '一', '二', '三', '四', '五', '六'][dayOfWeek],
      month: date.getMonth() + 1,
      day: date.getDate(),
      available: dayOfWeek !== 0,
      isToday: i === 0
    });
  }
  return dates;
}

function formatDateStr(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

// ------ 订单 Mock ------
const orders = [
  {
    id: 'o1',
    serviceId: 's101',
    serviceName: '猫咪上门喂养',
    serviceIcon: '🐱',
    serviceBg: '#FFF4EF',
    petName: '小橘',
    petId: 'p1',
    date: '2026-05-16',
    timeSlot: 'morning',
    timeLabel: '上午 9:00-12:00',
    address: '南开区 鞍山西道338号百脑汇科技大厦1506室',
    amount: 49,
    originalAmount: 49,
    couponDiscount: 0,
    status: 'pending_payment',
    statusLabel: '待支付',
    createdAt: '2026-05-14 14:30',
    staffName: ''
  },
  {
    id: 'o2',
    serviceId: 's201',
    serviceName: '猫咪基础洗护',
    serviceIcon: '🐱',
    serviceBg: '#EDFAF9',
    petName: '小橘',
    petId: 'p1',
    date: '2026-05-15',
    timeSlot: 'afternoon',
    timeLabel: '下午 14:00-18:00',
    address: '南开区 鞍山西道338号百脑汇科技大厦1506室',
    amount: 128,
    originalAmount: 168,
    couponDiscount: 40,
    status: 'pending_payment',
    statusLabel: '待支付',
    createdAt: '2026-05-14 10:00',
    staffName: ''
  },
  {
    id: 'o3',
    serviceId: 's101',
    serviceName: '猫咪上门喂养',
    serviceIcon: '🐱',
    serviceBg: '#FFF4EF',
    petName: '小橘',
    petId: 'p1',
    date: '2026-05-15',
    timeSlot: 'morning',
    timeLabel: '上午 9:00-12:00',
    address: '南开区 鞍山西道338号百脑汇科技大厦1506室',
    amount: 49,
    originalAmount: 69,
    couponDiscount: 20,
    status: 'pending_service',
    statusLabel: '待服务',
    createdAt: '2026-05-14 08:00',
    staffName: '张管家'
  },
  {
    id: 'o4',
    serviceId: 's202',
    serviceName: '狗狗精致洗护',
    serviceIcon: '🐶',
    serviceBg: '#EBF5FB',
    petName: '布丁',
    petId: 'p2',
    date: '2026-05-14',
    timeSlot: 'afternoon',
    timeLabel: '下午 14:00-18:00',
    address: '河东区 六纬路238号嘉里汇B1层',
    amount: 158,
    originalAmount: 208,
    couponDiscount: 50,
    status: 'in_progress',
    statusLabel: '服务中',
    createdAt: '2026-05-13 16:00',
    staffName: '李管家'
  },
  {
    id: 'o5',
    serviceId: 's301',
    serviceName: '贵宾/比熊造型',
    serviceIcon: '✂️',
    serviceBg: '#FDF0F7',
    petName: '布丁',
    petId: 'p2',
    date: '2026-05-12',
    timeSlot: 'morning',
    timeLabel: '上午 9:00-12:00',
    address: '河东区 六纬路238号嘉里汇B1层',
    amount: 238,
    originalAmount: 298,
    couponDiscount: 60,
    status: 'completed',
    statusLabel: '已完成',
    createdAt: '2026-05-10 09:00',
    staffName: '王管家',
    hasReport: true,
    reportId: 'r1'
  },
  {
    id: 'o6',
    serviceId: 's401',
    serviceName: '猫咪家庭寄养',
    serviceIcon: '🏠',
    serviceBg: '#F0EEFC',
    petName: '团子',
    petId: 'p3',
    date: '2026-05-01',
    timeSlot: 'morning',
    timeLabel: '早晚各一次 9:00-20:00',
    address: '南开区 鞍山西道338号百脑汇科技大厦1506室',
    amount: 69,
    originalAmount: 89,
    couponDiscount: 20,
    status: 'completed',
    statusLabel: '已完成',
    createdAt: '2026-04-28 11:00',
    staffName: '张管家',
    hasReport: false,
    reportId: ''
  },
  {
    id: 'o7',
    serviceId: 's101',
    serviceName: '猫咪上门喂养',
    serviceIcon: '🐱',
    serviceBg: '#FFF4EF',
    petName: '小橘',
    petId: 'p1',
    date: '2026-05-10',
    timeSlot: 'morning',
    timeLabel: '上午 9:00-12:00',
    address: '南开区 鞍山西道338号百脑汇科技大厦1506室',
    amount: 49,
    originalAmount: 69,
    couponDiscount: 20,
    status: 'cancelled',
    statusLabel: '已取消',
    createdAt: '2026-05-08 14:00',
    staffName: ''
  }
];

// ------ 会员 Mock ------
const memberInfo = {
  level: '黄金会员',
  levelIndex: 2,
  icon: '🥇',
  color: '#FF6B35',
  bgColor: '#FFF4EF',
  validUntil: '2026-08-14',
  remainingCount: 5,
  totalCount: 10,
  discount: 0.9,
  benefits: [
    { icon: '⚡', text: '优先预约通道' },
    { icon: '💰', text: '全场服务9折' },
    { icon: '👤', text: '专属管家一对一' },
    { icon: '🎂', text: '宠物生日礼包' }
  ],
  progress: {
    current: 680,
    target: 1000,
    label: '距钻石会员还差320成长值'
  }
};

const memberLevels = [
  { name: '白银会员', icon: '🥈', minAmount: 0, discount: 0.95, color: '#95A5A6' },
  { name: '黄金会员', icon: '🥇', minAmount: 500, discount: 0.9, color: '#FF6B35' },
  { name: '钻石会员', icon: '💎', minAmount: 1000, discount: 0.85, color: '#3498DB' },
  { name: '黑金会员', icon: '🖤', minAmount: 3000, discount: 0.8, color: '#1A1A1A' }
];

const memberPurchaseHistory = [
  {
    id: 'ph1',
    packageName: '上班族无忧卡',
    price: 299,
    purchaseDate: '2026-04-01',
    validUntil: '2026-05-01',
    status: 'expired'
  },
  {
    id: 'ph2',
    packageName: '新手护航包',
    price: 199,
    purchaseDate: '2026-02-15',
    validUntil: '长期有效',
    status: 'active'
  },
  {
    id: 'ph3',
    packageName: '多宠豪华卡',
    price: 499,
    purchaseDate: '2025-12-01',
    validUntil: '2026-01-01',
    status: 'expired'
  }
];

// 会员可购买套餐
const memberPackages = [
  {
    id: 'mp1',
    name: '上班族无忧卡',
    price: 299,
    originalPrice: 399,
    period: '月',
    desc: '工作日上门喂养+遛狗，月度套餐更划算',
    features: ['每日一次上门', '喂食换水', '短时遛弯', '每日反馈照片'],
    tag: '热销',
    tagColor: '#FF6B35'
  },
  {
    id: 'mp2',
    name: '新手护航包',
    price: 199,
    originalPrice: 299,
    period: '次',
    desc: '新手养宠一站式指导，终身有效',
    features: ['上门环境评估', '喂养方案定制', '基础护理教学', '24h在线答疑'],
    tag: '推荐',
    tagColor: '#4ECDC4'
  },
  {
    id: 'mp3',
    name: '多宠豪华卡',
    price: 499,
    originalPrice: 699,
    period: '月',
    desc: '多只宠物同时照看，家庭必备',
    features: ['每日两次上门', '全部宠物照看', '基础洗护包含', '紧急情况处理'],
    tag: '超值',
    tagColor: '#6C5CE7'
  },
  {
    id: 'mp4',
    name: '年度管家',
    price: 2999,
    originalPrice: 3999,
    period: '年',
    desc: '全年不限次服务，专属管家一对一',
    features: ['全年不限次上门', '优先预约通道', '专属管家一对一', '免费年度体检'],
    tag: '尊享',
    tagColor: '#E056A0'
  }
];

// 用户信息
const userInfo = {
  nickname: '铲屎官小李',
  avatar: '🐱',
  phone: '138****8888',
  memberLevel: '黄金会员',
  memberCard: '🥇',
  remainingServiceCount: 5,
  orderCounts: {
    pendingPayment: 2,
    pendingService: 1,
    inProgress: 1,
    completed: 2,
    cancelled: 1
  }
};

// ------ 服务报告 Mock ------
const reports = [
  {
    id: 'r1',
    orderId: 'o5',
    serviceName: '贵宾/比熊造型',
    serviceIcon: '✂️',
    serviceBg: '#FDF0F7',
    petName: '布丁',
    petType: 'dog',
    serviceDate: '2026-05-12',
    timeLabel: '上午 9:00-12:00',
    staffName: '王管家',
    staffAvatar: '👨',
    beforePhotos: [],
    afterPhotos: [],
    summary: '本次为布丁进行了全身修剪+圆头造型。布丁非常配合，美容过程顺利。修剪完成后整体效果蓬松可爱，主人非常满意。使用了低敏护毛素，毛发柔顺有光泽。',
    suggestions: '1. 建议每周梳理毛发2-3次，预防打结\n2. 夏季建议每4-6周修剪一次保持清爽\n3. 注意耳部清洁，每周检查一次\n4. 可搭配护毛喷雾日常维护',
    rating: 5,
    tags: ['修剪精细', '态度好', '宠物配合']
  }
];

// ------ 优惠券增强 ------
const couponsAll = [
  {
    id: 'c1',
    title: '新用户首单8折',
    condition: '满100元可用',
    type: 'percent',
    value: 20,
    expireDate: '2026-06-30',
    status: 'available'
  },
  {
    id: 'c2',
    title: '满199减30',
    condition: '满199元可用',
    type: 'amount',
    value: 30,
    expireDate: '2026-05-31',
    status: 'available'
  },
  {
    id: 'c3',
    title: '上门喂养专享券',
    condition: '仅限上门喂养服务',
    type: 'amount',
    value: 15,
    expireDate: '2026-06-15',
    status: 'available'
  },
  {
    id: 'c4',
    title: '洗护满减券',
    condition: '满200元可用',
    type: 'amount',
    value: 40,
    expireDate: '2026-05-20',
    status: 'available'
  },
  {
    id: 'c5',
    title: '老客回馈8折',
    condition: '不限金额',
    type: 'percent',
    value: 20,
    expireDate: '2026-04-30',
    status: 'used'
  },
  {
    id: 'c6',
    title: '周末专享券',
    condition: '仅限周末服务',
    type: 'amount',
    value: 20,
    expireDate: '2026-05-01',
    status: 'used'
  },
  {
    id: 'c7',
    title: '新人专享100元',
    condition: '满500元可用',
    type: 'amount',
    value: 100,
    expireDate: '2026-03-31',
    status: 'expired'
  },
  {
    id: 'c8',
    title: '春季优惠券',
    condition: '满150元可用',
    type: 'amount',
    value: 25,
    expireDate: '2026-04-15',
    status: 'expired'
  }
];

function getPetProfiles() {
  return petProfiles;
}

function getPetProfile(id) {
  return petProfiles.find(p => p.id === id) || null;
}

function getAddresses() {
  return addresses;
}

function getCoupons() {
  return coupons;
}

function getAllCoupons() {
  return couponsAll;
}

function getCouponsByStatus(status) {
  return couponsAll.filter(c => c.status === status);
}

function getOrders() {
  return orders;
}

function getOrdersByStatus(status) {
  if (!status || status === 'all') return orders;
  return orders.filter(o => o.status === status);
}

function getOrderDetail(orderId) {
  return orders.find(o => o.id === orderId) || null;
}

function getMemberInfo() {
  return memberInfo;
}

function getMemberLevels() {
  return memberLevels;
}

function getMemberPurchaseHistory() {
  return memberPurchaseHistory;
}

function getMemberPackages() {
  return memberPackages;
}

function getUserInfo() {
  return userInfo;
}

function getReportById(reportId) {
  return reports.find(r => r.id === reportId) || null;
}

function getReportByOrderId(orderId) {
  return reports.find(r => r.orderId === orderId) || null;
}

function getReports() {
  return reports;
}


// ====== 动态日期工具（解决 mock 日期硬编码问题）======

function getDynamicOrders() {
  const today = new Date();
  return orders.map((o, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (orders.length - i) * 2);
    return Object.assign({}, o, {
      date: formatDateStr(d),
      createdAt: formatDateStr(d) + ' ' + ['08:00','10:00','14:00','16:00'][i % 4],
    });
  });
}

function getDynamicCoupons() {
  const now = new Date();
  return couponsAll.map(c => {
    const expire = new Date(c.expireDate);
    let actualStatus = c.status;
    if (c.status === 'available' && expire < now) actualStatus = 'expired';
    if (c.status === 'expired' && expire >= now) actualStatus = 'available';
    return Object.assign({}, c, { status: actualStatus });
  });
}

function getDynamicCouponsByStatus(status) {
  const all = getDynamicCoupons();
  if (!status || status === 'all') return all;
  return all.filter(c => c.status === status);
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return false;
  order.status = newStatus;
  const labels = { pending_payment: '待支付', pending_service: '待服务', in_progress: '服务中', completed: '已完成', cancelled: '已取消' };
  order.statusLabel = labels[newStatus] || order.statusLabel;
  return true;
}

module.exports = {
  banners,
  notices,
  services,
  serviceItems,
  packages,
  trustItems,
  cases,
  reviews,
  petProfiles,
  addresses,
  coupons,
  orders,
  memberInfo,
  memberLevels,
  memberPurchaseHistory,
  memberPackages,
  userInfo,
  reports,
  couponsAll,
  getServicesByCategory,
  getServiceDetail,
  getServiceReviews,
  getPetProfiles,
  getPetProfile,
  getAddresses,
  getCoupons,
  getAllCoupons,
  getCouponsByStatus,
  getAvailableDates,
  getOrders,
  getOrdersByStatus,
  getOrderDetail,
  getMemberInfo,
  getMemberLevels,
  getMemberPurchaseHistory,
  getMemberPackages,
  getUserInfo,
  getReportById,
  getReportByOrderId,
  getDynamicOrders,
  getDynamicCoupons,
  getDynamicCouponsByStatus,
  updateOrderStatus,
  getReports
};
