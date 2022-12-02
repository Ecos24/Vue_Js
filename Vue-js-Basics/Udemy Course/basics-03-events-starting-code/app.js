const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      nameLast: "",
    };
  },
  methods: {
    addCounter(num) {
      if (this.counter < 30) this.counter = this.counter + num;
    },
    reduceCounter(num) {
      if (this.counter > 0) this.counter = this.counter - num;
    },
    updateName(event) {
      this.name = event.target.value;
    },
    updateWithLastName(event, lastName) {
      this.nameLast = event.target.value + " " + lastName;
    },
    Register(event) {
      event.preventDefault();
      alert("Registration completed");
    },
  },
});

app.mount("#events");
