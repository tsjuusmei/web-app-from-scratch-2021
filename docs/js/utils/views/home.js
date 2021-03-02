<<<<<<< HEAD
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
=======
import { averageTemperature, liData } from '../helpers/appends'
import { fetchData } from '../helpers/fetchData'
import { tempUrl, photoUrl, sol3035Url, sol3034Url } from '../helpers/endpoints'

export const homeView = () => {
  return async () => {
    const tempData = await fetchData(tempUrl)
    averageTemperature(tempData)

    const sol3035Data = await fetchData(sol3035Url)
    liData(sol3035Data)

    const sol3034Data = await fetchData(sol3034Url)
    liData(sol3034Data)

    const photoData = await fetchData(photoUrl)
    liData(photoData)
  }
>>>>>>> fecd01033acf1a263ec7ef6db5c106b723308a16
}