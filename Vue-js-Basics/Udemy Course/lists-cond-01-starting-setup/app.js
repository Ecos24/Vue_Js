const app = Vue.createApp({
  data() {
    return { goals: [], goal: "" };
  },
  methods: {
    addGoals() {
      this.goals.push(this.goal);
      this.goal = "";
    },
    resetGoals() {
      this.goals = [];
    }
  },
});

app.mount("#user-goals");
