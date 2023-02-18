function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const monterslayer = Vue.createApp({
  data() {
    return {
      maxPlayerHealth: 150,
      playerHealth: 150,
      maxMonsterHealth: 200,
      monsterHealth: 200,
    };
  },
  computed: {
    monsterHealthStyle(){
        return {width: ((this.monsterHealth/this.maxMonsterHealth)*100) + '%'};
    },
    playerHealthStyle(){
        return {width: ((this.playerHealth/this.maxPlayerHealth)*100) + '%'};
    }
  },
  methods: {
    playerAttack() {
      this.monsterHealth -= getRandomValue(10, 30);
      this.monsterAttack();
    },
    monsterAttack() {
        this.playerHealth -= getRandomValue(2, 50);
      }
  },
});

monterslayer.mount("#game");
