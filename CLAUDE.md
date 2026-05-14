# 线上宠物服务商店 — 微信小程序

## 项目概述
天津首家全场景宠物到家服务小程序。核心解决"没时间、不会弄、不放心"三大痛点。

## 技术栈
- 框架：原生微信小程序开发
- 语言：JavaScript / WXML / WXSS
- 数据：Mock 数据优先，后期对接 API
- 工具：微信开发者工具

## 项目结构
```
petcare/
├── app.js                 # 全局逻辑
├── app.json               # 全局配置
├── app.wxss               # 全局样式
├── project.config.json    # 项目配置
├── pages/
│   ├── home/              # 首页
│   │   └── index          # (wxml/wxss/js/json)
│   ├── service/           # 服务详情
│   │   └── detail
│   ├── order/             # 预约下单
│   │   └── create
│   ├── pet/               # 宠物档案
│   │   ├── list
│   │   └── edit
│   ├── user/              # 个人中心 / 我的
│   │   ├── index
│   │   ├── orders
│   │   ├── member
│   │   └── coupons
│   ├── report/            # 服务报告
│   │   └── detail
│   ├── case/              # 案例详情
│   │   └── detail
│   └── package/           # 套餐详情
│       └── detail
├── components/            # 公共组件
│   ├── banner/            # 轮播组件
│   ├── service-grid/      # 分类宫格
│   ├── package-card/      # 套餐卡片
│   ├── trust-bar/         # 信任横条
│   ├── case-card/         # 案例卡片
│   ├── calendar-picker/   # 日历选择器
│   ├── pet-selector/      # 宠物选择器
│   └── address-picker/    # 地址选择器
├── utils/                 # 工具函数
│   ├── api.js             # 接口封装
│   ├── util.js            # 通用工具
│   └── mock.js            # Mock数据
├── images/                # 静态资源
└── styles/                # 全局样式变量
    └── variables.wxss
```

## 页面路由
| 页面 | 路由 | 标题 |
|------|------|------|
| 首页 | /pages/home/index | 宠管家·上门宠物服务 |
| 服务详情 | /pages/service/detail?id=xxx | [服务名称] |
| 预约下单 | /pages/order/create | 确认预约 |
| 订单详情 | /pages/order/detail?id=xxx | 订单详情 |
| 服务报告 | /pages/report/detail?id=xxx | 服务报告 |
| 宠物列表 | /pages/pet/list | 我的宠物 |
| 宠物编辑 | /pages/pet/edit?id=xxx | 宠物档案 |
| 个人中心 | /pages/user/index | 我的 |
| 我的订单 | /pages/user/orders | 我的订单 |
| 会员中心 | /pages/user/member | 我的会员 |
| 优惠券 | /pages/user/coupons | 优惠券 |
| 案例详情 | /pages/case/detail?id=xxx | 案例详情 |
| 套餐详情 | /pages/package/detail?id=xxx | 套餐详情 |

## 编码规范
- 组件名与文件名一致，使用 kebab-case
- API 封装在 utils/api.js 中，统一请求入口
- Mock 数据集中在 utils/mock.js
- WXSS 使用全局变量（styles/variables.wxss）
- 页面级事件处理函数统一以 `on` / `handle` 开头
- 所有文本内容优先使用占位符，后期替换为真实数据

## 品牌信息
- 品牌名：宠管家
- Slogan：宠物家庭管家
- 副标题：天津全场景宠物到家服务
- 核心卖点：全程录像、保险兜底、不满意退款、持证上岗

## 项目状态 — 全部完成 ✅（2026-05-14）

### 阶段1：项目脚手架 + 首页 ✅
- 项目目录结构、app.json/app.js/app.wxss、全局样式变量
- 首页：轮播 banner、分类宫格、案例展示、信任横条、底部导航
- 组件：banner, service-grid, trust-bar, case-card, package-card
- TabBar：首页 / 服务 / 预约 / 我的

### 阶段2：服务列表 + 服务详情 ✅
- pages/service/list/ — 分类Tab切换 + 服务卡片列表
- pages/service/detail/ — 头图、价格、套餐、流程、介绍、温馨提示、评价、底部预约
- 组件样式完善：service-grid(8格宫格)、trust-bar(信任横条)、package-card(套餐卡片)、case-card(瀑布流)
- Mock数据：utils/mock.js 857行

### 阶段3：预约下单 + 宠物档案 ✅
- pages/order/create/ — 预约下单完整流程（服务信息→宠物选择→日期日历→时段→地址→备注→优惠券→价格汇总→提交，963行）
- pages/pet/list/ — 宠物列表（卡片+空状态）
- pages/pet/edit/ — 宠物档案编辑（头像/品种搜索/性格标签/疫苗等完整表单，607行）
- Bug修复：TabBar导航switchTab、日期选择器联动、防御性渲染

### 阶段4：个人中心 + 订单 + 报告 + 详情 ✅
- pages/user/index/ — 个人中心：用户信息头部(渐变背景+头像+会员标签)、订单快捷入口(4状态统计)、7项功能菜单(订单/宠物/会员/报告/优惠券/地址/客服/设置)
- pages/user/orders/ — 我的订单：6状态Tab(全部/待支付/待服务/进行中/已完成/已取消)、订单卡片(服务信息+时间+地址+管家+价格+操作按钮)、空状态
- pages/user/member/ — 会员中心：会员卡片(渐变背景+等级+剩余次数+进度条)、4大权益显示、等级体系说明(消费门槛+折扣)、购买记录、推荐套餐
- pages/user/coupons/ — 优惠券：3Tab(可用/已用/已过期)、渐变金额展示、分割线+状态徽章、空状态引导
- pages/order/detail/ — 订单详情：状态区(5状态不同背景色+提示语)、服务信息卡、服务管家、时间地址详情、价格明细(原价→优惠→实付)、底部操作按钮
- pages/report/detail/ — 服务报告：服务信息头部、宠物+时间+管家+评分基本信息、服务前/后照片占位、标签、服务小结、下次建议、再次预约

### 文件统计
| 类别 | 数量 | 行数 |
|------|------|------|
| pages (14页面: home, service/list, service/detail, order/create, order/detail, report/detail, pet/list, pet/edit, user/index, user/orders, user/member, user/coupons, case/detail, package/detail) | 56个文件 | ~6400行 |
| components (5个: banner, service-grid, trust-bar, case-card, package-card) | 20个文件 | ~850行 |
| utils (api.js, util.js, mock.js) | 3个文件 | ~950行 |
| 全局文件 (app.js, app.json, app.wxss, project.config.json, styles/variables.wxss) | 5个文件 | ~200行 |
| **总计** | **~84个文件** | **~8400行** |

### 页面路由（14页面全部注册在 app.json）
| 页面 | 路由 | 标题 |
|------|------|------|
| 首页 | /pages/home/index | 宠管家·上门宠物服务 |
| 服务列表 | /pages/service/list | 上门服务 |
| 服务详情 | /pages/service/detail?id=xxx | [服务名称] |
| 预约下单 | /pages/order/create | 确认预约 |
| 订单详情 | /pages/order/detail?id=xxx | 订单详情 |
| 服务报告 | /pages/report/detail?id=xxx | 服务报告 |
| 宠物列表 | /pages/pet/list | 我的宠物 |
| 宠物编辑 | /pages/pet/edit?id=xxx | 宠物档案 |
| 个人中心 | /pages/user/index | 我的 |
| 我的订单 | /pages/user/orders | 我的订单 |
| 会员中心 | /pages/user/member | 我的会员 |
| 优惠券 | /pages/user/coupons | 优惠券 |
| 案例详情 | /pages/case/detail?id=xxx | 案例详情（占位） |
| 套餐详情 | /pages/package/detail?id=xxx | 套餐详情（占位） |

### 注意：空白页面/组件
以下页面和组件在阶段1中创建了目录但尚未填充内容：
- **pages/case/detail/** — 案例详情页（路由已注册，目录为空）
- **pages/package/detail/** — 套餐详情页（路由已注册，目录为空）
- **components/calendar-picker/** — 日历选择器组件（未创建）
- **components/pet-selector/** — 宠物选择器组件（未创建）
- **components/address-picker/** — 地址选择器组件（未创建）
