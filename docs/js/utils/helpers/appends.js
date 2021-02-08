const body = document.querySelector('body')

let averageTemps = []
let temps = null

export function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src

  body.appendChild(img)
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

export function appendTemp(avtemp) {
  let h1 = document.createElement('h1')

  h1.textContent = avtemp

  body.appendChild(h1)
}