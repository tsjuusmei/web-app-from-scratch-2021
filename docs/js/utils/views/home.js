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
}