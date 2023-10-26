const todos = [
    {
        text: 'Fare il bucato',
        done: true
    }, {
        text: 'Stendere il bucato',
        done: false
    }, {
        text: 'Terminare esercizio del giorno',
        done: false
    }, {
        text: 'Preparare la cena',
        done: true
    }
];

console.log(todos);

const { createApp } = Vue;

createApp({
    data () {
        return {
            inputValue: '',

            todos: [
                {
                    text: 'Fare il bucato',
                    done: true
                }, {
                    text: 'Stendere il bucato',
                    done: false
                }, {
                    text: 'Terminare esercizio del giorno',
                    done: false
                }, {
                    text: 'Preparare la cena',
                    done: true
                }
            ]
        }
    }, methods: {
        
        addTask(inputValue) {
            console.log(this.inputValue)

            if(inputValue !== ''){
                const myObject = {
                    text: inputValue,
                    done: false
                }
    
                this.todos.push(myObject)
    
                this.inputValue = ''
            } else {
                alert('riprova')
            }

        },

        deletesTask(index) {
            this.todos.splice(index, 1)
        },

        changeTaskStatus(task){
            task.done = !task.done;
        }
    }, mounted() {
        console.log('VUE OK')
    }
}).mount('#app');