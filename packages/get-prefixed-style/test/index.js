var getPrefixedStyle = require('../index')

var _transition = getPrefixedStyle('transition')
document.getElementById('transition').textContent = _transition
console.log(_transition)

var _transform = getPrefixedStyle('transform')
document.getElementById('transform').textContent = _transform
console.log(_transform)

var _invalidProperty = getPrefixedStyle('invalidProperty')
document.getElementById('invalidProperty').textContent = _invalidProperty
console.log(_invalidProperty)
