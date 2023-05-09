
let counterValue = 0;

const counter = document.querySelector('#value');
const buttonDecr = document.querySelector('button[data-action="decrement"]');
const buttonIncr = document.querySelector('button[data-action="increment"]');

buttonDecr.addEventListener('click', () => {
    counterValue -=1
    counter.textContent = counterValue
})

buttonIncr.addEventListener('click', () => {
    counterValue +=1
    counter.textContent = counterValue
})