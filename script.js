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

/* let index = 0

Array.from(cards).forEach((_, i) => {
    const dot = document.createElement('button')
    dot.className = 'dot'
    dot.onclick = () => goTo(i)
    dotsContainer.appendChild(dot)
}) */



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