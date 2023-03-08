function next() {
  let items = document.querySelectorAll(".item")
  document.getElementById("slider").appendChild(items[0])
}

function prev() {
  let items = document.querySelectorAll(".item")
  document.getElementById("slider").prepend(items[items.length - 1])
}