// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// Розвязок
// Change code below this line
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (number < arg) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}
