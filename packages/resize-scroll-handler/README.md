# resize-scroll-handler
### A package within [web-sparkle](https://github.com/christinecha/web-sparkle).
No more long frames. Stop repainting the browser all the time, and only fire window events once.

## Usage

````sh
$ npm install resize-scroll-handler
````

````js
const ResizeScrollHandler = require('resize-scroll-handler')

const handler = new ResizeScrollHandler()

// Add as many callbacks as you want without performing unnecessary
// browser reflows or taking up extra memory. Woohoo!

handler.on('resize', resizeCallback)
handler.on('resize', anotherResizeCallback)
handler.on('resize', yetAnotherResizeCallback)
...

handler.on('scroll', scrollCallback)
handler.on('scroll', anotherScrollCallback)
handler.on('scroll', yetAnotherScrollCallback)
...

handler.requestResize()
handler.requestScroll()
````

---

## Reference

### ResizeScrollHandler.requestResize()
Trigger all the resize handlers.

### ResizeScrollHandler.requestSCroll()
Trigger all the scroll handlers.

### ResizeScrollHandler.on(type, fn)
Add an event handler.

**Params**

- type `String` - Either 'resize' or 'scroll'.
- fn `Function` - The function you'd like to add on to the event handler.

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
