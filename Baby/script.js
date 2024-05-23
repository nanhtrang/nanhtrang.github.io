const { createApp } = Vue


createApp({
  data () {
    return {
      name: null,
      pytagoNumber: []
    }
  },
  method: {
    generatePytagoNumber: function () {
      this.pytagoNumber = [
        ['a', 'j', 's'],
        ['b', 'k', 't'],
        ['c', 'l', 'u'],
        ['d', 'm', 'v'],
        ['e', 'n', 'x'],
        ['f', 'o', 'y'],
        ['g', 'p', 'z'],
        ['h', 'q'],
        ['i', 'r'],
      ]
    }
  }
}).mount('#app')