const app = Vue.createApp({
    data() {
      return {
        output: "Hello!!!"
      };
    },
    methods: {
      ShowAlert() {
        alert("Button pressed.");
      },
      UpdateOutput(event) {
        this.output = event.target.value;
      }
    },
  });
  
  app.mount("#assignment");
  