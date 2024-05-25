const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Trần Bảo Đăng",
      r1: "123456789",
      r2: "abcdefghj",
      r3: "klmnopqrs",
      r4: "tuvxyz",
      mainNumberOfChild: null,
      pytagoNumber: [
        "ajs",
        "bkt",
        "clu",
        "dmv",
        "enx",
        "foy",
        "gpz",
        "hq",
        "ir",
      ],
      keyNumber: null
    };
  },
  mounted () {
    this.keyNumber = keyNumbers
  },
  methods: {    
    checkIndex(char) {
      for (let i = 0; i < this.pytagoNumber.length; i++) {
        if (this.pytagoNumber[i].includes(char)) {
          return i + 1;
        }
      }
    },
    removeVietnameseAccents: function (str) {
      return str
        .split("")
        .map((char) => accentsMap[char] || char)
        .join("");
    },
    calculateMainNumber: function (str) {
      let i = 0;
      let text = ''
      let sum = 0
      while (str.length > 1) {
        text += str[i]
        sum += parseInt(str[i])
        if (i != str.length - 1) {
          text += ' + '
          i++
        } else if (i == str.length - 1) {
          text += ' = ' + sum + `${str.length != 2 ? ' = ' : ''}`
          i = 0
          str = sum.toString()
          this.mainNumberOfChild = sum
          if (sum === 11 || sum === 22 || sum === 33) {
            break
          }
          sum = 0;
        }        
      }
      return text
    }
  },

  computed: {
    mainNumber () {
      const nonAccentName = this.removeVietnameseAccents(this.name).toLowerCase()
      let str = ''
      for (const char of nonAccentName) {
        if (char.trim() != '') {
          str += this.checkIndex(char)
        }
      }
      return this.calculateMainNumber(str)
    },
  }
}).mount("#app");
