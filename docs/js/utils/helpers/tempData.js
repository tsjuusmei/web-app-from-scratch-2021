import { averageTemperature } from './appends'

export const tempData = async (endpoint) => {
  try {
    const res = await fetch(endpoint)
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}