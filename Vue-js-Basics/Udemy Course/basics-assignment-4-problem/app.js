const app = Vue.createApp({
  data() {
    return {
      styleEntered: "",
      toggleP: true,
      bgcolor: ''
    };
  },
  computed: {
    toggleParagraph() {
      if (this.toggleP) return "visible";
      else return "hidden";
    },
  },
  methods: {
    StyleP(event) {
      const styleClass = event.target.value;
      if (styleClass == "user1" || styleClass == "user2")
        this.styleEntered = styleClass;
      else this.styleEntered = "";
    },
    TogglePara() {
      this.toggleP = !this.toggleP;
    },
  },
});

app.mount("#assignment");
