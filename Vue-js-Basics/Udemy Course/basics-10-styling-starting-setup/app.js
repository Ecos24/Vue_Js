const app = Vue.createApp({
  data() {
    return {
      box1Selected: false,
      box2Selected: false,
      box3Selected: false,
      box4Selected: false
    };
  },
  computed: {
    box4Styling(){
        return {selected: this.box4Selected};
    }
  },
  methods: {
    boxSelected(boxX) {
      console.log("boxSelected(" + boxX + ")");
      if (boxX == 1) this.box1Selected = !this.box1Selected;
      else if (boxX == 2) this.box2Selected = !this.box2Selected;
      else if (boxX == 3) this.box3Selected = !this.box3Selected;
      else if (boxX == 4) this.box4Selected = !this.box4Selected;
    },
  },
});

app.mount("#styling");
