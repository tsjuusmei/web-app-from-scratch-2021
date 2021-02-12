import { randomPhoto } from './appends'

const photosUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-1-31&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs'

export const photoData = fetch(photosUrl)
  .then(response => response.json())
  .then(data => {
    randomPhoto(data.photos)
  }
  )