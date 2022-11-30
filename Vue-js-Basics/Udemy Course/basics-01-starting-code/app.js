// Initialize the Vue app
const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish this course and",
      targetGoal1: "Learn Vue!",
      targetGoal2: "Master Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.targetGoal1;
      } else {
        return this.targetGoal2;
      }
    },
  },
});
// Mount vue to target html element
app.mount("#user-goal");
