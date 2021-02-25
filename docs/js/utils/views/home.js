import { averageTemperature, randomPhoto } from '../helpers/appends'
import { fetched } from '../helpers/fetchData'
import { tempUrl, photoUrl } from '../helpers/endpoints'

export const homeView = () => {
  return async () => {
    const temperatures = await fetched(tempUrl)
    const photoData = await fetched(photoUrl)
    averageTemperature(temperatures)
    randomPhoto(photoData.photos)
}
}