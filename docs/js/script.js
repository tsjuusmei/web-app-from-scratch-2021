const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-1-31&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs'
const tempsUrl = 'https://wafs-be.herokuapp.com/temps'

const body = document.querySelector('body')

let averageTemps = []
let temps = null

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src

  body.appendChild(img)
}

function appendTemp(avtemp) {
  let h1 = document.createElement('h1')

  h1.textContent = avtemp

  body.appendChild(h1)
}


function averageTemperature(data) {
  data.forEach(obj => {
    averageTemps.push(obj.temps.average)
  });

  for (let i = 0; i < averageTemps.length; i++) {
    temps += averageTemps[i]
  }

  const averageTemp = temps / averageTemps.length

  appendTemp(averageTemp.toFixed(2))
}



const photoData = fetch(photosUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    randomPhoto(data.photos)
  }
  )

const tempData = fetch(tempsUrl)
  .then(res => res.json())
  .then(d => averageTemperature(d))
