import { fetchData } from '../helpers/fetchData'
import { detailInfo, detailPhotos } from '../helpers/appends'

export const detailView = () => {
  return async () => {
    let sol = window.location.href
    sol = sol.replace('http://localhost:1234/sol/', '')

    const endpoint = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs&page=1"
    
    const solData = await fetchData(endpoint)
    let earthDate = solData.photos[0].earth_date

    detailInfo(sol, earthDate)

    let solPhotos = solData.photos

    detailPhotos(solPhotos)
  }
}