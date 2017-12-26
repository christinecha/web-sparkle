/** @function getCapitalized
  * Returns a copy of the string with the first letter capitalized.
  *
  * @param str {String} | Any string.
  * @return {String} | A copy of the same string but with the first letter capitalized.
 **/
function getCapitalized(str) {
  var chars = str.split('')
  var firstChar = chars[0]
  chars = chars.splice(1)
  return firstChar.toUpperCase() + chars.join('')
}

/** @function getPrefixedStyle
  * Returns the first prefixed (or not-prefixed!) style property name that
  * can be used in your current browser environment.
  *
  * @param style {String} | The unprefixed style property, ex. "transition"
  * @return {String} | The correctly formatted style property, ex. "WebkitTransition"
 **/
function getPrefixedStyle(style) {
  var capitalizedStyle = getCapitalized(style)
  var styleObj = document.body.style

  if (style in styleObj)                       return style
  if ('Webkit' + capitalizedStyle in styleObj) return 'Webkit' + capitalizedStyle
  if ('Moz' + capitalizedStyle    in styleObj) return 'Moz' + capitalizedStyle
  if ('Ms' + capitalizedStyle     in styleObj) return 'Ms' + capitalizedStyle
  if ('O' + capitalizedStyle      in styleObj) return 'O' + capitalizedStyle

  throw Error('Could not find style "' + style + '", prefixed or otherwise.')
}

module.exports = getPrefixedStyle
