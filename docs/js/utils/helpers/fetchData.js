<<<<<<< HEAD:docs/js/utils/helpers/fetchData.js
export const fetched = async (endpoint) => {
=======
export const fetchData = async (endpoint) => {
>>>>>>> fecd01033acf1a263ec7ef6db5c106b723308a16:docs/js/utils/helpers/tempData.js
  try {
    const res = await fetch(endpoint)
    const data = await res.json()
    return data
  } catch (err) {
    throw err
  }
}