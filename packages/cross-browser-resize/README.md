# web-sparkle/cross-browser-resize
------------------------------

Triggering resize when there is an intended resize. This is necessary because on mobile browsers, scrolling can trigger changes in the address bar height, which will trigger additional 'resize' events when unnecessary.

With this module, 'resize' should ONLY be triggered when you:

- Resize your desktop browser
- Re-orient mobile
- Scroll on mobile in a way that the viewport-height *actually* changes

## Usage

````sh
$ npm install web-sparkle/cross-browser-resize
````

````js
var crossBrowserResize = require('web-sparkle/cross-browser-resize')

var handleResize = function() {
  // do something
}

crossBrowserResize.addListener(handleResize)
crossBrowserResize.removeListener(handleResize)
````

## Reference

### crossBrowserResize.addListener(fn[, win])
Add the resize event listener.

**Params**

- fn `Function` - your event handler
- win `window` _[optional]_ - the window object. Useful when inside an IFRAME.

**Returns**

- `Function` - the modified event handler

### crossBrowserResize.removeListener(fn)
Remove the resize event listener.

**Params**

- fn `Function` - your event handler

---

### "Sometimes it doesn't work on orientation change!"

If you don't set a constant viewport scale, mobile orientation change **does not trigger a 'resize' event.**

This is because changing the orientation in this case would affect the `zoom` value - NOT any dimension
values in the DOM. To make sure it always triggers on orientation, set a viewport scale in your HTML like so:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Development
To run the example locally, run the following commands:

```sh
npm install
npm run dev
npm start
```

## Credits
This readme is maintained by [hello@christinecha.com](mailto:hello@christinecha.com).


## License
MIT
