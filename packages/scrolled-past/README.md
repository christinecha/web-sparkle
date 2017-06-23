# scrolled-past
### A package within [web-sparkle](https://github.com/christinecha/web-sparkle).
Implement easy-peasy CSS-based scroll-triggered changes (animation, etc.).

## Usage

````sh
$ npm install scrolled-past
````

````js
const ScrolledPast = require('scrolled-past')

const getOffset = el => el.height * 0.5

// Use a function to calculate offset
const scrolledPast = new ScrolledPast(getOffset, document.body)

// Or, just pass in a number
const scrolledPast = new ScrolledPast(200, document.body)
````

---

## Reference

Add elements you want to affect using the data-attribute `data-scrolled-past`, like so:

```html
<div data-scrolled-past="false"></div>
```

You can set it to `false` initially like above or just leave it valueless.
Depends what you want your first-load state to look like.

### new ScrolledPast(offset = 200, $container = document.body)
Create a new instance of ScrolledPast. Pass in an optional offset amount and parent container.

**Params**

- offset `Number` OR `Function`- The distance (in px) you'd like to wait before marking an element as "scrolled-past".
If you want to be fancy, pass in a function to calculate it using the `el` object you get passed in. It'd look like this:

```js
const calculateOffset = el => {
  // Dynamically offset based on the element's height.
  // Available values: el.$node, el.start, el.end, el.height
  return el.height * 0.5
}
```

- $container `DOMElement` - The parent container for all the nodes you want watched.

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
