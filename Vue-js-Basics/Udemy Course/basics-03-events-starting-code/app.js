const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      nameLast: "",
      //fullName: "",
    };
  },
  computed: {
    fullName() {
      console.log('Computed Property fullName running.');
      if( this.name == '' || this.lastName == '' )
      {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  watch: {
    /*name(newValue, oldValue)
    {
      console.log(oldValue + ' > ' + newValue);
      if(newValue.match('Divyang'))
        this.fullName = newValue + ' ' + this.lastName;
      else
        this.fullName = '';
    }*/
    counter(newValue, oldValue){
      if (newValue > 30)
      { this.counter = 30; }
      else if (newValue < 0)
      { this.counter = 0; }
    }
  },
  methods: {
    addCounter(num) {
      this.counter = this.counter + num;
    },
    reduceCounter(num) {
      this.counter = this.counter - num;
    },
    /*updateName(event) {
      this.name = event.target.value;
    },*/
    updateWithLastName(event, lastName) {
      this.nameLast = event.target.value + " " + lastName;
    },
    Register() {
      alert("Registration completed");
    },
    ResetInput() {
      this.name = '';
    },
    OutputFullName() {
      console.log('Fundtion OutputFullName running.');
      if( this.name == '' )
      {
        return '';
      }
      return this.name + ' ' + 'Tyagi';
    }
  },
});

app.mount("#events");
