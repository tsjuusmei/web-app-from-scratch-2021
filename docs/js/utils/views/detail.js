import { fetchData } from '../helpers/fetchData'
import { detailInfo, detailPhotos } from '../helpers/appends'
import { solUrl } from '../helpers/endpoints'

export const detailView = () => {
  return async () => {
    let sol = window.location.href
    sol = sol.replace('http://localhost:1234/sol/', '')

    const url = solUrl(sol)
    
    const solData = await fetchData(url)
    let earthDate = solData.photos[0].earth_date

    detailInfo(sol, earthDate)

    let solPhotos = solData.photos

    detailPhotos(solPhotos)
  }
}