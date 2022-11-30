const app = Vue.createApp({
    data() {
        return{
            name:   "Divyang",
            age:    26,
            image:  "https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/12/One-Piece-Wano-Country-Featured.jpg"
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        }
    }
});

app.mount('#assignment');