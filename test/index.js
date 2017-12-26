const SPARKLE = require('../index')

const myFunction = () => {
  console.log('Hey dudes.')
}

// cross-browser-resize
SPARKLE.crossBrowserResize.addListener(myFunction)
SPARKLE.crossBrowserResize.removeListener(myFunction)

// css-scroll
SPARKLE.CSSScroll(2000, 800, document.body)

// get-prefixed-style
const transition = SPARKLE.getPrefixedStyle('transition')

// resize-scroll-handler
const handler = new SPARKLE.ResizeScrollHandler()
handler.on('resize', myFunction)

// scrolled-past
new SPARKLE.ScrolledPast(200)

// universal-gallery
new SPARKLE.UniversalGallery({
  galleryNode: document.getElementById('gallery'),
  childSelector: '.slide',
  numOfClones: 1,
  shouldAutoplay: true,
  slideSpeed: 3000,
  handleChange: myFunction
})

// vh-for-mobile
new SPARKLE.VHForMobile()
