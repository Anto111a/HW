function getData(req) {
 return axios.get(`http://api.tvmaze.com/search/shows/?q=${req}`)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

const form = document.querySelector('#form');
form.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  const inputValue = event.target.input.value;
  if (inputValue) {
    getData(inputValue)
    .then((response) => {
      const data = response;
      createList(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

function createList(data) {
  let div = document.querySelector('#filmsList')
  const main = document.querySelector('main');
  if (div) {
    div.innerHTML = '';
  } else {
    div = document.createElement('div');
    div.id = 'filmsList'
  }

  for (const element of data) {
    const currentElement = element.show;
    const  wrapper = document.createElement('div');

    const img = document.createElement('img');
    const defImg = './lecture_6/no-image.jpg';
    img.src = currentElement.image ? currentElement.image.medium : defImg;
    wrapper.append(img);

    const header = document.createElement('h2');
    header.innerText = currentElement.name;
    wrapper.append(header);

    const premiered = document.createElement('h4');
    premiered.innerText = `Премьера : ${currentElement.premiered || '-'}`;
    wrapper.append(premiered);

    const genre = document.createElement('h4');
    genre.innerText = `Жанр: ${currentElement.genres.join(', ') || '-'}`;
    wrapper.append(genre);

    const rating = document.createElement('h3');
    rating.innerText = `Рейтинг:  ${currentElement.rating.average || '-'}`;
    wrapper.append(rating);
    div.append(wrapper);
  }

  main.appendChild(div);
}
