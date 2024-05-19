// wygenreuj podstawowy canvas #canvas
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

// ustawienia
let width = (canvas.width = 550)
let height = (canvas.height = 600)

// kolor canvasu na szary
ctx.fillStyle = 'gray'
ctx.fillRect(0, 0, width, height)

const image = new Image()
image.src = 'pustygraf.png'

// Colors:
const yellow = '#ffd966'
const green = '#93c47d'
const purple = '#b4a7d6'

// Po załadowaniu obrazu narysuj go na płótnie
image.onload = function () {
  ctx.drawImage(image, 0, 0, 550, 600)
  // drawRactangle(0, 0, 1, yellow)
  // drawRactangle(1, 1, 1, green)
  // drawRactangle(0, 5, 1, purple)
}

// Rysowanie grafów
// rysuj linie

const objC = {
  a: [3, 135, 230, 135],
  b: [3, 302, 78, 302],
  c: [3, 386, 78, 386],
  d: [3, 472, 78, 472],
}

const objFa = {
  b: [75, 302, 75, 259, 145, 259],
  c: [75, 386, 75, 340, 145, 340],
  d: [75, 472, 75, 425, 145, 425],
}

const objFb = {
  b: [75, 302, 75, 341, 145, 341],
  c: [75, 386, 75, 426, 145, 426],
  d: [75, 472, 75, 512, 145, 512],
}

const objPa = {
  ba: [146, 259, 146, 220, 208, 220],
  bb: [146, 343, 146, 304, 208, 304],
  ca: [146, 343, 146, 304, 208, 304],
  cb: [146, 430, 146, 385, 208, 385],
  da: [146, 430, 146, 385, 208, 385],
  db: [146, 513, 146, 473, 208, 473],
}

const objPb = {
  ba: [146, 259, 146, 220 + 84, 208, 220 + 84],
  bb: [146, 343, 146, 304 + 83, 208, 304 + 83],
  ca: [146, 343, 146, 304 + 83, 208, 304 + 83],
  cb: [146, 430, 146, 385 + 87, 208, 385 + 87],
  da: [146, 430, 146, 385 + 87, 208, 385 + 87],
  db: [146, 513, 146, 473 + 84, 208, 473 + 84],
}

function drawC(selected = 'd', color = yellow) {
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.moveTo(objC[selected][0], objC[selected][1])
  ctx.lineTo(objC[selected][2], objC[selected][3])
  ctx.stroke()
}

function drawFa(selected = 'a', color = yellow) {
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()

  ctx.moveTo(objFa[selected][0], objFa[selected][1])
  ctx.lineTo(objFa[selected][2], objFa[selected][3])
  ctx.lineTo(objFa[selected][4], objFa[selected][5])
  ctx.stroke()
}

function drawFb(selected = 'd', color = yellow) {
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()

  ctx.moveTo(objFb[selected][0], objFb[selected][1])
  ctx.lineTo(objFb[selected][2], objFb[selected][3])
  ctx.lineTo(objFb[selected][4], objFb[selected][5])
  ctx.stroke()
}

function drawPa(selected = 'cb', color = yellow) {
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()

  ctx.moveTo(objPa[selected][0], objPa[selected][1])
  ctx.lineTo(objPa[selected][2], objPa[selected][3])
  ctx.lineTo(objPa[selected][4], objPa[selected][5])
  ctx.stroke()
}

function drawPb(selected = 'cb', color = yellow) {
  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()

  ctx.moveTo(objPb[selected][0], objPb[selected][1])
  ctx.lineTo(objPb[selected][2], objPb[selected][3])
  ctx.lineTo(objPb[selected][4], objPb[selected][5])
  ctx.stroke()
}

function drawRactangle(x, y, size = 2, color = 'red') {
  x = 240 - (size * 3 - 1) + x * 105
  y = 98 - (size * 3 - 1) + y * 85
  w = 85 + size * 6
  h = 62 + size * 6

  ctx.strokeStyle = color
  ctx.lineWidth = 5
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.stroke()
}
