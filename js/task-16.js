// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// Розвязок
function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);

  for (let value of values) {
    totalSalary += value;
  }

  return totalSalary;
}
