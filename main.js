window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  changeNavOnScroll()
  showHomeButtonOnScroll()
}

function changeNavOnScroll() {
  if (scrollY > 30) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showHomeButtonOnScroll() {
  if (scrollY > 820) {
    homeButton.classList.add('show')
  } else {
    homeButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact header,
#contact .content,
footer
  `)
