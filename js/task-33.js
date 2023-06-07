// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Розвязок
// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line

  for (let arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}
