function getCapitalizedStyle(style) {
  var chars = style.split('')
  var firstChar = chars[0]
  chars = chars.splice(1)
  return firstChar.toUpperCase() + chars.join('')
}

function getPrefixedStyle(style) {
  var capitalizedStyle = getCapitalizedStyle(style)
  var styleObj = document.body.style

  if (style in styleObj)                       return style
  if ('Webkit' + capitalizedStyle in styleObj) return 'Webkit' + capitalizedStyle
  if ('Moz' + capitalizedStyle    in styleObj) return 'Moz' + capitalizedStyle
  if ('Ms' + capitalizedStyle     in styleObj) return 'Ms' + capitalizedStyle
  if ('O' + capitalizedStyle      in styleObj) return 'O' + capitalizedStyle

  throw Error('Could not find style "' + style + '", prefixed or otherwise.')
}

module.exports = getPrefixedStyle
