import { averageTemperature, appendTemp } from '../helpers/appends'
import { tempData } from '../helpers/tempData'
import { tempUrl } from '../helpers/endpoints'

export const homeView = () => {
  return async () => {
    const data = await tempData(tempUrl)
    averageTemperature(data)
}
}