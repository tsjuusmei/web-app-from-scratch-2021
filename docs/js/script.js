// const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-1-31&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs'
const url = 'https://cors-anywhere.herokuapp.com/https://api.mars.spacexcompanion.app/public/v1/sols/'

const body = document.querySelector('body')

function randomPhoto(photos) {
  let img = document.createElement('img')

  let randomNumber = Math.floor(Math.random() * photos.length)

  img.src = photos[randomNumber].img_src

  body.appendChild(img)
}

function weatherData(uri) {

  for (let i = 355; i < 360; i++) {
    fetch(uri + i.toString())
      .then(response => response.json())
      .then(d => console.log(d))
  }
}

weatherData(url)

// const apiData = fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     randomPhoto(data.photos)
//   }
//   )