const { createApp } = Vue


createApp({
  data () {
    return {
      name: "tran bao dang",
      r1: '123456789',
      r2: 'abcdefghj',
      r3: 'klmnopqrs',
      r4: 'tuvxyz',
      pytagoNumber: [
        'ajs',
        'bkt',
        'clu',
        'dmv',
        'enx',
        'foy',
        'gpz',
        'hq',
        'ir'
      ]
    }
  },
  methods: {
    checkIndex(char) {
      for (let i = 0; i < this.pytagoNumber.length; i++) {
        if (this.pytagoNumber[i].includes(char)) {
          return i + 1
        }        
      }
    }
  }
}).mount('#app')