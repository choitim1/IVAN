const num = 10;
switch (num) {
  case 1:
    console.log("Number is 1");
    break;
  case 2:
    console.log("Number is 2");
    break;
  case 3:
    console.log("Number is 3");
    break;
  case 10:
    console.log("Number is 10");
    break;
  default:
    console.log("Number is not 1, 2, 3 or 10");
    break;
}
console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log((!1 && 2) || !3);
console.log((null && !3) || 25);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || (null && !3 && undefined) || 5);
console.log((5 === 5 && 3 > 1) || 5);
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if ((hamburger && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
}

let num1 = 3;
// for (num1; num1 < 10; num1++) {
//   console.log(num1);
// }

for (let i = 1; i < 17; i++) {
  console.log(`${i}_`);
}
// let result = '';
// const lenght = 7;
// for (let i = 1; i < lenght; i++) {
//   // result += "\n";
//   console.log(result);
// }
for (let i = 1; i < 10; i++) {
  console.log(4);
}

let result = "";
const lenght = 7;
for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result = result + "\n";
}
console.log(result);

for (i = 1; i < 6; i++) {
  // for (j = 0; j < i; ){}
  console.log("*");
}
//console.log('*')

function firstTask() {
  // Пишем решение вот тут
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}
firstTask();

let second = () => {
  for (let i = 20; i > 10; i--) {
    if (i === 13) {
      break;
    }
    console.log(i);
  }
};
second();

let third = () => {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
third();
function fourthTask() {
  let i = 2;

  while (i <= 16) {
    if (i % 2 === 0) {
      i++;
      continue;
    } else {
      console.log(i);
    }
    i++;
  }
}
fourthTask();

function fifthTask() {
  const arrayOfNumbers = [];

  for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
  }

  console.log(arrayOfNumbers);
  return arrayOfNumbers;
}

fifthTask();

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++) {
  result.push((result[i] = arr[i]));
}
console.log(result);
// Не трогаем

function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  console.log(result);
}

firstTask();

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, "Shopping", 20, "Homework"];
  let num = [];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      num.push(data[i] * 2);
    } else if (typeof data[i] === "string") {
      num.push(`${data[i]} done`);
    }
  }
  console.log(num);
  // Пишем решение вот тут

  // Не трогаем
  return data;
}
secondTask();

const lines = 5;
let result1 = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result1 += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result1 += "*";
  }
  result1 += "\n";
}

console.log(result1);
