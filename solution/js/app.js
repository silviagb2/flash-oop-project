import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            isAddCardVisible: false,
            showError: false,
            flashCards: [],
            question: '',
            answer: '',
            editingCard: undefined
        }
    },
    mounted() {
        let savedFlashs = localStorage.getItem('saved-flashcards')
        if (savedFlashs) {
            this.flashCards = JSON.parse(savedFlashs)
        }
        console.log('load: ', this.flashCards)
    },
    methods: {
        showAddFlashCard() {
            this.isAddCardVisible = true
        },
        closeFlashCard() {
            this.isAddCardVisible = false
            this.showError = false
        },
        toggleShowAnswer(card) {
            card.showCard = !card.showCard
        },
        addNewCard() {
            if (!this.question || !this.answer) {
                this.showError = true
                return
            }

            if (this.editingCard) {
                this.editingCard.question = this.question
                this.editingCard.answer = this.answer
            }

            else {

                this.flashCards.unshift({
                    id: nanoid(),
                    question: this.question,
                    answer: this.answer,
                    showCard: false
                })

            }
            this.showError = false
            this.question = ""
            this.answer = ""
            this.isAddCardVisible = false
        },
        editCard(card) {
            this.isAddCardVisible = true
            this.question = card.question
            this.answer = card.answer
            this.editingCard = card
        },
        removeCard(theCard) {
            this.flashCards = this.flashCards.filter(card => card !== theCard)
        }
    },
    watch: {
        flashCards: {
            handler(value) {
                console.log('flashcards watch:', value)
                let toLocalStorage = JSON.stringify(value)
                localStorage.setItem('saved-flashcards', toLocalStorage)
            },
            deep: true
        },

    }
})

app.mount('#app')