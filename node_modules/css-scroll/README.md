# css-scroll
### A package within [web-sparkle](https://github.com/christinecha/web-sparkle).
Forget that jittery JS-powered animated scroll. Get it buttery smooth (and super performant!) with some CSS magic.

## Usage

````sh
$ npm install css-scroll
````

````js
var CSSScroll = require('css-scroll')

// Scroll down to a pageYOffset of 1800px, over 800ms, inside the document body.
CSSScroll(1800, 800, document.body)
````

---

## Reference

### CSSScroll(target, duration = 500, scrollElement = document.body)
This allows you to trigger a page scroll that is SMOOTH as BUTTER.
It's a non-blocking, hardward-accelerating scroll, since it's essentially just one
CSS transition. It works by taking a parent container (scrollElement) and moving it
in the opposite direction to fake a "scroll" motion.

**Params**

- target `Number` - A window.pageYOffset value you'd like to end up at.
- duration `Number` - The length of the transition in milliseconds.
- scrollElement `DOMElement` - The parent container that the fake scroll will be applied to.

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
