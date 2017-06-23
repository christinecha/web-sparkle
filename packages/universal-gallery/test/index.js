const UniversalGallery = require('../index')

const $gallery1 = document.getElementById('gallery-1')
const $gallery2 = document.getElementById('gallery-2')

const handleSlide = (index, indexWithClones) => {
  console.log(index, indexWithClones)
}

const gallery1 = new UniversalGallery({
  galleryNode: $gallery1,
  childSelector: '.slide',
  numOfClones: 1,
  shouldAutoplay: true,
  slideSpeed: 3000,
  handleChange: handleSlide
})

const gallery2 = new UniversalGallery({
  galleryNode: $gallery2,
  childSelector: '.slide',
  numOfClones: 2,
  shouldAutoplay: true,
  slideSpeed: 3000,
  handleChange: handleSlide
})
