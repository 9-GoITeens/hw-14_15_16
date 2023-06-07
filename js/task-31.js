// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// Розвязок
// Change code below this line
function add(...args) {
let total = 0;
  for(const arg of args){
   total+=arg; 
  }
  return total;
  // Change code above this line
}
