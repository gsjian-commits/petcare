const mock = require('../../../utils/mock');

Page({
  data: {
    pets: []
  },

  onShow() {
    const pets = mock.getPetProfiles();
    this.setData({ pets });
  },

  handlePetTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/pet/edit?id=${id}`
    });
  },

  handleAddPet() {
    wx.navigateTo({
      url: '/pages/pet/edit'
    });
  }
});