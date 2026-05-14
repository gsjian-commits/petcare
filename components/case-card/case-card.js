Component({
  properties: {
    cases: {
      type: Array,
      value: []
    }
  },

  methods: {
    onTapCase(e) {
      const { id } = e.currentTarget.dataset;
      this.triggerEvent('select', { id });
    }
  }
});
