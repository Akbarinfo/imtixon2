const elBox = document.querySelector('#inputbox')
const elInput = document.querySelector('#pass')
let elLock = document.querySelector('#lock')
let elEye = document.querySelector('#eye')
let elListbox = document.querySelector('#listbox')

//x iconlar
let elOnex = document.querySelector('#onex')
let elTwox = document.querySelector('#twox')
let elThreex = document.querySelector('#threex')
let elFourx = document.querySelector('#fourx')

elInput.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
    elListbox.style.opacity = "1";
}
let a = 1
elEye.addEventListener('click', () => {
  if (a == 0) {
    elBox.style.background = "white"
    elInput.style.color = "black"
    elInput.setAttribute('type', 'text')
    elLock.style.color = "black"
    elEye.style.color = "black"
    a++;
  } else {
    elBox.style.background = "black"
    elInput.style.color = "white"
    elInput.setAttribute('type', 'password')
    elLock.style.color = "white"
    elEye.style.color = "white"
    a = 0;
  }
})

elInput.addEventListener('keyup', (ele) => {
  let keys = ele.target.value;

  if(keys[0] == keys[0].toUpperCase()) {
    elOnex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('@')) {
    elTwox.className = 'bx bx-check pass__iconx'
  }

  if(keys.length >= 8) {
    elFourx.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('0')) {
      elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('1')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('2')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('3')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('4')) {
    elThreex.className = 'bx bx-check pass__iconx'
}

  if(keys.includes('5')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('6')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('7')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

  if(keys.includes('8')) {
    elThreex.className = 'bx bx-check pass__iconx'
}

  if(keys.includes('9')) {
    elThreex.className = 'bx bx-check pass__iconx'
  }

})
