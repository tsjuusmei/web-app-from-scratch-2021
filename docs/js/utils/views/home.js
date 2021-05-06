import { averageTemperature, liData } from '../helpers/appends'
import { fetchData } from '../helpers/fetchData'
import { tempUrl, solUrl } from '../helpers/endpoints'

export const homeView = () => {
  return async () => {
    const tempData = await fetchData(tempUrl)
    averageTemperature(tempData)

    const sol3073Url = solUrl("3073")
    const sol3073Data = await fetchData(sol3073Url)
    liData(sol3073Data)

    const sol3072Url = solUrl("3072")
    const sol3072Data = await fetchData(sol3072Url)
    liData(sol3072Data)

    const sol3071Url = solUrl("3071")
    const sol3071Data = await fetchData(sol3071Url)
    liData(sol3071Data)

    const sol3070Url = solUrl("3070")
    const sol3070Data = await fetchData(sol3070Url)
    liData(sol3070Data)

    const sol3069Url = solUrl("3069")
    const sol3069Data = await fetchData(sol3069Url)
    liData(sol3069Data)

    const sol3068Url = solUrl("3068")
    const sol3068Data = await fetchData(sol3068Url)
    liData(sol3068Data)
  }
}