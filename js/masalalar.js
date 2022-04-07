// masala 1

// let array = [10, 1, 3, 5, 8, 9];

// for(let i = 0; i < array.length; i++){
//   for(let j = 0; j < array.length; j++){
//     if(array[j] > array[j + 1]){
//       let a = array[j + 1];
//       array[j + 1] = array[j];
//       array[j] = a;
//     }
//   }
// }
// console.log(array)


// masala 2

// let baza = {
//   login: '  uz5  ',
//   pass: '   12367789     '
// }

// let login = baza.login.trim()
// let pass = baza.pass.trim()

// function render(log, pass) {
//   if(log.length <= 2) {
//     console.log("Login kamida 8ta belgidan iborat bo'lishi kerak")
//   }
//   if(pass.length <= 7) {
//     console.log("Parol kamida 8ta belgidan iborat bo'lishi kerak")
//   }

//   else if (pass.length <= 8 && log.length <= 8) {
//     console.log(`Siz muvaffaqqiyatli ro'yxatdan o'tdingiz ${baza}`)
//   }
// }

// render(login, pass)

// masala 3

// let n = 2;
// let k = 3;
// let result = 0;
// let a = 1;

// for(let i = 1; i <= n; i++){
//   if(i > 1){
//     for(let j = 0; j < k; j++){
//       a *= i;
//     }
//     result += a;
//   }
//   else if(i == 1){
//     result += i;
//   }
// }
// console.log("Yig'indi", result);


// masala 5

// let array = [1, [2, 3], undefined, {x: 1}];
// let newarray = [];

// for(let i = 0; i < array.length; i++){
//   if(Number.isInteger(array[i])){
//     newarray.push(array[i]);
//   } else if (Array.isArray(array[i])){
//     array[i].forEach((item) => {
//       newarray.push(item);
//     })
//   } else if(typeof array[i] === "object"){
//       newarray.push(Object.keys(array[i])[0]);
//       newarray.push(Object.values(array[i])[0]);
//   } else{
//     newarray.push(array[i]);
//   }
// }

// console.log(newarray);


// masala 6

// let array = [1, 2, 3, 4];
// let lengths = Math.floor(array.length / 2);

// for(let i = 0; i < Math.floor(array.length / 2); i++){
//   let a = array[i];
//   array[i] = array[lengths];
//   array[lengths] = a;
//   lengths++;
// }

// console.log(array);