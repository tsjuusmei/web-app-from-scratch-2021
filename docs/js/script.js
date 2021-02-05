const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-1-31&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs'

const body = document.querySelector('body')

let averageTemps = []
let temps = null

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src

  body.appendChild(img)
}


function averageTemp(mydata) {
  data.forEach(obj => {
    averageTemps.push(obj.temps.average)
  });
}

averageTemp(data)

for (let i = 0; i < averageTemps.length; i++) {
  temps += averageTemps[i]
}

console.log(temps / averageTemps.length)

const apiData = fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    randomPhoto(data.photos)
  }
  )
