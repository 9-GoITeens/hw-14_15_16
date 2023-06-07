// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// Розвязок
function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
  // Change code above this line
}
