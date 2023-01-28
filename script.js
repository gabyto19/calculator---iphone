const app = Vue.createApp({
  data() {
    return {
      buttons: [
        "AC",
        "+/-",
        "%",
        "÷",
        "7",
        "8",
        "9",
        "x",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "0",
        ".",
        "=",
      ],
      clickedNumber: "0",
      switcher: true,
      noIncludeNum: [0, 1, 2],
      saver: 0,
      savertwo: 0,
      symbol: "",
    };
  },
  computed: {},
  methods: {
    orrng(id) {
      if (id % 4 == 3 || id == this.buttons.length - 1) {
        return true;
      } else {
        return false;
      }
    },
    zero(id) {
      if (this.buttons[id] == "0") {
        return true;
      } else {
        return false;
      }
    },
    three(id) {
      if (id < 3) {
        return true;
      } else {
        return false;
      }
    },
    pickNum(idx) {
      if (this.clickedNumber[0] == "0") {
        this.clickedNumber = "";
      }
      if (idx > this.noIncludeNum.length - 1) {
        this.clickedNumber += this.buttons[idx];

        if (
          this.buttons[idx] == "÷" ||
          this.buttons[idx] == "+" ||
          this.buttons[idx] == "-" ||
          this.buttons[idx] == "*"
        ) {
          this.symbol = this.buttons[idx];
          this.saver = parseInt(this.clickedNumber);
          this.clickedNumber = this.saver;
          this.switcher = false;
          console.log(this.clickedNumber)
        }

        if (this.symbol != "" && this.switcher == false) {
          if (this.saver.toString().length < this.clickedNumber.length) {
            this.clickedNumber = this.buttons[idx];
            this.switcher = true;
          }
        }

      }
    },

    clValue(id) {
      if (this.buttons[id] == "AC") {
        this.clickedNumber = "0";
      } else if (this.buttons[id] == "%") {
        this.saver = parseInt(this.clickedNumber);
        this.saver = this.saver / 100;
        this.clickedNumber = this.saver;
      } else if (this.buttons[id] == "+/-") {
        this.saver = parseInt(this.clickedNumber);
        this.saver = this.saver - this.saver * 2;
        this.clickedNumber = this.saver;
      }
    },
  },
});

app.mount("#main");
