import { averageTemperature } from './appends'

const tempsUrl = 'https://wafs-be.herokuapp.com/temps'

export const tempData = fetch(tempsUrl)
  .then(res => res.json())
  .then(d => averageTemperature(d))