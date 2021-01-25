# Flash Cards with Vue3

These flash cards are used to learn. Implement this app according to this [Demo](https://omiras.github.io/flash-oop-project/).

## Requeriments

1. When the user clicks on **Add Question**; the flash card shows up
   1. BONUS: In the demo there is a slight fade in animation you can implement. 
2. When the user clicks on the 'X'; the flash card is hidden.
3. Implement the add card funcionality. Both input controls must have some values. If any them are empty, show an error message like in the demo. Take into account that the data is submitted via a form. 
   1. Remember the correct place to set the **submit** event!
   2. Start by simple showing the error message if any of the input values are empty. Please notice that the error message is already located in the HTML
   3. You will need some variables in order to control which messages/elements must be displayed or hidden.
4. Show all the flash cards at the bottom of the page. BONUS: The last flash added should be the first one to be displayed. HINT: You don't really need to sort the array; but use the right array method to add the new element in sthep **3**.
5. Implement the 'DELETE' functionality. Remember that there are two ways to manage this requeriment:

```javascript
// Pass the generated flashcard id as a parameter
@click="removeCard(flashcard.id)"

// Pass all the flashcard object
@click="removeCard(flashcard)"
```

6. Implement the 'EDIT' funcionality. You can use the same 'ADD QUESTION' form, but you'll need to control wheter you are in edit mode or just addiding a new question
7. **BONUS**: Save all your generated cards in the [localStorage](https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5) object, so you can retrieve them whenever you come back to the app. A good place to load (if there is any) local storage data; is in the [mounted hook](https://v3.vuejs.org/api/options-lifecycle-hooks.html#mounted)
