Component({
  properties: {
    services: {
      type: Array,
      value: []
    }
  },

  methods: {
    onTapService(e) {
      const { id, name } = e.currentTarget.dataset;
      this.triggerEvent('select', { id, name });
    }
  }
});
