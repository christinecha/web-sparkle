const ResizeScrollHandler = require('../index')

const handler = new ResizeScrollHandler()
const $resizeHeader = document.getElementById('resize-header')
const $scrollHeader = document.getElementById('scroll-header')

handler.on('resize', () => {
  $resizeHeader.textContent = 'window dimensions: ' + handler.vw + ' x ' + handler.vh
})

handler.on('scroll', () => {
  $scrollHeader.textContent = 'window.pageYOffset: ' + handler.currentPageYOffset + 'px'
})

handler.requestResize()
handler.requestScroll()
