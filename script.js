const track = document.querySelector('.card-box')

document.querySelector('.right').onclick = () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' })

    document.querySelector('.left').onclick = () => {
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' })
    }
}
