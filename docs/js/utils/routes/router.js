import Navigo from 'navigo'
import { homeView } from '../views/home'
import { detailView } from '../views/detail'


const router = new Navigo('/', false)

export const Router = () => {
  try {
    router
      .on({
        '/': homeView(),
        '/sol': detailView(),
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