//1ex
function findDuplicateNumber(arr) {
  let duplicate;
  let count = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      duplicate = arr[i];
      break;
    } else {
      count[arr[i]] = 1;
    }
  }
  
  return duplicate;
}

let myArr = [1, 3, 4, 2, 2];
let duplicateNumber = findDuplicateNumber(myArr);
console.log(duplicateNumber);

//2ex

function findMaxNumber(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

let myArr1 = [1, 2, 3, 4];
let maxNumber = findMaxNumber(myArr1);
console.log(maxNumber);

//3ex

function multiplyByTwo(arr) {
  let multipliedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    multipliedArray.push(arr[i] * 2);
  }
  
  return multipliedArray;
}

let myArr3 = [1, 2, 3, 4];
let multipliedArr = multiplyByTwo(myArr3);
console.log(multipliedArr);