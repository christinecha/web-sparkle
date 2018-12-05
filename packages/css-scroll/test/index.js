const CSSScroll = require('../index')

document.addEventListener('click', function(e) {
  var target

  if (e.target.classList.contains('scroll-down')) {
    target = document.body.clientHeight
  } else if (e.target.classList.contains('scroll-up')) {
    target = 0
  } else {
    return
  }

  CSSScroll(target, 800, document.body)
})
