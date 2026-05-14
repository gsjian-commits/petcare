Component({
  properties: {
    packages: {
      type: Array,
      value: []
    }
  },

  methods: {
    onTapPackage(e) {
      const { id } = e.currentTarget.dataset;
      this.triggerEvent('select', { id });
    }
  }
});
