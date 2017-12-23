# universal-gallery
### A package within [web-sparkle](https://github.com/christinecha/web-sparkle).
The last gallery you'll never need. View-agnostic.

## Usage

````sh
$ npm install universal-gallery
````

````html
<div id="gallery">
  <div class="slide">Slide 1</div>
  <div class="slide">Slide 2</div>
  <div class="slide">Slide 3</div>
  <div class="slide">Slide 4</div>
  <div class="slide">Slide 5</div>
</div>
````

````js
const UniversalGallery = require('universal-gallery')

const $gallery = document.getElementById('gallery')

const handleSlide = (index, indexWithClones) => {
  // Do stuff with this information!
  // Ex. trigger another gallery to change slides
}

const gallery = new UniversalGallery({
  galleryNode: $gallery,    // DOMElement that is the parent container for your slides
  childSelector: '.slide',  // A CSS selector to grab your slides
  numOfClones: 1,           // Useful if you only have a few slides (explained further below)
  shouldAutoplay: true,     // Toggle autoplay (obvi)
  slideSpeed: 3000,         // Duration between each slide change (in milliseconds)
  handleChange: handleSlide // Called every time the slide index changes
})
````

---

## Reference

The idea behind this gallery is that it's the most unopinionated, generic base.
All we have is the bare-bones, core functionality:
- Change slide index (next, previous, or go to a specific one)
- Play / Pause
- Mark DOM Elements with "arrival" and "departure" indices (the previous slide has a departure index
  of 1, the current slide has arrival **and** departure indice of 0, and the next slide has an arrival
  index of 1, etc.)

All the styling can be done in the CSS, using `[data-arrival-index="n"]` and `[data-departure-index="n"]`
as selectors. This is (usually) going to be more performant than animating via JS, and also allows
you to use this same exact base gallery for all kinds of visually different gallery elements.

### new UniversalGallery(config)
Create a new instance of UniversalGallery. Pass in a config object, as specified below.

**Param: `config` object**

```
- galleryNode {DOMElement}     | The container element. [REQUIRED]
- childSelector {String}       | The selector for each element that should be updated. [REQUIRED]
- numOfClones {Number}         | How many clones we should make.
- slideSpeed {number}          | Number of milliseconds between slide changes
- shouldAutoplay {Boolean}     | Should it autoplay?
- handleChange {Function}      | Callback method on update, supplied with the current index (disregarding
                                 clones), and the index including clones.
```

---

## Development
To run the example locally, run the following commands:

```sh
npm install
npm run dev
npm start
```

---

## Credits
This readme is maintained by [hello@christinecha.com](mailto:hello@christinecha.com).

---

## License
MIT
