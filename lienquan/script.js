let mainModal = document.getElementById('main-modal')
let modal1 = document.getElementById('modal1')
let modal2 = document.getElementById('modal2')
let modal3 = document.getElementById('modal3')
let modal4 = document.getElementById('modal4')

function clickSkill(id) {
  mainModal.style.display = 'block'
  setTimeout(() => {
    if (id === 'sk1') {
      modal1.classList.add('show-modal')
    } else if (id === 'sk2') {
      modal2.classList.add('show-modal')
    } else if (id === 'sk3') {
      modal3.classList.add('show-modal')
    } else if (id === 'sk4') {
      modal4.classList.add('show-modal')
    }
  }, 50);
}

function closeModal(id) {

  if (id === 'sk1') {
    modal1.style.opacity = 0
    modal1.classList.remove('show-modal')
  } else if (id === 'sk2') {
    modal2.style.opacity = 0
    modal2.classList.remove('show-modal')
  } else if (id === 'sk3') {
    modal3.style.opacity = 0
    modal3.classList.remove('show-modal')
  } else if (id === 'sk4') {
    modal4.style.opacity = 0
    modal4.classList.remove('show-modal')
  }
  setTimeout(() => {
    mainModal.style.display = 'none'
    modal1.style.opacity = 1
    modal2.style.opacity = 1
    modal3.style.opacity = 1
    modal4.style.opacity = 1
  }, 400);
}