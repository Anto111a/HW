import '../styles/style.css'
import defImg from '../public/no-image.jpg'
import { getData } from './api.js'

const form = document.querySelector('#form')
form.addEventListener('submit', formHandler)

function formHandler(event) {
  event.preventDefault()
  const inputValue = event.target.input.value
  if (inputValue) {
    getData(inputValue)
      .then(response => {
        const data = response
        createList(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

function createList(data) {
  let div = document.querySelector('#filmsList')
  const main = document.querySelector('main')
  if (div) {
    div.innerHTML = ''
  } else {
    div = document.createElement('div')
    div.id = 'filmsList'
  }

  for (let element of data) {
    //const currentElement = element.show
    const { image, name, premiered, genres, rating } = element.show
    const wrapper = document.createElement('div')

    const imgElem = document.createElement('img')
    imgElem.src = image ? image.medium : defImg
    wrapper.append(imgElem)

    const headerElem = document.createElement('h2')
    headerElem.innerText = name
    wrapper.append(headerElem)

    const premieredElem = document.createElement('h4')
    premieredElem.innerText = `Премьера : ${premiered || '-'}`
    wrapper.append(premieredElem)

    const genreElem = document.createElement('h4')
    genreElem.innerText = `Жанр: ${genres.join(', ') || '-'}`
    wrapper.append(genreElem)

    const ratingElem = document.createElement('h3')
    rating.innerText = `Рейтинг:  ${rating.average || '-'}`
    wrapper.append(ratingElem)
    div.append(wrapper)
  }

  main.appendChild(div)
}
