function clickButton(id) {
  console.log(id);
  document.getElementById("screen").innerText = id;
}

window.addEventListener('keydown', function (e) {
  console.log(e);
  e.preventDefault()
  let key = e.key
  let code = e.code
  if (e.ctrlKey) {
  }
  if (key.length == 1) {
    if (key === ' ') {
      callClick('Space')
      return
    }
    callClick(key.toUpperCase())
  } else {
    callClick(key)
  }
})
window.addEventListener('keyup', function (e) {
  console.log(e);
  e.preventDefault()
  let key = e.key
  let code = e.code
  if (e.ctrlKey) {
  }
  if (key.length == 1) {
    if (key === ' ') {
      callOutClick('Space')
      return
    }
    callOutClick(key.toUpperCase())
  } else {
    callOutClick(key)
  }
})

function callClick(id) {
  document.getElementById(id).classList.add('active')
  document.getElementById("screen").innerText = id
}
function callOutClick(id) {
  document.getElementById(id).classList.remove('active')
}