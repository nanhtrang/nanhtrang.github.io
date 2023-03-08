let items = document.querySelectorAll(".slider .item")
let active = 4
function loadSlider() {
  let count = 0
  items[active].style.zIndex = items.length
  items[active].style.transform = 'none'
  items[active].style.filter = ""
  items[active].style.opacity = 1
  for (let i = active + 1; i < items.length; i++) {
    count++
    items[i].style.transform = `translateX(${120*count + 50}px) scale(${1 - 0.2*count}) perspective(16px) rotateY(-1deg)`
    items[i].style.zIndex = items.length - i
    items[i].style.filter = "blur(5px)"
    items[i].style.opacity = count > 3 ? 0 : 0.6
  }
  count = 0
  for (let i = active - 1; i >= 0; i--) {
    count++
    items[i].style.transform = `translateX(-${120*count + 50}px) scale(${1 - 0.2*count}) perspective(16px) rotateY(1deg)`
    items[i].style.zIndex = items.length - i
    items[i].style.filter = "blur(5px)"
    items[i].style.opacity = count > 3 ? 0 : 0.6
  }
}

loadSlider()

function nextFunc () {
  if (active < items.length - 1) {
    active += 1
    loadSlider()
  }
}

function prevFunc () {
  if (active > 0) {
    active -= 1
    loadSlider()
  }
}