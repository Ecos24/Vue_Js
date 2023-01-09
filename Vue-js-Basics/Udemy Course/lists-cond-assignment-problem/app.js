const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            task: "",
            showTask: true,
            hideShowList: "Hide List",
        };
    },
    methods: {
        AddTask() {
            this.tasks.push(this.task);
            this.task = "";
        },
        HSList() {
            this.showTask = !this.showTask;
            if( this.showTask )
                this.hideShowList = "Hide List";
            else
                this.hideShowList = "Show List";
        }
    }
});

app.mount("#assignment");