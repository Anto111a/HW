/* написать функцию, с использованием новых фич ES6. Функция на вход принимает массив из трех ЦЕЛЫХ чисел (например [1, 0, -4]), которые являются коэффициентами квадратного уравнения. Далее преобразует массив в квадратное уравнение и выводит его в консоль.  Для  [1, 0, 4] это будет x^2 - 4 = 0

справка, квадратное уравнение имеет вид 
a*x^2 + b*x + c = 0
Ваш массив на входе содержит коэффициенты в таком порядке: [a, b, c]

Далее нужно решить это уравнение школьным способом через дискриминант и вывести корни уравнения в консоль в формате 
x1 = ...
x2 = ...

Учтите, что уравнение может иметь 2, 1 или 0 корней. 

Пример вывода в консоль функции, вызванной с параметром [1, 0, -4]:
уравнение: x^2 - 4 = 0
Дискриминант: 16
Корни: 
x1 = 2
x2 = -2 */
const quadraticEquation = (arr) => {
    const [a,b = 0,c = 0] = arr;
    const isValidInput = a && a!=0 && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c);
    let result;
    if(!isValidInput) {
        return console.log(result = `Некорректный ввод`);
    } 

    const discriminant = b**2-4*a*c;
    const formatedPartA = (a === 1 || a === -1) ? (a===1 ? `x^2`:`-x^2`) : (`${a}*x^2`);
    const formatedPartB = (b === 1 || b === -1) ? (b===1 ? `+ x` : `- x`) : ( b === 0 ? `` : (b > 0 ? ` + ${b}*x` : ` ${b}*x`));
    const formatedPartC = (c === 0 ? `` : (c > 0 ? ` + ${c}` : ` ${c}`));
    
    result = ` уравнение: ${formatedPartA}${formatedPartB}${formatedPartC} = 0 \n Дискриминант: ${discriminant}`;
    
    if(discriminant<0) {
        result = result + ` \nДискриминант отрицательный, корней нет!`;
    } else if (discriminant===0) {
        result = result + `\n Корень: \n x = ${ ((b * -1 + Math.sqrt(discriminant)) / (2 * a)) }`;
    } else {
        result = result + `\n Корни: \n x1 = ${ ((b * -1 + Math.sqrt(discriminant)) / (2 * a)) } \n x2 = ${ ((b * -1 - Math.sqrt(discriminant)) / (2 * a)) }`;
    }

    return result;
}

console.log(quadraticEquation([1, 0, -4])); 
