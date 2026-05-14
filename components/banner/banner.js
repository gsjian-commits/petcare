Component({
  properties: {
    banners: {
      type: Array,
      value: []
    },
    autoplay: {
      type: Boolean,
      value: true
    },
    interval: {
      type: Number,
      value: 3000
    },
    duration: {
      type: Number,
      value: 500
    }
  },

  data: {
    currentIndex: 0
  },

  methods: {
    onSwiperChange(e) {
      this.setData({
        currentIndex: e.detail.current
      });
    },

    onTapCTA() {
      this.triggerEvent('ctatap', {
        index: this.data.currentIndex
      });
    }
  }
});
