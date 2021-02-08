import Navigo from 'navigo'
import { photoData, tempData } from '../helpers/fetches'
import { randomPhoto, averageTemperature, appendTemp } from '../helpers/appends'

const root = null
const router = new Navigo(root, false)

export const Router = () => {
  try {
    router
      .on({
        '/': () => {
          photoData
        },
        '/sol': () => {
          console.log('sol')
        },
      })
      .notFound(() => {
        console.error('404...')
        router.navigate('/404')
      })
      .resolve()
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}