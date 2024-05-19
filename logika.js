const textarea = document.querySelector('.input')
const button = document.querySelector('#generate')

let ludzie = {
  color: yellow,
}
let srodowisko = {
  color: green,
}
let finanse = {
  color: purple,
}

function prepareObject(obj, text) {
  tab = text.split(':')[1].trim().split(' ')
  tab.forEach(el => {
    obj[el.charAt(0)] = el.charAt(1)
  })
}

function prepareText(text) {
  const [Ludzie, Srodowisko, Finanse] = text.split('\n')
  prepareObject(ludzie, Ludzie)
  prepareObject(srodowisko, Srodowisko)
  prepareObject(finanse, Finanse)
}

button.addEventListener('click', () => {
  const text = textarea.value
  ctx.drawImage(image, 0, 0, 550, 600)

  prepareText(text)
  drawLines()
  drawRactangles()
})

function drawLines() {
  drawC(ludzie.C, ludzie.color)
  drawC(srodowisko.C, srodowisko.color)
  drawC(finanse.C, finanse.color)

  if (ludzie.C != 'a') {
    ludzie.F == 'a' && drawFa(ludzie.C, ludzie.color)
    ludzie.F == 'b' && drawFb(ludzie.C, ludzie.color)
    ludzie.P == 'a' && drawPa(ludzie.C + ludzie.F, ludzie.color)
    ludzie.P == 'b' && drawPb(ludzie.C + ludzie.F, ludzie.color)
  }

  if (srodowisko.C != 'a') {
    srodowisko.F == 'a' && drawFa(srodowisko.C, srodowisko.color)
    srodowisko.F == 'b' && drawFb(srodowisko.C, srodowisko.color)
    srodowisko.P == 'a' && drawPa(srodowisko.C + srodowisko.F, srodowisko.color)
    srodowisko.P == 'b' && drawPb(srodowisko.C + srodowisko.F, srodowisko.color)
  }

  if (finanse.C != 'a') {
    finanse.F == 'a' && drawFa(finanse.C, finanse.color)
    finanse.F == 'b' && drawFb(finanse.C, finanse.color)
    finanse.P == 'a' && drawPa(finanse.C + finanse.F, finanse.color)
    finanse.P == 'b' && drawPb(finanse.C + finanse.F, finanse.color)
  }

  // drawFa(ludzie.F, ludzie.color)
}

function selectRow(obj) {
  console.log(obj)
  let row = 0
  if (obj.C == 'b') {
    if (obj.F == 'a') {
      if (obj.P == 'a') row = 1
      else if (obj.P == 'b') row = 2
    } else if (obj.F == 'b') {
      if (obj.P == 'a') row = 2
      else if (obj.P == 'b') row = 3
    }
  }

  if (obj.C == 'c') {
    if (obj.F == 'a') {
      if (obj.P == 'a') row = 2
      else if (obj.P == 'b') row = 3
    } else if (obj.F == 'b') {
      if (obj.P == 'a') row = 3
      else if (obj.P == 'b') row = 4
    }
  }

  if (obj.C == 'd') {
    if (obj.F == 'a') {
      if (obj.P == 'a') row = 3
      else if (obj.P == 'b') row = 4
    } else if (obj.F == 'b') {
      if (obj.P == 'a') row = 4
      else if (obj.P == 'b') row = 5
    }
  }

  return row
}

function drawRactangles() {
  drawRactangle(3 - ludzie.W, selectRow(ludzie), 1, yellow)
  drawRactangle(3 - srodowisko.W, selectRow(srodowisko), 2, green)
  drawRactangle(3 - finanse.W, selectRow(finanse), 3, purple)
}
