var crossBrowserResize = require('../index');

// Log all triggered resize events so you can compare the difference
window.addEventListener('resize', function() {
  console.log('resize');
})

// Log only the true cross-browser resize
function handleResize(e) {
  console.log('Really resized at', new Date().getTime());
}

// Log only the true cross-browser resize
function handleResize2(e) {
  console.log('Really resized 2 at', new Date().getTime());
}

var crossBrowserHandleResize = crossBrowserResize.addListener(handleResize);
var crossBrowserHandleResize2 = crossBrowserResize.addListener(handleResize2);

// To remove the event listener:
document.addEventListener('click', function() {
  crossBrowserResize.removeListener(crossBrowserHandleResize);

  // OR YOU CAN JUST:
  // window.removeEventListener(crossBrowserHandleResize);
});
