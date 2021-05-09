const menu = document.querySelector('#menu')
const menuIcon = document.querySelector('#menuIcon')
const menuItems = document.querySelector('#menuItems')
const closeIcon = document.querySelector('#closeIcon')

const handleMenu = () => {
    closeIcon.classList.toggle('hidden')
    menuItems.classList.toggle('hidden')
}

menu.addEventListener('click', handleMenu)

