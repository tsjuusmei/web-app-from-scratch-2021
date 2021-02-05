const body = document.querySelector('body')
const ul = document.querySelector('ul')

function createImage(url) {
  let img = document.createElement('img')
  img.src = url
  body.appendChild(img)
}

function createMovieCard(url, title, year) {
  const li = document.createElement('li')
  let img = document.createElement('img')
  let h1 = document.createElement('h1')
  let h2 = document.createElement('h2')

  img.src = url
  h1.textContent = title
  h2.textContent = year

  li.appendChild(img)
  li.appendChild(h1)
  li.appendChild(h2)

  ul.appendChild(li)
}

// Single title search

// const movies = fetch('http://www.omdbapi.com/?&apikey=cc449355&t=the')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     createImage(data.Poster)
//   }
//   )

// Search for mask

const movies = fetch('http://www.omdbapi.com/?&apikey=cc449355&s=mask')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.Search.length; i++) {
      createMovieCard(data.Search[i].Poster, data.Search[i].Title, data.Search[i].Year)
    }
  }
  )