import { randomPhoto, averageTemperature } from '../helpers/appends'

const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-1-31&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs'
const tempsUrl = 'https://wafs-be.herokuapp.com/temps'

export const photoData = fetch(photosUrl)
  .then(response => response.json())
  .then(data => {
    randomPhoto(data.photos)
  }
  )

export const tempData = fetch(tempsUrl)
  .then(res => res.json())
  .then(d => averageTemperature(d))
