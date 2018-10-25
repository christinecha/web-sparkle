import CSSScroll from '../index'

document.addEventListener('click', (e) => {
  let target

  if (e.target.classList.contains('scroll-down')) {
    target = document.body.clientHeight
  } else if (e.target.classList.contains('scroll-up')) {
    target = 0
  } else {
    return
  }

  CSSScroll(target, 800, document.body)
})
