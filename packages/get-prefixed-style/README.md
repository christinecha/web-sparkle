# get-prefixed-style
### part of [web-sparkle](https://github.com/christinecha/web-sparkle)

---

A super simple method to grab the correct (prefixed or not) style property name for your browser.

## Usage

````sh
$ npm install get-prefixed-style
````

````js
var getPrefixedStyle = require('get-prefixed-style')

var _transition = getPrefixedStyle('transition')
var _transform = getPrefixedStyle('transform')
document.body.style[_transition] = _transform + ' 300ms ease-in-out'
````

---

## Reference

### getPrefixedStyle(style)
Get the value of the adjusted style property name.

**Params**

- style `String` - the unprefixed name of your style property.

**Returns**

- `Function` - the valid style property name, prefixed or not, depending on the browser.

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


## License
MIT
