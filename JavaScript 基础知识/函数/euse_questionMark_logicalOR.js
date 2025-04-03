// 使用 ? 和 || 重写 if 函数

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }


// function checkAge(age) {
//   return age > 18 ? true : confirm('Do you have your parents permission to access this page?')
// }

function checkAge(age) {
  return age >  18 ||  confirm('Do you have your parents permission to access this page?')
}

console.log(checkAge(19))
console.log(checkAge(9))
// console.log(checkAge(18))
