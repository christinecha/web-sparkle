# vh-for-mobile
### part of [web-sparkle](https://github.com/christinecha/web-sparkle)
Using VH as a CSS unit in mobile browsers causes a lot of problems. Fix them.

---

This is related to the same problem we're trying to fix with [cross-browser-resize](https://github.com/christinecha/web-sparkle/tree/master/packages/cross-browser-resize).
Basically, when you're scrolling on a mobile browser, the address bar can change
height and therefore change the viewport height, causing all sorts of visual updates.

This is especially a problem when you're styling elements using `vh` as a unit,
ex. `100vh` for a full-screen hero image, and it's constantly jittering on scroll.
This fixes those problems by adding static inline height values and only recalculating
on `orientationchange`.

## Usage

````sh
$ npm install vh-for-mobile
````

Add the class `vh-for-mobile` on all elements that you'd like to be affected, i.e.,
all the elements that use `vh` as a style unit.
````html
<div class='vh-for-mobile'></div>
````

````js
var VHForMobile = require('vh-for-mobile')

new VHForMobile()
// or specify a parent
new VHForMobile(document.getElementById('wrapper'))
````

## Reference

### new VHForMobile($parent)
A new instance of VHForMobile.

**Params**
- $parent `DOMElement` _[optional]_ - the parent container of all your affected elements

---

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
