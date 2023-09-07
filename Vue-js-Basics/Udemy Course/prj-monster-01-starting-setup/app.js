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
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterHealthStyle()
    {
      if(this.monsterHealth < 0)
      {
        return { width: '0%' };
      }
      return {width: ((this.monsterHealth/this.maxMonsterHealth)*100) + '%'};
    },
    playerHealthStyle()
    {
      if(this.playerHealth < 0)
      {
        return { width: '0%' };
      }
      return {width: ((this.playerHealth/this.maxPlayerHealth)*100) + '%'};
    },
    specialAttackActive()
    {
      if(this.currentRound==0)
        return true;
      else if(this.currentRound%3 ==0)
        return false;
      else
        return true;
    }
  },
  watch: {
    playerHealth(value)
    {
      if(value <= 0 && this.monsterHealth <= 0)
      {
        this.winner = 'draw';
      }
      else if(value <= 0)
      {
        this.winner = 'monster';
      }
    },
    monsterHealth(value)
    {
      if(value <= 0 && this.playerHealth <= 0)
      {
        this.winner = 'draw';
      }
      else if(value <= 0)
      {
        this.winner = 'player';
      }
    }
  },
  methods: {
    startNewGame()
    {
      this.playerHealth = this.maxPlayerHealth;
      this.monsterHealth = this.maxMonsterHealth;
      this.winner = null;
      this.currentRound = 0;
      this.logMessages = [];
    },
    logActionBy(who)
    {
      if(who == 'player')
      {
        return 'log--player';
      }
      else if(who == 'monster')
      {
        return 'log--monster';
      }
    },
    playerAttack()
    {
      this.currentRound++;

      const attackValue = getRandomValue(10, 20);
      if( this.monsterHealth - attackValue < 0 )
      {
        this.monsterHealth = 0;
      }
      else
      {
        this.monsterHealth -= attackValue;
      }
      // Add Log
      this.addLogMessage('player', 'attack', attackValue);
      // Monster attack player
      this.monsterAttack();
    },
    monsterAttack()
    {
      const attackValue = getRandomValue(2, 30);
      if( this.playerHealth - attackValue < 0 )
      {
        this.playerHealth = 0;
      }
      else
      {
        this.playerHealth -= attackValue;
      }
      // Add Log
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttach()
    {
      this.currentRound++;
      const attackValue = getRandomValue(20, 50);
      this.monsterHealth -= attackValue;
      // Add Log
      this.addLogMessage('player', 'heavyAttack', attackValue);
      // Monster attack player
      this.monsterAttack();
    },
    healPlayer()
    {
      this.currentRound++;

      const healValue = getRandomValue(20,50);
      if(this.playerHealth + healValue > this.maxPlayerHealth)
      {
        this.playerHealth = this.maxPlayerHealth;
      }
      else
      {
        this.playerHealth += healValue;
      }
      // Add Log
      this.addLogMessage('player', 'heal', healValue);
      // Monster attack player
      this.monsterAttack();
    },
    surrender()
    {
      // Add Log
      this.addLogMessage('player', 'surrendered', null);
      this.winner = 'monster';
    },
    addLogMessage(who, what, value)
    {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  },
});

monterslayer.mount("#game");
