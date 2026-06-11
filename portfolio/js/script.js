

let funFactsArr = [
    "I sing in a folk band",
    "I recently achieved a childhood goal of, learning to juggle",
    "I have a cat named Harriet, after Harriet The Spy",
    "<img src='images/Harriet.jpg' width='100%' alt='My cat harriet snoozing while cuddling a playstation controller.'/>",
    "I love a DIY home renovation project! I have tackled everything from structural changes to full room and bathroom remodels",
    "I have a dog named skittles",
    "<img src='images/skits.jpg' width='100%' alt='My dog sitting in the driver seat of my car.'/>",
    "I have a green thumb… but only for plants. Flowers and I are not on speaking terms."
];
const funfactId = document.getElementById("fun-fact");
let counter = 0;
function cycleFactsArr(array) {
        if (counter <= array.length -1) {
            let currentFact = array[counter];
            counter++
            funfactId.innerHTML =currentFact;
        }
        if (counter === array.length) {
            return counter = 0; 
        }
    }
cycleFactsArr(funFactsArr)
setInterval (( ) => {
cycleFactsArr(funFactsArr)}, 20000);