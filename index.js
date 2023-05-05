// index.js
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// function complexFunction(a, b, c, d, e, f) {
//   if (a > 0) {
//     if (b > 0) {
//       if (c > 0) {
//         return 'a > 0, b > 0, c > 0';
//       } else {
//         return 'a > 0, b > 0, c <= 0';
//       }
//     } else {
//       if (c > 0) {
//         return 'a > 0, b <= 0, c > 0';
//       } else {
//         return 'a > 0, b <= 0, c <= 0';
//       }
//     }
//   } else {
//     if (d > 0) {
//       if (e > 0) {
//         if (f > 0) {
//           return 'a <= 0, d > 0, e > 0, f > 0';
//         } else {
//           return 'a <= 0, d > 0, e > 0, f <= 0';
//         }
//       } else {
//         return 'a <= 0, d > 0, e <= 0';
//       }
//     } else {
//       return 'a <= 0, d <= 0';
//     }
//   }
// }

module.exports = {
  sum,
  subtract,
  multiply,
  divide,
};
