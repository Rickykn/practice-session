// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)

const fruits = ["Banana", "Mango", "Orange", "Orange"];

// let index = fruits.indexOf("Orange");

// console.log(`Asli ${index}`);

const duplicateIndexOf = (arr, input) => {
  let indexResult;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      indexResult = i;
      break;
    }
  }
  return indexResult;
};

const indexOf = duplicateIndexOf(fruits, "Orange");

console.log(indexOf);

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.
