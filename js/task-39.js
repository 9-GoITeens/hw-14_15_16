// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// Розвязок
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const index = this.potions.indexOf(potionName);
    this.potions.splice(index, 1);

    // Change code above this line
  },
};
