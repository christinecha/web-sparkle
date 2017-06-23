const CLASS_IDENTIFIER = 'vh-for-mobile'
const DELAY = 300

class VHForMobile {
  constructor($parent = document.body) {
    this.$parent = $parent

    this.updateChildren = this.updateChildren.bind(this)
    this.updateView     = this.updateView.bind(this)

    this.updateChildren()
    this.updateView()

    window.addEventListener('orientationchange', this.updateView)
  }

  updateChildren() {
    const nodeList = this.$parent.getElementsByClassName(CLASS_IDENTIFIER)
    this.$children = Array.prototype.slice.call(nodeList)
  }

  updateView() {
    this.$children.forEach($child => {
      $child.style.removeProperty('height')

      setTimeout(() => {
        $child.style.height = $child.clientHeight + 'px'
      }, DELAY)
    })
  }
}

module.exports = VHForMobile
