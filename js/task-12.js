// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Розвязок
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    // Change code below this line
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
    // Change code above this line
  }
  return propCount;
}
