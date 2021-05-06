import Navigo from 'navigo'
import { homeView } from '../views/home'
import { detailView } from '../views/detail'

export const Router = () => {

  const router = new Navigo('/', false)

  try {
    router
      .on({
        '/': homeView(),
        '/sol/:id': detailView(),
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