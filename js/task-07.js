const changeInput = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')

changeInput.addEventListener('input', event => {
    abracadabra.style.fontSize = `${event.target.value}px`
}
)

