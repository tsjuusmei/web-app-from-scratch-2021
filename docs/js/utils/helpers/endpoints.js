export const tempUrl = 'https://wafs-be.herokuapp.com/temps'

export function solUrl(sol) {
  let endpoint = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&api_key=i8b5WtpKTdfadlaSh7So7ZZmn7T7q2UfDSaS3ABs&page=1"

  return endpoint
}