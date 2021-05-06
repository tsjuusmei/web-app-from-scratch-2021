const ul = document.querySelector('ul')
const h2 = document.querySelector('h2')

let averageTemps = []
let temps = null

function newLi() {
  return document.createElement('li')
}

function newA() {
  return document.createElement('a')
}

function newP() {
  return document.createElement('p')
}

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src
  img.setAttribute('sol', photos[0].sol)

  return img
}



function appendTemp(avtemp) {
  h2.textContent = "Average temperature: " + avtemp + "°C"
}

function appendSolData(sol, Edate) {
  let p = newP()

  p.innerHTML = "SOL: " + sol + "<br> <br>" + "Earth Date: " + Edate + "<br> <br> click for more pictures"

  return p
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

export function liData(data) {
  let sol = data.photos[0].sol
  let earthdate = data.photos[0].earth_date

  let photo = randomPhoto(data.photos)
  let solData = appendSolData(sol, earthdate)

  appendli(photo, solData, sol)
}

export function appendli(photo, solData, sol) {
  let li = newLi()
  let a = newA()

  a.href = "/sol/" + sol
  a.append(photo, solData)
  li.append(a)
  ul.appendChild(li)
}

// Detail appends

export function detailInfo(sol, Edate) {
  let h2 = document.querySelector("h2")

  h2.innerHTML = "SOL: " + sol + "<br> <br>" + "Earth Date: " + Edate
}

export function detailPhotos(photos) {
  photos.forEach(photo => {
    let li = document.createElement("li")
    let img = document.createElement("img")
    let p = document.createElement("p")

    img.src = photo.img_src
    p.textContent = "Camera: " + photo.camera.full_name

    li.append(img, p)
    ul.appendChild(li)
  });
}