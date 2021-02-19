const body = document.querySelector('body')
const ul = document.querySelector('ul')

let averageTemps = []
let temps = null

function newLi() {
  return document.createElement('li')
}

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src
  img.setAttribute('sol', photos[0].sol)

  return img
}

export function averageTemperature(data) {
  data.forEach(obj => {
    averageTemps.push(obj.temps.average)
  });

  for (let i = 0; i < averageTemps.length; i++) {
    temps += averageTemps[i]
  }

  const averageTemp = temps / averageTemps.length

  appendTemp(averageTemp.toFixed(2))
}

function appendTemp(avtemp) {
  let h2 = document.createElement('h2')

  h2.textContent = "Average temperature: " + avtemp + "°C"

  body.appendChild(h2)
}

function appendSol(sol) {
  let p = document.createElement('p')

  p.textContent = "SOL: " + sol

  return p
}

function appendEdate(Edate) {
  let p = document.createElement('p')

  p.textContent = "Earth Date: " + Edate

  return p
}

export function liData(data) {
  let photo = randomPhoto(data.photos)
  let sol = appendSol(data.photos[0].sol)
  let earthdate = appendEdate(data.photos[0].earth_date)

  appendli(photo, sol, earthdate)
}

export function appendli(photo, sol, earthdate) {
  let li = newLi()
  li.append(photo, sol, earthdate)
  ul.appendChild(li)
}