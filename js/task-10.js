// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Розвязок
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(apartment[key]);
  keys.push(key)
}

for (const value in apartment) {
    console.log(apartment[value]);
    values.push(apartment[value]);
}
// Change code below this line
