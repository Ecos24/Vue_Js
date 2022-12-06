const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter > 37) return "Too much!";
      else if (this.counter < 37) return "Not there yet";
      else return 37;
    },
  },
  watch: {
    result() {
        const ref = this;
        setTimeout( function(){
            ref.counter = 0
        }, 1000 )
    },
  },
  methods: {
    Add5() {
      this.counter = this.counter + 5;
    },
    Add1() {
      this.counter++;
    },
  },
});

app.mount("#assignment");
