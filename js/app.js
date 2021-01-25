import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            flashCards:[],
            startCard: false,
            question:'',
            answer:'',
            editingCard: undefined
        }
    },
    methods:{
        showCard(){
            this.startCard = !this.startCard
            this.answer = ''
            this.question = ''
        },

        editCard(flashCard){
            this.editingCard = flashCard
            this.startCard = true
            this.question = flashCard.question
            this.answer = flashCard.answer
        },

        addCard(){
            if (this.editingCard){
                this.editingCard.question = this.question
                this.editingCard.answer = this.answer
                this.editingCard = undefined
                return
            }

                const newCard = {
                    question: this.question, 
                    answer: this.answer,
                    showAnswer: false,
                    editCard: false,
                }

            this.flashCards.unshift(newCard)
            this.startCard = false
        },

        hideShowAnswer(flashcard){
            flashcard.showAnswer = !flashcard.showAnswer
        },
        
        deleteCard(flashcard) {
           this.flashCards = this.flashCards.filter(card =>{
               return card != flashcard
           })
        },

    }
})

app.mount('#app')

