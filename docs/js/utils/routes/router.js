import Navigo from 'navigo'
import { photoData } from '../helpers/photoData'
import { tempData } from '../helpers/tempData'

const router = new Navigo('/', false)

export const Router = () => {
  try {
    router
      .on({
        '/': () => {
          photoData,
          tempData
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