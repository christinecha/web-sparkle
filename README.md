# ✨ Web Sparkle ✨
**Cha's magic toolbox of web sparkles.**

Here's some lightweight modules to add some ✨ sparkle ✨ (read: finesse) to your websites.
Use each of the packages below to improve important details like website performance,
code style/quality, visual polish, and animations.

### Usage
You can install everything all at once (since it's quite small anyway):

```sh
$ npm install web-sparkle
```

```js
const SPARKLE = require('web-sparkle')

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
```

Or you can go to each link below and install them separately. Up to you.

Built with 💛 by (Christine) Cha. Pull requests welcome!

---

### [cross-browser-resize](https://github.com/christinecha/web-sparkle/tree/master/packages/cross-browser-resize)
Eliminate unnecessary resize event handling on mobile browsers.

🏋 Performance  
🏆 Visual Polish

---

### [css-scroll](https://github.com/christinecha/web-sparkle/tree/master/packages/css-scroll)
Forget that jittery JS-powered animated scroll. Get it buttery smooth (and super performant!) with some CSS magic.

🏆 Visual Polish  
🎪 Animation

---

### [get-prefixed-style](https://github.com/christinecha/web-sparkle/tree/master/packages/get-prefixed-style)
A super simple method to grab the correct (prefixed or not) style property name for your browser.

💄 Code Style

---

### [resize-scroll-handler](https://github.com/christinecha/web-sparkle/tree/master/packages/resize-scroll-handler)
No more long frames. Stop repainting the browser all the time, and only fire window events once.

🏋 Performance  

---

### [scrolled-past](https://github.com/christinecha/web-sparkle/tree/master/packages/scrolled-past)
Implement easy-peasy CSS-based scroll-triggered animation (or whatever you want).

🏋 Performance  
🏆 Visual Polish  
🎪 Animation

---

### [universal-gallery](https://github.com/christinecha/web-sparkle/tree/master/packages/universal-gallery)
Super generic, unopinionated base gallery that can be styled to pretty much any layout & animation you'll ever need.

🏋 Performance  
🏆 Visual Polish  
🎪 Animation

---

### [vh-for-mobile](https://github.com/christinecha/web-sparkle/tree/master/packages/vh-for-mobile)
Using VH as a CSS unit in mobile browsers causes a lot of problems. Fix them.

🏋 Performance  
🏆 Visual Polish
