const mock = require('../../../utils/mock');

const BREEDS = {
  cat: ['橘猫', '布偶猫', '英短', '美短', '暹罗猫', '缅因猫', '波斯猫', '加菲猫', '中华田园猫', '其他'],
  dog: ['柯基', '泰迪', '比熊', '金毛', '拉布拉多', '哈士奇', '柴犬', '萨摩耶', '边牧', '其他']
};

Page({
  data: {
    isEdit: false,
    petId: null,
    form: {
      name: '',
      type: 'cat',
      breed: '',
      gender: 'male',
      age: '',
      weight: '',
      avatar: '',
      avatarBg: '#FFF4EF',
      vaccinated: true,
      allergiesText: '',
      personality: [],
      notes: ''
    }
  },

  onLoad(options) {
    const { id } = options;
    if (id) {
      const pet = mock.getPetProfile(id);
      if (pet) {
        this.setData({
          isEdit: true,
          petId: id,
          form: {
            name: pet.name,
            type: pet.type,
            breed: pet.breed,
            gender: pet.gender,
            age: String(pet.age),
            weight: String(pet.weight),
            avatar: pet.avatar,
            avatarBg: pet.avatarBg,
            vaccinated: pet.vaccinated,
            allergiesText: pet.allergies ? pet.allergies.join('、') : '',
            personality: pet.personality || [],
            notes: pet.notes || ''
          }
        });
        wx.setNavigationBarTitle({ title: '编辑档案' });
      }
    }
  },

  handleInput(e) {
    const { field } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`form.${field}`]: value
    });
  },

  handleAvatarTap() {
    const emojis = ['🐱', '🐶', '😺', '🐕', '🐈', '🐾'];
    wx.showActionSheet({
      itemList: emojis,
      success: (res) => {
        const bgColors = ['#FFF4EF', '#FEF5E7', '#F0EEFC', '#EBF5FB', '#FDF0F7', '#EDFAF9'];
        this.setData({
          'form.avatar': emojis[res.tapIndex],
          'form.avatarBg': bgColors[res.tapIndex]
        });
      }
    });
  },

  handleTypeSelect(e) {
    const { value } = e.currentTarget.dataset;
    this.setData({
      'form.type': value,
      'form.breed': ''
    });
  },

  handleBreedTap() {
    const { type, breed } = this.data.form;
    const breeds = BREEDS[type] || BREEDS.cat;
    wx.showActionSheet({
      itemList: breeds,
      success: (res) => {
        this.setData({
          'form.breed': breeds[res.tapIndex]
        });
      }
    });
  },

  handleGenderSelect(e) {
    const { value } = e.currentTarget.dataset;
    this.setData({ 'form.gender': value });
  },

  handleVaccinatedChange(e) {
    this.setData({ 'form.vaccinated': e.detail.value });
  },

  handlePersonalityTag(e) {
    const { tag } = e.currentTarget.dataset;
    let personality = [...this.data.form.personality];
    const idx = personality.indexOf(tag);
    if (idx !== -1) {
      personality.splice(idx, 1);
    } else {
      personality.push(tag);
    }
    this.setData({ 'form.personality': personality });
  },

  handleSave() {
    const form = this.data.form;
    if (!form.name.trim()) {
      wx.showToast({ title: '请填写宠物名', icon: 'none' });
      return;
    }
    if (!form.breed) {
      wx.showToast({ title: '请选择品种', icon: 'none' });
      return;
    }
    if (!form.age) {
      wx.showToast({ title: '请填写年龄', icon: 'none' });
      return;
    }
    if (!form.weight) {
      wx.showToast({ title: '请填写体重', icon: 'none' });
      return;
    }

    wx.showToast({
      title: this.data.isEdit ? '保存成功' : '添加成功',
      icon: 'success'
    });

    setTimeout(() => {
      wx.navigateBack();
    }, 1500);
  },

  handleDelete() {
    wx.showModal({
      title: '确认删除',
      content: '确定要删除「' + this.data.form.name + '」的档案吗？',
      confirmColor: '#E74C3C',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已删除', icon: 'success' });
          setTimeout(() => {
            wx.navigateBack();
          }, 1500);
        }
      }
    });
  }
});