const IMAGE_API_URL = 'https://picsum.photos/200/300';
const imageElement = document.getElementById('image');

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(url, options) {

    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open(options, url);
      xhr.responseType = 'arraybuffer';

      xhr.json = function() {
        const json = JSON.stringify(xhr);
        return (json);
      };

      xhr.blob = function() {
        console.log(xhr);
            const blob = new Blob([xhr.response], {type:'image/jpeg'});
            return blob;
          };

      xhr.onload = function() {
        if (xhr.status == 200) {
           resolve(xhr);
        } else {
          const error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        } 
      };
      
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };

      xhr.send();
         });
  }

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)

myFetch(IMAGE_API_URL, 'GET')
  .then(response => {
    const file = response.blob();
    console.log(file);
    const reader = new FileReader();
    
    reader.onload = function() {
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

