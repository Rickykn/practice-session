// Duplikasi method .find
// Duplikasi method .indexOf

// Conditions (indexOf)
// 1. Mencari index dari sebuah item dalam array
// 2. Akan return sebuah number (index)
console.log("-----IndexOf--------");
const fruits = ["Banana", "Mango", "Orange", "Orange"];

const duplicateIndexOf = (arr, input) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
      return i;
    }
  }

  return -1;
};

const indexOf = duplicateIndexOf(fruits, "Mango");

console.log(indexOf);

console.log("-----FIND--------");

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

const ages = [3, 10, 18, 20];

const duplicateFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return;
};

const find = duplicateFind(ages, (val) => {
  return val > 10;
});

console.log(find);
