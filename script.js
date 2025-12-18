const options = document.getElementById('options-mobile')
const burguer = document.getElementById('burguer')

burguer.addEventListener('click', () => { // adiciona um evento de click ao elemento
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

document.querySelector('.right').onclick = () => { // adiciona um evento de click ao elemento
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }) // rola a página para a esquerda

    document.querySelector('.left').onclick = () => { // adiciona um evento de click ao elemento
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }) // rola a página para a esquerda
    }
}

const box = document.querySelector('.box-card-two')
const dotsContainer = document.getElementById('dots')
const cards = box.children // pega todos os elementos filhos do elemento com a class box-card-two


function updateDots() { // atualiza os pontos
    Array.from(dots).forEach((dot, i) => { // percorre todos os elementos com a class dot
        dot.classList.toggle('active', i === index) // adiciona a classe active aos elementos com a class dot
    })
}

const cardsPerPage = 3 // número de cartões por página
const totalDots = Math.ceil(cards.length / cardsPerPage) // número total de pontos

for (let i = 0; i < totalDots; i++) { // percorre todos os pontos
    const dot = document.createElement('button') // cria um elemento de botão
    dot.className = 'dot' // adiciona a class dot ao elemento
    dot.onclick = () => { // adiciona um evento de click ao elemento
        box.scrollTo({ // rola a página para a esquerda
            left: cards[i * cardsPerPage].offsetLeft, // posição do cartão
            behavior: 'smooth' // rola a página suavemente
        })

        index = i // atualiza o índice
        updateDots() // atualiza os pontos
    }

    dotsContainer.appendChild(dot) // adiciona o elemento de botão ao elemento com a class dots
}

const dots = dotsContainer.children // pega todos os elementos filhos do elemento com a class dots

function goTo(i) { // rola a página para a esquerda
    index = i // atualiza o índice
    box.scrollTo({
        left: cards[i].offsetLeft,
        behavior: 'smooth'
    })

    updateDots() // atualiza os pontos
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const instagram = document.getElementById('instagram') // pega o elemento com o id instagram

instagram.addEventListener('click', () => { // adiciona um evento de click ao elemento
    window.open('https://www.instagram.com/httpsfworkout', '_blank') // abre o link em uma nova aba
})