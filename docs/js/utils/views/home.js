import { averageTemperature, liData } from '../helpers/appends'
import { fetchData } from '../helpers/fetchData'
import { tempUrl, photoUrl, sol3035Url } from '../helpers/endpoints'

export const homeView = () => {
  return async () => {
    const tempData = await fetchData(tempUrl)
    averageTemperature(tempData)

    const photoData = await fetchData(photoUrl)
    liData(photoData)

    const solData = await fetchData(sol3035Url)
    liData(solData)
  }
}