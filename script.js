const options = document.getElementById('options-mobile')
const burguer = document.getElementById('burguer')

burguer.addEventListener('click', () => {
    burguer.classList.toggle('active')
    options.classList.toggle('active')
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const accordions = document.querySelectorAll('.accordion') // pega todos os elementos com a class accordion
const accordionsHeader = document.querySelectorAll('.accordion-header') // pega todos os elementos com a class accordion-header
const toggles = document.querySelectorAll('.toggle') // pega todos os elementos com a class toggle

toggles.forEach((toggle, index) => { // percorre todos os elementos com a class toggle
    toggle.addEventListener('click', () => { // adiciona um evento de click aos elementos com a class toggle
    accordions[index].classList.toggle('active') // adiciona a class active aos elementos com a class accordion
    })
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const track = document.querySelector('.card-box')

document.querySelector('.right').onclick = () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' })

    document.querySelector('.left').onclick = () => {
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' })
    }
}

const box = document.querySelector('.box-card-two')
const cards = box.children
const dotsContainer = document.getElementById('dots')


function updateDots() {
    Array.from(dots).forEach((dot, i) => {
        dot.classList.toggle('active', i === index)
    });
}

const cardsPerPage = 3
const totalDots = Math.ceil(cards.length / cardsPerPage)

for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button')
    dot.className = 'dot'
    dot.onclick = () => {
        box.scrollTo({
            left: cards[i * cardsPerPage].offsetLeft,
            behavior: 'smooth'
        })

        index = i
        updateDots()
    }

    dotsContainer.appendChild(dot)
}

const dots = dotsContainer.children

function goTo(i) {
    index = i
    box.scrollTo({
        left: cards[i].offsetLeft,
        behavior: 'smooth'
    })

    updateDots()
}