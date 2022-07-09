const playstationContainer = document.querySelector('.playstationContainer')
const xboxContainer = document.querySelector('.xboxContainer')

const hoverHandler = (e) => {
    e.target.parentNode.classList.add('hovered')
}

const unHoverHandler = (e) => {
    e.target.parentNode.classList.remove('hovered')
}

playstationContainer.addEventListener('mouseover', hoverHandler)
playstationContainer.addEventListener('mouseout', unHoverHandler)
xboxContainer.addEventListener('mouseover', hoverHandler)
xboxContainer.addEventListener('mouseout', unHoverHandler)