// 1. Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.


function printNumbers(from, to) {
  if(from < to) {
     let interval = setInterval(() => { 
      from === to+1 ? clearInterval(interval) : console.log(from++);
    },1000);
  } else if (from > to) {
    let interval = setInterval(() => { 
      from === to-1 ? clearInterval(interval) : console.log(from--);
    },1000);
  }
}


// Используя рекурсивный setTimeout.
function printNumbersRec(from, to) {
  if(from < to) {
    setTimeout(run = () => {
      console.log(from++);
      from === to+1 || setTimeout(run, 1000);
    }, 0);
  } else if(from > to) {
    setTimeout(run = () => {
      console.log(from--);
      from === to-1 || setTimeout(run, 1000);
    }, 0);
  }
}

// ↓ раскомментировать для проверки printNumbers
//printNumbers(29,23); 

// ↓ раскомментировать для проверки printNumbersRec
//printNumbersRec(27, 35);


// 2. Напишите часы с использованием setInterval (с выводом в консоль), при каждом новом выводе (каждую секунду) очищать сонсоль (console.clear)

function clock() {
  setInterval(() => { 
    const now = new Date()
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    console.clear();
    console.log(time);
  },1000);
}

// ↓ раскомментировать для старта часов
//clock();


// Следующие задачи могут быть сложными, поэтому можно найти решение в интернете и разобрать, как они работают

// *3. Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

function debounce(f, ms) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

let f = debounce(alert, 1000);

// ↓ раскомментировать для проверки debounce
/*
f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
*/
// ↑ раскомментировать для проверки debounce


// *4. Создайте «тормозящий» декоратор throttle(func, ms), который возвращает обёртку, передавая вызов в func не более одного раза в ms миллисекунд.
// Те вызовы, которые попадают в период «торможения», игнорируются.

// Отличие от debounce – если проигнорированный вызов является последним во время «задержки», то он выполняется в конце.

function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function func(a) {
  console.log(a)
}

// f1000 передаёт вызовы func максимум раз в 1000 мс
let f1000 = throttle(func, 1000);

// ↓ раскомментировать для проверки throttle
/*
f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
*/
// ↑ раскомментировать для проверки throttle

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано