const IMAGE_API_URL = 'https://picsum.photos/200/300';
const imageElement = document.getElementById('image');

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(url, options) {

  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(options, url);
    xhr.responseType = 'arraybuffer';
    

    xhr.json = () => {
      return new Promise(function (resolve, reject) {
        console.log(xhr);
        const json = (xhr.response);
        resolve(json);
      })
    }

    xhr.blob = () => {
      return new Promise(function (resolve, reject) {
       
        const blob = new Blob([(xhr.response)], {
          type: 'image/jpeg'
        });
        resolve(blob);
      })
    }

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr);
      } else {
        const error = new Error(xhr.statusText);
        error.code = xhr.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)

myFetch(IMAGE_API_URL, 'GET')
  .then(response => response.blob())
  .then(response => {
    const file = response;
    const reader = new FileReader();

    reader.onload = function () {
      insertImage(reader.result);
    }
    reader.readAsDataURL(file);
  })
  .catch(error => {
    console.log((`Error- ${error}`))
  })

function insertImage(src) {
  imageElement.src = src
}
